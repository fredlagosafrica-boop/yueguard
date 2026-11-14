#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Replace c1_7 content with Prudential-specific content from the two PDF guides"""

TARGET = '/home/lenovo12348/.openclaw/workspace/yueguard/ifa_content.js'

articles = [
    {
        'id': 'ifa_1_7_1',
        'title': '1.7.1 myPrudential客户主页与主介面功能',
        'body': (
            'myPrudential 是保诚提供的全天候个人网上保单服务平台，客户可轻松管理人寿险保单、一般保险保单及雇员福利。作为IFA，掌握此平台功能有助你指导客户正确使用，并及时响应客户查询。<br>'
            '<h3>登入方式</h3>'
            '<ul><li>网址：<a href="https://www.prudential.com.hk/myprudential" target="_blank">www.prudential.com.hk/myprudential</a></li>'
            '<li>方式：输入客户保单号码及密码登入</li>'
            '<li>安全：平台采用SSL加密，安全可靠</li></ul><br>'
            '<h3>myPrudential主页五大核心区域</h3>'
            '<h4>1️⃣「我的保单」圆形图示</h4>'
            '<p>按保险分类标示查看客户于保诚内的所有保单概况：</p>'
            '<ul><li>储蓄寿险</li><li>医疗及危疾</li><li>投资相连寿险</li><li>一般保险（如适用）</li><li>雇员福利（如适用）</li></ul><br>'
            '<h4>2️⃣「我的更改指示 - 有待客户确认」概览表</h4>'
            '<p>可立时查看需客户确认的保单更改申请，IFA应提醒客户及时处理。</p><br>'
            '<h4>3️⃣「人寿保单投保申请书处理状况」（如有）</h4>'
            '<p>若投保仍在处理中，页面会显示处理进度，客户可透过点击「立即查看」展开及检视。</p><br>'
            '<h4>4️⃣ 四个功能的快速连结图</h4>'
            '<p>页面设订四个常用功能的快速连结图，让客户最快捷找出所需功能。</p><br>'
            '<h3>顶部主目录（Top Navigation）功能分类</h3>'
            '<p>功能清单设于网页顶部，分类如下：</p>'
            '<ul><li><strong>保单服务</strong> — 保单查询、更改、续保</li>'
            '<li><strong>投资</strong> — 投资相连寿险账户查看</li>'
            '<li><strong>付款</strong> — 保费缴纳、转账</li>'
            '<li><strong>理赔</strong> — 理赔申请及进度查询</li>'
            '<li><strong>一般保险 / 雇员福利</strong> — 一般保险服务</li>'
            '<li><strong>PRUeShop</strong> — 保诚网上商店</li></ul><br>'
            '<h3>导览栏右侧功能</h3>'
            '<ul><li>「联络我们」— 联系保诚客服</li>'
            '<li>「语言」— 切换语言（繁体/简体/英文）</li>'
            '<li>「帐户」— 账户设置与个人资料</li></ul><br>'
            '<h3>IFA使用提示</h3>'
            '<ul><li>熟读平台功能，有助于解答客户日常查询</li>'
            '<li>提醒客户定期登录检查保单状态</li>'
            '<li>客户如有更改申请待确认，协助跟进催促</li>'
            '<li>如有系统操作疑问，可联系保诚中介人服务热线</li></ul>'
        )
    },
    {
        'id': 'ifa_1_7_2',
        'title': '1.7.2 账户功能与客户关系管理',
        'body': (
            'myPrudential「帐户」选单提供丰富的客户关系管理功能。作为IFA，掌握这些功能有助你更系统地管理客户服务流程，提升客户体验。<br>'
            '<h3>「帐户」选单完整功能列表</h3>'
            '<ul><li><strong>联络资料</strong> — 可更新客户的联络方式（电话、电邮、地址）</li>'
            '<li><strong>名字转换至简体</strong> — 切换显示语言为简体中文</li>'
            '<li><strong>讯息</strong> — 查看保诚发出的通知及讯息</li>'
            '<li><strong>小提示</strong> — 平台使用技巧及温馨提示</li>'
            '<li><strong>我的理财顾问</strong> — 查看客户的专属IFA顾问联系方式</li>'
            '<li><strong>myPrudential Club</strong> — 保诚会员积分计划（如适用）</li>'
            '<li><strong>更改密码</strong> — 客户可自助更改登入密码</li>'
            '<li><strong>登出</strong> — 安全登出账户</li></ul><br>'
            '<h3>客户关系维护核心要点</h3>'
            '<h4>📞 联络资料更新</h4>'
            '<ul><li>提醒客户如有电话、电邮或地址更改，应及时在平台更新</li>'
            '<li>确保客户能收到保诚的重要通知</li>'
            '<li>IFA亦可通过公司系统代为更新（需客户授权）</li></ul><br>'
            '<h4>📬 讯息功能</h4>'
            '<ul><li>客户可查看保诚发出的各类通知（保单周年通知、续保提醒、理赔结果等）</li>'
            '<li>IFA应提醒客户定期登录查看讯息</li>'
            '<li>重要讯息会以粗体或红色标记显示</li></ul><br>'
            '<h4>🤝 我的理财顾问</h4>'
            '<ul><li>客户可在此查看IFA的联系方式</li>'
            '<li>如客户需要联系IFA，可直接点击「联络我的理财顾问」</li>'
            '<li>IFA应确保公司系统内的联系方式保持最新</li></ul><br>'
            '<h4>🔐 密码与账户安全</h4>'
            '<ul><li>提醒客户勿将密码告知他人</li>'
            '<li>建议客户定期更改密码</li>'
            '<li>如客户忘记密码，可通过「忘记密码」功能重设</li></ul><br>'
            '<h3>IFA客户关系管理日常动作</h3>'
            '<ul><li><strong>保单周年检视</strong> — 每周年与客户进行保单检视，评估保障是否足够</li>'
            '<li><strong>续保前提醒</strong> — 续保日前1个月主动联系客户确认续保安排</li>'
            '<li><strong>理赔主动跟进</strong> — 客户提交理赔后，主动跟进进度并提供协助</li>'
            '<li><strong>重要信息及时传达</strong> — 产品调整、保费变动等重要信息及时告知客户</li>'
            '<li><strong>客户生日/纪念日问候</strong> — 建立长期信任关系</li></ul><br>'
            '<h3>客户服务记录要点</h3>'
            '<ul><li>记录每次与客户的沟通内容及结果</li>'
            '<li>记录客户的家庭状况及财务状况变化</li>'
            '<li>记录客户的需求变化（婚姻、子女诞生、物业买卖等）</li>'
            '<li>定期整理客户档案，作为下次面谈的参考</li></ul>'
        )
    },
    {
        'id': 'ifa_1_7_3',
        'title': '1.7.3 保诚电子服务平台综合操作（账户+保单）',
        'body': (
            '本节综合整理 myPrudential 的保单概览功能与有待确认更改指示操作，IFA应熟悉以下功能以便有效指导客户。<br>'
            '<h3>保单概览（Policy Overview）操作</h3>'
            '<h4>按保障范畴查看保单</h4>'
            '<ul><li>按所需保障范畴，如「储蓄寿险」、「医疗及危疾」及「投资相连寿险」等，查看对应保单概览</li>'
            '<li>点击保单号码/产品名称即可了解该保单详情</li></ul><br>'
            '<h4>投资相连寿险专用功能</h4>'
            '<ul><li>保单概览下方显示投资分布圆形图</li>'
            '<li>按「详情」可查看所有投资选择的详情</li>'
            '<li>方便客户随时了解账户投资状况</li></ul><br>'
            '<h4>展开全部保障范畴</h4>'
            '<ul><li>按「查看全部」可展开所有保障范畴的保单概览</li>'
            '<li>一目了然查看客户所有保单</li></ul><br>'
            '<h3>我的更改指示 - 有待客户确认</h3>'
            '<p>此功能显示所有需要客户亲自确认的保单更改申请，IFA应协助客户及时处理。</p><br>'
            '<h4>操作步骤</h4>'
            '<ul><li><strong>步骤1：</strong>在主页选择「我的更改指示 - 有待客户确认」项目</li>'
            '<li><strong>步骤2：</strong>点击进入该项目的确认步骤</li>'
            '<li><strong>步骤3：</strong>点击「显示详情」，进入所有「有待确认」的页面</li>'
            '<li><strong>步骤4：</strong>客户核对信息并确认签署</li></ul><br>'
            '<h4>常见有待确认项目类型</h4>'
            '<ul><li>更改保单受益人</li>'
            '<li>更改缴付保费方式</li>'
            '<li>增加/减少保障额度</li>'
            '<li>投资选择调整（投连险）</li>'
            '<li>地址或联络资料更新</li>'
            '<li>续保确认</li></ul><br>'
            '<h3>IFA协助客户处理更改申请的流程</h3>'
            '<ul><li><strong>Step 1 — 主动发现：</strong>定期登录保诚系统或让客户提供截图，发现有待确认的申请</li>'
            '<li><strong>Step 2 — 及时通知：</strong>发现后第一时间联系客户，说明需要确认的内容</li>'
            '<li><strong>Step 3 — 协助操作：</strong>指引客户登录 myPrudential 完成确认步骤</li>'
            '<li><strong>Step 4 — 进度跟进：</strong>确认后持续跟进保险公司处理进度</li>'
            '<li><strong>Step 5 — 结果反馈：</strong>更改完成后通知客户，并更新客户档案记录</li></ul><br>'
            '<h3>客户关系维护注意事项</h3>'
            '<ul><li><strong>及时性：</strong>更改申请一般有处理时限，超时可能需要重新提交</li>'
            '<li><strong>完整性：</strong>指引客户核对所有信息后再确认签署</li>'
            '<li><strong>记录存档：</strong>将更改申请内容及结果截图存档</li>'
            '<li><strong>客户知情：</strong>确保客户充分理解每项更改的影响</li>'
            '<li><strong>合规提醒：</strong>涉及保障额度调整等重要更改，须确保符合监管要求</li></ul><br>'
            '<h3>PDF参考文件</h3>'
            '<p style="margin-top:15px;"><div class="pdf-btn-row" style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:8px 0;">'
            '<a href="assets/保誠介面操作簡介_-_用戶指南.pdf" target="_blank" class="pdf-btn" style="padding:12px 20px;background:#1e3a5f;color:#fff;border-radius:8px;">📄 保誠介面操作簡介 - 用戶指南</a>'
            '<a href="assets/保誠介面操作簡介_-_用戶指南.pdf" download="prudential_interface_guide.pdf" class="pdf-btn" style="padding:12px 20px;background:#c9a84c;color:#0a1628;border-radius:8px;">⬇ 下载</a>'
            '<a href="assets/保誠人壽保險帳戶_-_用戶指南_1.pdf" target="_blank" class="pdf-btn" style="padding:12px 20px;background:#1e3a5f;color:#fff;border-radius:8px;">📄 保誠人壽保險帳戶 - 用戶指南</a>'
            '<a href="assets/保誠人壽保險帳戶_-_用戶指南_1.pdf" download="prudential_account_guide.pdf" class="pdf-btn" style="padding:12px 20px;background:#c9a84c;color:#0a1628;border-radius:8px;">⬇ 下载</a>'
            '</div></p>'
        )
    }
]

def make_article(art):
    te = art['title']
    be = art['body']
    return (
        f"        {{ id: '{art['id']}', title: '{te}', "
        f"content: '<h2>{te}</h2><p>{be}</p>' }}"
    )

new_children = ",\n".join(make_article(a) for a in articles)
new_c1_7 = f"    {{ id: 'c1_7', name: '1.7 客户关系维护', children: [\n{new_children}\n      ] }}"

with open(TARGET, 'r', encoding='utf-8') as f:
    content = f.read()

# Find c1_7 block boundaries
# Pattern: "    { id: 'c1_7'" ... "      ] },\n    { id: 'c1_8'"
import re
pattern = r"(    \{ id: 'c1_7'[^}]+children: \[).*?(\n      \]\s*\})"
m = re.search(pattern, content, re.DOTALL)
if not m:
    print("ERROR: c1_7 block not found")
    import sys; sys.exit(1)

old_c1_7 = m.group(0)
# Rebuild without the "    { id: 'c1_7'" prefix - we need to keep the "    { id: 'c1_7'" part
prefix = m.group(1)
suffix = m.group(2)

new_block = prefix + "\n" + new_children + "\n      " + suffix

new_content = content.replace(old_c1_7, new_block)

with open(TARGET, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("OK! c1_7 updated with Prudential content")