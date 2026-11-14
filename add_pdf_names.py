#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""为 PDF 按钮添加文件名显示（只改按钮文字，不重复嵌套）"""

import re
import os
import urllib.parse

def extract_pdf_label(href):
    """从 href 中提取 PDF 显示名称"""
    filename = href.split("/")[-1]
    try:
        filename = urllib.parse.unquote(filename)
    except Exception:
        pass
    name = re.sub(r'\.pdf$', '', filename, flags=re.IGNORECASE)
    return name

def process_file(filepath):
    """处理单个 JS 文件"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # 匹配已经是 pdf-btn-row 里的预览按钮，还没有文件名的
    # 特征：class="pdf-btn" ...>📄 预览</a>  （没有「」）
    # 排除已经有文件名的
    pattern = r'(<a href="([^"]*\.pdf[^"]*)" target="_blank" class="pdf-btn"[^>]*>)(📄 预览)(</a>)'

    def replacer(m):
        prefix = m.group(1)
        href = m.group(2)
        label = extract_pdf_label(href)
        suffix = m.group(4)
        return f'{prefix}📄 预览「{label}」{suffix}'

    content = re.sub(pattern, replacer, content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        count = len(re.findall(pattern, original))
        print(f"✅ {filepath}: 更新了 {count} 处按钮文字")
    else:
        print(f"⚠️  {filepath}: 无需更新")

for f in ['ifa_content.js', 'materials_content.js', 'referral_content.js']:
    path = f'/home/lenovo12348/.openclaw/workspace/yueguard/{f}'
    if os.path.exists(path):
        process_file(path)
    else:
        print(f"❌ 文件不存在: {path}")

print("\n处理完成！")
