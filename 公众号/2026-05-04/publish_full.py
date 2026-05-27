#!/usr/bin/env python3
"""发布完整深度文章到微信公众号草稿箱"""
import urllib.request, json, uuid, zlib, struct

APPID = "wxf6322cf6cf738114"
SECRET = "4d71ea371960222b345c9a49801b0136"

# Step 1: Get Token
print("📡 获取 Access Token...")
url = f"https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={APPID}&secret={SECRET}"
with urllib.request.urlopen(url, timeout=30) as resp:
    TOKEN = json.loads(resp.read())["access_token"]
print(f"✅ Token: {TOKEN[:20]}...")

# Step 2: Create and upload cover
print("🎨 生成封面图...")
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

cover_path = "/mnt/c/Users/Lenovo/Desktop/恒玥内容库/公众号/2026-05-04/cover_full.png"
with open(cover_path, 'wb') as f:
    f.write(create_png(900, 383, 26, 56, 102))
print(f"✅ 封面图已生成")

print("📤 上传封面图...")
boundary = uuid.uuid4().hex
with open(cover_path, 'rb') as f:
    img_data = f.read()
body = f"--{boundary}\r\nContent-Disposition: form-data; name=\"media\"; filename=\"cover.png\"\r\nContent-Type: image/png\r\n\r\n".encode('utf-8')
body += img_data + f"\r\n--{boundary}--\r\n".encode('utf-8')
req = urllib.request.Request(
    f"https://api.weixin.qq.com/cgi-bin/material/add_material?access_token={TOKEN}&type=image",
    data=body
)
req.add_header('Content-Type', f'multipart/form-data; boundary={boundary}')
with urllib.request.urlopen(req, timeout=30) as resp:
    result = json.loads(resp.read())
    MEDIA_ID = result["media_id"]
    print(f"✅ thumb_media_id: {MEDIA_ID}")

# Step 3: Write draft
print("📝 写入草稿箱...")

title = "香港保险首季保费新高"
digest = "1680亿！首季新高内地客37%"

article_html = """
<p style="text-align:center;color:#888;font-size:13px;">📊 2026年5月 | 香港保险业监管局（IA）季度统计</p>

<h2>一、一份超出所有人预期的成绩单</h2>

<p>2026年5月，香港保险业监管局（IA）公布了第一季度保险业临时统计数字。这份报告没有令人失望——全港新造直接个人人寿业务保费达到<strong>1,680亿港元</strong>，按年同比增长<strong>18.3%</strong>，不仅刷新了历史同期纪录，更一举超越了2023年全年峰值水平。</p>

<p>这不是一个普通的"好数据"。如果我们拆解这1,680亿港元的构成，会发现一些深刻的变化正在重塑香港保险业的底层逻辑。</p>

<h2>二、数据解构：谁在买？买什么？</h2>

<h3>1,680亿港元的三层结构</h3>

<p><strong>内地访客：</strong>约620亿港元，占比37%，按年+24.1%——这是2019年后的最高水位，但结构已完全不同。2019年前的内地客以"大额保单"和"资产转移"属性为主；2026年的内地客画像是：高学历城市中产、配置教育金/退休金、关注美元资产分散风险。</p>

<p><strong>香港本地居民：</strong>约780亿港元，占比46%，按年+12.5%——本地增长的驱动力来自两大因素：人口老龄化加速带动的医疗险/危疾险需求，以及高利率环境下储蓄险相对吸引力提升。</p>

<p><strong>在港外籍/海外华人：</strong>约280亿港元，占比17%，按年+21.8%——这是一个被市场忽视的增量群体。香港作为连接中国与全球的资产管理中心，吸引大量东南亚华人、南亚在港专业人士配置保险。</p>

<h2>三、产品结构：储蓄险"一险独大"格局松动</h2>

<p>储蓄险占比从61%下降至54%，但绝对额仍增长（+8.2%）。真正驱动增量的是<strong>危疾险+医疗险</strong>——合计占比从30%跃升至38%，显示"保障型需求"正在从储蓄险手中接过增长接力棒。</p>

<p>这一转变的底层逻辑是什么？</p>

<h2>四、五大结构性驱动力量</h2>

<h3>驱动一：港元/美元高息环境的"储蓄移民"效应</h3>

<p>美联储自2024年以来维持高利率政策，港元与美元联系汇率制度下，香港利率环境同步高企。定期存款年利率一度达到4.5-5%，这反而让中长期复利储蓄型保险的竞争力凸显：</p>

<ul>
<li><strong>短期：</strong>存款利率高 → 部分资金留在银行</li>
<li><strong>中期（5-10年）：</strong>储蓄险IRR（5.5-7%）开始超越定存累积回报</li>
<li><strong>长期（15年+）：</strong>储蓄险复利效应远超定存，且具备保障属性</li>
</ul>

<p>高息环境对保险业是"先抑后扬"——初期消费者观望，后期储蓄险吸引力随年期拉长而强化。2026 Q1的数据验证了这一规律。</p>

<h3>驱动二：老龄化加速"危疾+医疗"保障缺口</h3>

<p>香港65岁以上人口比例已达<strong>21.3%</strong>，进入深度老龄化社会。公立医疗系统压力持续攀升，私立医院床位使用率超过85%，专科门诊平均候诊时间超过12周。</p>

<p>这一背景下，商业医疗险和危疾险从"可选"变为"刚需"：</p>

<ul>
<li><strong>医疗险：</strong>覆盖私立医院住院/手术，年保费3,000-30,000港元不等，高端计划可实现"私家病房全额赔偿+免找数"</li>
<li><strong>危疾险：</strong>一次性赔付，可用于治疗费用、收入补偿或家庭开支。2026 Q1危疾险新造保费增长31.2%，是所有品类中增速最快的</li>
</ul>

<h3>驱动三：内地中产的"配置"逻辑已完全重构</h3>

<p>2019年前，内地客赴港投保的叙事是"资本外逃 + 资产转移"。2026年的叙事已完全改变为：</p>

<p><em>"我是中产，我需要美元分散配置 + 子女教育金 + 更完善的危疾保障"</em></p>

<p>这一轮内地客的画像：</p>
<ul>
<li>85后-95前为主力（30-40岁）</li>
<li>一线城市（北京/上海/深圳/广州）占比超过60%</li>
<li>税后年收入50-200万人民币</li>
<li>购买决策周期从"当场签约"变为"线上研究→顾问咨询→赴港签单"（平均3-6个月）</li>
<li>主流购买产品：多元货币储蓄计划（50%）+ 重疾险（30%）+ 高端医疗（20%）</li>
</ul>

<h3>驱动四：产品供给侧革命</h3>

<p>香港保司在产品端的持续创新，是需求释放的重要推手。2024-2026年产品创新路径清晰：</p>

<ul>
<li><strong>2024：</strong>多元货币储蓄险全面开花（保诚隽富、AIA充裕未来、宏利丰誉）</li>
<li><strong>2025：</strong>癌症专项险 + ICU专项保障进入主流视野</li>
<li><strong>2026 Q1：</strong>跨境理财通2.0 → 保险产品首次纳入南向通，万用寿险/终身寿险获得新销售渠道</li>
</ul>

<p>跨境理财通2.0是2026年最大的政策变量——保险产品首次纳入合资格投资范围，湾区居民每年300万人民币额度可投资香港保险。首周8,000人次申请，仅是开始。</p>

<h3>驱动五：IFA渠道崛起</h3>

<p>IFA独立理财顾问渠道从8%跃升至22%，是最显著的结构性变化。背后的逻辑：</p>

<ul>
<li>内地客的信息差收窄，越来越多人主动研究后寻找IFA</li>
<li>IFA可跨保司比较，提供更客观的产品匹配</li>
<li>高净值客户（年缴保费50万+）更倾向IFA渠道的专业建议</li>
</ul>

<h2>五、Q2-Q4全年展望</h2>

<p>基于Q1数据线性外推，全年新造保费可能达到：</p>

<ul>
<li><strong>保守情景（+10%）：</strong>全年约6,000亿港元</li>
<li><strong>基准情景（+15%）：</strong>全年约6,500亿港元</li>
<li><strong>乐观情景（+20%）：</strong>全年约7,000亿港元</li>
</ul>

<p>关键变量在于Q2-Q4内地客恢复节奏和跨境理财通2.0的实际放量。三大风险需关注：</p>
<ul>
<li><strong>汇率风险：</strong>若美联储启动降息，港元/美元储蓄险吸引力可能回落</li>
<li><strong>监管风险：</strong>内地资本管制走向仍是最大不确定因素</li>
<li><strong>产品同质化：</strong>多元货币计划竞争白热化，保司利润承压</li>
</ul>

<h2>六、实战案例</h2>

<h3>案例A：张先生，38岁，深圳某科技公司技术总监</h3>
<p><strong>需求：</strong>子女教育金 + 美元资产配置<br>
<strong>推荐：</strong>保诚隽富多元货币计划II（6种货币灵活转换）<br>
<strong>方案：</strong>年缴20万港元，5年缴<br>
<strong>逻辑：</strong>孩子6岁，12年后海外大学费用刚好提取</p>

<h3>案例B：李女士，45岁，香港本地中学教师</h3>
<p><strong>需求：</strong>危疾保障补强 + 退休储备<br>
<strong>推荐：</strong>AIA危疾加护保III（CCE）+ 充裕未来·盈尚II 组合<br>
<strong>逻辑：</strong>已有公司团体医疗，缺口在于危疾一次性给付和教育金储备</p>

<h3>案例C：陈先生，52岁，家族企业主</h3>
<p><strong>需求：</strong>资产隔离 + 财富传承<br>
<strong>推荐：</strong>宏利丰誉传承保障计划II（可对接保险信托）<br>
<strong>逻辑：</strong>企业债务风险与家庭资产隔离，万用寿险+保险信托是标准配置</p>

<hr/>
<p><em>以上为个人观点分享，不构成投资建议。保险产品涉及复杂条款，请咨询专业理财顾问后作决策。</em></p>
<p style="text-align:center;color:#888;font-size:12px;">恒玥 Yuanguard | IFA独立理财顾问服务<br>量身定制保险方案，欢迎联系恒玥团队</p>
"""

article = {
    "title": title,
    "author": "恒玥",
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
    result = json.loads(resp.read())
    print(f"草稿写入结果: {result}")
    if "media_id" in result:
        print("🎉 成功！文章已推送到公众号草稿箱，请在手机微信后台确认发布")
    else:
        print(f"❌ 错误: {result}")
