#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

with open('sales_content.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all s2_XXX entries with title
pattern = r"\{ id: '(s2_\d+)', title: \"(.*?)\""
matches = re.findall(pattern, content)
print(f"Found {len(matches)} s2 items")

# Build markdown
md = "# 2.1.1 精准定位细分客群 - 内容备份\n\n"
md += f"生成时间：2026-05-23\n"
md += f"共 {len(matches)} 个客群分类\n\n"
md += "---\n\n"

for item_id, title in matches:
    md += f"## {title}\n\n"
    md += f"**ID:** `{item_id}`\n\n"
    md += f"内容见 sales_content.js 或联系恒玥主任获取完整详细内容\n\n"
    md += "---\n\n"

with open('精准定位细分客群_内容备份.md', 'w', encoding='utf-8') as f:
    f.write(md)

print(f"Exported list to 精准定位细分客群_内容备份.md")

# Also export full content tree structure
md2 = "# 进阶销售客群分类目录\n\n"
md2 += "## 2.1 前期筹备（5篇）\n\n"
md2 += "### 2.1.1 精准定位细分客群\n\n"

# Group by 2.1.1.x categories
cat_2_1_1 = [
    ("2.1.1.1", "财富传承客群", ["s2_001", "s2_002", "s2_003", "s2_004", "s2_005"]),
    ("2.1.1.2", "跨境家庭保障客群", ["s2_006", "s2_007", "s2_008", "s2_009", "s2_010"]),
    ("2.1.1.3", "留学/移民规划客群", ["s2_011", "s2_012", "s2_013", "s2_014", "s2_015"]),
    ("2.1.1.4", "中产阶级储蓄增值客群", ["s2_016", "s2_017", "s2_018", "s2_019", "s2_020", "s2_021"]),
    ("2.1.1.5", "人生阶段类客群", ["s2_ls01", "s2_ls02", "s2_ls03", "s2_ls04", "s2_ls05"]),
    ("2.1.1.6", "职业/身份专属客群", ["s2_jb01", "s2_jb02", "s2_jb03", "s2_jb04", "s2_jb05"]),
    ("2.1.1.7", "风险&需求专项客群", ["s2_rk01", "s2_rk02", "s2_rk03", "s2_rk04", "s2_rk05", "s2_rk06"]),
    ("2.1.1.8", "高端细分延伸客群", ["s2_d01", "s2_d02", "s2_d03"]),
    ("2.1.1.9", "政策&场景类客群", ["s2_sc01", "s2_sc02"]),
]

for cat_id, cat_name, items_list in cat_2_1_1:
    md2 += f"#### {cat_id} {cat_name}\n"
    for item_id in items_list:
        md2 += f"- {item_id}\n"
    md2 += "\n"

md2 += "## 2.2 合规铺垫（3篇）\n"
md2 += "- s2_201 ~ s2_203 (占位待补充)\n\n"
md2 += "## 2.3 客群调研（4篇）\n"
md2 += "- s2_301 ~ s2_304 (占位待补充)\n\n"
md2 += "## 2.4 方案素材（4篇）\n"
md2 += "- s2_401 ~ s2_404 (占位待补充)\n\n"

with open('客群分类目录.md', 'w', encoding='utf-8') as f:
    f.write(md2)

print("Exported directory to 客群分类目录.md")