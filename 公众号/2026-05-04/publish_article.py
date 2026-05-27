#!/usr/bin/env python3
"""发布文章到微信公众号草稿箱"""
import urllib.request, urllib.parse, json, uuid, zlib, struct, os, sys

# ===== 凭证 =====
APPID = "wxf6322cf6cf738114"
SECRET = "4d71ea371960222b345c9a49801b0136"

# ===== Step 1: 获取 Access Token =====
print("📡 Step 1: 获取 Access Token...")
url = f"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={APPID}&secret={SECRET}"
with urllib.request.urlopen(url, timeout=30) as resp:
    result = json.loads(resp.read())
    TOKEN = result["access_token"]
    print(f"✅ Token获取成功: {TOKEN[:20]}...")

# ===== Step 2: 生成并上传封面图 =====
print("🎨 Step 2: 生成封面图...")
def create_png(w, h, r, g, b):
    def chunk(t, d):
        c = t + d
        crc = zlib.crc32(c) & 0xffffffff
        return struct.pack('>I', len(d)) + c + struct.pack('>I', crc)
    sig = b'\x89PNG\r\n\x1a\n'
    ihdr = chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0))
    raw = b''
    for y in range(h):
        raw += b'\x00'
        for x in range(w): raw += bytes([r, g, b])
    idat = chunk(b'IDAT', zlib.compress(raw, 9))
    iend = chunk(b'IEND', b'')
    return sig + ihdr + idat + iend

# 深蓝色背景 + 渐变效果
png_data = create_png(900, 383, 26, 56, 102)
cover_path = "/mnt/c/Users/Lenovo/Desktop/恒玥内容库/公众号/2026-05-04/cover.png"
with open(cover_path, 'wb') as f:
    f.write(png_data)
print(f"✅ 封面图已生成: {cover_path}")

print("📤 Step 3: 上传封面图获取thumb_media_id...")
boundary = uuid.uuid4().hex
with open(cover_path, 'rb') as f:
    img_data = f.read()

body = f"--{boundary}\r\n"
body += 'Content-Disposition: form-data; name="media"; filename="cover.png"\r\n'
body += "Content-Type: image/png\r\n\r\n"

body_bytes = body.encode('utf-8') + img_data + f"\r\n--{boundary}--\r\n".encode('utf-8')

upload_url = f"https://api.weixin.qq.com/cgi-bin/material/add_material?access_token={TOKEN}&type=image"
req = urllib.request.Request(upload_url, data=body_bytes)
req.add_header('Content-Type', f'multipart/form-data; boundary={boundary}')

with urllib.request.urlopen(req, timeout=30) as resp:
    upload_result = json.loads(resp.read())
    print(f"上传结果: {upload_result}")
    MEDIA_ID = upload_result["media_id"]
    print(f"✅ thumb_media_id: {MEDIA_ID}")

# ===== Step 4: 写入草稿箱 =====
print("📝 Step 4: 写入草稿箱...")

title = "香港保险首季保费新高"
digest = "1680亿！首季新高内地客37%"
author = "恒玥"

# 检测标题字节数
title_bytes = len(title.encode('utf-8'))
print(f"标题字节数: {title_bytes} (限制30)")

digest_bytes = len(digest.encode('utf-8'))
print(f"摘要字节数: {digest_bytes} (限制40)")

# 文章HTML内容
article_html = """<p style="text-align:center;"><strong style="font-size:18px;color:#1a1a2e;">📊 2026年5月 香港保险业监管局（IA）公布第一季度临时统计</strong></p>
<p>全港新造直接个人人寿业务保费达到<strong>1,680亿港元</strong>，按年同比增长<strong>18.3%</strong>，刷新历史同期纪录，超越2023年全年峰值水平。</p>
<h2>一、数据解构：谁在买？买什么？</h2>
<p><strong>内地访客：</strong>约620亿港元，占比37%，按年+24.1%——2019年后最高水位，但结构已完全不同：高学历城市中产、配置教育金/退休金、关注美元资产分散风险。</p>
<p><strong>香港本地居民：</strong>约780亿港元，占比46%，按年+12.5%——老龄化加速医疗险/危疾险需求，高利率环境储蓄险吸引力提升。</p>
<p><strong>在港外籍/海外华人：</strong>约280亿港元，占比17%，按年+21.8%——被市场忽视的增量群体。</p>
<h2>二、产品结构变化</h2>
<p>储蓄险占比从61%→54%（↓7pp），但绝对额仍增长+8.2%。真正驱动增量的是<strong>危疾险+医疗险</strong>——合计占比从30%→38%，"保障型需求"正在接过增长接力棒。</p>
<h2>三、五大结构性驱动力量</h2>
<p>1️⃣ <strong>港元/美元高息环境</strong>：储蓄险IRR（5.5-7%）中长期竞争力凸显<br>
2️⃣ <strong>老龄化加速</strong>：香港65岁以上人口占21.3%，商业医疗险从"可选"变"刚需"<br>
3️⃣ <strong>内地中产逻辑转变</strong>："资本外逃"→"教育金+美元配置+危疾保障"<br>
4️⃣ <strong>产品供给侧革命</strong>：多元货币计划引领创新，跨境理财通2.0保险产品首次纳入<br>
5️⃣ <strong>IFA渠道崛起</strong>：从8%→22%，从"杀熟"到"专业赋能"</p>
<h2>四、Q2-Q4展望</h2>
<p>基准情景全年约<strong>6,500亿港元</strong>。三大风险：汇率波动、监管走向、产品同质化。</p>
<h2>五、实战案例</h2>
<p><strong>张先生（38岁，深圳科技总监）</strong>：子女教育金+美元配置→保诚隽富多元货币计划II<br>
<strong>李女士（45岁，香港教师）</strong>：危疾保障+退休储备→AIA危疾加护保III+充裕未来组合<br>
<strong>陈先生（52岁，企业主）</strong>：资产隔离+财富传承→宏利丰誉传承计划II（保险信托）</p>
<hr/>
<p><em>以上为个人观点分享，不构成投资建议。保险产品涉及复杂条款，请咨询专业理财顾问后作决策。</em></p>
<p style="text-align:center;color:#888;font-size:12px;">恒玥 Yuanguard | IFA独立理财顾问服务 | 量身定制保险方案，欢迎联系恒玥团队</p>"""

article = {
    "title": title,
    "author": author,
    "digest": digest,
    "content": article_html,
    "thumb_media_id": MEDIA_ID,
    "need_open_comment": 1,
    "onlyFans": 0
}

draft_body = json.dumps({"articles": [article]}, ensure_ascii=False).encode("utf-8")
draft_url = f"https://api.weixin.qq.com/cgi-bin/draft/add?access_token={TOKEN}"
req = urllib.request.Request(draft_url, data=draft_body)
req.add_header('Content-Type', 'application/json; charset=utf-8')

with urllib.request.urlopen(req, timeout=30) as resp:
    draft_result = json.loads(resp.read())
    print(f"草稿写入结果: {draft_result}")
    if draft_result.get("errcode") == 0:
        print("🎉 成功！文章已推送到公众号草稿箱，请在手机微信后台确认发布")
    else:
        print(f"❌ 失败: {draft_result}")
