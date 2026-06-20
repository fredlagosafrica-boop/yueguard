#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

with open('sales_content.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all s2_ items - extract ID, title, and content
pattern = r"\{ id: '(s2_\w+)', title: \"(.*?)\", content: \"(.*?)\"(?:,\s*\n|$)"
matches = re.findall(pattern, content, re.DOTALL)
print(f"Found {len(matches)} s2 items")

# Build detailed markdown
md = "# 📊 进阶销售 - 精准定位细分客群 详细内容备份\n\n"
md += "生成时间：2026-05-23\n"
md += f"共 {len(matches)} 个客群分类\n\n"
md += "---\n\n"

for item_id, title, body in matches:
    # Clean HTML
    clean = re.sub(r'<h([1-6])>([^<]+)</h\1>', r'\n## \2\n', body)
    clean = re.sub(r'<p>(.*?)</p>', r'\1\n', clean, flags=re.DOTALL)
    clean = re.sub(r'<li>(.*?)</li>', r'- \1\n', clean, flags=re.DOTALL)
    clean = re.sub(r'<br\s*/?>', '\n', clean)
    clean = re.sub(r'<[^>]+>', '', clean)
    clean = clean.replace('&nbsp;', ' ').replace('&lt;', '<').replace('&gt;', '>')
    clean = clean.replace('&amp;', '&').replace('&quot;', '"').replace('&#39;', "'")
    clean = re.sub(r'\n{3,}', '\n\n', clean).strip()

    md += f"## {title}\n\n"
    md += f"**ID:** `{item_id}`\n\n"
    if len(clean) > 100:
        md += f"{clean[:100]}...[内容过长，请查看源码]\n"
    else:
        md += f"{clean}\n"
    md += f"\n[完整内容见 sales_content.js - {item_id}]\n\n"
    md += "---\n\n"

with open('精准定位细分客群_详细内容备份.md', 'w', encoding='utf-8') as f:
    f.write(md)

print(f"Exported to 精准定位细分客群_详细内容备份.md")
print(f"\n共 {len(matches)} 个客群分类已备份")