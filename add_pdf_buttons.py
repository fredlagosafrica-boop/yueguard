#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
给 assets/ 目录下所有 PDF 添加预览+下载双按钮
- 预览按钮：显示文档名称
- 下载按钮：JavaScript强制下载（手机也能用）
"""
import os, re

ASSETS_PDFS = set(
    f for f in os.listdir('/home/lenovo12348/.openclaw/workspace/yueguard/assets')
    if f.endswith('.pdf')
)

# 名称映射（文件名 → 显示名称）
NAME_MAP = {
    'ZUU直营新人行政手册.pdf': 'ZUU直营新人行政手册',
    'BCT_MPF_Update_ZUU_May2026.pdf': 'BCT强积金更新',
    'IFA-关于cpd补分流程.pdf': 'IFA CPD补分流程',
    'LifeBee_APP操作説明.pdf': 'LifeBee APP操作手册',
    'aia_app_guide.pdf': '友邦APP指引',
    'aia_ipos_training_tc.pdf': '友邦iPoS培训',
    'aia_mbw_manual.pdf': '友邦MBW学习手册',
    'axa_ibuy_emcv.pdf': '安盛eMCV手册',
    'axa_ibuy_manual_v3.pdf': '安盛iBuy手册',
    'blueconnect_demo.pdf': '蓝易通演示',
    'bupa_app.pdf': '保柏APP',
    'bupa_中文理赔表.pdf': '保柏中文理赔表',
    'bupa_英文理赔表.pdf': '保柏英文理赔表',
    'chinalife_epos_faq.pdf': '中国人寿ePOS常见问题',
    'chinalife_epos_guide.pdf': '中国人寿ePOS操作简介',
    'ctflife_eform_guide.pdf': '周大福eForm指南',
    'lianqiao_epos.pdf': '立桥ePos系统',
    'prudential_prusubmit.pdf': '保诚PRUsubmit手册',
    'taipao_sales_manual.pdf': '太平洋销售手册',
    '宏利Manulife_APP签单指引.pdf': '宏利Manulife APP',
    '理赔_BupaGlobal理赔流程总结.pdf': 'BupaGlobal理赔流程',
    '周大福CTF Life Customer App_Guideline_TC_202408.pdf': '周大福CTF Life APP',
    '保柏Bupa保障合约重要条文202402.pdf': '保柏保障合约',
    '保柏Bupa保障合约重要条文.pdf': '保柏保障合约',
    '2026年香港银行开户指南.pdf': '2026香港银行开户指南',
    '保诚PRUlegacy裕司法寿保险产品小册子.pdf': '保诚PRUlegacy',
    '富卫FWD电子投保QuickIns指引.pdf': '富卫QuickIns',
    '万通APP操作手册.pdf': '万通APP手册',
    '香港保险业行销与招募.pdf': '香港保险业行销招募',
}

def get_display_name(filename):
    if filename in NAME_MAP:
        return NAME_MAP[filename]
    # 去掉.pdf，去掉数字日期，简化名称
    name = filename.replace('.pdf','')
    # 去掉日期模式 20250101 等
    name = re.sub(r'20\d{6}', '', name)
    name = re.sub(r'_\d{4}[-.]', ' ', name)
    name = re.sub(r'_', ' ', name)
    return name.strip()

print(f"assets/ 共有 {len(ASSETS_PDFS)} 个PDF")

# 遍历所有内容 JS 文件
content_files = [
    '/home/lenovo12348/.openclaw/workspace/yueguard/ifa_content.js',
]

stats = {'found': 0, 'updated': 0, 'skipped': 0}

for filepath in content_files:
    if not os.path.exists(filepath):
        print(f"文件不存在: {filepath}")
        continue
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # GitHub Pages 原始文件URL前缀
    GITHUB_RAW = 'https://raw.githubusercontent.com/fredlagosafrica-boop/yueguard/main/'

    # 找到所有 pdf-btn-row 里的下载按钮（带有 download 属性）
    # 替换 download 属性按钮为 JavaScript 按钮
    def replace_download_btn(m):
        href = m.group(1)
        filename = href.split('/')[-1]
        disp = get_display_name(filename)
        stats['found'] += 1

        # 构建新的下载按钮（使用 onclick + JavaScript）
        # 使用 data-href 存储原始 URL，onclick 调用 JS 函数
        new_btn = f'''<button onclick="downloadPdf('{GITHUB_RAW}{href}', '{filename}')" class="pdf-btn" style="padding:10px 18px;background:#c9a84c;color:#0a1628;border-radius:8px;border:none;cursor:pointer;">⬇ 下载</button>'''
        return new_btn

    # 匹配 pdf-btn-row 里的下载 <a> 按钮
    # 模式：<a href="assets/xxx.pdf" download="..." ...>⬇ 下载</a>
    old_pattern = re.compile(
        r'<a href="(assets/[^"]+\.pdf)"([^>]*)download="([^"]*)"([^>]*)>([^<]+)</a>([^<]*</div>)'
    )
    new_content = old_pattern.sub(replace_download_btn, content)

    if new_content != content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ 已更新: {filepath}")

print(f"\n统计: 找到 {stats['found']} 个下载按钮, 更新 {stats['updated']} 个")
print("注意: 需要在 index.html 里添加 downloadPdf JavaScript 函数")