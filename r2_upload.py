#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""上传 PDF 文件到 Cloudflare R2"""

import hashlib
import hmac
import base64
import datetime
import urllib.request
import urllib.parse
import os
import glob

# R2 凭证
ACCOUNT_ID = "743932dea1cfa38d919879acbe20f8b7"
ACCESS_KEY = "d5994028ce4bccb35d29aba1b834eee7"
SECRET_KEY = os.environ.get("CLOUDFLARE_API_TOKEN", "YOUR_TOKEN_HERE")
BUCKET = "yueguard-files"
REGION = "auto"  # R2 使用 auto

# R2 S3 兼容端点
ENDPOINT = f"https://{ACCOUNT_ID}.r2.cloudflarestorage.com"

def sign(key, msg):
    return hmac.new(key, msg, hashlib.sha256).digest()

def sha256hex(data):
    if isinstance(data, str):
        data = data.encode('utf-8')
    return hashlib.sha256(data).hexdigest()

def aws_sigv4(method, url, body=b'', extra_headers=None):
    t = datetime.datetime.utcnow()
    amz_date = t.strftime('%Y%m%dT%H%M%SZ')
    date_stamp = t.strftime('%Y%m%d')

    parsed = urllib.parse.urlparse(url)
    host = parsed.netloc
    path = parsed.path or '/'
    query = parsed.query

    headers = {
        'Host': host,
        'X-Date': amz_date,
        'X-Content-Sha256': sha256hex(body),
    }
    if extra_headers:
        headers.update(extra_headers)

    # 签名
    def hmac_sha256(key, data):
        return hmac.new(key, data.encode('utf-8'), hashlib.sha256).digest()

    canonical_headers = '\n'.join(f"{k.lower()}:{v}" for k, v in sorted(headers.items())) + '\n'
    signed_headers = ';'.join(k.lower() for k, v in sorted(headers.items()))

    canonical_request = f"{method}\n{path}\n{'?'+query if query else ''}\n{canonical_headers}\n{signed_headers}\n{sha256hex(body)}"
    credential_scope = f"{date_stamp}/{REGION}/s3/aws4_request"
    string_to_sign = f"AWS4-HMAC-SHA256\n{amz_date}\n{credential_scope}\n{sha256hex(canonical_request)}"

    k1 = ('AWS4' + SECRET_KEY).encode('utf-8')
    k2 = sign(k1, date_stamp)
    k3 = sign(k2, REGION)
    k4 = sign(k3, 's3')
    k5 = sign(k4, 'aws4_request')
    signature = hmac.new(k5, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()

    auth = f"AWS4-HMAC-SHA256 Credential={ACCESS_KEY}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}"
    headers['Authorization'] = auth
    headers['Content-Length'] = str(len(body))

    req = urllib.request.Request(url, data=body, method=method)
    for k, v in headers.items():
        req.add_header(k, v)

    return req

def upload_file(filepath):
    filename = os.path.basename(filepath)
    url = f"{ENDPOINT}/{BUCKET}/{filename}"
    with open(filepath, 'rb') as f:
        data = f.read()

    req = aws_sigv4('PUT', url, data, {
        'Content-Type': 'application/pdf',
        'X-Content-Sha256': sha256hex(data),
    })
    req.add_header('Content-Type', 'application/pdf')

    try:
        with urllib.request.urlopen(req) as resp:
            resp.read()
            r2_url = f"https://{BUCKET}.{ACCOUNT_ID}.r2.dev/{filename}"
            print(f"✅ 上传成功：{filename} → {r2_url}")
            return r2_url
    except Exception as e:
        print(f"❌ 上传失败 {filename}: {e}")
        return None

# 上传 assets/ 下所有 PDF
print(f"开始上传 PDF 到 R2 桶: {BUCKET}")
print("=" * 50)

r2_urls = {}
pdf_files = glob.glob('/home/lenovo12348/.openclaw/workspace/yueguard/assets/*.pdf')
pdf_files += glob.glob('/home/lenovo12348/.openclaw/workspace/yueguard/素材库/**/*.pdf', recursive=True)

for f in sorted(pdf_files):
    filename = os.path.basename(f)
    url = f"https://{BUCKET}.{ACCOUNT_ID}.r2.dev/{urllib.parse.quote(filename)}"
    r2_urls[filename] = url
    print(f"📦 准备上传：{filename}")

print(f"\n共找到 {len(r2_urls)} 个 PDF 文件")
print("\n链接映射表：")
for name, url in r2_urls.items():
    print(f"  {name} → {url}")
