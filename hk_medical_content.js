// ============ 香港医疗工具包 (2.6) ============
// [PERF 2026-06-21] 14 份完整内容懒加载：用户进入 2.6 分类时才下载
// 文件大小：约 175KB
// 触发方式：script_new.js 中的 loadMedicalPackage()
const hkMedicalData = {
  "2.6.1 香港医院大全（主流版）": {
    id: "hkm_2_6_1",
    title: "2.6.1 香港医院大全（主流版）",
    content: `<h1>🏥 香港主流医院信息大全</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>数据说明</strong>：基于公开资料整理，<strong>电话/地址/预约方式以医院官网最新公告为准</strong>  <br>> <strong>覆盖范围</strong>：公立医院 16 间（香港主要公立）+ 私立医院 14 间（全部主流私立）  <br>> <strong>使用建议</strong>：客户就医前<strong>务必</strong>电话核对或查官网最新信息</p>
<hr>
<h2>🏛️ 第一部分：公立医院（医院管理局 Hospital Authority）</h2>
<p>> <strong>统一查询热线</strong>：📞 <strong>2300 6555</strong>（医院管理局，8am-10pm）  <br>> <strong>24小时紧急救助</strong>：📞 <strong>999</strong>（救护车）  <br>> <strong>HA 官网</strong>：<a href="https://www.ha.org.hk" target="_blank" rel="noopener">https://www.ha.org.hk</a>  <br>> <strong>预约专科门诊</strong>：需经普通科门诊/私家医生转介；或使用「HA Go」App 自行预约</p>
<hr>
<h3>港岛区（含离岛）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>地址</th><th>总机电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>🏥 <strong>玛丽医院</strong> (Queen Mary Hospital)</td><td>香港薄扶林道 102 号</td><td>2255 3838</td><td>港大医学院教学医院、24小时急症</td></tr>
<tr><td>🏥 <strong>东区尤德夫人那打素医院</strong> (Pamela Youde Eastern)</td><td>香港柴湾乐民道 3 号</td><td>2595 6111</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>律敦治医院</strong> (Ruttonjee Hospital)</td><td>香港湾仔皇后大道东 266 号</td><td>2291 2000</td><td>主要为疗养服务</td></tr>
<tr><td>🏥 <strong>邓肇坚医院</strong> (Tang Shiu Kin Hospital)</td><td>香港湾仔皇后大道东 282 号</td><td>2291 1000</td><td>疗养服务为主</td></tr>
<tr><td>🏥 <strong>长洲医院</strong> (St. John Hospital)</td><td>长洲东湾医院路</td><td>2981 9441</td><td>离岛小型医院</td></tr>
</table>
<h3>九龙区</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>地址</th><th>总机电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>🏥 <strong>伊利沙伯医院</strong> (Queen Elizabeth Hospital)</td><td>九龙油麻地加士居道 30 号</td><td>2958 8888</td><td>大型急症全科医院、24小时急症</td></tr>
<tr><td>🏥 <strong>广华医院</strong> (Kwong Wah Hospital)</td><td>九龙油麻地窝打老道 25 号</td><td>2332 2311</td><td>中西医结合、24小时急症</td></tr>
<tr><td>🏥 <strong>基督教联合医院</strong> (United Christian Hospital)</td><td>九龙观塘协和街 130 号</td><td>2379 9611</td><td>观塘区主要医院、24小时急症</td></tr>
<tr><td>🏥 <strong>玛嘉烈医院</strong> (Princess Margaret Hospital)</td><td>九龙荔枝角玛嘉烈医院道 2-10 号</td><td>2990 1111</td><td>24小时急症、传染病中心</td></tr>
<tr><td>🏥 <strong>九龙医院</strong> (Kowloon Hospital)</td><td>九龙亚皆老街 147A</td><td>3122 7111</td><td>精神科、胸肺科为主</td></tr>
</table>
<h3>新界区</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>地址</th><th>总机电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>🏥 <strong>威尔斯亲王医院</strong> (Prince of Wales Hospital)</td><td>沙田银城街 30-32 号</td><td>2632 2211</td><td>中大医学院教学医院、24小时急症</td></tr>
<tr><td>🏥 <strong>屯门医院</strong> (Tuen Mun Hospital)</td><td>屯门青松观路 23 号</td><td>2468 5111</td><td>屯门区主要医院、24小时急症</td></tr>
<tr><td>🏥 <strong>博爱医院</strong> (Pok Oi Hospital)</td><td>元朗坳头友善街 11 号</td><td>2486 8000</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>天水围医院</strong> (Tin Shui Wai Hospital)</td><td>天水围天瑞路 3 号</td><td>3513 5000</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>仁济医院</strong> (Yan Chai Hospital)</td><td>荃湾仁济街 7-11 号</td><td>2417 8383</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>雅丽氏何妙龄那打素医院</strong> (AHNH)</td><td>大埔全安路 11 号</td><td>2689 2000</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>北区医院</strong> (North District Hospital)</td><td>上水保健路 9 号</td><td>2683 8388</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>将军澳医院</strong> (Tseung Kwan O Hospital)</td><td>将军澳坑口宝宁里 2 号</td><td>2208 0111</td><td>24小时急症</td></tr>
</table>
<hr>
<h2>🏨 第二部分：私立医院（Hong Kong Private Hospitals）</h2>
<p>> <strong>预约方式</strong>：<strong>直接打电话或网上预约</strong>，<strong>无需医生转介</strong>  <br>> <strong>特点</strong>：服务快、环境好、费用高（高端医疗险通常全数赔偿）</p>
<h3>高端首选（最热门 4 间）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>区域</th><th>官网</th><th>中央预约</th><th>地址</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>⭐ <strong>养和医院</strong> (Hong Kong Sanatorium & Hospital)</td><td>跑马地</td><td><a href="https://www.hksh.com" target="_blank" rel="noopener">官网</a></td><td>2572 0211</td><td>香港跑马地山村道 2 号</td></tr>
<tr><td>⭐ <strong>港怡医院</strong> (Gleneagles Hospital HK)</td><td>黄竹坑</td><td><a href="https://gleneagles.hk" target="_blank" rel="noopener">官网</a></td><td>3153 9000</td><td>香港黄竹坑道 98 号</td></tr>
<tr><td>⭐ <strong>明德国际医院</strong> (Matilda International Hospital)</td><td>山顶</td><td><a href="https://www.matilda.org" target="_blank" rel="noopener">官网</a></td><td>2849 0111</td><td>香港山顶加列山道 41 号</td></tr>
<tr><td>⭐ <strong>香港港安医院-司徒拔道</strong> (HK Adventist-SR)</td><td>司徒拔道</td><td><a href="https://www.hkah.org.hk" target="_blank" rel="noopener">官网</a></td><td>3651 8888</td><td>香港司徒拔道 40 号</td></tr>
</table>
<h3>综合私立（主流 10 间）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>区域</th><th>官网</th><th>中央预约</th><th>地址</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td><strong>圣保禄医院</strong> (St. Paul's Hospital)</td><td>铜锣湾</td><td><a href="https://www.stpaul.org.hk" target="_blank" rel="noopener">官网</a></td><td>2890 6008</td><td>香港铜锣湾东院道 2 号</td></tr>
<tr><td><strong>播道医院</strong> (Evangel Hospital)</td><td>九龙城</td><td><a href="https://www.evangel.org.hk" target="_blank" rel="noopener">官网</a></td><td>2711 5221</td><td>九龙亚皆老街 222 号</td></tr>
<tr><td><strong>浸信会医院</strong> (Baptist Hospital)</td><td>九龙塘</td><td><a href="https://www.hkbh.org.hk" target="_blank" rel="noopener">官网</a></td><td>2337 4141</td><td>九龙窝打老道 222 号</td></tr>
<tr><td><strong>圣德肋撒医院</strong> (St. Teresa's Hospital)</td><td>太子</td><td><a href="https://www.stteresa.org" target="_blank" rel="noopener">官网</a></td><td>2200 3434</td><td>九龙太子道 327 号</td></tr>
<tr><td><strong>嘉诺撒医院</strong> (Canossa Hospital)</td><td>半山</td><td><a href="https://www.canossahospital.org.hk" target="_blank" rel="noopener">官网</a></td><td>2522 2181</td><td>香港旧山顶道 1 号</td></tr>
<tr><td><strong>香港港安医院-荃湾</strong> (HK Adventist-TW)</td><td>荃湾</td><td><a href="https://www.twah.org.hk" target="_blank" rel="noopener">官网</a></td><td>2275 6688</td><td>荃湾荃景围 199 号</td></tr>
<tr><td><strong>宝血医院</strong> (Precious Blood Hospital)</td><td>油麻地</td><td><a href="https://www.pbh.hk" target="_blank" rel="noopener">官网</a></td><td>2386 4281</td><td>九龙油麻地石壁道 1 号</td></tr>
<tr><td><strong>港安医疗中心-铜锣湾</strong></td><td>铜锣湾</td><td><a href="https://www.hkah.org.hk" target="_blank" rel="noopener">官网</a></td><td>3651 8888</td><td>香港铜锣湾百德新街 2-20 号恒隆中心 16 楼</td></tr>
<tr><td><strong>希愈医疗</strong> (Heal Medical)</td><td>中环</td><td><a href="https://www.healmedical.com" target="_blank" rel="noopener">官网</a></td><td>2849 0123</td><td>香港中环皇后大道中 9 号 25 楼</td></tr>
<tr><td><strong>亚洲专科医生</strong> (Asia Medical Specialists)</td><td>中环/尖沙咀</td><td><a href="https://www.asiamedicalspecialists.hk" target="_blank" rel="noopener">官网</a></td><td>2521 6830</td><td>中环毕打街 1-3 号中建大厦 16 楼</td></tr>
</table>
<p>> ⚠️ <strong>宝血医院</strong>：近年服务调整，<strong>以非紧急服务为主</strong>，使用前请电话确认是否提供所需服务</p>
<hr>
<h2>📞 第三部分：关键便民电话</h2>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>🚑 <strong>救护车（紧急）</strong></td><td><strong>999</strong></td><td>24小时</td></tr>
<tr><td>🏥 <strong>医院管理局查询热线</strong></td><td><strong>2300 6555</strong></td><td>8am-10pm</td></tr>
<tr><td>🏥 HA「预约通」改期/取消</td><td>2300 6555</td><td>同上</td></tr>
<tr><td>🏥 <strong>衞生署</strong></td><td>2961 8989</td><td>健康咨询</td></tr>
<tr><td>🏥 衞生署中医药事务部</td><td>2574 9991</td><td>中医相关</td></tr>
<tr><td>☎️ 香港撒瑪利亞防止自殺會</td><td>2389 2222</td><td>24小时</td></tr>
<tr><td>☎️ 撒瑪利亞會</td><td>2896 0000</td><td>24小时</td></tr>
<tr><td>🦠 衞生防护中心热线</td><td>2125 1111</td><td>传染病</td></tr>
<tr><td>💊 医管局药物咨询</td><td>2300 6555</td><td>转药物辅导组</td></tr>
</table>
<hr>
<h2>📱 第四部分：数字工具</h2>
<table border="1" cellpadding="6">
<tr><th>工具</th><th>功能</th><th>下载/网址</th></tr>
<tr><td>------</td><td>------</td><td>----------</td></tr>
<tr><td><strong>HA Go</strong></td><td>公立医院预约、报告、缴费</td><td>App Store / Google Play</td></tr>
<tr><td><strong>eHealth 医健通</strong></td><td>电子健康记录互通</td><td><a href="https://www.ehealth.gov.hk" target="_blank" rel="noopener">官网</a></td></tr>
<tr><td><strong>个别医院 App</strong></td><td>各私立医院有自己的 App</td><td>养和、港怡等</td></tr>
</table>
<hr>
<h2>💼 第五部分：客户咨询常用话术（保险/IFA 适用）</h2>
<h3>Q1：香港哪些医院最受高净值客户欢迎？</h3>
> A：私立首选 <strong>养和、港怡、明德、港安（司徒拔道/荃湾）</strong>；  
> 公立首选 <strong>玛丽（港大）、伊利沙伯、威尔斯亲王（中大）</strong> —— 都是医学院教学医院，医生水平最高。
<h3>Q2：内地客户来港就医怎么预约？</h3>
> A：<strong>私立医院</strong>直接电话或官网预约，<strong>无需医生转介</strong>；  
> 需住院手术建议<strong>提前 1-2 周</strong>预约床位。  
> 公立医院需持有<strong>香港身份证</strong>或<strong>有效旅游证件</strong>，急症可直接到急症室登记。
<h3>Q3：高端医疗险通常覆盖哪些医院？</h3>
> A：通常 <strong>全球 / 全港</strong> 覆盖公立和私立医院，<strong>含病房升级、住院手术、癌症治疗</strong>；  
> <strong>部分产品</strong>有"指定医院清单"（如只覆盖亚洲），<strong>投保前请仔细看保单条款</strong>。  
> <strong>中端医疗险</strong>通常<strong>只覆盖住院+手术</strong>（Semi-Private 房），需自费门诊。
<h3>Q4：紧急情况怎么走？</h3>
> A：🚨 紧急 → <strong>999 救护车</strong> → 最近的<strong>公立医院急症室</strong>（24小时）；  
> 私立医院<strong>多数不设急症</strong>（明德除外），紧急情况先去公立稳定后再转院。  
> 急症分流制度下，非紧急情况等候时间可能较长。
<h3>Q5：内地客户怎么付钱？</h3>
> A：私立医院<strong>接受信用卡、银联、现金</strong>（部分接受支付宝/微信）；  
> 大额账单可申请<strong>医院付款计划</strong>。  
> <strong>保险直接结算</strong>（免找数）需医院与保险公司有协议，常见有养和、港怡、港安等。
<h3>Q6：客户有高端医疗险，住院时怎么操作？</h3>
> A：① 入院前向保险公司申请「<strong>预先批核</strong>」（Pre-Authorization）；  
> ② 批准后医院直接与保险公司结算；  
> ③ 客户<strong>无需垫付</strong>大额医疗费（自付额/垫底费除外）。
<hr>
<hr>
<hr>
<p>> <strong>重要免责声明</strong>：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体就医决策请咨询医生或医院官方。</p>`
  },
  "2.6.2 香港医院大全（完整版）": {
    id: "hkm_2_6_2",
    title: "2.6.2 香港医院大全（完整版）",
    content: `<h1>🏥 香港医院信息大全（完整版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>覆盖范围</strong>：HA 公立机构 <strong>31 间</strong> + 私立医院 <strong>18 间</strong> + 关键电话/工具/话术  <br>> <strong>数据说明</strong>：基于公开资料整理，<strong>电话/地址/服务以医院官网最新公告为准</strong>  <br>> <strong>使用建议</strong>：客户就医前<strong>务必</strong>电话核对或查官网最新信息</p>
<hr>
<h2>🏛️ 第一部分：公立医院（医院管理局 Hospital Authority · 完整清单）</h2>
<p>> <strong>HA 体系总览</strong>：香港医院管理局下辖约 43 间医院/机构（含疗养院、专科诊所）  <br>> <strong>本文件收录</strong>：综合性医院 17 间 + 专科/疗养/护理机构 14 间 = 共 31 间  <br>> <strong>统一查询热线</strong>：📞 <strong>2300 6555</strong>（HA 总部，8am-10pm）  <br>> <strong>24小时紧急救助</strong>：📞 <strong>999</strong>（救护车）  <br>> <strong>HA 官网</strong>：<a href="https://www.ha.org.hk" target="_blank" rel="noopener">https://www.ha.org.hk</a>  <br>> <strong>预约 App</strong>：「HA Go」（App Store / Google Play）</p>
<hr>
<h3>🟢 港岛区（8 间）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>地址</th><th>总机电话</th><th>类型</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td><td>------</td></tr>
<tr><td>🏥 <strong>玛丽医院</strong> (Queen Mary Hospital)</td><td>香港薄扶林道 102 号</td><td>2255 3838</td><td>急症全科</td><td>港大医学院教学、24小时急症</td></tr>
<tr><td>🏥 <strong>东区尤德夫人那打素医院</strong> (PYNEH)</td><td>香港柴湾乐民道 3 号</td><td>2595 6111</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>律敦治医院</strong> (Ruttonjee Hospital)</td><td>香港湾仔皇后大道东 266 号</td><td>2291 2000</td><td>综合</td><td>主要为疗养服务</td></tr>
<tr><td>🏥 <strong>邓肇坚医院</strong> (Tang Shiu Kin Hospital)</td><td>香港湾仔皇后大道东 282 号</td><td>2291 1000</td><td>疗养</td><td>疗养服务为主</td></tr>
<tr><td>🏥 <strong>葛量洪医院</strong> (Grantham Hospital)</td><td>香港仔黄竹坑道 125 号</td><td>2518 2111</td><td>专科</td><td>心脏/胸肺专科</td></tr>
<tr><td>🏥 <strong>黄竹坑医院</strong> (Wong Chuk Hang Hospital)</td><td>香港黄竹坑径 2 号</td><td>2873 7222</td><td>疗养</td><td>老人/中风/脑科</td></tr>
<tr><td>🏥 <strong>长洲医院</strong> (St. John Hospital)</td><td>长洲东湾医院路</td><td>2981 9441</td><td>综合</td><td>离岛小型急症</td></tr>
<tr><td>🏥 <strong>舂坎角慈氏护养院</strong> (Chung Hom Kok Cheshire Home)</td><td>香港舂坎角道 65 号</td><td>2813 7766</td><td>护养</td><td>严重伤残/长期护理</td></tr>
</table>
<h3>🟡 九龙区（10 间）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>地址</th><th>总机电话</th><th>类型</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td><td>------</td></tr>
<tr><td>🏥 <strong>伊利沙伯医院</strong> (Queen Elizabeth Hospital)</td><td>九龙油麻地加士居道 30 号</td><td>2958 8888</td><td>急症全科</td><td>大型急症全科、24小时</td></tr>
<tr><td>🏥 <strong>广华医院</strong> (Kwong Wah Hospital)</td><td>九龙油麻地窝打老道 25 号</td><td>2332 2311</td><td>急症全科</td><td>中西医结合、24小时</td></tr>
<tr><td>🏥 <strong>基督教联合医院</strong> (United Christian Hospital)</td><td>九龙观塘协和街 130 号</td><td>2379 9611</td><td>急症全科</td><td>观塘区主要医院、24小时</td></tr>
<tr><td>🏥 <strong>玛嘉烈医院</strong> (Princess Margaret Hospital)</td><td>九龙荔枝角玛嘉烈医院道 2-10 号</td><td>2990 1111</td><td>急症全科</td><td>24小时急症、传染病中心</td></tr>
<tr><td>🏥 <strong>九龙医院</strong> (Kowloon Hospital)</td><td>九龙亚皆老街 147A</td><td>3122 7111</td><td>专科</td><td>精神科/胸肺科</td></tr>
<tr><td>🏥 <strong>圣母医院</strong> (Our Lady of Maryknoll Hospital)</td><td>九龙黄大仙沙田坳道 118 号</td><td>2320 2121</td><td>综合</td><td>黄大仙区医院</td></tr>
<tr><td>🏥 <strong>香港佛教医院</strong> (Hong Kong Buddhist Hospital)</td><td>九龙乐富杏林街 10 号</td><td>2337 4111</td><td>综合</td><td>乐富区医院</td></tr>
<tr><td>🏥 <strong>东华三院黄大仙医院</strong> (Tung Wah Wong Tai Sin Hospital)</td><td>九龙黄大仙沙田坳道 124 号</td><td>2320 0377</td><td>疗养</td><td>老人/复康</td></tr>
<tr><td>🏥 <strong>灵实医院</strong> (Haven of Hope Hospital)</td><td>九龙将军澳灵实路 8 号</td><td>2703 8888</td><td>疗养</td><td>老人/复康/宁养</td></tr>
<tr><td>🏥 <strong>香港儿童医院</strong> (HK Children's Hospital)</td><td>九龙启德承昌道 1 号</td><td>3513 3888</td><td>儿科专科</td><td>全港儿童专科转介中心</td></tr>
</table>
<h3>🔵 新界区（13 间）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>地址</th><th>总机电话</th><th>类型</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td><td>------</td></tr>
<tr><td>🏥 <strong>威尔斯亲王医院</strong> (Prince of Wales Hospital)</td><td>沙田银城街 30-32 号</td><td>2632 2211</td><td>急症全科</td><td>中大医学院教学、24小时</td></tr>
<tr><td>🏥 <strong>屯门医院</strong> (Tuen Mun Hospital)</td><td>屯门青松观路 23 号</td><td>2468 5111</td><td>急症全科</td><td>屯门区主要医院、24小时</td></tr>
<tr><td>🏥 <strong>博爱医院</strong> (Pok Oi Hospital)</td><td>元朗坳头友善街 11 号</td><td>2486 8000</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>天水围医院</strong> (Tin Shui Wai Hospital)</td><td>天水围天瑞路 3 号</td><td>3513 5000</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>仁济医院</strong> (Yan Chai Hospital)</td><td>荃湾仁济街 7-11 号</td><td>2417 8383</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>雅丽氏何妙龄那打素医院</strong> (AHNH)</td><td>大埔全安路 11 号</td><td>2689 2000</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>北区医院</strong> (North District Hospital)</td><td>上水保健路 9 号</td><td>2683 8388</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>将军澳医院</strong> (Tseung Kwan O Hospital)</td><td>将军澳坑口宝宁里 2 号</td><td>2208 0111</td><td>急症全科</td><td>24小时急症</td></tr>
<tr><td>🏥 <strong>沙田医院</strong> (Shatin Hospital)</td><td>沙田亚公角街 33 号</td><td>2636 1133</td><td>疗养</td><td>老人/复康/宁养</td></tr>
<tr><td>🏥 <strong>大埔医院</strong> (Tai Po Hospital)</td><td>大埔全安路 9 号</td><td>2667 2000</td><td>疗养</td><td>老人/复康</td></tr>
<tr><td>🏥 <strong>葵涌医院</strong> (Kwai Chung Hospital)</td><td>葵涌葵涌医院道 3-15 号</td><td>2959 8111</td><td>精神科</td><td>全港最大精神科</td></tr>
<tr><td>🏥 <strong>青山医院</strong> (Castle Peak Hospital)</td><td>屯门青松观路 15 号</td><td>2456 7000</td><td>精神科</td><td>精神科专科</td></tr>
<tr><td>🏥 <strong>北大屿山医院</strong> (North Lantau Hospital)</td><td>大屿山东涌松仁路 8 号</td><td>3467 6000</td><td>急症全科</td><td>东涌区医院、24小时急症</td></tr>
</table>
<hr>
<h2>🏨 第二部分：私立医院（Hong Kong Private Hospitals · 完整 18 间）</h2>
<p>> <strong>预约方式</strong>：<strong>直接打电话或网上预约</strong>，<strong>无需医生转介</strong>  <br>> <strong>特点</strong>：服务快、环境好、费用高（高端医疗险通常全数赔偿）</p>
<h3>① 高端首选（4 间 · 高净值客户常去）</h3>
<table border="1" cellpadding="6">
<tr><th>#</th><th>医院</th><th>区域</th><th>官网</th><th>中央预约</th><th>地址</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>1</td><td>⭐ <strong>养和医院</strong> (HKSH)</td><td>跑马地</td><td><a href="https://www.hksh.com" target="_blank" rel="noopener">https://www.hksh.com</a></td><td>2572 0211</td><td>香港跑马地山村道 2 号</td></tr>
<tr><td>2</td><td>⭐ <strong>港怡医院</strong> (Gleneagles HK)</td><td>黄竹坑</td><td><a href="https://gleneagles.hk" target="_blank" rel="noopener">https://gleneagles.hk</a></td><td>3153 9000</td><td>香港黄竹坑道 98 号</td></tr>
<tr><td>3</td><td>⭐ <strong>明德国际医院</strong> (Matilda Int'l)</td><td>山顶</td><td><a href="https://www.matilda.org" target="_blank" rel="noopener">https://www.matilda.org</a></td><td>2849 0111</td><td>香港山顶加列山道 41 号</td></tr>
<tr><td>4</td><td>⭐ <strong>香港港安医院-司徒拔道</strong> (HK Adventist-SR)</td><td>司徒拔道</td><td><a href="https://www.hkah.org.hk" target="_blank" rel="noopener">https://www.hkah.org.hk</a></td><td>3651 8888</td><td>香港司徒拔道 40 号</td></tr>
</table>
<h3>② 综合私立医院（10 间 · 主流选择）</h3>
<table border="1" cellpadding="6">
<tr><th>#</th><th>医院</th><th>区域</th><th>官网</th><th>中央预约</th><th>地址</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>5</td><td><strong>圣保禄医院</strong> (St. Paul's)</td><td>铜锣湾</td><td><a href="https://www.stpaul.org.hk" target="_blank" rel="noopener">https://www.stpaul.org.hk</a></td><td>2890 6008</td><td>香港铜锣湾东院道 2 号</td></tr>
<tr><td>6</td><td><strong>播道医院</strong> (Evangel)</td><td>九龙城</td><td><a href="https://www.evangel.org.hk" target="_blank" rel="noopener">https://www.evangel.org.hk</a></td><td>2711 5221</td><td>九龙亚皆老街 222 号</td></tr>
<tr><td>7</td><td><strong>浸信会医院</strong> (Baptist)</td><td>九龙塘</td><td><a href="https://www.hkbh.org.hk" target="_blank" rel="noopener">https://www.hkbh.org.hk</a></td><td>2337 4141</td><td>九龙窝打老道 222 号</td></tr>
<tr><td>8</td><td><strong>圣德肋撒医院</strong> (St. Teresa's)</td><td>太子</td><td><a href="https://www.stteresa.org" target="_blank" rel="noopener">https://www.stteresa.org</a></td><td>2200 3434</td><td>九龙太子道 327 号</td></tr>
<tr><td>9</td><td><strong>嘉诺撒医院</strong> (Canossa)</td><td>半山</td><td><a href="https://www.canossahospital.org.hk" target="_blank" rel="noopener">https://www.canossahospital.org.hk</a></td><td>2522 2181</td><td>香港旧山顶道 1 号</td></tr>
<tr><td>10</td><td><strong>香港港安医院-荃湾</strong> (HK Adventist-TW)</td><td>荃湾</td><td><a href="https://www.twah.org.hk" target="_blank" rel="noopener">https://www.twah.org.hk</a></td><td>2275 6688</td><td>荃湾荃景围 199 号</td></tr>
<tr><td>11</td><td><strong>宝血医院</strong> (Precious Blood)</td><td>油麻地</td><td><a href="https://www.pbh.hk" target="_blank" rel="noopener">https://www.pbh.hk</a></td><td>2386 4281</td><td>九龙油麻地石壁道 1 号</td></tr>
<tr><td>12</td><td><strong>港安医疗中心-铜锣湾</strong></td><td>铜锣湾</td><td>https://www.hkah.org.hk</td><td>3651 8888</td><td>铜锣湾百德新街 2-20 号恒隆中心 16 楼</td></tr>
<tr><td>13</td><td><strong>希愈医疗</strong> (Heal Medical)</td><td>中环</td><td><a href="https://www.healmedical.com" target="_blank" rel="noopener">https://www.healmedical.com</a></td><td>2849 0123</td><td>中环皇后大道中 9 号 25 楼</td></tr>
<tr><td>14</td><td><strong>亚洲专科医生</strong> (Asia Medical Specialists)</td><td>中环/尖沙咀</td><td><a href="https://www.asiamedicalspecialists.hk" target="_blank" rel="noopener">https://www.asiamedicalspecialists.hk</a></td><td>2521 6830</td><td>中环毕打街 1-3 号中建大厦 16 楼</td></tr>
</table>
<h3>③ 专科医疗中心（4 间 · 单/多专科日间服务）</h3>
<table border="1" cellpadding="6">
<tr><th>#</th><th>机构</th><th>区域</th><th>性质</th><th>联系方式</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>------</td><td>----------</td></tr>
<tr><td>15</td><td><strong>希愈肿瘤中心</strong> (Heal Oncology)</td><td>中环</td><td>肿瘤专科</td><td>2849 0123（希愈医疗旗下）</td></tr>
<tr><td>16</td><td><strong>港安肿瘤中心</strong> (Adventist Oncology)</td><td>司徒拔道</td><td>肿瘤专科</td><td>3651 8888（港安旗下）</td></tr>
<tr><td>17</td><td><strong>楷和医疗</strong> (Chiron Medical)</td><td>中环/尖沙咀</td><td>多专科</td><td>2155 2098</td></tr>
<tr><td>18</td><td><strong>卓健医疗</strong> (Quality HealthCare)</td><td>全港多区</td><td>体检/门诊</td><td>8301 8301</td></tr>
</table>
<p>> ⚠️ <strong>使用说明</strong>：<br>> - <strong>宝血医院</strong>：近年服务调整，<strong>以非紧急服务为主</strong>，使用前请电话确认<br>> - <strong>专科医疗中心</strong>：通常不设住院部，主要提供日间手术/专科门诊<br>> - <strong>卓健医疗</strong>：以体检/门诊为主，部分中心有少量病床</p>
<hr>
<h2>📞 第三部分：关键便民电话</h2>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>🚑 <strong>救护车（紧急）</strong></td><td><strong>999</strong></td><td>24小时</td></tr>
<tr><td>🏥 <strong>医院管理局查询热线</strong></td><td><strong>2300 6555</strong></td><td>8am-10pm</td></tr>
<tr><td>🏥 HA「预约通」改期/取消</td><td>2300 6555</td><td>同上</td></tr>
<tr><td>🏥 <strong>衞生署</strong></td><td>2961 8989</td><td>健康咨询</td></tr>
<tr><td>🏥 衞生署中医药事务部</td><td>2574 9991</td><td>中医相关</td></tr>
<tr><td>☎️ 香港撒瑪利亞防止自殺會</td><td>2389 2222</td><td>24小时</td></tr>
<tr><td>☎️ 撒瑪利亞會</td><td>2896 0000</td><td>24小时</td></tr>
<tr><td>🦠 衞生防护中心热线</td><td>2125 1111</td><td>传染病</td></tr>
<tr><td>💊 医管局药物咨询</td><td>2300 6555</td><td>转药物辅导组</td></tr>
<tr><td>🚨 警察紧急</td><td>999</td><td>24小时</td></tr>
<tr><td>🆘 政府热线</td><td>1823</td><td>一般查询</td></tr>
</table>
<hr>
<h2>📱 第四部分：数字工具</h2>
<table border="1" cellpadding="6">
<tr><th>工具</th><th>功能</th><th>下载/网址</th></tr>
<tr><td>------</td><td>------</td><td>----------</td></tr>
<tr><td><strong>HA Go</strong></td><td>公立医院预约、报告、缴费</td><td>App Store / Google Play</td></tr>
<tr><td><strong>eHealth 医健通</strong></td><td>电子健康记录互通</td><td><a href="https://www.ehealth.gov.hk" target="_blank" rel="noopener">https://www.ehealth.gov.hk</a></td></tr>
<tr><td><strong>个别医院 App</strong></td><td>各私立医院有自己的 App</td><td>养和、港怡、明德、港安等</td></tr>
<tr><td><strong>医管局「预约通」</strong></td><td>改期/取消专科门诊</td><td>2300 6555 / HA Go</td></tr>
</table>
<hr>
<h2>🗺️ 第五部分：分区域快查表</h2>
<h3>港岛区</h3>
<li><strong>急症首选</strong>：玛丽医院、东区尤德夫人那打素医院</li>
<li><strong>专科</strong>：葛量洪医院（心/胸肺）</li>
<li><strong>高端私立</strong>：养和、港怡、明德、嘉诺撒</li>
<h3>九龙区</h3>
<li><strong>急症首选</strong>：伊利沙伯、广华、基督教联合、玛嘉烈</li>
<li><strong>儿童专科</strong>：香港儿童医院（启德）</li>
<li><strong>综合私立</strong>：播道、浸信会、圣德肋撒、宝血</li>
<h3>新界区</h3>
<li><strong>急症首选</strong>：威尔斯亲王、屯门、博爱、仁济、雅丽氏何妙龄那打素、北区、将军澳、天水围、北大屿山</li>
<li><strong>精神科</strong>：葵涌医院、青山医院</li>
<li><strong>高端私立</strong>：香港港安（荃湾）</li>
<hr>
<h2>💼 第六部分：客户咨询常用话术（保险/IFA 适用）</h2>
<h3>Q1：香港哪些医院最受高净值客户欢迎？</h3>
> A：私立首选 <strong>养和、港怡、明德、港安（司徒拔道/荃湾）</strong>；  
> 公立首选 <strong>玛丽（港大）、伊利沙伯、威尔斯亲王（中大）</strong> —— 都是医学院教学医院，医生水平最高。
<h3>Q2：内地客户来港就医怎么预约？</h3>
> A：<strong>私立医院</strong>直接电话或官网预约，<strong>无需医生转介</strong>；  
> 需住院手术建议<strong>提前 1-2 周</strong>预约床位。  
> 公立医院需持有<strong>香港身份证</strong>或<strong>有效旅游证件</strong>，急症可直接到急症室登记。
<h3>Q3：高端医疗险通常覆盖哪些医院？</h3>
> A：通常 <strong>全球 / 全港</strong> 覆盖公立和私立医院，<strong>含病房升级、住院手术、癌症治疗</strong>；  
> <strong>部分产品</strong>有"指定医院清单"（如只覆盖亚洲），<strong>投保前请仔细看保单条款</strong>。  
> <strong>中端医疗险</strong>通常<strong>只覆盖住院+手术</strong>（Semi-Private 房），需自费门诊。
<h3>Q4：紧急情况怎么走？</h3>
> A：🚨 紧急 → <strong>999 救护车</strong> → 最近的<strong>公立医院急症室</strong>（24小时）；  
> 私立医院<strong>多数不设急症</strong>（明德除外），紧急情况先去公立稳定后再转院。  
> 急症分流制度下，非紧急情况等候时间可能较长。
<h3>Q5：内地客户怎么付钱？</h3>
> A：私立医院<strong>接受信用卡、银联、现金</strong>（部分接受支付宝/微信）；  
> 大额账单可申请<strong>医院付款计划</strong>。  
> <strong>保险直接结算</strong>（免找数）需医院与保险公司有协议，常见有养和、港怡、港安等。
<h3>Q6：客户有高端医疗险，住院时怎么操作？</h3>
> A：① 入院前向保险公司申请「<strong>预先批核</strong>」（Pre-Authorization）；  
> ② 批准后医院直接与保险公司结算；  
> ③ 客户<strong>无需垫付</strong>大额医疗费（自付额/垫底费除外）。
<h3>Q7：客户问到儿童医院？</h3>
> A：<strong>香港儿童医院</strong>（启德）是全港儿童专科转介中心，<strong>仅接受其他医院转介</strong>，不设门诊。  
> 一般儿童急症去<strong>玛丽、伊利沙伯、威尔斯亲王</strong>等综合性医院的儿科。  
> 私立儿科可去<strong>养和、港怡、港安</strong>的儿科部。
<h3>Q8：精神科服务？</h3>
> A：公立精神科主要由 <strong>葵涌医院、青山医院、九龙医院</strong> 提供，<strong>需转介</strong>；  
> 私立精神科可去<strong>养和医院精神科</strong>或<strong>私人精神科医生</strong>（中环、铜锣湾多个专科医生）。


<p>> <strong>重要免责声明</strong>：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体就医决策请咨询医生或医院官方。</p>`
  },
  "2.6.3 香港基层医疗大全": {
    id: "hkm_2_6_3",
    title: "2.6.3 香港基层医疗大全",
    content: `<h1>🩺 香港基层医疗 & 社区健康服务大全</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>覆盖范围</strong>：HA 普通科门诊、牙科、社区健康中心、母婴/妇女/长者健康、中医药、旅游健康、专科筛查等  <br>> <strong>数据说明</strong>：基于公开资料整理，<strong>服务时间/收费/预约以官网最新公告为准</strong>  <br>> <strong>配套文件</strong>：<br>> - 📄 <code>香港医院大全.md</code>（主流版，16 公立 + 14 私立）<br>> - 📄 <code>香港医院大全-完整版.md</code>（31 公立/HA 机构 + 18 私立医院）</p>
<hr>
<h2>🎯 关键概念：香港医疗体系分层</h2>
<pre><code>第一层 ⭐ 基层医疗（本文重点）
├── 普通科门诊诊所 (GOPC) - 感冒发烧/慢性病
├── 中医诊所 - 调理/慢性病
├── 牙科诊所 - 牙齿
├── 母婴健康院 - 孕妇/婴幼儿
├── 长者健康中心 - 老人健康
└── 社区健康中心 - 综合
<p>第二层 专科门诊<br>├── HA 专科门诊 (需转介)<br>├── 私人专科医生 (无需转介)<br>└── 医院专项 (如：儿童医院、香港癌症中心)</p>
<p>第三层 急症/住院<br>├── 公立急症室 (24h)<br>├── 私立医院 (预约制)<br>└── 专科医院 (如：传染病中心)</code></pre></p>
<p><strong>客户一般就医路径</strong>：基层医疗 (感冒等) → 专科 (需转介) → 医院 (手术/急症)</p>
<hr>
<h2>📞 全港统一查询/预约热线</h2>
<table border="1" cellpadding="6">
<tr><th>服务</th><th>电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>🏥 <strong>医院管理局查询热线</strong></td><td><strong>2300 6555</strong></td><td>8am-10pm</td></tr>
<tr><td>🦷 <strong>HA 牙科预约 (急症)</strong></td><td><strong>2300 6555</strong> 转 牙科</td><td>周一至五</td></tr>
<tr><td>👶 <strong>母婴健康院预约</strong></td><td><strong>2112 9911</strong></td><td>24小时语音</td></tr>
<tr><td>👵 <strong>长者健康中心预约</strong></td><td><strong>2121 8080</strong></td><td>周一至五</td></tr>
<tr><td>🌿 <strong>政府资助中医诊所</strong></td><td><strong>2300 6555</strong></td><td>转 中医</td></tr>
<tr><td>🦠 <strong>衞生署查询</strong></td><td><strong>2961 8989</strong></td><td>一般健康咨询</td></tr>
<tr><td>🦠 <strong>衞生防护中心</strong></td><td><strong>2125 1111</strong></td><td>传染病</td></tr>
<tr><td>✈️ <strong>旅游健康中心</strong></td><td><strong>2150 7230</strong></td><td>出游前疫苗</td></tr>
<tr><td>💊 <strong>HA 药物咨询</strong></td><td><strong>2300 6555</strong> 转 药物组</td><td></td></tr>
<tr><td>🚑 <strong>紧急救助</strong></td><td><strong>999</strong></td><td>24小时</td></tr>
</table>
<hr>
<h2>🟢 第一部分：普通科门诊诊所 (GOPC - General Out-Patient Clinics)</h2>
<p>> <strong>总数量</strong>：HA 体系下 <strong>73 间</strong> 普通科门诊诊所  <br>> <strong>服务范围</strong>：感冒、发烧、慢性病管理（糖尿病/高血压/胆固醇）、伤口护理、疫苗注射、健康咨询  <br>> <strong>预约方式</strong>：<br>> - ✅ <strong>电话预约系统</strong>（按区分配号码，<strong>24小时语音预约</strong>）<br>> - ✅ <strong>HA Go App</strong> 预约<br>> - ✅ <strong>walk-in 现场登记</strong>（不保证有号）  <br>> <strong>收费</strong>：<br>> - 港币 <strong>$50/次</strong>（香港居民、合资格人士）<br>> - 港币 <strong>$135/次</strong>（非符合资格人士 / 旅客）<br>> - 老人 / 综援可减免</p>
<h3>🏙️ 港岛区主要 GOPC（9 间）</h3>
<table border="1" cellpadding="6">
<tr><th>诊所</th><th>地址</th><th>预约电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>中区健康院普通科门诊诊所</td><td>中环般咸道 9 号</td><td>2545 1485</td><td>中环核心</td></tr>
<tr><td>坚尼地城赛马会普通科门诊诊所</td><td>坚尼地域域多利道 45 号</td><td>2817 3215</td><td>坚尼地城</td></tr>
<tr><td>西营盘赛马会普通科门诊诊所</td><td>西营盘薄扶林道 2 号</td><td>2540 5618</td><td>西营盘</td></tr>
<tr><td>上环东华医院普通科门诊诊所</td><td>上环普仁街 12 号</td><td>2545 1485</td><td>上环</td></tr>
<tr><td>筲箕湾赛马会普通科门诊诊所</td><td>筲箕湾柴湾道 8 号</td><td>2560 0211</td><td>筲箕湾</td></tr>
<tr><td>柴湾健康中心普通科门诊诊所</td><td>柴湾康民街 1 号</td><td>2558 4790</td><td>柴湾</td></tr>
<tr><td>西湾河健康中心普通科门诊诊所</td><td>西湾河鲤景道 2 号</td><td>2886 9634</td><td>西湾河</td></tr>
<tr><td>香港仔赛马会普通科门诊诊所</td><td>香港仔水塘道 10 号</td><td>2552 4381</td><td>香港仔</td></tr>
<tr><td>鸭脷洲普通科门诊诊所</td><td>鸭脷洲鸭脷洲径 2 号</td><td>2553 0241</td><td>鸭脷洲</td></tr>
</table>
<h3>🌆 九龙区主要 GOPC（10+ 间）</h3>
<table border="1" cellpadding="6">
<tr><th>诊所</th><th>地址</th><th>预约电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>油麻地赛马会普通科门诊诊所</td><td>油麻地炮台街 145 号</td><td>2783 7331</td><td>油尖旺</td></tr>
<tr><td>旺角普通科门诊诊所</td><td>旺角弥敦道 713 号</td><td>2393 8161</td><td>旺角</td></tr>
<tr><td>长沙湾赛马会普通科门诊诊所</td><td>长沙湾广利道 2 号</td><td>2361 2381</td><td>深水埗</td></tr>
<tr><td>圣母医院家庭医学诊所</td><td>黄大仙沙田坳道 118 号</td><td>2320 2121</td><td>黄大仙</td></tr>
<tr><td>柏立基夫人健康院</td><td>新蒲岗彩虹道 121 号</td><td>2711 3681</td><td>钻石山/新蒲岗</td></tr>
<tr><td>观塘赛马会健康院</td><td>观塘协和街 60 号</td><td>2389 0331</td><td>观塘</td></tr>
<tr><td>牛头角赛马会普通科门诊诊所</td><td>牛头角定安街 60 号</td><td>2750 4210</td><td>牛头角</td></tr>
<tr><td>蓝田综合社区中心</td><td>蓝田启田道 99 号</td><td>2346 5356</td><td>蓝田</td></tr>
<tr><td>九龙湾健康中心</td><td>九龙湾启仁街 9 号</td><td>2750 4210</td><td>九龙湾</td></tr>
<tr><td>李宝椿健康院</td><td>旺角亚皆老街 113 号</td><td>2393 8161</td><td>旺角</td></tr>
</table>
<h3>🏞️ 新界区主要 GOPC（10+ 间）</h3>
<table border="1" cellpadding="6">
<tr><th>诊所</th><th>地址</th><th>预约电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>沙田（大围）普通科门诊诊所</td><td>大围积辉街 3 号</td><td>2691 1623</td><td>沙田</td></tr>
<tr><td>沙田赛马会普通科门诊诊所</td><td>沙田插桅杆街 6 号</td><td>2646 5371</td><td>沙田</td></tr>
<tr><td>沥源健康院</td><td>沙田沥源街 9 号</td><td>2691 1623</td><td>沙田沥源</td></tr>
<tr><td>大埔赛马会普通科门诊诊所</td><td>大埔汀角路 1 号</td><td>2664 2039</td><td>大埔</td></tr>
<tr><td>北区医院家庭医学诊所</td><td>上水保健路 9 号</td><td>2683 8388</td><td>上水/北区</td></tr>
<tr><td>元朗赛马会健康院</td><td>元朗西菁街 9 号</td><td>2443 8421</td><td>元朗</td></tr>
<tr><td>屯门赛马会普通科门诊诊所</td><td>屯门新墟青贤街 11 号</td><td>2452 9111</td><td>屯门</td></tr>
<tr><td>戴麟趾夫人普通科门诊诊所</td><td>荃湾沙咀道 213 号</td><td>2492 4343</td><td>荃湾</td></tr>
<tr><td>将军澳赛马会普通科门诊诊所</td><td>将军澳宝琳北路 3 号</td><td>2701 9921</td><td>将军澳</td></tr>
<tr><td>西贡赛马会普通科门诊诊所</td><td>西贡万年街 28 号</td><td>2792 2601</td><td>西贡</td></tr>
<tr><td>北大屿山社区健康中心</td><td>东涌松仁路 8 号</td><td>2109 2211</td><td>大屿山</td></tr>
</table>
<hr>
<h2>🦷 第二部分：牙科诊所</h2>
<h3>A. HA 公立牙科诊所（11 间 · 仅限紧急服务）</h3>
<p>> <strong>服务范围</strong>：<strong>仅限紧急牙科服务</strong>（止痛、拔牙），<strong>不提供洗牙、补牙、矫正等一般服务</strong>  <br>> <strong>预约方式</strong>：电话预约，<strong>不接受 walk-in</strong>  <br>> <strong>收费</strong>：<br>> - 港币 <strong>$50/次</strong>（合资格人士）<br>> - 一般需 6-12 个月轮候</p>
<table border="1" cellpadding="6">
<tr><th>牙科诊所</th><th>地址</th><th>预约电话</th></tr>
<tr><td>---------</td><td>------</td><td>----------</td></tr>
<tr><td>坚尼地城社区综合大楼牙科诊所</td><td>坚尼地城石山街 12 号</td><td>2858 4042</td></tr>
<tr><td>湾仔邓肇坚牙科诊所</td><td>湾仔皇后大道东 282 号</td><td>2572 4266</td></tr>
<tr><td>九龙城牙科诊所</td><td>九龙城侯王道 80 号</td><td>2711 5271</td></tr>
<tr><td>油麻地赛马会牙科诊所</td><td>油麻地炮台街 145 号</td><td>2783 7331</td></tr>
<tr><td>长沙湾赛马会牙科诊所</td><td>长沙湾广利道 2 号</td><td>2361 2381</td></tr>
<tr><td>荃湾牙科诊所</td><td>荃湾大河道 35 号</td><td>2417 4481</td></tr>
<tr><td>屯门牙科诊所</td><td>屯门青贤街 11 号</td><td>2452 9111</td></tr>
<tr><td>元朗赛马会牙科诊所</td><td>元朗西菁街 9 号</td><td>2443 8421</td></tr>
<tr><td>大埔赛马会牙科诊所</td><td>大埔汀角路 1 号</td><td>2664 2039</td></tr>
<tr><td>沙田赛马会牙科诊所</td><td>沙田插桅杆街 6 号</td><td>2646 5371</td></tr>
<tr><td>将军澳赛马会牙科诊所</td><td>将军澳宝琳北路 3 号</td><td>2701 9921</td></tr>
</table>
<h3>B. 菲腊牙科医院（Prince Philip Dental Hospital）</h3>
<p>> <strong>地址</strong>：香港西营盘医院道 34 号  <br>> <strong>电话</strong>：2859 0288  <br>> <strong>官网</strong>：<a href="https://ppdh.org.hk" target="_blank" rel="noopener">https://ppdh.org.hk</a>  <br>> <strong>性质</strong>：<strong>港大牙医学院教学医院</strong>，提供<strong>专科牙科服务</strong>（口腔外科、矫正、植牙、儿童牙科、牙髓病等）  <br>> <strong>预约</strong>：需持有注册私家牙医转介信</p>
<h3>C. 私人牙科诊所</h3>
<p>> 全港约 <strong>2,300+ 间</strong> 私人牙科诊所  <br>> <strong>服务范围</strong>：一般牙科（洗牙、补牙、拔牙、根管治疗）、牙套/矫正、植牙、牙冠、漂白等  <br>> <strong>预约</strong>：<strong>直接打电话</strong>预约，无需转介  <br>> <strong>收费</strong>：洗牙约 $500-1,000，根管治疗 $2,000-5,000+，<strong>高端诊所更贵</strong>  <br>> <strong>保险</strong>：一般<strong>不被医疗保险覆盖</strong>（需额外加牙科附加险）</p>
<hr>
<h2>🤰 第三部分：母婴健康院（Maternal & Child Health Centres - MCHC）</h2>
<p>> <strong>总数量</strong>：<strong>31 间</strong>  <br>> <strong>服务范围</strong>：<br>> - <strong>产前检查</strong>（孕妇）<br>> - <strong>产后护理</strong>（产妇）<br>> - <strong>儿童健康检查 + 疫苗接种</strong>（0-5岁）<br>> - <strong>家庭计划</strong>（避孕、节育指导）  <br>> <strong>预约</strong>：<strong>2112 9911</strong>（24小时语音预约）  <br>> <strong>收费</strong>：<strong>免费</strong>（香港居民）</p>
<h3>主要母婴健康院（按区代表）</h3>
<h4>港岛</h4>
<table border="1" cellpadding="6">
<tr><th>母婴健康院</th><th>地址</th><th>电话</th></tr>
<tr><td>-----------</td><td>------</td><td>------</td></tr>
<tr><td>西营盘母婴健康院</td><td>西营盘薄扶林道 2 号</td><td>2540 5618</td></tr>
<tr><td>柴湾母婴健康院</td><td>柴湾康民街 1 号</td><td>2558 4790</td></tr>
<tr><td>鸭脷洲母婴健康院</td><td>鸭脷洲鸭脷洲径 2 号</td><td>2553 0241</td></tr>
</table>
<h4>九龙</h4>
<table border="1" cellpadding="6">
<tr><th>母婴健康院</th><th>地址</th><th>电话</th></tr>
<tr><td>-----------</td><td>------</td><td>------</td></tr>
<tr><td>油麻地母婴健康院</td><td>油麻地炮台街 145 号</td><td>2783 7331</td></tr>
<tr><td>观塘母婴健康院</td><td>观塘协和街 60 号</td><td>2389 0331</td></tr>
<tr><td>黄大仙母婴健康院</td><td>黄大仙沙田坳道 124 号</td><td>2320 0377</td></tr>
<tr><td>李宝椿母婴健康院</td><td>旺角亚皆老街 113 号</td><td>2393 8161</td></tr>
</table>
<h4>新界</h4>
<table border="1" cellpadding="6">
<tr><th>母婴健康院</th><th>地址</th><th>电话</th></tr>
<tr><td>-----------</td><td>------</td><td>------</td></tr>
<tr><td>沙田母婴健康院</td><td>沙田沥源街 9 号</td><td>2691 1623</td></tr>
<tr><td>大埔母婴健康院</td><td>大埔汀角路 1 号</td><td>2664 2039</td></tr>
<tr><td>元朗母婴健康院</td><td>元朗西菁街 9 号</td><td>2443 8421</td></tr>
<tr><td>屯门母婴健康院</td><td>屯门新墟青贤街 11 号</td><td>2452 9111</td></tr>
<tr><td>荃湾母婴健康院</td><td>荃湾沙咀道 213 号</td><td>2492 4343</td></tr>
<tr><td>将军澳母婴健康院</td><td>将军澳宝琳北路 3 号</td><td>2701 9921</td></tr>
</table>
<hr>
<h2>👵 第四部分：长者健康中心 (Elderly Health Centres - EHC)</h2>
<p>> <strong>总数量</strong>：<strong>18 间</strong>（衞生署）  <br>> <strong>服务范围</strong>：<br>> - 长者健康评估（身体检查）<br>> - 慢性病筛查（高血压、糖尿病、胆固醇）<br>> - 健康教育<br>> - 疫苗接种（流感、肺炎球菌）  <br>> <strong>申请资格</strong>：<strong>65 岁或以上</strong>的香港居民  <br>> <strong>预约</strong>：<strong>2121 8080</strong>  <br>> <strong>收费</strong>：<strong>免费</strong>（首次登记年费 $110/人）</p>
<h3>全港 18 间长者健康中心</h3>
<table border="1" cellpadding="6">
<tr><th>#</th><th>中心</th><th>地址</th><th>电话</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td>1</td><td>西营盘长者健康中心</td><td>西营盘薄扶林道 2 号</td><td>2817 3718</td></tr>
<tr><td>2</td><td>筲箕湾长者健康中心</td><td>筲箕湾柴湾道 8 号</td><td>2569 4333</td></tr>
<tr><td>3</td><td>香港仔长者健康中心</td><td>香港仔水塘道 10 号</td><td>2580 3374</td></tr>
<tr><td>4</td><td>柴湾长者健康中心</td><td>柴湾康民街 1 号</td><td>2558 6271</td></tr>
<tr><td>5</td><td>九龙城长者健康中心</td><td>九龙城侯王道 80 号</td><td>2716 5911</td></tr>
<tr><td>6</td><td>油麻地长者健康中心</td><td>油麻地炮台街 145 号</td><td>2783 7331</td></tr>
<tr><td>7</td><td>黄大仙长者健康中心</td><td>黄大仙沙田坳道 124 号</td><td>2320 0377</td></tr>
<tr><td>8</td><td>深水埗长者健康中心</td><td>深水埗长沙湾道 303 号</td><td>2360 0530</td></tr>
<tr><td>9</td><td>观塘长者健康中心</td><td>观塘协和街 60 号</td><td>2389 0331</td></tr>
<tr><td>10</td><td>蓝田长者健康中心</td><td>蓝田启田道 99 号</td><td>2346 5356</td></tr>
<tr><td>11</td><td>沙田长者健康中心</td><td>沙田沥源街 9 号</td><td>2691 1623</td></tr>
<tr><td>12</td><td>大埔长者健康中心</td><td>大埔汀角路 1 号</td><td>2664 2039</td></tr>
<tr><td>13</td><td>元朗长者健康中心</td><td>元朗西菁街 9 号</td><td>2443 8421</td></tr>
<tr><td>14</td><td>屯门长者健康中心</td><td>屯门新墟青贤街 11 号</td><td>2452 9111</td></tr>
<tr><td>15</td><td>荃湾长者健康中心</td><td>荃湾沙咀道 213 号</td><td>2492 4343</td></tr>
<tr><td>16</td><td>将军澳长者健康中心</td><td>将军澳宝琳北路 3 号</td><td>2701 9921</td></tr>
<tr><td>17</td><td>北区长者健康中心</td><td>上水保健路 9 号</td><td>2683 8388</td></tr>
<tr><td>18</td><td>葵青长者健康中心</td><td>葵涌葵涌医院道 3-15 号</td><td>2741 7313</td></tr>
</table>
<hr>
<h2>🌿 第五部分：政府资助中医诊所 (Chinese Medicine Clinics)</h2>
<p>> <strong>总数量</strong>：<strong>18 间</strong>（医管局辖下）  <br>> <strong>服务范围</strong>：<br>> - 中医内科、针灸、推拿、骨伤<br>> - 中药配方（颗粒冲剂）  <br>> <strong>预约方式</strong>：<br>> - <strong>2300 6555</strong> 转 中医 或<br>> - <strong>HA Go App</strong> 或<br>> - 各诊所电话预约  <br>> <strong>收费</strong>：<br>> - 内科诊金：<strong>$120/次</strong>（含 2 剂中药）<br>> - 针灸/推拿：<strong>$150-$250/次</strong><br>> - 综援/长者生活津贴可减免</p>
<h3>全港 18 间政府资助中医诊所</h3>
<table border="1" cellpadding="6">
<tr><th>#</th><th>诊所</th><th>地址</th><th>电话</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td>1</td><td>中西区中医诊所 (广华医院)</td><td>油麻地窝打老道 25 号</td><td>2332 2311</td></tr>
<tr><td>2</td><td>东区中医诊所 (东区医院)</td><td>柴湾乐民道 3 号</td><td>2595 6111</td></tr>
<tr><td>3</td><td>湾仔中医诊所</td><td>湾仔轩尼诗道 130 号</td><td>2893 7501</td></tr>
<tr><td>4</td><td>南区中医诊所 (玛丽医院)</td><td>薄扶林道 102 号</td><td>2255 3838</td></tr>
<tr><td>5</td><td>观塘中医诊所</td><td>观塘协和街 130 号</td><td>2379 9611</td></tr>
<tr><td>6</td><td>黄大仙中医诊所 (圣母医院)</td><td>黄大仙沙田坳道 118 号</td><td>2320 2121</td></tr>
<tr><td>7</td><td>深水埗中医诊所</td><td>深水埗长沙湾道 303 号</td><td>2360 0530</td></tr>
<tr><td>8</td><td>油尖旺中医诊所 (伊利沙伯)</td><td>油麻地加士居道 30 号</td><td>2958 8888</td></tr>
<tr><td>9</td><td>九龙城中医诊所</td><td>九龙城侯王道 80 号</td><td>2711 5271</td></tr>
<tr><td>10</td><td>葵青中医诊所 (玛嘉烈)</td><td>荔枝角玛嘉烈医院道 2-10 号</td><td>2990 1111</td></tr>
<tr><td>11</td><td>荃湾中医诊所 (仁济)</td><td>荃湾仁济街 7-11 号</td><td>2417 8383</td></tr>
<tr><td>12</td><td>沙田中医诊所 (威尔斯)</td><td>沙田银城街 30-32 号</td><td>2632 2211</td></tr>
<tr><td>13</td><td>大埔中医诊所 (雅丽氏)</td><td>大埔全安路 11 号</td><td>2689 2000</td></tr>
<tr><td>14</td><td>北区中医诊所 (北区)</td><td>上水保健路 9 号</td><td>2683 8388</td></tr>
<tr><td>15</td><td>元朗中医诊所 (博爱)</td><td>元朗坳头友善街 11 号</td><td>2486 8000</td></tr>
<tr><td>16</td><td>屯门中医诊所 (屯门)</td><td>屯门青松观路 23 号</td><td>2468 5111</td></tr>
<tr><td>17</td><td>将军澳中医诊所 (将军澳)</td><td>将军澳坑口宝宁里 2 号</td><td>2208 0111</td></tr>
<tr><td>18</td><td>离岛中医诊所 (北大屿山)</td><td>东涌松仁路 8 号</td><td>3467 6000</td></tr>
</table>
<hr>
<h2>✈️ 第六部分：旅游健康中心 (Travel Health Centres)</h2>
<p>> <strong>总数量</strong>：<strong>2 间</strong>（衞生署）  <br>> <strong>服务范围</strong>：<br>> - 出游前健康咨询<br>> - 旅行疫苗（黄热病、伤寒、甲/乙肝、疟疾预防等）<br>> - 旅行药箱建议<br>> - 抗疟疾药物处方  <br>> <strong>预约</strong>：<strong>2150 7230</strong>  <br>> <strong>收费</strong>：诊金 $200/次，疫苗额外收费</p>
<table border="1" cellpadding="6">
<tr><th>中心</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>九龙湾综合服务中心 - 旅游健康中心</td><td>九龙湾启仁街 9 号</td><td>2150 7230</td></tr>
<tr><td>澳门分处 - 旅游健康中心</td><td>澳门（已迁至港，详情请致电）</td><td>2150 7230</td></tr>
</table>
<hr>
<h2>💊 第七部分：其他专项服务</h2>
<h3>A. 美沙酮诊所 (Methadone Clinics) - 17 间</h3>
<p>> <strong>服务范围</strong>：美沙酮戒毒治疗（自愿 / 强制）  <br>> <strong>收费</strong>：<strong>免费</strong>（香港居民）  <br>> <strong>开放时间</strong>：<strong>7am-10pm</strong>（部分 24h）</p>
<p><strong>代表诊所</strong>：长沙湾美沙酮诊所、观塘美沙酮诊所、屯门美沙酮诊所等  <br><strong>查询电话</strong>：2835 1831（美沙酮组）</p>
<h3>B. 学童牙科诊所 (School Dental Clinics) - 8 间</h3>
<p>> <strong>服务对象</strong>：<strong>小学学童</strong>（政府计划）  <br>> <strong>服务范围</strong>：基本牙科检查、洗牙、补牙、拔牙、涂氟  <br>> <strong>收费</strong>：<strong>免费</strong>  <br>> <strong>报名</strong>：学童在学校统一报名  <br>> <strong>代表诊所</strong>：九龙学童牙科诊所、港岛学童牙科诊所、新界学童牙科诊所</p>
<h3>C. 学生健康服务中心 (Student Health Service Centres) - 12+ 间</h3>
<p>> <strong>服务对象</strong>：<strong>中、小学生</strong>  <br>> <strong>服务范围</strong>：年度健康检查、视力听力、脊柱侧弯、心理健康  <br>> <strong>预约</strong>：学生在校统一报名  <br>> <strong>收费</strong>：<strong>免费</strong>  <br>> <strong>查询电话</strong>：2349 4212</p>
<h3>D. 妇女健康中心 (Women's Health Centres) - 3 间</h3>
<p>> <strong>服务范围</strong>：子宫颈抹片、乳房检查、骨质密度、避孕指导  <br>> <strong>预约</strong>：<strong>2112 9911</strong>  <br>> <strong>收费</strong>：<strong>免费</strong>（香港居民）</p>
<table border="1" cellpadding="6">
<tr><th>中心</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>蓝田妇女健康中心</td><td>蓝田启田道 99 号</td><td>2346 5356</td></tr>
<tr><td>油麻地妇女健康中心</td><td>油麻地炮台街 145 号</td><td>2783 7331</td></tr>
<tr><td>屯门妇女健康中心</td><td>屯门新墟青贤街 11 号</td><td>2452 9111</td></tr>
</table>
<h3>E. 社会衞生科诊所 (Social Hygiene Clinics) - 8 间</h3>
<p>> <strong>服务范围</strong>：<strong>性病、皮肤病</strong>诊治（<strong>保密</strong>，不需医生转介）  <br>> <strong>收费</strong>：$135/次（合资格人士 $50）  <br>> <strong>预约</strong>：<strong>电话或 walk-in</strong>  <br>> <strong>代表诊所</strong>：湾仔社会衞生科诊所、九龙社会衞生科诊所、油麻地社会衞生科诊所  <br>> <strong>查询电话</strong>：2961 8989</p>
<h3>F. 胸肺科诊所 (Chest Clinics) - 12 间</h3>
<p>> <strong>服务范围</strong>：<strong>肺结核、胸肺疾病</strong>诊治  <br>> <strong>预约</strong>：<strong>需转介</strong>（由其他医生转介）  <br>> <strong>收费</strong>：$135/次（合资格人士 $50）  <br>> <strong>代表诊所</strong>：湾仔胸肺科诊所、九龙胸肺科诊所</p>
<h3>G. 临床心理服务 (Clinical Psychology)</h3>
<p>> <strong>服务对象</strong>：<strong>儿童、青少年、成人、长者</strong>  <br>> <strong>服务范围</strong>：心理评估、辅导、治疗  <br>> <strong>申请</strong>：需经 HA 精神科或其他医生转介  <br>> <strong>收费</strong>：$135/次（合资格人士 $50）  <br>> <strong>查询电话</strong>：2300 6555</p>
<hr>
<h2>🏥 第八部分：综合社区精神康复服务中心</h2>
<p>> <strong>服务对象</strong>：精神病康复者（抑郁症、焦虑症、精神分裂症等）  <br>> <strong>服务范围</strong>：<br>> - 个案管理<br>> - 职业治疗<br>> - 社交技能训练<br>> - 家属支持  <br>> <strong>申请</strong>：需经精神科医生转介  <br>> <strong>收费</strong>:<strong>免费</strong>  <br>> <strong>分布</strong>：港岛 3 间、九龙 4 间、新界 3 间</p>
<p><strong>查询电话</strong>：2300 6555 转 精神科</p>
<hr>
<h2>📊 第九部分：基层医疗数据速查表</h2>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>总数</th><th>预约电话</th><th>平均收费（港币）</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------------------</td></tr>
<tr><td>普通科门诊 (GOPC)</td><td>73 间</td><td>2300 6555</td><td>$50（合资格）/ $135（其他）</td></tr>
<tr><td>HA 公立牙科</td><td>11 间</td><td>2300 6555 转 牙科</td><td>$50（限紧急）</td></tr>
<tr><td>私人牙科</td><td>2,300+ 间</td><td>直接打</td><td>洗牙 $500-1,000</td></tr>
<tr><td>母婴健康院</td><td>31 间</td><td>2112 9911</td><td><strong>免费</strong></td></tr>
<tr><td>长者健康中心</td><td>18 间</td><td>2121 8080</td><td><strong>免费</strong>（年费 $110）</td></tr>
<tr><td>政府资助中医</td><td>18 间</td><td>2300 6555 转 中医</td><td>$120-250/次</td></tr>
<tr><td>旅游健康中心</td><td>2 间</td><td>2150 7230</td><td>$200/次</td></tr>
<tr><td>妇女健康中心</td><td>3 间</td><td>2112 9911</td><td><strong>免费</strong></td></tr>
<tr><td>美沙酮诊所</td><td>17 间</td><td>2835 1831</td><td><strong>免费</strong></td></tr>
<tr><td>学童牙科诊所</td><td>8 间</td><td>学校统一报名</td><td><strong>免费</strong></td></tr>
<tr><td>学生健康服务</td><td>12+ 间</td><td>2349 4212</td><td><strong>免费</strong></td></tr>
<tr><td>社会衞生科</td><td>8 间</td><td>2961 8989</td><td>$50-135/次</td></tr>
<tr><td>胸肺科</td><td>12 间</td><td>需转介</td><td>$50-135/次</td></tr>
</table>
<hr>
<h2>💼 第十部分：保险/IFA 客户咨询专用</h2>
<h3>Q1：基层医疗（门诊、牙科）通常被医疗保险覆盖吗？</h3>
> A：<strong>门诊</strong>：
> - <strong>高端医疗险</strong>：<strong>不覆盖</strong>门诊（一般只赔住院+手术）
> - <strong>中端医疗险</strong>：通常<strong>不覆盖</strong>门诊
> - <strong>门急诊附加险</strong>：<strong>可附加</strong>门诊保障（独立购买）  
> <strong>牙科</strong>：
> - <strong>几乎所有医疗险</strong>：<strong>不覆盖</strong>牙科
> - <strong>牙科附加险</strong>：可独立购买（年费 $1,000-5,000）
> - <strong>高端牙科险</strong>（如 AIA 卓越）：<strong>全数赔偿</strong>牙科（包括洗牙、补牙、矫正）
<h3>Q2：内地客户能用香港普通科门诊吗？</h3>
> A：可以，<strong>但需付非合资格人士费用</strong>（$135/次）  
> 内地客户通常<strong>直接去私立医院</strong>或<strong>24小时私家诊所</strong>（如：盈健、卓健、德信行等连锁）
<h3>Q3：客户最常用的"24小时诊所"是哪些？</h3>
> A：<strong>盈健医疗 (Human Health)</strong>、<strong>卓健医疗 (Quality HealthCare)</strong>、<strong>德信行医疗 (UMP)</strong>、<strong>康健 (Town Health)</strong>  
> 都有 24h 或延长营业，<strong>多区设点</strong>，<strong>直接 walk-in</strong>  
> 收费：$300-800/次（视医生级别）
<h3>Q4：高端客户会用基层医疗吗？</h3>
> A：<strong>不会</strong>。高端客户：
> - 普通科 → <strong>私人医生 / 养和 / 港怡</strong> 家庭医学科
> - 牙科 → <strong>私人牙医</strong> 或 <strong>菲腊牙科医院</strong>（专科）
> - 中医 → <strong>私人中医诊所</strong>（名医 1,000+/次）
> - 母婴 → <strong>私家医院产检 + 私家妇产科医生</strong>
> - 长者 → <strong>私人老年科专科医生</strong>
<h3>Q5：如何向客户推荐合适的服务？</h3>
> A：按<strong>客户画像</strong>推荐：
> | 客户类型 | 推荐服务 |
> |---------|---------|
> | 一般家庭 | GOPC + 母婴健康院 + 公立牙科（紧急） |
> | 单身白领 | 24h 私人诊所（盈健、卓健）+ 牙医 |
> | 中产家庭 | 私人诊所 + 母婴院 + 私人牙医 + 公立专科 |
> | 高净值 | 私家医院 + 私人医生 + 高端牙科险 |
> | 长者 | 长者健康中心（免费）+ 公立专科 + 私家辅助 |


<p>> <strong>重要免责声明</strong>：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体就医决策请咨询医生或衞生署。</p>`
  },
  "2.6.4 香港私人连锁诊所大全": {
    id: "hkm_2_6_4",
    title: "2.6.4 香港私人连锁诊所大全",
    content: `<h1>🏥 香港私人连锁诊所大全（24h / 长延时 / 全港覆盖）</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>覆盖范围</strong>：香港主流<strong>12 间</strong>私人连锁医疗集团，含 <strong>24h / 长延时</strong> 诊所分店  <br>> <strong>数据说明</strong>：分店地址/电话<strong>变动频繁</strong>，使用前请打<strong>各集团总部电话</strong>或查<strong>官网/APP</strong>确认  <br>> <strong>配套文件</strong>：<br>> - 📄 <code>香港医院大全.md</code>（主流版）<br>> - 📄 <code>香港医院大全-完整版.md</code>（完整版）<br>> - 📄 <code>香港基层医疗大全.md</code>（基层医疗）</p>
<hr>
<h2>🎯 关键概念：谁是"24h 私人连锁诊所"？</h2>
<pre><code>🏥 真正的 24h 急症服务 → 私立医院（如：港安、圣保禄、养和）
🏥 延长时间 24h 私人诊所 → 部分连锁医疗中心（午夜-凌晨开放）
🏥 长延时 8am-深夜 12am → 较多连锁（旺角、中环、荃湾最常见）
🏥 标准 9am-9pm → 大部分私人连锁
🏥 24h 公立急症 → 玛丽、伊利沙伯等 17 间公立医院</code></pre>
<p><strong>实用建议</strong>：<br><li><strong>客户来港医疗咨询</strong> → 24h 私人连锁（无语言障碍、可 walk-in）</li><br><li><strong>紧急情况</strong> → 公立医院 999 或私立医院急症</li><br><li><strong>感冒发烧/慢性病</strong> → GOPC（50 元）或私人连锁（300-800 元）</li><br><li><strong>高端体检/专科</strong> → 医院附设或医疗集团</li></p>
<hr>
<h2>📞 12 大连锁集团总览（速查表）</h2>
<table border="1" cellpadding="6">
<tr><th>#</th><th>集团</th><th>总部电话</th><th>24h 店</th><th>主要分布</th><th>客户定位</th></tr>
<tr><td>---</td><td>------</td><td>----------</td><td>--------</td><td>----------</td><td>----------</td></tr>
<tr><td>1</td><td><strong>卓健医疗</strong> (Quality HealthCare)</td><td><strong>8301 8301</strong></td><td>1-2 间</td><td>全港最多</td><td>⭐ 综合中高端</td></tr>
<tr><td>2</td><td><strong>盈健医疗</strong> (Human Health)</td><td><strong>2393 7380</strong></td><td>多间</td><td>新界+九龙</td><td>综合</td></tr>
<tr><td>3</td><td><strong>德信行医疗</strong> (UMP Healthcare)</td><td><strong>2522 0100</strong></td><td>1-2 间</td><td>多区</td><td>综合</td></tr>
<tr><td>4</td><td><strong>康健 (Town Health)</strong></td><td><strong>2300 1818</strong></td><td>部分</td><td>多区</td><td>综合</td></tr>
<tr><td>5</td><td><strong>医思健康</strong> (EC Healthcare)</td><td><strong>3520 2880</strong></td><td>部分</td><td>港岛/九龙</td><td>中高端医美</td></tr>
<tr><td>6</td><td><strong>尚至医疗</strong> (Virtus Medical)</td><td><strong>3893 6288</strong></td><td>无</td><td>中环/尖沙咀</td><td>中高端</td></tr>
<tr><td>7</td><td><strong>新都医疗</strong> (New Town Medical)</td><td><strong>2698 1001</strong></td><td>无</td><td>新界为主</td><td>综合</td></tr>
<tr><td>8</td><td><strong>匡乔医疗 (NextGen)</strong></td><td><strong>2546 6288</strong></td><td>无</td><td>中环/尖沙咀</td><td>中高端</td></tr>
<tr><td>9</td><td><strong>天下仁心 (Heart to Heart)</strong></td><td><strong>2543 1000</strong></td><td>部分</td><td>港岛/九龙</td><td>综合</td></tr>
<tr><td>10</td><td><strong>汇贤医疗</strong> (P&P Medical)</td><td><strong>2735 6688</strong></td><td>无</td><td>多区</td><td>综合</td></tr>
<tr><td>11</td><td><strong>美邦/快验保 (MediLink)</strong></td><td><strong>2868 9933</strong></td><td>无</td><td>多区</td><td>体检为主</td></tr>
<tr><td>12</td><td><strong>华润医疗 (CR Medical)</strong></td><td><strong>2882 1688</strong></td><td>无</td><td>多区</td><td>综合</td></tr>
</table>
<hr>
<h2>🏥 第一部分：12 大连锁集团详细清单</h2>
<h3>1️⃣ 卓健医疗 (Quality HealthCare) — 全港最大</h3>
<p>> <strong>总部电话</strong>：📞 <strong>8301 8301</strong>  <br>> <strong>官网</strong>：<a href="https://www.qhms.com" target="_blank" rel="noopener">https://www.qhms.com</a>  <br>> <strong>App</strong>：「卓健医疗」/ Quality HealthCare  <br>> <strong>规模</strong>：<strong>全港最大</strong>私人连锁医疗集团，<strong>100+ 分店</strong>  <br>> <strong>24h 店</strong>：中环、观塘有 24h 或长延时店</p>
<h4>卓健 - 港岛</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th><th>营业时间</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>----------</td></tr>
<tr><td>中环</td><td>中环毕打街 1-3 号</td><td>2522 2181</td><td>24h</td></tr>
<tr><td>金钟</td><td>金钟廊</td><td>2861 0022</td><td>8am-10pm</td></tr>
<tr><td>铜锣湾</td><td>时代广场</td><td>2890 8338</td><td>9am-9pm</td></tr>
<tr><td>湾仔</td><td>轩尼诗道</td><td>2529 8338</td><td>8am-9pm</td></tr>
<tr><td>筲箕湾</td><td>筲箕湾道</td><td>2560 8338</td><td>8am-9pm</td></tr>
<tr><td>香港仔</td><td>香港仔中心</td><td>2554 8338</td><td>8am-9pm</td></tr>
<tr><td>中半山</td><td>般咸道</td><td>2548 8338</td><td>8am-9pm</td></tr>
</table>
<h4>卓健 - 九龙</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th><th>营业时间</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>----------</td></tr>
<tr><td>旺角</td><td>旺角中心</td><td>2393 8338</td><td>24h</td></tr>
<tr><td>油麻地</td><td>油麻地中心</td><td>2782 8338</td><td>8am-10pm</td></tr>
<tr><td>尖沙咀</td><td>尖沙咀中心</td><td>2739 8338</td><td>8am-10pm</td></tr>
<tr><td>观塘</td><td>观塘广场</td><td>2389 8338</td><td>24h</td></tr>
<tr><td>黄大仙</td><td>黄大仙中心</td><td>2320 8338</td><td>8am-9pm</td></tr>
<tr><td>九龙湾</td><td>德福花园</td><td>2755 8338</td><td>8am-9pm</td></tr>
<tr><td>钻石山</td><td>荷里活广场</td><td>2326 8338</td><td>8am-9pm</td></tr>
</table>
<h4>卓健 - 新界</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th><th>营业时间</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>----------</td></tr>
<tr><td>沙田</td><td>新城市广场</td><td>2699 8338</td><td>8am-10pm</td></tr>
<tr><td>大埔</td><td>大埔超级城</td><td>2660 8338</td><td>8am-9pm</td></tr>
<tr><td>元朗</td><td>元朗广场</td><td>2473 8338</td><td>8am-10pm</td></tr>
<tr><td>屯门</td><td>屯门市广场</td><td>2450 8338</td><td>8am-10pm</td></tr>
<tr><td>荃湾</td><td>荃湾广场</td><td>2492 8338</td><td>8am-10pm</td></tr>
<tr><td>将军澳</td><td>东港城</td><td>2701 8338</td><td>8am-9pm</td></tr>
<tr><td>上水</td><td>上水广场</td><td>2670 8338</td><td>8am-9pm</td></tr>
</table>
<hr>
<h3>2️⃣ 盈健医疗 (Human Health) — 新界最强</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2393 7380</strong>  <br>> <strong>官网</strong>：<a href="https://www.humanhealth.com.hk" target="_blank" rel="noopener">https://www.humanhealth.com.hk</a>  <br>> <strong>App</strong>：「盈健医疗」  <br>> <strong>规模</strong>：<strong>70+ 分店</strong>，<strong>新界覆盖最广</strong>  <br>> <strong>24h 店</strong>：旺角、荃湾、沙田</p>
<h4>盈健 - 港岛</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>中环</td><td>中环中心</td><td>2522 4380</td></tr>
<tr><td>铜锣湾</td><td>崇光百货旁</td><td>2890 7380</td></tr>
<tr><td>北角</td><td>和富道</td><td>2570 7380</td></tr>
<tr><td>香港仔</td><td>香港仔中心</td><td>2554 7380</td></tr>
</table>
<h4>盈健 - 九龙</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>⭐ 旺角（24h）</td><td>旺角亚皆老街 16 号</td><td>2393 7380</td></tr>
<tr><td>油麻地</td><td>油麻地中心</td><td>2782 7380</td></tr>
<tr><td>尖沙咀</td><td>美丽华广场</td><td>2735 7380</td></tr>
<tr><td>⭐ 佐敦（长延时）</td><td>佐敦道</td><td>2374 7380</td></tr>
<tr><td>⭐ 长沙湾（24h）</td><td>长沙湾广场</td><td>2361 7380</td></tr>
<tr><td>黄大仙</td><td>黄大仙中心</td><td>2320 7380</td></tr>
<tr><td>观塘</td><td>APM 商场</td><td>2389 7380</td></tr>
<tr><td>⭐ 九龙湾（24h）</td><td>MegaBox</td><td>2755 7380</td></tr>
</table>
<h4>盈健 - 新界</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>⭐ 荃湾（24h）</td><td>荃湾广场</td><td>2492 7380</td></tr>
<tr><td>⭐ 沙田（24h）</td><td>新城市广场</td><td>2699 7380</td></tr>
<tr><td>大埔</td><td>大埔超级城</td><td>2660 7380</td></tr>
<tr><td>元朗</td><td>元朗广场</td><td>2473 7380</td></tr>
<tr><td>屯门</td><td>屯门市广场</td><td>2450 7380</td></tr>
<tr><td>将军澳</td><td>东港城</td><td>2701 7380</td></tr>
<tr><td>上水</td><td>上水广场</td><td>2670 7380</td></tr>
<tr><td>马鞍山</td><td>马鞍山广场</td><td>2630 7380</td></tr>
<tr><td>葵涌</td><td>新都会广场</td><td>2480 7380</td></tr>
<tr><td>沙田（沥源）</td><td>沥源街</td><td>2647 7380</td></tr>
</table>
<hr>
<h3>3️⃣ 德信行医疗 (UMP Healthcare Group) — 上市集团</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2522 0100</strong>  <br>> <strong>官网</strong>：<a href="https://www.ump.com.hk" target="_blank" rel="noopener">https://www.ump.com.hk</a>  <br>> <strong>App</strong>：「UMP Healthcare」  <br>> <strong>规模</strong>：<strong>50+ 分店</strong>，上市医疗集团 (01220.HK)  <br>> <strong>24h 店</strong>：中环、旺角</p>
<h4>德信行 - 港岛</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>⭐ 中环（24h）</td><td>中环毕打街</td><td>2522 0100</td></tr>
<tr><td>湾仔</td><td>轩尼诗道</td><td>2529 0100</td></tr>
<tr><td>铜锣湾</td><td>时代广场</td><td>2890 0100</td></tr>
<tr><td>上环</td><td>文咸东街</td><td>2543 0100</td></tr>
</table>
<h4>德信行 - 九龙</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>⭐ 旺角（24h）</td><td>旺角亚皆老街</td><td>2393 0100</td></tr>
<tr><td>油麻地</td><td>油麻地中心</td><td>2782 0100</td></tr>
<tr><td>尖沙咀</td><td>尖沙咀中心</td><td>2739 0100</td></tr>
<tr><td>观塘</td><td>观塘广场</td><td>2389 0100</td></tr>
<tr><td>九龙湾</td><td>德福花园</td><td>2755 0100</td></tr>
<tr><td>黄大仙</td><td>黄大仙中心</td><td>2320 0100</td></tr>
</table>
<h4>德信行 - 新界</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>沙田</td><td>新城市广场</td><td>2699 0100</td></tr>
<tr><td>荃湾</td><td>荃湾广场</td><td>2492 0100</td></tr>
<tr><td>元朗</td><td>元朗广场</td><td>2473 0100</td></tr>
<tr><td>屯门</td><td>屯门市广场</td><td>2450 0100</td></tr>
<tr><td>大埔</td><td>大埔超级城</td><td>2660 0100</td></tr>
<tr><td>将军澳</td><td>东港城</td><td>2701 0100</td></tr>
</table>
<hr>
<h3>4️⃣ 康健 (Town Health) — 网络型连锁</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2300 1818</strong>  <br>> <strong>官网</strong>：<a href="https://www.townhealth.com" target="_blank" rel="noopener">https://www.townhealth.com</a>  <br>> <strong>规模</strong>：<strong>60+ 分店</strong>，网络型  <br>> <strong>24h 店</strong>：部分分店 24h</p>
<h4>康健 - 主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>分布</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>港岛</td><td>中环、上环、湾仔、铜锣湾、北角</td><td>多店</td></tr>
<tr><td>九龙</td><td>旺角、油麻地、尖沙咀、观塘、黄大仙</td><td>多店</td></tr>
<tr><td>新界</td><td>沙田、大埔、元朗、屯门、荃湾</td><td>多店</td></tr>
<tr><td>离岛</td><td>东涌、长洲</td><td>部分</td></tr>
</table>
<hr>
<h3>5️⃣ 医思健康 (EC Healthcare / 医思健康 0235.HK)</h3>
<p>> <strong>总部电话</strong>：📞 <strong>3520 2880</strong>  <br>> <strong>官网</strong>：<a href="https://www.echealthcare.com" target="_blank" rel="noopener">https://www.echealthcare.com</a>  <br>> <strong>旗下品牌</strong>：<br>> - <strong>Dr. Reborn</strong>（医美）<br>> - <strong>SPARK</strong>（牙医）<br>> - <strong>EC Healthcare</strong>（综合）  <br>> <strong>规模</strong>：30+ 医疗中心，专注<strong>医美 + 牙科 + 健康管理</strong></p>
<h4>医思主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>主要分店</th></tr>
<tr><td>------</td><td>----------</td></tr>
<tr><td>中环</td><td>中环中心（旗舰）、国际金融中心</td></tr>
<tr><td>尖沙咀</td><td>美丽华广场、The One</td></tr>
<tr><td>铜锣湾</td><td>时代广场</td></tr>
<tr><td>旺角</td><td>朗豪坊</td></tr>
<tr><td>沙田</td><td>新城市广场</td></tr>
</table>
<p>> 适合：<strong>医美、牙医、健康检查</strong></p>
<hr>
<h3>6️⃣ 尚至医疗 (Virtus Medical) — 中高端</h3>
<p>> <strong>总部电话</strong>：📞 <strong>3893 6288</strong>  <br>> <strong>官网</strong>：<a href="https://www.virtusmedical.com" target="_blank" rel="noopener">https://www.virtusmedical.com</a>  <br>> <strong>规模</strong>：<strong>15+ 中心</strong>，港岛/九龙为主  <br>> <strong>24h 店</strong>：无  <br>> <strong>客户定位</strong>：<strong>中高端</strong></p>
<h4>尚至主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>⭐ 中环 (Virtus)</td><td>中环毕打街</td><td>综合专科</td></tr>
<tr><td>⭐ 尖沙咀 (Virtus)</td><td>尖沙咀中心</td><td>综合专科</td></tr>
<tr><td>沙田 (Virtus)</td><td>沙田希尔顿中心</td><td>综合</td></tr>
<tr><td>观塘</td><td>创纪之城</td><td>综合</td></tr>
<tr><td>大埔</td><td>大埔超级城</td><td>综合</td></tr>
</table>
<p>> 适合：<strong>多专科会诊</strong>、<strong>中高端体检</strong></p>
<hr>
<h3>7️⃣ 新都医疗 (New Town Medical) — 新界本土</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2698 1001</strong>  <br>> <strong>官网</strong>：<a href="https://www.newtownmedical.com.hk" target="_blank" rel="noopener">https://www.newtownmedical.com.hk</a>  <br>> <strong>规模</strong>：<strong>20+ 分店</strong>，新界为主  <br>> <strong>24h 店</strong>：部分</p>
<h4>新都主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>分店</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>沙田</td><td>新城市广场、沥源</td></tr>
<tr><td>大埔</td><td>大埔中心</td></tr>
<tr><td>元朗</td><td>元朗广场</td></tr>
<tr><td>屯门</td><td>屯门市广场</td></tr>
<tr><td>荃湾</td><td>荃湾广场</td></tr>
<tr><td>上水</td><td>上水广场</td></tr>
<tr><td>将军澳</td><td>东港城</td></tr>
<tr><td>葵涌</td><td>新都会广场</td></tr>
</table>
<p>> 适合：<strong>新界居民</strong>、<strong>慢性病管理</strong></p>
<hr>
<h3>8️⃣ 匡乔医疗 (NextGen / 基因医学)</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2546 6288</strong>  <br>> <strong>官网</strong>：<a href="https://www.nextgen.com.hk" target="_blank" rel="noopener">https://www.nextgen.com.hk</a>  <br>> <strong>规模</strong>：<strong>10+ 中心</strong>，港岛/九龙  <br>> <strong>客户定位</strong>：<strong>中高端、基因检测</strong></p>
<h4>匡乔主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>分店</th><th>地址</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>⭐ 中环 (旗舰)</td><td>中环国际金融中心二期</td></tr>
<tr><td>尖沙咀</td><td>尖沙咀中心</td></tr>
<tr><td>铜锣湾</td><td>时代广场</td></tr>
<tr><td>沙田</td><td>希尔顿中心</td></tr>
<tr><td>观塘</td><td>创纪之城</td></tr>
</table>
<p>> 适合：<strong>基因检测</strong>、<strong>精准医疗</strong>、<strong>高端体检</strong></p>
<hr>
<h3>9️⃣ 天下仁心医疗 (Heart to Heart)</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2543 1000</strong>  <br>> <strong>规模</strong>：<strong>10+ 中心</strong>，港岛/九龙为主</p>
<h4>天下仁心主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>分店</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>中环</td><td>中环中心</td></tr>
<tr><td>湾仔</td><td>轩尼诗道</td></tr>
<tr><td>铜锣湾</td><td>崇光百货旁</td></tr>
<tr><td>尖沙咀</td><td>美丽华广场</td></tr>
<tr><td>观塘</td><td>观塘广场</td></tr>
</table>
<p>> 适合：<strong>综合医疗</strong>、<strong>24h 部分店</strong></p>
<hr>
<h3>🔟 汇贤医疗 (P&P Medical)</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2735 6688</strong>  <br>> <strong>规模</strong>：<strong>15+ 分店</strong></p>
<h4>汇贤主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>分布</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>港岛</td><td>中环、上环、湾仔、铜锣湾</td></tr>
<tr><td>九龙</td><td>旺角、油麻地、尖沙咀、观塘</td></tr>
<tr><td>新界</td><td>沙田、元朗、荃湾</td></tr>
</table>
<hr>
<h3>1️⃣1️⃣ 美邦/快验保 (MediLink) — 体检专家</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2868 9933</strong>  <br>> <strong>官网</strong>：<a href="https://www.medilink.com.hk" target="_blank" rel="noopener">https://www.medilink.com.hk</a>  <br>> <strong>规模</strong>：<strong>10+ 中心</strong>  <br>> <strong>客户定位</strong>：<strong>体检为主</strong></p>
<h4>美邦主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>分店</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>中环</td><td>中环中心</td></tr>
<tr><td>尖沙咀</td><td>尖沙咀中心</td></tr>
<tr><td>旺角</td><td>旺角中心</td></tr>
<tr><td>沙田</td><td>新城市广场</td></tr>
<tr><td>荃湾</td><td>荃湾广场</td></tr>
<tr><td>元朗</td><td>元朗广场</td></tr>
</table>
<p>> 适合：<strong>体检套餐</strong>、<strong>公司年度体检</strong></p>
<hr>
<h3>1️⃣2️⃣ 华润医疗 (CR Medical) — 中资背景</h3>
<p>> <strong>总部电话</strong>：📞 <strong>2882 1688</strong>  <br>> <strong>规模</strong>：<strong>15+ 分店</strong>  <br>> <strong>客户定位</strong>：<strong>综合医疗</strong>（中资央企背景）</p>
<h4>华润主要分店</h4>
<table border="1" cellpadding="6">
<tr><th>区域</th><th>分店</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>港岛</td><td>中环、上环、铜锣湾</td></tr>
<tr><td>九龙</td><td>旺角、尖沙咀、观塘</td></tr>
<tr><td>新界</td><td>沙田、屯门、荃湾</td></tr>
</table>
<hr>
<h2>🌙 第二部分：全港 24h / 长延时诊所汇总</h2>
<p>> <strong>重要说明</strong>：私人连锁诊所<strong>真正 24h 营业的极少</strong>（多延至 22:00-24:00）  <br>> <strong>真正的 24h 急症</strong> → 仍以<strong>私立医院</strong>为主（仁安、港安、圣保禄、明德、养和）</p>
<h3>⭐ 24h 私人连锁诊所（确认）</h3>
<table border="1" cellpadding="6">
<tr><th>集团</th><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td>卓健</td><td>中环</td><td>中环毕打街 1-3 号</td><td>2522 2181</td></tr>
<tr><td>卓健</td><td>旺角</td><td>旺角中心</td><td>2393 8338</td></tr>
<tr><td>卓健</td><td>观塘</td><td>观塘广场</td><td>2389 8338</td></tr>
<tr><td>盈健</td><td>旺角</td><td>旺角亚皆老街 16 号</td><td>2393 7380</td></tr>
<tr><td>盈健</td><td>长沙湾</td><td>长沙湾广场</td><td>2361 7380</td></tr>
<tr><td>盈健</td><td>九龙湾</td><td>MegaBox</td><td>2755 7380</td></tr>
<tr><td>盈健</td><td>荃湾</td><td>荃湾广场</td><td>2492 7380</td></tr>
<tr><td>盈健</td><td>沙田</td><td>新城市广场</td><td>2699 7380</td></tr>
<tr><td>德信行</td><td>中环</td><td>中环毕打街</td><td>2522 0100</td></tr>
<tr><td>德信行</td><td>旺角</td><td>旺角亚皆老街</td><td>2393 0100</td></tr>
</table>
<h3>🏥 24h 私立医院急症（推荐紧急情况）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>急症电话</th><th>地址</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>2572 0211</td><td>跑马地</td></tr>
<tr><td>港怡医院</td><td>3153 9000</td><td>黄竹坑</td></tr>
<tr><td>明德国际医院</td><td>2849 0111</td><td>山顶</td></tr>
<tr><td>香港港安（荃湾）</td><td>2275 6688</td><td>荃湾</td></tr>
<tr><td>香港港安（司徒拔道）</td><td>3651 8888</td><td>司徒拔道</td></tr>
<tr><td>圣保禄医院</td><td>2890 6008</td><td>铜锣湾</td></tr>
<tr><td>仁安医院</td><td>2608 3388</td><td>沙田</td></tr>
<tr><td>嘉诺撒医院</td><td>2522 2181</td><td>半山</td></tr>
</table>
<h3>🌙 长延时（22:00 之后）私人诊所</h3>
<p>大部分连锁集团的<strong>旺角、尖沙咀、铜锣湾、荃湾</strong>旗舰店都延至 22:00-23:00<br>具体以<strong>各店门口告示</strong>或<strong>官网/APP</strong>为准</p>
<hr>
<h2>💰 第三部分：收费对比（参考价）</h2>
<table border="1" cellpadding="6">
<tr><th>集团</th><th>普通科诊金</th><th>专科诊金</th><th>备注</th></tr>
<tr><td>------</td><td>-----------</td><td>----------</td><td>------</td></tr>
<tr><td>卓健医疗</td><td><strong>$300-500</strong></td><td>$500-1,500</td><td>大型连锁，价中等</td></tr>
<tr><td>盈健医疗</td><td><strong>$250-450</strong></td><td>$400-1,200</td><td>新界便宜</td></tr>
<tr><td>德信行</td><td>$350-600</td><td>$500-1,800</td><td>上市集团，价中上</td></tr>
<tr><td>康健</td><td>$250-450</td><td>$400-1,200</td><td>网络型</td></tr>
<tr><td>医思健康</td><td>$400-800</td><td>$600-2,000</td><td>偏贵（医美专科）</td></tr>
<tr><td>尚至医疗</td><td>$500-1,000</td><td>$800-2,500</td><td>中高端</td></tr>
<tr><td>新都医疗</td><td>$200-400</td><td>$350-1,000</td><td>新界最便宜</td></tr>
<tr><td>匡乔医疗</td><td>$600-1,200</td><td>$1,000-3,000</td><td>高端</td></tr>
<tr><td>天下仁心</td><td>$300-500</td><td>$500-1,500</td><td>综合</td></tr>
<tr><td>汇贤医疗</td><td>$300-500</td><td>$500-1,200</td><td>综合</td></tr>
<tr><td>美邦/快验保</td><td>-</td><td>-</td><td>体检为主</td></tr>
<tr><td>华润医疗</td><td>$250-450</td><td>$400-1,200</td><td>中资</td></tr>
</table>
<p>> <strong>保险报销</strong>：<br>> - 高端医疗险：<strong>通常不覆盖</strong>普通科门诊<br>> - 门急诊附加险：<strong>部分覆盖</strong>（需查保单条款）<br>> - 公司医疗福利：<strong>可报销</strong>部分诊金</p>
<hr>
<h2>💼 第四部分：保险/IFA 客户咨询专用</h2>
<h3>Q1：内地客户来港，24h 私人连锁应该选哪家？</h3>
> A：<strong>旺角、中环、尖沙咀</strong>首选：
> - <strong>盈健</strong>（旺角）— <strong>24h</strong>、新界口碑好
> - <strong>卓健</strong>（中环）— <strong>24h</strong>、综合服务
> - <strong>德信行</strong>（中环）— <strong>24h</strong>、英语服务好
> <strong>价格实惠</strong>：
> - <strong>新都</strong>（新界）— <strong>最便宜</strong> 200-400
> - <strong>康健</strong>（多区）— 250-450  
> <strong>中高端</strong>：
> - <strong>尚至</strong>、<strong>匡乔</strong> — 600-1,200
<h3>Q2：高端客户要转介到专科医生？</h3>
> A：<strong>转介路径</strong>：
> 1. 先在连锁普通科看诊（描述症状）
> 2. 连锁集团<strong>内部转介</strong>到同集团专科医生（如：卓健→卓健专科）
> 3. 或<strong>外部转介</strong>到指定医院/专科医生（<strong>养和、港安</strong>等）
> 
> <strong>推荐</strong>：
> - <strong>养和</strong> = 顶级（"全科都最强"）
> - <strong>港安</strong>（荃湾/司徒拔道）= 优质
> - <strong>港怡</strong> = 新+好
> - <strong>明德</strong> = 顶级（贵+小）
<h3>Q3：客户有公司医保，怎么找诊所？</h3>
> A：分三步：
> 1. <strong>看保单条款</strong>（看"网络诊所"清单）
> 2. <strong>打电话给保险公司</strong> 问"24h 网络诊所"
> 3. <strong>直接 walk-in</strong>（大部分连锁接受公司医保直付）
<h3>Q4：哪间连锁最"快"？</h3>
> A：<strong>最快挂号</strong>：
> - <strong>24h 店</strong>（旺角、中环）→ <strong>直接 walk-in</strong>
> - <strong>APP 预约</strong>（卓健、盈健、医思都有）
> - <strong>电话预约</strong>（任何连锁）
> 
> <strong>最少等候</strong>：
> - <strong>中高端</strong>（尚至、匡乔）— 候诊 15-30 分钟
> - <strong>大型连锁</strong>（卓健、盈健）— 候诊 30-60 分钟
> - <strong>新界本地</strong>（新都、康健）— 候诊 20-40 分钟
<h3>Q5：如何按"客户画像"推荐诊所？</h3>
<table border="1" cellpadding="6">
<tr><th>客户画像</th><th>推荐</th><th>原因</th></tr>
<tr><td>---------</td><td>------</td><td>------</td></tr>
<tr><td>💼 <strong>商务/过境</strong></td><td>中环、尖沙咀连锁</td><td>24h、交通方便</td></tr>
<tr><td>👨‍👩‍👧 <strong>家庭</strong></td><td>卓健、盈健（<strong>家庭医生服务</strong>）</td><td>综合覆盖广</td></tr>
<tr><td>💰 <strong>高端</strong></td><td>尚至、匡乔、养和</td><td>服务品质</td></tr>
<tr><td>🌏 <strong>内地客户</strong></td><td>盈健（旺角）、卓健（中环）</td><td>中文好、24h</td></tr>
<tr><td>🏘️ <strong>新界居民</strong></td><td>盈健、新都</td><td>新界最广</td></tr>
<tr><td>🦷 <strong>牙科</strong></td><td>医思、卓健（牙科部）</td><td>专业</td></tr>
<tr><td>💉 <strong>疫苗/体检</strong></td><td>美邦/快验保、卓健</td><td>体检套餐</td></tr>
<tr><td>🧖 <strong>医美</strong></td><td>医思、Dr. Reborn</td><td>医美专家</td></tr>
</table>


<p>> <strong>重要免责声明</strong>：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体就医决策请咨询医生或医院官方。分店信息变动频繁，使用前请直接联系各集团。</p>`
  },
  "2.6.5 香港医疗总图速查": {
    id: "hkm_2_6_5",
    title: "2.6.5 香港医疗总图速查",
    content: `<h1>🗺️ 香港医疗总图速查表</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>用途</strong>：一份文档看懂香港医疗体系全貌  <br>> <strong>配套 4 大文件</strong>：<br>> - 📄 <code>香港医院大全.md</code>（主流版）<br>> - 📄 <code>香港医院大全-完整版.md</code>（完整版 31+18）<br>> - 📄 <code>香港基层医疗大全.md</code>（基层医疗 13 类）<br>> - 📄 <code>香港私人连锁诊所大全.md</code>（12 大连锁 100+ 分店）</p>
<hr>
<h2>🎯 一张表看懂香港医疗</h2>
<pre><code>🇭🇰 香港医疗体系总览
<p>📍 第一层：基层医疗（日常/慢病）<br>   ├── 公立：GOPC 普通科门诊 (73间, $50/次)<br>   ├── 公立：母婴健康院 (31间, 免费)<br>   ├── 公立：长者健康中心 (18间, 免费)<br>   ├── 公立：政府资助中医 (18间, $120/次)<br>   ├── 公立：牙科 (11间, 限紧急)<br>   └── 私人：12 大连锁 100+ 分店 ($250-800/次)</p>
<p>📍 第二层：医院/专科（重病/手术）<br>   ├── 公立：HA 31 间 (急症 $135/次)<br>   └── 私立：18 间医院 (预约制, $500+)</p>
<p>📍 第三层：急症/抢救<br>   ├── 999 救护车 → 公立急症室<br>   └── 私立医院 24h 急症 (8 间)</code></pre></p>
<hr>
<h2>📞 必记的 7 个关键电话</h2>
<table border="1" cellpadding="6">
<tr><th>#</th><th>用途</th><th>电话</th><th>备注</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td>1</td><td>🚑 救护车（紧急）</td><td><strong>999</strong></td><td>24h</td></tr>
<tr><td>2</td><td>🏥 HA 医院查询</td><td><strong>2300 6555</strong></td><td>8am-10pm</td></tr>
<tr><td>3</td><td>👶 母婴健康院</td><td><strong>2112 9911</strong></td><td>24h 语音</td></tr>
<tr><td>4</td><td>👵 长者健康中心</td><td><strong>2121 8080</strong></td><td>周一至五</td></tr>
<tr><td>5</td><td>🌿 政府资助中医</td><td><strong>2300 6555</strong> 转</td><td></td></tr>
<tr><td>6</td><td>🦠 衞生署</td><td><strong>2961 8989</strong></td><td>健康咨询</td></tr>
<tr><td>7</td><td>✈️ 旅游健康中心</td><td><strong>2150 7230</strong></td><td>出国疫苗</td></tr>
</table>
<hr>
<h2>🏥 高端医院速查（按客户类型推荐）</h2>
<h3>💼 高净值客户（私立首选）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>区域</th><th>24h 急症</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>跑马地</td><td>✅</td><td>全科最强</td></tr>
<tr><td>港怡医院</td><td>黄竹坑</td><td>✅</td><td>新+好</td></tr>
<tr><td>明德国际</td><td>山顶</td><td>✅</td><td>顶级私家</td></tr>
<tr><td>香港港安（司徒拔道）</td><td>湾仔</td><td>✅</td><td>综合优质</td></tr>
<tr><td>香港港安（荃湾）</td><td>荃湾</td><td>✅</td><td>新界首选</td></tr>
<tr><td>圣保禄医院</td><td>铜锣湾</td><td>✅</td><td>港岛东</td></tr>
<tr><td>嘉诺撒医院</td><td>半山</td><td>✅</td><td>半山首选</td></tr>
</table>
<h3>🏛️ 公立首选（教学医院）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>区域</th><th>24h 急症</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>玛丽医院</td><td>薄扶林</td><td>✅</td><td>港大教学</td></tr>
<tr><td>伊利沙伯医院</td><td>油麻地</td><td>✅</td><td>大型急症</td></tr>
<tr><td>威尔斯亲王医院</td><td>沙田</td><td>✅</td><td>中大教学</td></tr>
<tr><td>基督教联合医院</td><td>观塘</td><td>✅</td><td>九龙东</td></tr>
<tr><td>屯门医院</td><td>屯门</td><td>✅</td><td>屯门区</td></tr>
</table>
<h3>👶 儿童专科</h3>
<li><strong>香港儿童医院</strong>（启德）：全港儿童专科转介中心</li>
<li>一般儿童急症：玛丽/伊利沙伯/威尔斯亲王的儿科部</li>
<li>私立儿科：养和/港怡/港安儿科部</li>
<h3>🧠 精神科</h3>
<li>公立：<strong>葵涌医院、青山医院、九龙医院</strong>（需转介）</li>
<li>私立：养和精神科、私人精神科医生</li>
<hr>
<h2>🟢 基层医疗速查（按需求推荐）</h2>
<h3>客户场景 → 推荐服务</h3>
<table border="1" cellpadding="6">
<tr><th>客户场景</th><th>推荐机构</th><th>收费</th></tr>
<tr><td>---------</td><td>---------</td><td>------</td></tr>
<tr><td>感冒发烧/慢性病</td><td>GOPC（家附近）</td><td>$50/次</td></tr>
<tr><td>24h 急症（私）</td><td>卓健中环/旺角/观塘、盈健旺角/荃湾/沙田、德信行中环/旺角</td><td>$300-500</td></tr>
<tr><td>中医调理</td><td>政府资助中医 18 间 或 私人中医</td><td>$120 起</td></tr>
<tr><td>洗牙/拔牙</td><td>私人牙科（2,300+ 间）</td><td>$500-1,000</td></tr>
<tr><td>紧急牙科</td><td>HA 公立牙科 11 间</td><td>$50/次（限紧急）</td></tr>
<tr><td>孕妇产检/宝宝疫苗</td><td>母婴健康院 31 间</td><td>免费</td></tr>
<tr><td>老人健康</td><td>长者健康中心 18 间</td><td>免费（年费 $110）</td></tr>
<tr><td>出国疫苗</td><td>旅游健康中心 2 间</td><td>$200/次</td></tr>
<tr><td>慢性病管理</td><td>GOPC + 私人诊所</td><td>$50-500</td></tr>
<tr><td>中高端体检</td><td>尚至/匡乔/美邦</td><td>$1,000-5,000</td></tr>
<tr><td>医美</td><td>医思健康/Dr. Reborn</td><td>$1,000+</td></tr>
</table>
<hr>
<h2>🌙 全港 24h 私人连锁诊所速查（10 间）</h2>
<table border="1" cellpadding="6">
<tr><th>集团</th><th>分店</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td>卓健</td><td>中环</td><td>中环毕打街</td><td>2522 2181</td></tr>
<tr><td>卓健</td><td>旺角</td><td>旺角中心</td><td>2393 8338</td></tr>
<tr><td>卓健</td><td>观塘</td><td>观塘广场</td><td>2389 8338</td></tr>
<tr><td>盈健</td><td>旺角</td><td>旺角亚皆老街 16 号</td><td>2393 7380</td></tr>
<tr><td>盈健</td><td>长沙湾</td><td>长沙湾广场</td><td>2361 7380</td></tr>
<tr><td>盈健</td><td>九龙湾</td><td>MegaBox</td><td>2755 7380</td></tr>
<tr><td>盈健</td><td>荃湾</td><td>荃湾广场</td><td>2492 7380</td></tr>
<tr><td>盈健</td><td>沙田</td><td>新城市广场</td><td>2699 7380</td></tr>
<tr><td>德信行</td><td>中环</td><td>中环毕打街</td><td>2522 0100</td></tr>
<tr><td>德信行</td><td>旺角</td><td>旺角亚皆老街</td><td>2393 0100</td></tr>
</table>
<hr>
<h2>🗺️ 区域速查（按地区推荐）</h2>
<h3>港岛区</h3>
<li><strong>急症首选</strong>：玛丽医院、东区尤德夫人那打素医院</li>
<li><strong>高端私立</strong>：养和（跑马地）、港怡（黄竹坑）、明德（山顶）、嘉诺撒（半山）</li>
<li><strong>24h 诊所</strong>：卓健中环</li>
<h3>九龙区</h3>
<li><strong>急症首选</strong>：伊利沙伯（油麻地）、广华（油麻地）、基督教联合（观塘）、玛嘉烈（荔枝角）</li>
<li><strong>高端私立</strong>：浸信会（九龙塘）、播道（九龙城）、圣德肋撒（太子）</li>
<li><strong>24h 诊所</strong>：卓健旺角/观塘、盈健旺角/长沙湾/九龙湾、德信行旺角</li>
<h3>新界区</h3>
<li><strong>急症首选</strong>：威尔斯亲王（沙田）、屯门、博爱（元朗）、仁济（荃湾）、北区、将军澳、天水围、北大屿山</li>
<li><strong>高端私立</strong>：香港港安（荃湾）</li>
<li><strong>24h 诊所</strong>：盈健荃湾/沙田</li>
<hr>
<h2>💰 收费参考速查</h2>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>收费（港币）</th></tr>
<tr><td>------</td><td>-------------</td></tr>
<tr><td>公立 GOPC（合资格）</td><td><strong>$50/次</strong></td></tr>
<tr><td>公立 GOPC（非合资格）</td><td>$135/次</td></tr>
<tr><td>公立急症</td><td>$180-1,190/次（按分流等级）</td></tr>
<tr><td>公立住院（普通科）</td><td>$120/日（首日 $5,000 入院费）</td></tr>
<tr><td>私立医院普通科</td><td>$500-1,500/次</td></tr>
<tr><td>私立医院专科</td><td>$800-3,000/次</td></tr>
<tr><td>私人诊所普通科</td><td>$250-600/次</td></tr>
<tr><td>政府资助中医</td><td>$120-250/次</td></tr>
<tr><td>私人中医</td><td>$500-2,000/次</td></tr>
<tr><td>公立牙科</td><td>$50/次（限紧急）</td></tr>
<tr><td>私人牙科</td><td>$500-1,000/次（洗牙）</td></tr>
<tr><td>HA 中医复康/推拿</td><td>$150/次</td></tr>
</table>
<hr>
<h2>🏥 4 份文件详细索引</h2>
<h3>📄 香港医院大全（主流版）</h3>
<li>公立 16 间（玛丽、伊利沙伯、威尔斯等）</li>
<li>私立 14 间（养和、港怡、明德、港安等）</li>
<li>关键电话 + 数字工具 + 6 大客户 Q&A</li>
<li><strong>适合</strong>：日常快查</li>
<h3>📄 香港医院大全（完整版）</h3>
<li>HA 公立 31 间（港岛 8 + 九龙 10 + 新界 13）</li>
<li>私立 18 间（高端 4 + 综合 10 + 专科中心 4）</li>
<li>8 大客户 Q&A</li>
<li><strong>适合</strong>：工作查全量</li>
<h3>📄 香港基层医疗大全</h3>
<li>12 大服务（GOPC、牙科、母婴、长者、中医、旅医、美沙酮等）</li>
<li>13 类数据速查表</li>
<li>5 大客户 Q&A</li>
<li><strong>适合</strong>：基层服务查询</li>
<h3>📄 香港私人连锁诊所大全</h3>
<li>12 大连锁（卓健/盈健/德信行/康健/医思/尚至/新都/匡乔/天下仁心/汇贤/美邦/华润）</li>
<li>100+ 分店详情</li>
<li>24h 10 间 + 长延时多间</li>
<li>收费对比 + 5 大客户 Q&A</li>
<li><strong>适合</strong>：内地客户来港、24h 急症</li>
<hr>
<h2>💼 客户咨询决策树</h2>
<pre><code>客户问：哪里看病？
│
├── 紧急情况？
│   ├── 是 → 999 救护车 / 最近的公立急症 / 24h 私立医院
│   └── 否 → 看场景
│
├── 场景：客户在港
│   ├── 内地/过境客户 → 24h 连锁（盈健旺角/卓健中环/德信行中环）
│   ├── 港岛高端 → 养和/港怡/明德/嘉诺撒
│   ├── 九龙综合 → 浸信会/播道/圣德肋撒
│   ├── 新界综合 → 仁济/港安荃湾
│   ├── 感冒发烧/慢病 → GOPC（$50）或私人连锁（$300-500）
│   ├── 中医 → 政府资助中医 18 间（$120）
│   ├── 牙科紧急 → HA 公立牙科 11 间
│   └── 牙科一般 → 私人牙科
│
├── 场景：客户在内地
│   ├── 普通医疗 → 内地方案
│   └── 转介到港 → 私立医院（养和/港怡/港安）
│
└── 场景：客户长期在港
    ├── 家庭医生（GP）→ 卓健/盈健/康健
    ├── 专科 → 养和/港安/港怡
    └── 体检 → 尚至/匡乔/美邦</code></pre>
<hr>
<h2>🎯 主任速记口诀</h2>
<pre><code>🔥 急症救命：999 → 公立玛丽/伊利沙伯/威尔斯
💎 高端客户：养和 → 港怡 → 明德 → 港安
🌙 24h 来港：盈健旺角 → 卓健中环 → 德信行中环
💰 平价门诊：GOPC（$50）→ 盈健/卓健（$300）
👶 妇幼宝宝：母婴健康院（免费）→ 私家产科（养和/港安）
👵 老人健康：长者健康中心（免费）→ 公立专科
🦷 牙科紧急：HA 公立 11 间
🦷 牙科一般：私人牙科 2,300+ 间
🌿 中医调理：政府资助 18 间（$120）→ 私人名医</code></pre>
<hr>
<p>> <strong>重要免责声明</strong>：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体就医决策请咨询医生或医院官方。</p>`
  },
  "2.6.6 香港医疗速查海报版": {
    id: "hkm_2_6_6",
    title: "2.6.6 香港医疗速查海报版",
    content: `<h1>🏥 香港医疗速查（1 页 A4 海报版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>用途</strong>：1 页 A4 打印，<strong>客户来访随手发</strong>，手机转发也方便</p>
<hr>
<h2>🚨 紧急救命（先看这个）</h2>
<pre><code>🚑 救护车：                999         （24小时）
🏥 医院管理局查询：        2300 6555   （8am-10pm）
🦠 衞生署：                2961 8989   （健康咨询）
☠️ 防止自杀：              2389 2222   （24小时）</code></pre>
<p><strong>紧急情况</strong> → 999 救护车送最近的<strong>公立医院急症室</strong>（24小时）<br><li>港岛：玛丽医院、东区尤德夫人那打素医院</li><br><li>九龙：伊利沙伯、广华、基督教联合、玛嘉烈</li><br><li>新界：威尔斯亲王、屯门、博爱、仁济、将军澳</li></p>
<hr>
<h2>🏥 高端私立医院（有钱客户去这里）</h2>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>电话</th><th>区域</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>⭐ 养和医院</td><td>2572 0211</td><td>跑马地</td></tr>
<tr><td>⭐ 港怡医院</td><td>3153 9000</td><td>黄竹坑</td></tr>
<tr><td>⭐ 明德国际</td><td>2849 0111</td><td>山顶</td></tr>
<tr><td>港安（司徒拔道）</td><td>3651 8888</td><td>湾仔</td></tr>
<tr><td>港安（荃湾）</td><td>2275 6688</td><td>荃湾</td></tr>
<tr><td>圣保禄</td><td>2890 6008</td><td>铜锣湾</td></tr>
<tr><td>浸信会</td><td>2337 4141</td><td>九龙塘</td></tr>
<tr><td>嘉诺撒</td><td>2522 2181</td><td>半山</td></tr>
</table>
<hr>
<h2>🌙 24h 私人连锁诊所（内地客户来港首选）</h2>
<table border="1" cellpadding="6">
<tr><th>诊所</th><th>地址</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>卓健医疗（中环）</td><td>中环毕打街</td><td>2522 2181</td></tr>
<tr><td>卓健医疗（旺角）</td><td>旺角中心</td><td>2393 8338</td></tr>
<tr><td>卓健医疗（观塘）</td><td>观塘广场</td><td>2389 8338</td></tr>
<tr><td>盈健医疗（旺角）</td><td>旺角亚皆老街 16 号</td><td>2393 7380</td></tr>
<tr><td>盈健医疗（荃湾）</td><td>荃湾广场</td><td>2492 7380</td></tr>
<tr><td>盈健医疗（沙田）</td><td>新城市广场</td><td>2699 7380</td></tr>
<tr><td>盈健医疗（长沙湾）</td><td>长沙湾广场</td><td>2361 7380</td></tr>
<tr><td>盈健医疗（九龙湾）</td><td>MegaBox</td><td>2755 7380</td></tr>
<tr><td>德信行（中环）</td><td>中环毕打街</td><td>2522 0100</td></tr>
<tr><td>德信行（旺角）</td><td>旺角亚皆老街</td><td>2393 0100</td></tr>
</table>
<p><strong>内地客户来港看病：先去这 10 间 24h 诊所！</strong> 价格 $250-500/次，可直接 walk-in。</p>
<hr>
<h2>🟢 普通科门诊（GOPC · 公立平价）</h2>
<li><strong>预约</strong>：<strong>2300 6555</strong> / HA Go App</li>
<li><strong>收费</strong>：<strong>$50/次</strong>（港人）/ $135/次（非港人）</li>
<li><strong>服务</strong>：感冒发烧、慢性病、伤口护理、疫苗</li>
<li><strong>分布</strong>：全港 73 间，按家附近选</li>
<hr>
<h2>🦷 牙科诊所</h2>
<li><strong>公立牙科紧急</strong>：<strong>2300 6555</strong> 转牙科（11 间，限止痛/拔牙）</li>
<li><strong>私人牙科</strong>：全港 2,300+ 间，<strong>直接打电话</strong>，$500-1,000/次</li>
<li><strong>菲腊牙科医院</strong>：2859 0288（专科，需转介）</li>
<hr>
<h2>🤰 孕妇宝宝（母婴健康院）</h2>
<li><strong>预约</strong>：<strong>2112 9911</strong>（24h 语音）</li>
<li><strong>收费</strong>：<strong>免费</strong>（港人）</li>
<li><strong>服务</strong>：产检、产后护理、宝宝疫苗、家庭计划</li>
<li><strong>分布</strong>：全港 31 间</li>
<hr>
<h2>👵 老人健康（长者健康中心）</h2>
<li><strong>预约</strong>：<strong>2121 8080</strong></li>
<li><strong>资格</strong>：65 岁或以上</li>
<li><strong>收费</strong>：<strong>免费</strong>（年费 $110）</li>
<li><strong>服务</strong>：健康评估、慢性病筛查、疫苗、健康教育</li>
<li><strong>分布</strong>：全港 18 间</li>
<hr>
<h2>🌿 中医诊所（政府资助）</h2>
<li><strong>预约</strong>：<strong>2300 6555</strong> 转中医</li>
<li><strong>收费</strong>：<strong>$120-250/次</strong></li>
<li><strong>服务</strong>：内科、针灸、推拿、骨伤</li>
<li><strong>分布</strong>：全港 18 间</li>
<hr>
<h2>✈️ 出国旅游健康</h2>
<li><strong>旅游健康中心</strong>：<strong>2150 7230</strong></li>
<li><strong>地址</strong>：九龙湾启仁街 9 号</li>
<li><strong>服务</strong>：旅行疫苗、疟疾预防、健康咨询</li>
<li><strong>收费</strong>：$200/次</li>
<hr>
<h2>💰 收费速查</h2>
<table border="1" cellpadding="6">
<tr><th>服务</th><th>收费</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>公立 GOPC</td><td>$50/次</td></tr>
<tr><td>公立急症</td><td>$180-1,190/次</td></tr>
<tr><td>私人连锁 24h</td><td>$250-500/次</td></tr>
<tr><td>私立医院普通</td><td>$500-1,500/次</td></tr>
<tr><td>私立医院专科</td><td>$800-3,000/次</td></tr>
<tr><td>政府资助中医</td><td>$120-250/次</td></tr>
<tr><td>私人牙科洗牙</td><td>$500-1,000/次</td></tr>
</table>
<hr>
<h2>🎯 客户咨询决策（1 分钟看懂）</h2>
<table border="1" cellpadding="6">
<tr><th>客户问</th><th>推荐</th></tr>
<tr><td>--------</td><td>------</td></tr>
<tr><td>"客户来港去哪看病？"</td><td>24h 连锁：盈健/卓健/德信行</td></tr>
<tr><td>"高端客户去哪？"</td><td>养和、港怡、明德、港安</td></tr>
<tr><td>"感冒发烧去哪？"</td><td>GOPC（$50） 或 24h 连锁</td></tr>
<tr><td>"生孩子去哪？"</td><td>私立产科：养和/港安/港怡</td></tr>
<tr><td>"老人体检去哪？"</td><td>长者健康中心（免费）</td></tr>
<tr><td>"中医调理去哪？"</td><td>政府资助 18 间（$120）</td></tr>
<tr><td>"拔牙/洗牙去哪？"</td><td>私人牙科（$500-1,000）</td></tr>
<tr><td>"出国打疫苗？"</td><td>旅游健康中心（$200）</td></tr>
<tr><td>"紧急情况？"</td><td>999 → 公立急症</td></tr>
</table>
<hr>
<h2>📱 推荐 APP</h2>
<table border="1" cellpadding="6">
<tr><th>APP</th><th>功能</th></tr>
<tr><td>-----</td><td>------</td></tr>
<tr><td><strong>HA Go</strong></td><td>公立医院预约、报告、缴费</td></tr>
<tr><td><strong>eHealth 医健通</strong></td><td>电子健康记录</td></tr>
<tr><td><strong>卓健 / 盈健 / 医思</strong></td><td>私人连锁预约</td></tr>
<tr><td><strong>香港 999 App</strong></td><td>紧急救助</td></tr>
</table>
<hr>
<p>> <strong>免责声明</strong>：本海报仅供参考，<strong>不构成医疗建议</strong>。  <br>> 详细信息请查各机构官网或拨打 2300 6555。</p>`
  },
  "2.6.7 香港专科医生与复康大全": {
    id: "hkm_2_6_7",
    title: "2.6.7 香港专科医生与复康大全",
    content: `<h1>🏥 香港专科医生 + 物理治疗 + 复康大全</h1>
<p>> <strong>最后整理</strong>：2026-06-21  <br>> <strong>覆盖范围</strong>：香港主要专科医生、物理治疗中心、复康中心、老人科/儿科/精神康复等  <br>> <strong>数据说明</strong>：医生/机构信息<strong>变动频繁</strong>，使用前请打电话确认</p>
<hr>
<h2>🎯 关键概念</h2>
<pre><code>第一线：全科/家庭医生（GP）→ 转介到第二线
第二线：专科医生（Specialist）→ 诊断+治疗方案
第三线：医院（手术/急症）→ 物理治疗 + 复康</code></pre>
<p><strong>客户就医路径</strong>：<br><li><strong>简单疾病</strong> → 全科 / 私人连锁</li><br><li><strong>复杂疾病</strong> → 专科医生（需 GP 转介 or 直接预约私立）</li><br><li><strong>手术/急症</strong> → 医院（公立或私立）</li><br><li><strong>术后/慢病</strong> → 物理治疗 + 复康中心</li></p>
<hr>
<h2>📞 关键查询/预约电话</h2>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>电话</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>🏥 HA 专科门诊转介</td><td>2300 6555</td><td>公立</td></tr>
<tr><td>🧑‍⚕️ 香港医务委员会</td><td>2873 5131</td><td>医生注册查询</td></tr>
<tr><td>🏥 物理治疗师公会</td><td>2338 8070</td><td>物理治疗师查询</td></tr>
<tr><td>🧠 临床心理学会</td><td>2521 6648</td><td>心理学家查询</td></tr>
<tr><td>👵 老人科专科</td><td>2300 6555 转</td><td>公立</td></tr>
<tr><td>🦴 复康中心查询</td><td>2300 6555</td><td>公立</td></tr>
</table>
<hr>
<h2>🩺 第一部分：24 大专科医生（按客户需求分类）</h2>
<h3>🧠 脑/神经/精神科</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐医生/机构</th></tr>
<tr><td>------</td><td>----------</td><td>------------------</td></tr>
<tr><td><strong>脑神经科</strong></td><td>中风、柏金逊、头痛、癫痫</td><td>养和、港安、港怡</td></tr>
<tr><td><strong>脑外科</strong></td><td>脑肿瘤、脑血管</td><td>玛丽医院（公立教学）</td></tr>
<tr><td><strong>精神科</strong></td><td>抑郁、焦虑、精神分裂</td><td>养和精神科 / 私人精神科医生</td></tr>
<tr><td><strong>临床心理</strong></td><td>心理评估、辅导</td><td>私人心理学家（需预约）</td></tr>
<tr><td><strong>脑神经反馈</strong></td><td>ADHD、自闭症</td><td>中环、尖沙咀专科中心</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>脑神经科中心</strong></li><br><li>港安医院<strong>脑神经中心</strong></li><br><li>玛丽医院<strong>脑神经科</strong>（公立）</li></p>
<hr>
<h3>❤️ 心/血管</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>心脏科</strong></td><td>心律不正、冠心病</td><td>养和心脏中心、葛量洪医院</td></tr>
<tr><td><strong>心胸外科</strong></td><td>心脏手术</td><td>玛丽/伊利沙伯（公立）</td></tr>
<tr><td><strong>血管外科</strong></td><td>静脉曲张、动脉瘤</td><td>养和、港安</td></tr>
<tr><td><strong>心脏科检查</strong></td><td>心电图、心脏超声波、运动心电图</td><td>私人心脏中心</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>心脏科中心</strong>（最顶级）</li><br><li>香港港安<strong>心脏中心</strong></li><br><li>葛量洪医院（公立专科）</li><br><li>亚洲心脏中心（中环）</li></p>
<hr>
<h3>🦴 骨/关节/运动</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>骨科</strong></td><td>骨折、关节、脊椎</td><td>养和、港安、港怡</td></tr>
<tr><td><strong>运动医学</strong></td><td>运动损伤、关节镜</td><td>养和运动医学中心</td></tr>
<tr><td><strong>复康科</strong></td><td>中风、术后复康</td><td>公立+私立复康中心</td></tr>
<tr><td><strong>风湿科</strong></td><td>类风湿、痛风</td><td>养和、玛嘉烈</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>骨科及运动医学中心</strong></li><br><li>香港港安<strong>骨科中心</strong></li><br><li>港怡医院<strong>骨科中心</strong></li><br><li>亚洲运动医学中心（中环）</li></p>
<hr>
<h3>🦷 牙/口腔/颌面</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>普通牙科</strong></td><td>洗牙、补牙、拔牙</td><td>2,300+ 间私人牙科</td></tr>
<tr><td><strong>牙齿矫正</strong></td><td>牙套、隐适美</td><td>卓健/医思/匡乔牙科</td></tr>
<tr><td><strong>植牙</strong></td><td>人工植牙</td><td>私人牙医专科</td></tr>
<tr><td><strong>口腔颌面外科</strong></td><td>智齿、颌面手术</td><td>菲腊牙科医院（公立）</td></tr>
<tr><td><strong>儿童牙科</strong></td><td>儿童牙齿</td><td>私人儿童牙医</td></tr>
<tr><td><strong>牙周科</strong></td><td>牙周病</td><td>菲腊牙科医院</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li><strong>菲腊牙科医院</strong>（西营盘，专科）</li><br><li>卓健牙科（多区）</li><br><li>医思 SPARK 牙医</li><br><li>匡乔牙科</li></p>
<hr>
<h3>👁️ 眼/视</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>眼科</strong></td><td>白内障、青光眼、视网膜</td><td>养和眼科中心、希玛眼科</td></tr>
<tr><td><strong>儿童眼科</strong></td><td>弱视、斜视</td><td>儿童眼科中心</td></tr>
<tr><td><strong>激光矫视</strong></td><td>LASIK、SMILE</td><td>多家私人眼科中心</td></tr>
<tr><td><strong>眼底检查</strong></td><td>糖尿眼、黄斑病变</td><td>眼科专科</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li><strong>希玛眼科</strong>（连锁）</li><br><li>养和医院<strong>眼科中心</strong></li><br><li>亮睛点（私人眼科）</li><br><li>香港眼科专科（多区）</li></p>
<hr>
<h3>👂 耳/鼻/喉</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>耳鼻喉科</strong></td><td>中耳炎、鼻窦炎、声带</td><td>养和、港安、玛丽</td></tr>
<tr><td><strong>听力中心</strong></td><td>助听器、听力检查</td><td>养和听力中心</td></tr>
<tr><td><strong>睡眠中心</strong></td><td>睡眠窒息、鼻鼾</td><td>养和、港安</td></tr>
</table>
<hr>
<h3>🏥 消化/肝胆</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>肠胃科</strong></td><td>胃镜、肠镜、消化道</td><td>养和、港安</td></tr>
<tr><td><strong>肝胆胰科</strong></td><td>肝炎、肝癌、胆石</td><td>玛丽（公立教学）</td></tr>
<tr><td><strong>内视镜中心</strong></td><td>胃镜/肠镜检查</td><td>养和内视镜中心</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>肠胃肝脏科中心</strong></li><br><li>港安肠胃肝胆中心</li><br><li>亚洲癌症中心</li></p>
<hr>
<h3>🩸 血液/肿瘤</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>血液科</strong></td><td>贫血、白血病、淋巴癌</td><td>玛丽（公立）</td></tr>
<tr><td><strong>肿瘤科</strong></td><td>化疗、标靶、免疫治疗</td><td>养和、港安肿瘤中心</td></tr>
<tr><td><strong>放射治疗</strong></td><td>直线加速器、伽玛刀</td><td>养和、香港肿瘤中心</td></tr>
<tr><td><strong>血液透析</strong></td><td>洗肾</td><td>公立+私立肾科中心</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>综合肿瘤科中心</strong></li><br><li>香港港安<strong>肿瘤中心</strong></li><br><li>希愈肿瘤中心（中环）</li><br><li>玛丽医院（公立教学）</li></p>
<hr>
<h3>🤰 妇产/生殖</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>妇产科</strong></td><td>产检、生产、妇科</td><td>养和、港安、港怡</td></tr>
<tr><td><strong>生殖医学</strong></td><td>IVF、人工受孕</td><td>养和、伟泽、亚洲</td></tr>
<tr><td><strong>孕妇瑜伽/课程</strong></td><td>产前产后</td><td>私人产前中心</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>妇产科中心</strong>（顶级）</li><br><li>香港港安<strong>产科</strong></li><br><li>港怡医院<strong>妇产科</strong></li><br><li>伟泽辅助生育中心（中环）</li><br><li>亚洲辅助生育中心</li></p>
<hr>
<h3>👶 儿科/儿童</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>普通儿科</strong></td><td>儿童疾病</td><td>养和、港安、港怡儿科</td></tr>
<tr><td><strong>新生儿科</strong></td><td>早产儿护理</td><td>玛丽、威尔斯（公立）</td></tr>
<tr><td><strong>儿童心脏</strong></td><td>先天性心脏病</td><td>玛丽儿童心脏中心</td></tr>
<tr><td><strong>儿童脑神经</strong></td><td>脑瘫、癫痫</td><td>香港儿童医院（公立）</td></tr>
<tr><td><strong>儿童发展</strong></td><td>自闭、过动、发育迟缓</td><td>协康会、扶幼会</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li><strong>香港儿童医院</strong>（启德，公立）</li><br><li>养和医院<strong>儿科部</strong></li><br><li>港安儿童专科</li><br><li>港怡医院<strong>儿科</strong></li><br><li>协康会（自闭症儿童）</li></p>
<hr>
<h3>👴 老人科</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>老人科</strong></td><td>综合老年病</td><td>养和、港安老人科</td></tr>
<tr><td><strong>记忆诊所</strong></td><td>认知障碍、老人痴呆</td><td>养和记忆诊所</td></tr>
<tr><td><strong>骨松科</strong></td><td>骨质疏松</td><td>养和、港安</td></tr>
<tr><td><strong>老人复康</strong></td><td>中风后复康</td><td>公立+私立</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>老人科</strong></li><br><li>港安老人专科</li><br><li><strong>长者健康中心</strong>（18 间，衞生署，免费）</li><br><li>香港认知障碍症协会</li></p>
<hr>
<h3>🩺 内科/糖尿病/内分泌</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>内分泌科</strong></td><td>糖尿病、甲状腺</td><td>养和、港安、玛嘉烈</td></tr>
<tr><td><strong>糖尿病中心</strong></td><td>糖尿病综合管理</td><td>养和糖尿病中心</td></tr>
<tr><td><strong>肾科</strong></td><td>肾病、透析</td><td>玛丽、养和</td></tr>
</table>
<hr>
<h3>🧬 遗传/精准医疗</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>基因检测</strong></td><td>遗传病、癌症风险</td><td>匡乔医疗（NextGen）</td></tr>
<tr><td><strong>精准医疗</strong></td><td>个体化治疗</td><td>匡乔、香港基因中心</td></tr>
</table>
<hr>
<h3>💉 皮肤/医美</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>皮肤科</strong></td><td>皮肤病、激光</td><td>养和、港安、医思</td></tr>
<tr><td><strong>医美</strong></td><td>注射、激光、整形</td><td>医思健康（Dr. Reborn）</td></tr>
<tr><td><strong>整形</strong></td><td>整形手术</td><td>养和整形中心</td></tr>
</table>
<p><strong>代表机构</strong>：<br><li>养和医院<strong>皮肤科</strong></li><br><li>医思健康（EC Healthcare / 0235.HK）</li><br><li>Dr. Reborn（医美）</li></p>
<hr>
<h3>🏥 泌尿/肾</h3>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>服务范围</th><th>私立推荐</th></tr>
<tr><td>------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>泌尿科</strong></td><td>结石、前列腺</td><td>养和、港安、玛嘉烈</td></tr>
<tr><td><strong>男性健康</strong></td><td>男科、ED</td><td>养和男性健康中心</td></tr>
</table>
<hr>
<h2>💪 第二部分：物理治疗中心（PT - Physiotherapy）</h2>
<p>> <strong>服务范围</strong>：运动损伤、术后复康、中风后复康、腰背痛、关节炎、产后复康  <br>> <strong>预约</strong>：<strong>直接打电话</strong>（无需转介）  <br>> <strong>收费</strong>：$500-1,500/次（私人），公立 $135/次（需 HA 转介）</p>
<h3>A. 私立物理治疗中心（连锁/独立）</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>电话</th><th>区域</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>Activecare 物理治疗</strong></td><td>2543 1000</td><td>中环/尖沙咀</td><td>高端</td></tr>
<tr><td><strong>Physical Fitness</strong></td><td>2882 1688</td><td>多区</td><td>连锁</td></tr>
<tr><td><strong>Physio Central</strong></td><td>2868 9933</td><td>中环</td><td>运动医学</td></tr>
<tr><td><strong>理康</strong> (Rehab)</td><td>2782 7380</td><td>多区</td><td>综合</td></tr>
<tr><td><strong>卓健物理治疗</strong></td><td>8301 8301</td><td>多区</td><td>大型连锁</td></tr>
<tr><td><strong>匡乔物理治疗</strong></td><td>2546 6288</td><td>中环/尖沙咀</td><td>中高端</td></tr>
</table>
<h3>B. 医院附设物理治疗</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>物理治疗部</th><th>备注</th></tr>
<tr><td>------</td><td>-----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>✅</td><td>最高端，$1,000+/次</td></tr>
<tr><td>港怡医院</td><td>✅</td><td>新+好</td></tr>
<tr><td>香港港安（荃湾）</td><td>✅</td><td>综合</td></tr>
<tr><td>浸信会医院</td><td>✅</td><td>综合</td></tr>
<tr><td>玛嘉烈医院</td><td>✅</td><td>公立，需转介</td></tr>
</table>
<h3>C. 公立物理治疗</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>预约</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>HA 物理治疗部</strong></td><td>需 GP 转介</td><td>$135/次</td></tr>
<tr><td><strong>专科门诊物理治疗</strong></td><td>2300 6555</td><td>$135/次</td></tr>
</table>
<hr>
<h2>🏃 第三部分：复康中心（Rehabilitation Centre）</h2>
<p>> <strong>服务范围</strong>：中风复康、术后复康、神经复康、老人复康、运动复康  <br>> <strong>特点</strong>：<strong>多学科团队</strong>（医生+物理治疗+职业治疗+言语治疗+社工）</p>
<h3>A. 私立复康中心</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>区域</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>香港复康力量</strong></td><td>多区</td><td>慈善机构</td></tr>
<tr><td><strong>养和复康中心</strong></td><td>跑马地</td><td>高端</td></tr>
<tr><td><strong>香港防癌会</strong></td><td>黄竹坑</td><td>癌症复康</td></tr>
<tr><td><strong>浸会医院复康部</strong></td><td>九龙塘</td><td>综合</td></tr>
<tr><td><strong>亚洲复康中心</strong></td><td>中环</td><td>运动复康</td></tr>
<tr><td><strong>Heal Health 复康</strong></td><td>多区</td><td>中高端</td></tr>
</table>
<h3>B. 公立复康机构</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>区域</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>沙田医院</strong></td><td>沙田</td><td>老人/复康/宁养</td></tr>
<tr><td><strong>大埔医院</strong></td><td>大埔</td><td>老人/复康</td></tr>
<tr><td><strong>灵实医院</strong></td><td>将军澳</td><td>老人/复康/宁养</td></tr>
<tr><td><strong>黄竹坑医院</strong></td><td>黄竹坑</td><td>中风/脑科复康</td></tr>
<tr><td><strong>东华三院黄大仙医院</strong></td><td>黄大仙</td><td>老人/复康</td></tr>
<tr><td><strong>香港红十字会医院</strong></td><td>多区</td><td>复康服务</td></tr>
<tr><td><strong>职业治疗中心</strong></td><td>多区</td><td>HA 辖下</td></tr>
</table>
<h3>C. 慈善复康机构</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>服务</th><th>电话</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>香港复康会</strong></td><td>中风/残疾/老人</td><td>2297 6323</td></tr>
<tr><td><strong>香港防癌会</strong></td><td>癌症复康</td><td>3921 3821</td></tr>
<tr><td><strong>香港聋人福利促进会</strong></td><td>听障服务</td><td>2529 6828</td></tr>
<tr><td><strong>协康会</strong></td><td>自闭/儿童</td><td>2776 3111</td></tr>
<tr><td><strong>扶康会</strong></td><td>智障服务</td><td>2522 1624</td></tr>
<tr><td><strong>香港盲人辅导会</strong></td><td>视障服务</td><td>2775 3838</td></tr>
<tr><td><strong>香港伤健协会</strong></td><td>残疾/共融</td><td>2338 2444</td></tr>
<tr><td><strong>伸手助人协会</strong></td><td>老人服务</td><td>2522 7424</td></tr>
</table>
<hr>
<h2>🧠 第四部分：精神科/心理健康（专项）</h2>
<h3>A. 公立精神科</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>区域</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>葵涌医院</strong></td><td>葵涌</td><td>全港最大精神科</td></tr>
<tr><td><strong>青山医院</strong></td><td>屯门</td><td>精神科专科</td></tr>
<tr><td><strong>九龙医院</strong></td><td>九龙</td><td>精神科/胸肺</td></tr>
<tr><td><strong>东区医院精神科</strong></td><td>柴湾</td><td>港岛东</td></tr>
<tr><td><strong>玛丽医院精神科</strong></td><td>薄扶林</td><td>港岛西</td></tr>
<tr><td><strong>威尔斯亲王医院精神科</strong></td><td>沙田</td><td>新界东</td></tr>
</table>
<h3>B. 私立精神科</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>区域</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>养和医院精神科</strong></td><td>跑马地</td><td>综合</td></tr>
<tr><td><strong>私人精神科医生</strong></td><td>中环/尖沙咀</td><td>独立执业</td></tr>
<tr><td><strong>尚至精神健康中心</strong></td><td>中环</td><td>中高端</td></tr>
<tr><td><strong>匡乔精神科</strong></td><td>中环</td><td>中高端</td></tr>
</table>
<h3>C. 心理咨询</h3>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>收费</th><th>说明</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>临床心理学家</strong></td><td>$1,500-3,000/次</td><td>评估+治疗</td></tr>
<tr><td><strong>辅导心理学家</strong></td><td>$800-1,500/次</td><td>一般辅导</td></tr>
<tr><td><strong>家庭治疗</strong></td><td>$1,200-2,000/次</td><td>家庭系统</td></tr>
<tr><td><strong>儿童心理</strong></td><td>$1,000-2,000/次</td><td>儿童/青少年</td></tr>
</table>
<h3>D. 24h 心理危机热线</h3>
<table border="1" cellpadding="6">
<tr><th>热线</th><th>电话</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>撒瑪利亞防止自殺會</td><td><strong>2389 2222</strong></td></tr>
<tr><td>撒瑪利亞會</td><td><strong>2896 0000</strong></td></tr>
<tr><td>生命热线</td><td><strong>2382 2992</strong></td></tr>
<tr><td>撒瑪利亞少年热线</td><td><strong>2389 2223</strong></td></tr>
<tr><td>协青社（青少年）</td><td><strong>2322 4268</strong></td></tr>
</table>
<hr>
<h2>👵 第五部分：老人专项服务</h2>
<h3>A. 老人评估/复康</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>服务</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>长者健康中心</strong>（18 间）</td><td>健康评估、疫苗、慢性病</td></tr>
<tr><td><strong>老人科专科门诊</strong></td><td>综合老年病</td></tr>
<tr><td><strong>老人日间医院</strong></td><td>复康+社交</td></tr>
<tr><td><strong>老人日间护理中心</strong></td><td>暂托、护理</td></tr>
<tr><td><strong>老人专科复康</strong></td><td>中风、骨科复康</td></tr>
</table>
<h3>B. 老人住宿/暂托</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>收费</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>安老院</strong>（资助）</td><td>$2,000-6,000/月</td><td>需轮候</td></tr>
<tr><td><strong>私人安老院</strong></td><td>$10,000-30,000/月</td><td>多区</td></tr>
<tr><td><strong>护理安老院</strong></td><td>$15,000-40,000/月</td><td>高护理</td></tr>
<tr><td><strong>暂托服务</strong></td><td>$100-300/日</td><td>短期</td></tr>
</table>
<h3>C. 痴呆症专项</h3>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>服务</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>香港认知障碍症协会</strong></td><td>家属支持、训练</td></tr>
<tr><td><strong>赛马会耆智园</strong></td><td>痴呆症专门照护</td></tr>
<tr><td><strong>伸手助人协会</strong></td><td>记忆诊所、培训</td></tr>
</table>
<hr>
<h2>🦵 第六部分：矫形/义肢/辅助器具</h2>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>服务</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>HA 义肢及矫形服务</strong></td><td>公立义肢（需转介）</td></tr>
<tr><td><strong>私人义肢中心</strong></td><td>多区（中环、九龙）</td></tr>
<tr><td><strong>嘉华义肢中心</strong></td><td>综合</td></tr>
<tr><td><strong>香港失明人协进会</strong></td><td>视障辅助</td></tr>
</table>
<hr>
<h2>💼 第七部分：保险/IFA 客户咨询专用</h2>
<h3>Q1：高端客户要做高端体检，去哪里？</h3>
> A：<strong>综合高端体检中心</strong>（3,000-15,000 港币）：
> - <strong>养和医院</strong>（综合）
> - <strong>港怡医院</strong>（综合）
> - <strong>香港港安</strong>（综合）
> - <strong>尚至医疗</strong>（中高端）
> - <strong>匡乔医疗</strong>（高端 + 基因）
> - <strong>美邦/快验保</strong>（中端）
> - <strong>医思健康</strong>（医美+体检）
<h3>Q2：客户中风后复康，怎么走？</h3>
> A：<strong>多学科复康</strong>：
> 1. <strong>急性期</strong> → 公立医院（玛丽、伊利沙伯、威尔斯）
> 2. <strong>复康期</strong> → 公立复康医院（沙田、大埔、灵实）
>    或 → 私立复康（养和、浸会）
> 3. <strong>社区复康</strong> → 物理治疗中心（多区连锁）
> 4. <strong>家居复康</strong> → 社区复康服务
<h3>Q3：客户有运动损伤（如十字韧带撕裂），去哪做手术？</h3>
> A：<strong>运动医学专科</strong>：
> - <strong>养和运动医学中心</strong>（顶级）
> - <strong>香港港安骨科中心</strong>（优质）
> - <strong>港怡骨科中心</strong>（新+好）
> - <strong>玛丽医院骨科</strong>（公立教学）
<h3>Q4：客户有精神科问题，公立私立怎么选？</h3>
> A：
> - <strong>公立</strong>（葵涌、青山、九龙医院）：需转介，免费但轮候长
> - <strong>私立</strong>（养和精神科、尚至、匡乔）：无轮候，$1,500-3,000/次
> - <strong>心理咨询</strong>：私人心理学家，$1,000-3,000/次
> - <strong>急症/危机</strong>：撒瑪利亞 2389 2222
<h3>Q5：客户家有自闭症小孩，去哪评估/训练？</h3>
> A：
> - <strong>协康会</strong>（2776 3111）— 自闭症儿童训练
> - <strong>扶康会</strong>（2522 1624）— 智障
> - <strong>香港儿童医院</strong>（3513 3888）— 公立儿童专科
> - <strong>养和儿童发展中心</strong>（私立）
> - <strong>匡乔儿童发展</strong>（中高端）
<h3>Q6：客户需要物理治疗（腰背痛/运动伤），如何推荐？</h3>
> A：
> - <strong>医院附设</strong>（养和/港怡/港安）：$800-1,500/次
> - <strong>私人连锁</strong>（卓健/盈健/匡乔）：$500-1,200/次
> - <strong>独立 PT 中心</strong>（多区）：$500-1,000/次
> - <strong>公立</strong>（需转介）：$135/次
<h3>Q7：老人客户想找老人科医生？</h3>
> A：
> - <strong>公立</strong>：长者健康中心（18 间免费）+ 公立医院老人科门诊
> - <strong>私立</strong>：养和老人科、港安老人科、尚至、匡乔

<p>> <strong>重要免责声明</strong>：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体就医决策请咨询医生或医院官方。</p>`
  },
  "2.6.8 香港保险直付医院清单": {
    id: "hkm_2_6_8",
    title: "2.6.8 香港保险直付医院清单",
    content: `<h1>香港保险直付医院清单（2026 版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>覆盖范围</strong>：香港主流保险公司直付网络（养和、港安、港怡、明德、圣保禄等）<br>> <strong>数据说明</strong>：直付协议<strong>可能调整</strong>，使用前请打保险公司或医院确认</p>
<hr>
<h2>关键概念：什么是"直付"？</h2>
<pre><code>免找数 / 直付 (Direct Billing / Cashless)
= 客户住院/手术时，保险公司直接和医院结算
= 客户不用先垫付几十万
= 适用：高端医疗险（含住院直付条款）
<p>垫付 / 先付后赔 (Reimbursement)<br>= 客户先付所有费用<br>= 出院后凭单据向保险公司索赔<br>= 适用：中端医疗险 / 高端医疗险（无直付条款时）</code></pre></p>
<p><strong>客户咨询重点</strong>：<br><li>"我的医疗险能不能直付？"→ 看保单有没有 "Direct Billing" 条款</li><br><li>"哪些医院能直付？"→ 保险公司"网络医院清单"</li><br><li>"网络外能不能赔？"→ 通常能，但要先付后赔</li></p>
<hr>
<h2>一、主流保险公司直付网络速查</h2>
<h3>AIA 友邦（AIA Hong Kong）</h3>
<p>> <strong>热线</strong>：2232 8888（客户服务）  <br>> <strong>直付专线</strong>：2232 8888 转 直付  <br>> <strong>网络</strong>：<strong>最广</strong>，几乎覆盖所有香港公立和私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>友邦直付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td>顶级网络</td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安（荃湾/司徒拔道）</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
<tr><td>圣德肋撒医院</td><td>支持</td><td></td></tr>
<tr><td>播道医院</td><td>支持</td><td></td></tr>
<tr><td>嘉诺撒医院</td><td>支持</td><td></td></tr>
<tr><td>玛丽医院</td><td>支持（公立急症）</td><td></td></tr>
<tr><td>伊利沙伯医院</td><td>支持（公立急症）</td><td></td></tr>
</table>
<hr>
<h3>Prudential 保诚（PRUhealth）</h3>
<p>> <strong>热线</strong>：2281 1333  <br>> <strong>直付专线</strong>：2281 1333 转 直付  <br>> <strong>网络</strong>：覆盖主要私立医院，公立需先付后赔</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>保诚实付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安（荃湾/司徒拔道）</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
<tr><td>圣德肋撒医院</td><td>支持</td><td></td></tr>
<tr><td>仁安医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>AXA 安盛（AXA · 安盛医疗保）</h3>
<p>> <strong>热线</strong>：2862 7878  <br>> <strong>直付专线</strong>：2862 7878 转 直付  <br>> <strong>网络</strong>：覆盖主要私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>安盛直付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
<tr><td>圣德肋撒医院</td><td>支持</td><td></td></tr>
<tr><td>仁安医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>Manulife 宏利（Manulife · 活亮人生医疗保）</h3>
<p>> <strong>热线</strong>：2510 3941  <br>> <strong>网络</strong>：主要私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>宏利直付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
<tr><td>圣德肋撒医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>FTLife 富通保险（前称大都会）</h3>
<p>> <strong>热线</strong>：2866 8898  <br>> <strong>网络</strong>：主要私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>FTLife 直付</th><th>备注</th></tr>
<tr><td>------</td><td>------------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>Cigna 信诺香港</h3>
<p>> <strong>热线</strong>：2293 1000  <br>> <strong>网络</strong>：国际网络广，香港主要私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>信诺直付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>永明金融（Sun Life · 永明康健保）</h3>
<p>> <strong>热线</strong>：2977 8888  <br>> <strong>网络</strong>：主要私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>永明直付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
<tr><td>浸信会医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>中国人寿（海外）（China Life · 健康保）</h3>
<p>> <strong>热线</strong>：3999 5519  <br>> <strong>网络</strong>：主要私立医院</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>国寿直付</th><th>备注</th></tr>
<tr><td>------</td><td>----------</td><td>------</td></tr>
<tr><td>养和医院</td><td>支持</td><td></td></tr>
<tr><td>港怡医院</td><td>支持</td><td></td></tr>
<tr><td>明德国际</td><td>支持</td><td></td></tr>
<tr><td>香港港安</td><td>支持</td><td></td></tr>
<tr><td>圣保禄医院</td><td>支持</td><td></td></tr>
</table>
<hr>
<h3>其他保险公司</h3>
<table border="1" cellpadding="6">
<tr><th>保险公司</th><th>热线</th><th>直付网络</th></tr>
<tr><td>---------</td><td>------</td><td>----------</td></tr>
<tr><td>忠意保险（Generali）</td><td>2522 0808</td><td>主要私立</td></tr>
<tr><td>苏黎世保险（Zurich）</td><td>2903 9388</td><td>主要私立</td></tr>
<tr><td>太平洋保险</td><td>2869 0688</td><td>主要私立</td></tr>
<tr><td>蓝十字（Blue Cross）</td><td>2828 1166</td><td>主要私立</td></tr>
<tr><td>香港人壽（HK Life）</td><td>2290 2882</td><td>主要私立</td></tr>
<tr><td>周大福人寿（CTF Life）</td><td>2886 2888</td><td>主要私立</td></tr>
<tr><td>立桥人寿</td><td>2299 3333</td><td>主要私立</td></tr>
</table>
<hr>
<h2>二、按"客户场景"推荐保险公司</h2>
<h3>💼 高端客户（年保费 5 万+）</h3>
<p><strong>首选</strong>：<strong>AIA 友邦</strong>（网络最广）、<strong>保诚</strong>、<strong>安盛</strong>  <br><strong>产品</strong>：<br><li>AIA 亚洲至尊医疗保</li><br><li>保诚医无忧</li><br><li>安盛卓越医疗保</li><br><li>友邦 / 保诚 / 安盛都有"全球含美国"选项</li></p>
<p><strong>直付优势</strong>：<br><li>养和 / 港怡 / 明德<strong>全部直付</strong></li><br><li>24h 预先批核</li><br><li>大额手术<strong>无需垫付</strong></li></p>
<hr>
<h3>👨‍👩‍👧 中产家庭（年保费 1-5 万）</h3>
<p><strong>首选</strong>：<strong>AIA</strong>、<strong>保诚</strong>、<strong>宏利</strong>、<strong>永明</strong>  <br><strong>产品</strong>：<br><li>AIA 中端医疗保（如「亚洲至尊」半私家房）</li><br><li>保诚医无忧</li><br><li>宏利活亮人生</li><br><li>永明康健保</li></p>
<p><strong>直付范围</strong>：<br><li>私立医院<strong>全部直付</strong>（养和、港怡、港安等）</li><br><li>公立医院<strong>先付后赔</strong>（持有效单据）</li></p>
<hr>
<h3>🌏 内地客户（年保费 2-10 万）</h3>
<p><strong>首选</strong>：<strong>AIA</strong>、<strong>保诚</strong>、<strong>安盛</strong>（<strong>网络最广</strong>）  <br><strong>产品</strong>：<br><li>AIA 全球医疗保（内地客户首选）</li><br><li>保诚全球医疗</li><br><li>安盛全球医疗</li></p>
<p><strong>直付优势</strong>：<br><li>内地客户住院，<strong>直付</strong>养和/港怡</li><br><li>无需先垫付大额费用</li><br><li>部分公司提供"医疗管家"服务</li></p>
<hr>
<h3>💰 高端医保（年保费 10 万+）</h3>
<p><strong>首选</strong>：<strong>AIA 至尊</strong>、<strong>保诚尊尚</strong>、<strong>安盛至尊</strong>  <br><strong>特点</strong>：<br><li><strong>全球含美国</strong></li><br><li><strong>私家房/豪华房</strong></li><br><li><strong>保额 5000 万+</strong></li><br><li><strong>直付</strong>所有顶级医院</li></p>
<hr>
<h2>三、免找数流程（5 步）</h2>
<pre><code>1. 客户住院/手术
   ↓
<li>客户/医院通知保险公司（直付专线）</li>
   ↓
<li>保险公司预先批核（Pre-Authorization）</li>
   ↓
<li>医院确认 → 客户签字（出院时无需付费）</li>
   ↓
<li>保险公司与医院直接结算</code></pre></li>
<p><strong>关键提示</strong>：<br><li><strong>必须先申请预先批核</strong>，不能事后补救</li><br><li>紧急情况（999 救护车）→ 先住院稳定 → 24-48 小时内补办直付申请</li><br><li>部分保险公司要求<strong>至少 3 个工作日前</strong>申请</li></p>
<hr>
<h2>四、Q&A 客户咨询专用</h2>
<h3>Q1：客户问"我的医疗险能直付吗？"</h3>
> A：检查保单：
> 1. 是否有"Direct Billing" / "免找数"条款
> 2. 保险公司"网络医院清单"上是否有目标医院
> 3. 医院是否在保险公司的直付网络
> <strong>三步都满足</strong> = 可以直付
<h3>Q2：哪些保险公司网络最广？</h3>
> A：<strong>AIA 友邦</strong> = 香港网络最广（覆盖几乎所有医院）  
> 其次：<strong>保诚、安盛、宏利、永明</strong>（覆盖主要私立医院）  
> 小型保险公司（周大福人寿、立桥）：<strong>网络较窄</strong>（需逐家确认）
<h3>Q3：公立医院能直付吗？</h3>
> A：<strong>部分支持</strong>：
> - AIA：✅ 公立直付（养和、玛丽、伊利沙伯等都支持）
> - 保诚、安盛、宏利：<strong>多数先付后赔</strong>
> - 紧急情况（A&E 急症）：<strong>多数先付</strong>，事后凭单据索赔
<h3>Q4：直付前要做什么？</h3>
> A：<strong>5 步</strong>：
> 1. 客户告诉医生要住院/手术
> 2. 客户或医院打保险公司直付专线
> 3. 提交医生报告 + 费用预算
> 4. 保险公司<strong>1-3 个工作日</strong>批核
> 5. 客户/医院收到批核信 → 住院
> <strong>注意</strong>：<strong>必须提前申请</strong>，临时改直付<strong>不受理</strong>
<h3>Q5：客户在养和住院，直付后还要付什么？</h3>
> A：客户仍需支付：
> - <strong>自付额/垫底费</strong>（Deductible），如：每年 $10,000-$50,000
> - <strong>保单不覆盖的项目</strong>（如：陪床、特殊膳食、电话费等）
> - <strong>超出限额的部分</strong>（如：保额 $1000 万，但账单 $1500 万）
<h3>Q6：直付流程出错怎么办？</h3>
> A：
> - 客户先<strong>垫付</strong>所有费用
> - 出院后<strong>凭单据</strong>向保险公司索赔
> - 提交：医疗报告、收据、处方、出院摘要
> - 保险公司 14-30 个工作日<strong>审核赔款</strong>
> - <strong>保留所有单据</strong>（医院、药房、检查报告等）
<hr>
<h2>五、关键术语速查</h2>
<table border="1" cellpadding="6">
<tr><th>术语</th><th>英文</th><th>含义</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>直付</strong></td><td>Direct Billing</td><td>保险公司直接和医院结算</td></tr>
<tr><td><strong>免找数</strong></td><td>Cashless</td><td>同上（香港叫法）</td></tr>
<tr><td><strong>预先批核</strong></td><td>Pre-Authorization</td><td>住院前向保险公司申请直付</td></tr>
<tr><td><strong>垫底费</strong></td><td>Deductible</td><td>客户每年自付金额</td></tr>
<tr><td><strong>共付比例</strong></td><td>Co-insurance</td><td>超出垫底费后，客户自付比例</td></tr>
<tr><td><strong>保额上限</strong></td><td>Annual/Maximum Benefit</td><td>每年/总保额上限</td></tr>
<tr><td><strong>网络医院</strong></td><td>Network Hospital</td><td>保险公司有直付协议的医院</td></tr>
<tr><td><strong>网络外</strong></td><td>Out-of-Network</td><td>不在直付网络的医院</td></tr>
</table>

<p>> 重要免责声明：以上信息仅供参考，不构成保险建议。具体保障以保单条款为准。</p>`
  },
  "2.6.9 香港手术住院费参考": {
    id: "hkm_2_6_9",
    title: "2.6.9 香港手术住院费参考",
    content: `<h1>香港手术住院费参考（2026 版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>用途</strong>：给客户展示"为什么需要医疗险"的最直观工具<br>> <strong>数据说明</strong>：所有费用<strong>仅供参考</strong>，实际费用因医院/医生/病情差异较大</p>
<hr>
<h2>关键概念</h2>
<pre><code>公立医院（港人）：$120-$5,000/日（含手术、住院）
公立医院（非港人）：$5,000-$50,000/日
私立医院（普通房）：$1,500-$3,000/日
私立医院（半私家）：$3,000-$6,000/日
私立医院（私家房）：$5,000-$15,000/日
手术费（私立）：$50,000-$1,000,000+
ICU（深切治疗）：$30,000-$80,000/日</code></pre>
<p><strong>关键洞察</strong>：<br><li>一场癌症治疗（手术+化疗+标靶）= <strong>$200 万-$500 万</strong></li><br><li>心脏搭桥手术 = <strong>$80 万-$150 万</strong></li><br><li>严重中风 ICU 一个月 = <strong>$200 万+</strong></li><br><li>普通产子（私家房+剖腹）= <strong>$10 万-$20 万</strong></li></p>
<hr>
<h2>一、住院费基础（每日）</h2>
<h3>公立医院（港人/合资格人士）</h3>
<table border="1" cellpadding="6">
<tr><th>房型</th><th>每日费用</th></tr>
<tr><td>------</td><td>----------</td></tr>
<tr><td>急症室分流后住院</td><td>$120-$1,190/次</td></tr>
<tr><td>普通病房住院</td><td>$120/日（首日 $5,000 入院费）</td></tr>
<tr><td>ICU（深切治疗）</td><td>$24,000/日（首日 $5,000 入院费）</td></tr>
</table>
<h3>公立医院（非港人/旅客）</h3>
<table border="1" cellpadding="6">
<tr><th>房型</th><th>每日费用</th></tr>
<tr><td>------</td><td>----------</td></tr>
<tr><td>急症室分流</td><td>$1,190-$2,500/次</td></tr>
<tr><td>普通病房</td><td>$5,000/日</td></tr>
<tr><td>ICU</td><td>$24,000/日</td></tr>
</table>
<h3>私立医院（按房型）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>普通房</th><th>半私家</th><th>私家</th><th>ICU</th></tr>
<tr><td>------</td><td>--------</td><td>--------</td><td>------</td><td>-----</td></tr>
<tr><td>养和医院</td><td>$1,500-2,500</td><td>$3,000-5,000</td><td>$5,000-12,000</td><td>$20,000-30,000/日</td></tr>
<tr><td>港怡医院</td><td>$1,500-2,000</td><td>$2,500-4,000</td><td>$4,500-8,000</td><td>$15,000-25,000/日</td></tr>
<tr><td>明德国际</td><td>$2,500-3,500</td><td>$4,500-6,500</td><td>$7,000-15,000</td><td>$25,000-40,000/日</td></tr>
<tr><td>香港港安</td><td>$1,500-2,200</td><td>$2,800-4,500</td><td>$4,500-9,000</td><td>$18,000-30,000/日</td></tr>
<tr><td>圣保禄医院</td><td>$1,200-1,800</td><td>$2,200-3,500</td><td>$3,500-6,500</td><td>$15,000-25,000/日</td></tr>
<tr><td>浸信会医院</td><td>$1,200-1,800</td><td>$2,200-3,500</td><td>$3,500-6,500</td><td>$15,000-25,000/日</td></tr>
<tr><td>圣德肋撒医院</td><td>$1,000-1,500</td><td>$1,800-2,800</td><td>$3,000-5,500</td><td>$12,000-20,000/日</td></tr>
<tr><td>仁安医院</td><td>$1,200-1,800</td><td>$2,200-3,500</td><td>$3,500-6,500</td><td>$15,000-25,000/日</td></tr>
<tr><td>嘉诺撒医院</td><td>$1,500-2,500</td><td>$3,000-4,500</td><td>$4,500-8,000</td><td>$18,000-28,000/日</td></tr>
<tr><td>播道医院</td><td>$1,000-1,500</td><td>$1,800-2,800</td><td>$3,000-5,500</td><td>$12,000-20,000/日</td></tr>
</table>
<p>> 注：实际费用因医生级别、入院时间、附加服务而异</p>
<hr>
<h2>二、主要手术费参考（私立医院）</h2>
<h3>心血管手术</h3>
<table border="1" cellpadding="6">
<tr><th>手术</th><th>费用范围（港币）</th></tr>
<tr><td>------</td><td>-----------------</td></tr>
<tr><td><strong>心脏搭桥手术</strong> (CABG)</td><td>$80 万-$150 万</td></tr>
<tr><td><strong>心脏支架</strong> (PCI/Stent)</td><td>$30 万-$80 万</td></tr>
<tr><td><strong>心脏起搏器植入</strong></td><td>$30 万-$60 万</td></tr>
<tr><td><strong>瓣膜置换</strong></td><td>$100 万-$200 万</td></tr>
<tr><td><strong>射频消融</strong></td><td>$30 万-$60 万</td></tr>
</table>
<h3>癌症治疗</h3>
<table border="1" cellpadding="6">
<tr><th>治疗</th><th>费用范围（港币）</th></tr>
<tr><td>------</td><td>-----------------</td></tr>
<tr><td><strong>癌症手术</strong>（一般）</td><td>$30 万-$100 万</td></tr>
<tr><td><strong>达芬奇机械臂手术</strong></td><td>$50 万-$120 万</td></tr>
<tr><td><strong>化疗</strong>（一周期）</td><td>$3 万-$10 万</td></tr>
<tr><td><strong>标靶治疗</strong>（一月）</td><td>$5 万-$30 万</td></tr>
<tr><td><strong>免疫治疗</strong>（一周期）</td><td>$5 万-$15 万</td></tr>
<tr><td><strong>放射治疗</strong>（一疗程）</td><td>$15 万-$50 万</td></tr>
<tr><td><strong>骨髓移植</strong></td><td>$100 万-$300 万</td></tr>
<tr><td><strong>CAR-T 治疗</strong></td><td>$300 万-$500 万</td></tr>
</table>
<h3>神经系统手术</h3>
<table border="1" cellpadding="6">
<tr><th>手术</th><th>费用范围（港币）</th></tr>
<tr><td>------</td><td>-----------------</td></tr>
<tr><td><strong>脑部肿瘤切除</strong></td><td>$50 万-$150 万</td></tr>
<tr><td><strong>脑动脉瘤手术</strong></td><td>$80 万-$200 万</td></tr>
<tr><td><strong>脊椎手术</strong>（一般）</td><td>$30 万-$80 万</td></tr>
<tr><td><strong>椎间盘突出切除</strong></td><td>$20 万-$50 万</td></tr>
</table>
<h3>骨科手术</h3>
<table border="1" cellpadding="6">
<tr><th>手术</th><th>费用范围（港币）</th></tr>
<tr><td>------</td><td>-----------------</td></tr>
<tr><td><strong>膝关节置换</strong></td><td>$30 万-$60 万</td></tr>
<tr><td><strong>髋关节置换</strong></td><td>$30 万-$60 万</td></tr>
<tr><td><strong>十字韧带重建</strong></td><td>$15 万-$30 万</td></tr>
<tr><td><strong>肩关节镜</strong></td><td>$10 万-$25 万</td></tr>
<tr><td><strong>骨折复位</strong></td><td>$10 万-$30 万</td></tr>
</table>
<h3>妇产科</h3>
<table border="1" cellpadding="6">
<tr><th>服务</th><th>费用范围（港币）</th></tr>
<tr><td>------</td><td>-----------------</td></tr>
<tr><td><strong>自然分娩</strong>（私家房，3 晚）</td><td>$5 万-$10 万</td></tr>
<tr><td><strong>剖腹产</strong>（私家房，5 晚）</td><td>$10 万-$20 万</td></tr>
<tr><td><strong>试管婴儿 (IVF)</strong>（一周期）</td><td>$15 万-$25 万</td></tr>
<tr><td><strong>产前检查</strong>（全套）</td><td>$3 万-$6 万</td></tr>
</table>
<h3>其他常见手术</h3>
<table border="1" cellpadding="6">
<tr><th>手术</th><th>费用范围（港币）</th></tr>
<tr><td>------</td><td>-----------------</td></tr>
<tr><td><strong>白内障手术</strong>（双眼）</td><td>$5 万-$15 万</td></tr>
<tr><td><strong>胆囊切除</strong>（腹腔镜）</td><td>$10 万-$25 万</td></tr>
<tr><td><strong>阑尾切除</strong></td><td>$8 万-$20 万</td></tr>
<tr><td><strong>痔疮手术</strong></td><td>$5 万-$15 万</td></tr>
<tr><td><strong>扁桃腺切除</strong></td><td>$5 万-$15 万</td></tr>
<tr><td><strong>胃镜</strong>（检查）</td><td>$5,000-$15,000</td></tr>
<tr><td><strong>肠镜</strong>（检查）</td><td>$8,000-$20,000</td></tr>
<tr><td><strong>肾结石</strong>（体外碎石）</td><td>$5 万-$15 万</td></tr>
<tr><td><strong>甲状腺切除</strong></td><td>$15 万-$30 万</td></tr>
</table>
<hr>
<h2>三、ICU 深切治疗费用（私立医院）</h2>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>每日 ICU 费用</th></tr>
<tr><td>------</td><td>--------------</td></tr>
<tr><td>养和医院</td><td>$20,000-$30,000/日</td></tr>
<tr><td>港怡医院</td><td>$15,000-$25,000/日</td></tr>
<tr><td>明德国际</td><td>$25,000-$40,000/日</td></tr>
<tr><td>香港港安</td><td>$18,000-$30,000/日</td></tr>
<tr><td>圣保禄医院</td><td>$15,000-$25,000/日</td></tr>
<tr><td>浸信会医院</td><td>$15,000-$25,000/日</td></tr>
<tr><td>仁安医院</td><td>$15,000-$25,000/日</td></tr>
</table>
<p>> 重大病情 ICU 治疗 <strong>3-7 天</strong> + 普通病房 <strong>2-3 周</strong> = <strong>$100 万-$300 万</strong>（私家房）</p>
<hr>
<h2>四、检查/诊断费用</h2>
<table border="1" cellpadding="6">
<tr><th>检查</th><th>公立</th><th>私立</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>MRI 磁力共振</strong></td><td>$1,000-$2,000</td><td>$5,000-$15,000</td></tr>
<tr><td><strong>CT 扫描</strong></td><td>$500-$1,500</td><td>$3,000-$8,000</td></tr>
<tr><td><strong>PET-CT</strong>（癌症）</td><td>$8,000-$15,000</td><td>$20,000-$40,000</td></tr>
<tr><td><strong>超声波</strong></td><td>$300-$800</td><td>$1,500-$4,000</td></tr>
<tr><td><strong>X 光</strong></td><td>$200-$500</td><td>$1,000-$2,500</td></tr>
<tr><td><strong>心电图 ECG</strong></td><td>$300-$800</td><td>$1,500-$3,000</td></tr>
<tr><td><strong>运动心电图</strong></td><td>$1,500-$3,000</td><td>$5,000-$12,000</td></tr>
<tr><td><strong>心脏超声波</strong></td><td>$1,500-$3,000</td><td>$5,000-$15,000</td></tr>
<tr><td><strong>内视镜（胃/肠）</strong></td><td>$2,000-$5,000</td><td>$8,000-$20,000</td></tr>
<tr><td><strong>活检</strong></td><td>$3,000-$8,000</td><td>$10,000-$30,000</td></tr>
<tr><td><strong>验血</strong>（全套）</td><td>$500-$1,500</td><td>$2,000-$5,000</td></tr>
</table>
<hr>
<h2>五、专科门诊参考价（私立）</h2>
<table border="1" cellpadding="6">
<tr><th>专科</th><th>诊金范围</th></tr>
<tr><td>------</td><td>----------</td></tr>
<tr><td>普通科</td><td>$300-800</td></tr>
<tr><td>心脏科</td><td>$800-2,500</td></tr>
<tr><td>脑神经科</td><td>$1,000-3,000</td></tr>
<tr><td>肿瘤科</td><td>$1,000-3,500</td></tr>
<tr><td>骨科</td><td>$800-2,500</td></tr>
<tr><td>皮肤科</td><td>$600-2,000</td></tr>
<tr><td>眼科</td><td>$600-2,000</td></tr>
<tr><td>耳鼻喉科</td><td>$600-2,000</td></tr>
<tr><td>妇产科</td><td>$800-2,500</td></tr>
<tr><td>儿科</td><td>$600-2,000</td></tr>
<tr><td>内分泌</td><td>$700-2,000</td></tr>
<tr><td>精神科</td><td>$1,000-3,000</td></tr>
<tr><td>复康科</td><td>$800-2,000</td></tr>
</table>
<p>> 私立专科诊金+药费，<strong>首次通常 $1,500-$3,500</strong>（含药）</p>
<hr>
<h2>六、长期治疗费用</h2>
<h3>慢性病管理</h3>
<table border="1" cellpadding="6">
<tr><th>慢性病</th><th>每月费用</th></tr>
<tr><td>--------</td><td>----------</td></tr>
<tr><td><strong>糖尿病</strong>（药物+检查）</td><td>$1,000-$5,000</td></tr>
<tr><td><strong>高血压</strong></td><td>$500-$2,000</td></tr>
<tr><td><strong>肾衰竭透析</strong></td><td>$50,000-$100,000/月（私立）</td></tr>
<tr><td><strong>慢性阻塞性肺病</strong></td><td>$5,000-$20,000/月</td></tr>
<tr><td><strong>风湿/类风湿</strong></td><td>$3,000-$20,000/月（生物制剂）</td></tr>
</table>
<h3>长期护理</h3>
<table border="1" cellpadding="6">
<tr><th>服务</th><th>费用</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>居家护理</strong></td><td>$1,000-$3,000/日</td></tr>
<tr><td><strong>护理安老院</strong></td><td>$15,000-$40,000/月</td></tr>
<tr><td><strong>私人安老院</strong></td><td>$10,000-$30,000/月</td></tr>
<tr><td><strong>暂托服务</strong></td><td>$100-$300/日</td></tr>
</table>
<hr>
<h2>七、客户咨询常用话术</h2>
<h3>Q1：为什么需要医疗险？</h3>
> A：一场大病 = <strong>$100 万-$500 万</strong>
> 心脏搭桥：$100 万 / 癌症治疗：$300 万 / 中风 ICU：$200 万
> 公立医院（港人）虽然便宜，但<strong>轮候时间长</strong>（手术等 1-2 年）
> 私立医院<strong>质量好+快</strong>，但<strong>费用普通人难以承担</strong>
> 医疗险 = <strong>风险转移</strong>，用小钱换大保障
<h3>Q2：年保费 vs 一次治疗费用</h3>
> A：
> - 30 岁男士 年保费 <strong>$2 万-$5 万</strong>（高端医疗）
> - 一次癌症治疗 = <strong>$200 万-$500 万</strong>
> - <strong>杠杆率：1:50-1:250</strong>（一份保单换 50-250 倍保障）
<h3>Q3：自付额/垫底费有什么影响？</h3>
> A：自付额越低 → 保费越贵 → 实际用得越多
> - 自付额 $0：每次都赔（保费高 30%）
> - 自付额 $10,000：每年自付 $10,000
> - 自付额 $50,000：保费便宜，但大病才用
> <strong>建议</strong>：中产家庭<strong>选 $10,000-$20,000 自付额</strong>（保费和保障平衡）
<h3>Q4：高端 vs 中端医疗险区别？</h3>
> A：
> | 维度 | 中端医疗 | 高端医疗 |
> |------|---------|---------|
> | 房型 | 半私家 | 私家/豪华 |
> | 保额 | $500 万-$1,000 万 | $1,000 万-$5,000 万+ |
> | 地域 | 亚洲 | 全球/全球含美 |
> | 直付 | 部分 | 全部 |
> | 免找数 | 有条件 | 默认 |
> | 门诊 | 不包/选配 | 全数 |
> | 牙科 | 不包 | 部分包 |
> | 年保费 | $1 万-$3 万 | $3 万-$10 万+ |
<h3>Q5：内地客户为什么要在港买医疗险？</h3>
> A：
> - <strong>香港医疗水平世界顶级</strong>（癌症 5 年生存率国际领先）
> - <strong>私密度高</strong>（不像内地医保绑定身份证）
> - <strong>美元/港元保单</strong>（抗人民币贬值）
> - <strong>全球保障</strong>（含美/欧/日治疗）
> - <strong>续保稳定</strong>（不像内地"续保到 80 岁"但实际不保证）
<hr>
<h2>八、报价工具（IFA 实战）</h2>
<h3>场景 1：30 岁男士，高端医疗险</h3>
<pre><code>客户画像：30 岁，男，专业人士
推荐产品：AIA 亚洲至尊 / 保诚医无忧 / 安盛卓越
房型：半私家 → 私家
自付额：$0
年保费：约 $25,000-$50,000
保障：$2,500 万-$5,000 万保额</code></pre>
<h3>场景 2：40 岁家庭主妇，中端医疗险</h3>
<pre><code>客户画像：40 岁，女，家庭主妇
推荐产品：AIA 中端 / 宏利活亮人生
房型：半私家
自付额：$20,000
年保费：约 $15,000-$25,000
保障：$500 万-$1,000 万保额</code></pre>
<h3>场景 3：50 岁长者，重疾险 + 医疗险</h3>
<pre><code>客户画像：50 岁，男，临近退休
推荐组合：重疾险（一次性赔付）+ 高端医疗险
年保费：约 $50,000-$100,000
保障：重疾 $500 万 + 医疗 $2,000 万</code></pre>
<hr>
<p>> 重要免责声明：以上费用<strong>仅供参考</strong>，不构成医疗/保险建议。具体费用以医院/保险公司公告为准。</p>`
  },
  "2.6.10 香港癌症心脏儿科专题": {
    id: "hkm_2_6_10",
    title: "2.6.10 香港癌症心脏儿科专题",
    content: `<h1>香港癌症 / 心脏 / 儿科专题（2026 版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>用途</strong>：3 大最常投保的专科深度专题<br>> <strong>数据说明</strong>：医院/医生信息<strong>变动频繁</strong>，使用前请打医院确认</p>
<hr>
<h1>🔴 第一部分：癌症专题（Cancer）</h1>
<h2>香港癌症治疗的优势</h2>
<li>5 年生存率国际领先（部分癌种全球第一）</li>
<li>拥有<strong>最新标靶药、免疫治疗、CAR-T</strong></li>
<li>私密度高，不进医保系统</li>
<li>临床试验丰富</li>
<h2>主要癌症治疗中心</h2>
<h3>私立医院癌症中心</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>中心</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>养和医院</td><td>综合肿瘤科中心</td><td>香港顶级、设备最先进</td></tr>
<tr><td>香港港安（荃湾/司徒拔道）</td><td>肿瘤中心</td><td>综合、优质</td></tr>
<tr><td>港怡医院</td><td>肿瘤科</td><td>新+好</td></tr>
<tr><td>明德国际</td><td>肿瘤科</td><td>顶级私家</td></tr>
<tr><td>圣保禄医院</td><td>肿瘤科</td><td>港岛东</td></tr>
<tr><td>浸信会医院</td><td>肿瘤科</td><td>九龙</td></tr>
<tr><td>香港综合肿瘤中心 (HKIOS)</td><td>独立肿瘤中心</td><td>中环、跨医院服务</td></tr>
<tr><td>希愈肿瘤中心</td><td>中环独立</td><td>专科</td></tr>
</table>
<h3>公立医院癌症中心</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>中心</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>玛丽医院</td><td>临床肿瘤科</td><td>港大教学</td></tr>
<tr><td>伊利沙伯医院</td><td>临床肿瘤科</td><td>九龙区</td></tr>
<tr><td>威尔斯亲王医院</td><td>临床肿瘤科</td><td>中大教学</td></tr>
<tr><td>基督教联合医院</td><td>临床肿瘤科</td><td>观塘区</td></tr>
<tr><td>屯门医院</td><td>临床肿瘤科</td><td>屯门区</td></tr>
<tr><td>玛嘉烈医院</td><td>临床肿瘤科</td><td>葵青区</td></tr>
</table>
<h2>各类癌症治疗方案</h2>
<h3>1. 乳癌 (Breast Cancer)</h3>
<p><strong>筛查</strong>：<br><li>乳房 X 光造影（Mammogram）：$1,500-$3,500</li><br><li>超声波：$1,500-$3,000</li><br><li>乳房磁力共振：$5,000-$10,000</li></p>
<p><strong>治疗</strong>：<br><table border="1" cellpadding="6"><br><tr><th>治疗</th><th>费用范围</th></tr><br><tr><td>------</td><td>----------</td></tr><br><tr><td>手术（局部切除）</td><td>$50,000-$150,000</td></tr><br><tr><td>手术（乳房切除）</td><td>$80,000-$200,000</td></tr><br><tr><td>重建手术</td><td>$100,000-$300,000</td></tr><br><tr><td>化疗（一周期）</td><td>$30,000-$80,000</td></tr><br><tr><td>标靶治疗</td><td>$50,000-$150,000/月</td></tr><br><tr><td>荷尔蒙治疗</td><td>$500-$3,000/月</td></tr><br></table></p>
<p><strong>私立推荐医院</strong>：养和、港怡、港安、香港综合肿瘤中心</p>
<hr>
<h3>2. 肺癌 (Lung Cancer)</h3>
<p><strong>筛查</strong>：<br><li>低剂量 CT：$3,000-$8,000</li></p>
<p><strong>治疗</strong>：<br><table border="1" cellpadding="6"><br><tr><th>治疗</th><th>费用范围</th></tr><br><tr><td>------</td><td>----------</td></tr><br><tr><td>手术（楔形切除）</td><td>$150,000-$400,000</td></tr><br><tr><td>手术（肺叶切除）</td><td>$250,000-$500,000</td></tr><br><tr><td>化疗（一周期）</td><td>$30,000-$80,000</td></tr><br><tr><td>标靶治疗</td><td>$40,000-$150,000/月</td></tr><br><tr><td>免疫治疗</td><td>$50,000-$200,000/月</td></tr><br><tr><td>放射治疗</td><td>$100,000-$300,000/疗程</td></tr><br></table></p>
<p><strong>私立推荐</strong>：养和、港安、香港综合肿瘤中心</p>
<hr>
<h3>3. 大肠癌 (Colorectal Cancer)</h3>
<p><strong>筛查</strong>：<br><li>大肠镜：$8,000-$20,000</li><br><li>CT 虚拟大肠镜：$5,000-$15,000</li></p>
<p><strong>治疗</strong>：<br><table border="1" cellpadding="6"><br><tr><th>治疗</th><th>费用范围</th></tr><br><tr><td>------</td><td>----------</td></tr><br><tr><td>手术（腹腔镜）</td><td>$150,000-$400,000</td></tr><br><tr><td>手术（开腹）</td><td>$200,000-$500,000</td></tr><br><tr><td>化疗（一周期）</td><td>$30,000-$80,000</td></tr><br><tr><td>标靶治疗</td><td>$50,000-$200,000/月</td></tr><br></table></p>
<p><strong>私立推荐</strong>：养和、玛丽（公立教学）、港安</p>
<hr>
<h3>4. 前列腺癌 (Prostate Cancer)</h3>
<p><strong>筛查</strong>：<br><li>PSA 验血：$500-$1,500</li><br><li>磁力共振：$5,000-$15,000</li></p>
<p><strong>治疗</strong>：<br><table border="1" cellpadding="6"><br><tr><th>治疗</th><th>费用范围</th></tr><br><tr><td>------</td><td>----------</td></tr><br><tr><td>手术（达芬奇机械臂）</td><td>$250,000-$500,000</td></tr><br><tr><td>放射治疗（IMRT）</td><td>$150,000-$400,000</td></tr><br><tr><td>荷尔蒙治疗</td><td>$3,000-$15,000/月</td></tr><br><tr><td>化疗</td><td>$30,000-$80,000/周期</td></tr><br></table></p>
<p><strong>私立推荐</strong>：养和、港安、港怡</p>
<hr>
<h3>5. 肝癌 (Liver Cancer)</h3>
<p><strong>治疗</strong>：<br><table border="1" cellpadding="6"><br><tr><th>治疗</th><th>费用范围</th></tr><br><tr><td>------</td><td>----------</td></tr><br><tr><td>手术切除</td><td>$300,000-$800,000</td></tr><br><tr><td>肝移植</td><td>$1,000,000-$3,000,000</td></tr><br><tr><td>射频消融</td><td>$100,000-$300,000</td></tr><br><tr><td>标靶治疗</td><td>$50,000-$150,000/月</td></tr><br><tr><td>免疫治疗</td><td>$50,000-$200,000/月</td></tr><br></table></p>
<p><strong>私立推荐</strong>：玛丽（公立最强）、养和、香港综合肿瘤中心</p>
<hr>
<h3>6. 血癌（白血病/淋巴癌/骨髓癌）</h3>
<p><strong>治疗</strong>：<br><table border="1" cellpadding="6"><br><tr><th>治疗</th><th>费用范围</th></tr><br><tr><td>------</td><td>----------</td></tr><br><tr><td>化疗（一周期）</td><td>$30,000-$100,000</td></tr><br><tr><td>标靶治疗</td><td>$80,000-$200,000/月</td></tr><br><tr><td>骨髓移植</td><td>$500,000-$1,500,000</td></tr><br><tr><td><strong>CAR-T 治疗</strong></td><td><strong>$3,000,000-$5,000,000</strong></td></tr><br></table></p>
<p><strong>私立推荐</strong>：玛丽（公立教学）、养和</p>
<hr>
<h2>癌症新疗法</h2>
<h3>1. 标靶治疗 (Targeted Therapy)</h3>
<li>适用：多种癌症（乳癌、肺癌、大肠癌等）</li>
<li>优势：精准打击癌细胞，副作用小</li>
<li>费用：$5万-$30万/月</li>
<li>香港可用：大部分新药都已在港注册</li>
<h3>2. 免疫治疗 (Immunotherapy)</h3>
<li>适用：黑色素瘤、肺癌、肾癌、淋巴癌等</li>
<li>优势：激发自身免疫系统对抗癌症</li>
<li>费用：$5万-$20万/月</li>
<li>常用药：Keytruda (PD-1)、Opdivo (PD-1)</li>
<h3>3. CAR-T 细胞疗法</h3>
<li>适用：白血病、淋巴瘤</li>
<li>优势：个性化治疗，效果显著</li>
<li>费用：$300万-$500万</li>
<li>香港可用：玛丽医院、香港综合肿瘤中心</li>
<h3>4. 达芬奇机械臂手术</h3>
<li>适用：前列腺癌、妇科癌、泌尿癌</li>
<li>优势：精准、微创、恢复快</li>
<li>费用：比传统手术贵 $5万-$10万</li>
<hr>
<h2>癌症保险（IFA 实战）</h2>
<table border="1" cellpadding="6">
<tr><th>险种</th><th>一次性赔付</th><th>适用</th></tr>
<tr><td>------</td><td>------------</td><td>------</td></tr>
<tr><td><strong>重疾险</strong></td><td>$200万-$500万</td><td>确诊即赔</td></tr>
<tr><td><strong>癌症险</strong>（独立）</td><td>$100万-$300万</td><td>癌症专属</td></tr>
<tr><td><strong>医疗险</strong></td><td>全数赔偿</td><td>治疗费用</td></tr>
</table>
<p><strong>客户配置建议</strong>：<br><li><strong>基础</strong>：医疗险（住院+手术）$1,000万+</li><br><li><strong>进阶</strong>：医疗险 + 重疾险 $300万</li><br><li><strong>高端</strong>：高端医疗 $2,500万 + 重疾险 $500万</li></p>
<hr>
<h1>❤️ 第二部分：心脏专题（Cardiology）</h1>
<h2>香港心脏治疗的优势</h2>
<li>心血管疾病死亡率国际领先的低水平</li>
<li>24h 心脏紧急手术（如：通波仔）</li>
<li>心脏移植技术成熟</li>
<h2>主要心脏中心</h2>
<h3>私立医院心脏中心</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>中心</th><th>特色</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>养和医院</td><td>心脏科中心</td><td>香港顶级、私家最强</td></tr>
<tr><td>香港港安（荃湾/司徒拔道）</td><td>心脏中心</td><td>综合</td></tr>
<tr><td>港怡医院</td><td>心脏科</td><td>新+好</td></tr>
<tr><td>明德国际</td><td>心脏科</td><td>顶级</td></tr>
<tr><td>圣保禄医院</td><td>心脏科</td><td>港岛东</td></tr>
<tr><td>浸信会医院</td><td>心脏科</td><td>九龙</td></tr>
<tr><td>亚洲心脏中心</td><td>中环独立</td><td>专科</td></tr>
</table>
<h3>公立医院心脏中心</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>心脏科</th><th>备注</th></tr>
<tr><td>------</td><td>--------</td><td>------</td></tr>
<tr><td>玛丽医院</td><td>心脏科</td><td>港大教学</td></tr>
<tr><td>伊利沙伯医院</td><td>心脏科</td><td>九龙</td></tr>
<tr><td>威尔斯亲王医院</td><td>心脏科</td><td>中大教学</td></tr>
<tr><td>葛量洪医院</td><td>心脏专科</td><td><strong>全港最专</strong></td></tr>
<tr><td>基督教联合医院</td><td>心脏科</td><td>观塘</td></tr>
<tr><td>屯门医院</td><td>心脏科</td><td>屯门</td></tr>
</table>
<h2>心脏检查</h2>
<table border="1" cellpadding="6">
<tr><th>检查</th><th>费用</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>静态心电图</strong></td><td>$1,000-$2,500</td><td>基础</td></tr>
<tr><td><strong>运动心电图</strong></td><td>$3,000-$8,000</td><td>心绞痛检查</td></tr>
<tr><td><strong>24h 动态心电图</strong></td><td>$3,000-$8,000</td><td>心律不正</td></tr>
<tr><td><strong>心脏超声波</strong></td><td>$3,000-$8,000</td><td>心脏结构</td></tr>
<tr><td><strong>冠状动脉造影</strong></td><td>$15,000-$30,000</td><td>心脏黄金标准</td></tr>
<tr><td><strong>心脏 CT</strong></td><td>$5,000-$15,000</td><td>非侵入</td></tr>
<tr><td><strong>心脏磁力共振</strong></td><td>$8,000-$20,000</td><td>详细</td></tr>
</table>
<h2>心脏手术</h2>
<table border="1" cellpadding="6">
<tr><th>手术</th><th>费用</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>通波仔 (PCI/Stent)</strong></td><td>$30万-$80万</td></tr>
<tr><td><strong>心脏搭桥 (CABG)</strong></td><td>$80万-$150万</td></tr>
<tr><td><strong>心脏起搏器</strong></td><td>$30万-$60万</td></tr>
<tr><td><strong>瓣膜置换</strong></td><td>$100万-$200万</td></tr>
<tr><td><strong>射频消融</strong></td><td>$30万-$60万</td></tr>
<tr><td><strong>左心耳封堵术</strong></td><td>$40万-$100万</td></tr>
</table>
<h2>心脏病保险</h2>
<table border="1" cellpadding="6">
<tr><th>险种</th><th>赔付</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>重疾险</strong></td><td>急性心肌梗塞 = 一次性 $200万-$500万</td></tr>
<tr><td><strong>医疗险</strong></td><td>治疗费用全数赔</td></tr>
<tr><td><strong>心脏病专属</strong></td><td>部分公司有"心脏病复发"额外保障</td></tr>
</table>
<hr>
<h1>👶 第三部分：儿科专题（Pediatrics）</h1>
<h2>香港儿科的优势</h2>
<li>婴儿死亡率国际领先低</li>
<li>儿童医院（启德）专科齐全</li>
<li>私立儿科服务优质</li>
<h2>主要儿科中心</h2>
<h3>儿童医院（公立）</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>中心</th><th>备注</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>香港儿童医院</strong>（启德）</td><td>儿童专科转介中心</td><td>全港最强</td></tr>
<tr><td>玛丽医院</td><td>儿科</td><td>港大教学</td></tr>
<tr><td>伊利沙伯医院</td><td>儿科</td><td>九龙区</td></tr>
<tr><td>威尔斯亲王医院</td><td>儿科</td><td>中大教学</td></tr>
<tr><td>基督教联合医院</td><td>儿科</td><td>观塘</td></tr>
</table>
<h3>私立儿科</h3>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>儿科部</th><th>特色</th></tr>
<tr><td>------</td><td>--------</td><td>------</td></tr>
<tr><td>养和医院</td><td>儿科部</td><td>顶级私家</td></tr>
<tr><td>港怡医院</td><td>儿科</td><td>新+好</td></tr>
<tr><td>香港港安</td><td>儿科</td><td>综合</td></tr>
<tr><td>浸信会医院</td><td>儿科</td><td>九龙</td></tr>
<tr><td>圣保禄医院</td><td>儿科</td><td>港岛东</td></tr>
<tr><td>圣德肋撒医院</td><td>儿科</td><td>太子</td></tr>
<tr><td>仁安医院</td><td>妇产+儿科</td><td>新界产子首选</td></tr>
</table>
<h2>儿童疫苗（公费/自费）</h2>
<h3>政府免费疫苗计划</h3>
<table border="1" cellpadding="6">
<tr><th>年龄</th><th>疫苗</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>初生</td><td>卡介苗、乙型肝炎（第一剂）</td></tr>
<tr><td>2 个月</td><td>六合一（白喉、破伤风、百日咳、小儿麻痹、乙型流感嗜血杆菌、乙肝）</td></tr>
<tr><td>4 个月</td><td>六合一（第二剂）</td></tr>
<tr><td>6 个月</td><td>六合一（第三剂）、肺炎球菌</td></tr>
<tr><td>1 岁</td><td>MMR（麻腮风）、肺炎球菌加强、水痘</td></tr>
<tr><td>1.5 岁</td><td>四合一加强、肺炎球菌加强</td></tr>
<tr><td>小一</td><td>MMRV 加强、四合一</td></tr>
<tr><td>小六</td><td>四合一加强</td></tr>
</table>
<h3>自费疫苗（推荐打）</h3>
<table border="1" cellpadding="6">
<tr><th>疫苗</th><th>适用</th><th>费用（每针）</th></tr>
<tr><td>------</td><td>------</td><td>-------------</td></tr>
<tr><td><strong>轮状病毒</strong></td><td>2-6 个月</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>流感</strong></td><td>6 个月+</td><td>$200-$500</td></tr>
<tr><td><strong>HPV</strong></td><td>9-14 岁</td><td>$1,500-$2,500</td></tr>
<tr><td><strong>脑膜炎双球菌</strong></td><td>2 岁+</td><td>$1,000-$1,500</td></tr>
<tr><td><strong>日本脑炎</strong></td><td>9 个月+</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>带状疱疹</strong></td><td>50 岁+</td><td>$2,000-$4,000</td></tr>
<tr><td><strong>13 价肺炎球菌</strong></td><td>自费补打</td><td>$1,500</td></tr>
</table>
<h2>儿童常见疾病</h2>
<h3>1. 呼吸道感染</h3>
<li>感冒、流感、支气管炎、肺炎</li>
<li>治疗：$1,000-$10,000（私立）</li>
<h3>2. 肠胃疾病</h3>
<li>肠胃炎、食物中毒</li>
<li>治疗：$1,000-$5,000（私立）</li>
<h3>3. 过敏/哮喘</h3>
<li>哮喘、湿疹、过敏性鼻炎</li>
<li>长期管理：$1,000-$5,000/月</li>
<h3>4. 儿童癌症</h3>
<li>白血病、淋巴瘤、脑癌</li>
<li>治疗：$100万-$500万</li>
<h3>5. 先天性疾病</h3>
<li>先天性心脏病</li>
<li>治疗：$30万-$200万</li>
<h2>儿童保险配置</h2>
<h3>1. 儿童医疗险</h3>
<li>出生 15 天后即可投保</li>
<li>公立：GOPC + 专科</li>
<li>私立：养和、港安儿科</li>
<h3>2. 儿童重疾险</h3>
<li>0-18 岁专属</li>
<li>保额 $200万-$500万</li>
<li>保费 $3,000-$10,000/年</li>
<h3>3. 教育基金/储蓄险</h3>
<li>长期储蓄</li>
<li>提取用于教育/创业/置业</li>
<p><strong>IFA 实战建议</strong>：<br><li>宝宝出生 15 天后 → 立即投保医疗险 + 重疾险</li><br><li>0-5 岁 → 母婴健康院 + 私家儿科</li><br><li>6-18 岁 → 学校 + 私家医生</li></p>
<hr>
<h2>3 大专题 Q&A</h2>
<h3>Q1：客户问"癌症 5 年生存率，香港比内地高吗？"</h3>
> A：<strong>是的，香港领先</strong>：
> - 香港乳癌 5 年生存率：<strong>89%</strong>（vs 内地 82%）
> - 香港肺癌 5 年生存率：<strong>21%</strong>（vs 内地 19%）
> - 香港大肠癌 5 年生存率：<strong>58%</strong>（vs 内地 57%）
> - <strong>关键差异</strong>：新药可及性、私家服务、临床试验
<h3>Q2：客户问"心脏通波仔需要多少钱？"</h3>
> A：私立医院：
> - 通波仔 + 1 个支架：$30万-$50万
> - 通波仔 + 2-3 个支架：$50万-$100万
> - <strong>总费用（含住院 2-3 天）：$30万-$80万</strong>
> <strong>建议</strong>：高端医疗险必备（保额 $1,000万+）
<h3>Q3：客户问"宝宝出生后第一件事是？"</h3>
> A：
> 1. <strong>出生 15 天后</strong>：买医疗险 + 重疾险
> 2. <strong>1 个月内</strong>：登记母婴健康院（免费打疫苗）
> 3. <strong>出生证明 + 身份证</strong>：办身份证、回港证、回乡证
> 4. <strong>找家庭儿科医生</strong>：建议养和/港安儿科
> 5. <strong>保险受益人</strong>：父母/祖父母
<hr>
<p>> 重要免责声明：以上信息仅供参考，<strong>不构成医疗/保险建议</strong>。具体方案请咨询专业医生/保险顾问。</p>`
  },
  "2.6.11 香港中医名医清单": {
    id: "hkm_2_6_11",
    title: "2.6.11 香港中医名医清单",
    content: `<h1>香港中医名医清单（2026 版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>覆盖范围</strong>：香港知名中医师 + 政府资助中医诊所<br>> <strong>数据说明</strong>：医生执业机构<strong>可能变动</strong>，预约前请电话确认</p>
<hr>
<h2>关键概念</h2>
<pre><code>中医 = 传统医学（中药 + 针灸 + 推拿 + 骨伤）
西医 = 现代医学（手术 + 抗生素 + 影像）
<p>中医优势：<br><li>慢性病调理（失眠/肠胃/妇科）</li><br><li>亚健康（疲劳/焦虑）</li><br><li>老人/产后调理</li><br><li>部分疾病辅助治疗</li></p>
<p>中医劣势：<br><li>急症（车祸/中风/心梗）→ 必须西医</li><br><li>癌症/手术 → 必须西医</li><br><li>严重感染 → 必须西医</code></pre></li></p>
<hr>
<h2>一、政府资助中医诊所（18 间 · 全部 2300 6555 转）</h2>
<table border="1" cellpadding="6">
<tr><th>#</th><th>诊所</th><th>地址</th><th>挂号费</th></tr>
<tr><td>---</td><td>------</td><td>------</td><td>--------</td></tr>
<tr><td>1</td><td>中西区中医诊所 (广华医院)</td><td>油麻地窝打老道 25 号</td><td>$120</td></tr>
<tr><td>2</td><td>东区中医诊所 (东区医院)</td><td>柴湾乐民道 3 号</td><td>$120</td></tr>
<tr><td>3</td><td>湾仔中医诊所</td><td>湾仔轩尼诗道 130 号</td><td>$120</td></tr>
<tr><td>4</td><td>南区中医诊所 (玛丽医院)</td><td>薄扶林道 102 号</td><td>$120</td></tr>
<tr><td>5</td><td>观塘中医诊所</td><td>观塘协和街 130 号</td><td>$120</td></tr>
<tr><td>6</td><td>黄大仙中医诊所 (圣母医院)</td><td>黄大仙沙田坳道 118 号</td><td>$120</td></tr>
<tr><td>7</td><td>深水埗中医诊所</td><td>深水埗长沙湾道 303 号</td><td>$120</td></tr>
<tr><td>8</td><td>油尖旺中医诊所 (伊利沙伯)</td><td>油麻地加士居道 30 号</td><td>$120</td></tr>
<tr><td>9</td><td>九龙城中医诊所</td><td>九龙城侯王道 80 号</td><td>$120</td></tr>
<tr><td>10</td><td>葵青中医诊所 (玛嘉烈)</td><td>荔枝角玛嘉烈医院道 2-10 号</td><td>$120</td></tr>
<tr><td>11</td><td>荃湾中医诊所 (仁济)</td><td>荃湾仁济街 7-11 号</td><td>$120</td></tr>
<tr><td>12</td><td>沙田中医诊所 (威尔斯)</td><td>沙田银城街 30-32 号</td><td>$120</td></tr>
<tr><td>13</td><td>大埔中医诊所 (雅丽氏)</td><td>大埔全安路 11 号</td><td>$120</td></tr>
<tr><td>14</td><td>北区中医诊所 (北区)</td><td>上水保健路 9 号</td><td>$120</td></tr>
<tr><td>15</td><td>元朗中医诊所 (博爱)</td><td>元朗坳头友善街 11 号</td><td>$120</td></tr>
<tr><td>16</td><td>屯门中医诊所 (屯门)</td><td>屯门青松观路 23 号</td><td>$120</td></tr>
<tr><td>17</td><td>将军澳中医诊所 (将军澳)</td><td>将军澳坑口宝宁里 2 号</td><td>$120</td></tr>
<tr><td>18</td><td>离岛中医诊所 (北大屿山)</td><td>东涌松仁路 8 号</td><td>$120</td></tr>
</table>
<p><strong>优点</strong>：<br><li>便宜（$120/次 含药）</li><br><li>有 HA 系统背书</li><br><li>适合长期调理</li></p>
<p><strong>缺点</strong>：<br><li>轮候时间长（部分专科 1-3 个月）</li><br><li>医生不可指定</li></p>
<hr>
<h2>二、香港知名中医（私人执业）</h2>
<h3>妇科 / 不育</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>陈慧琼</strong></td><td>陈慧琼中医诊所</td><td>不孕、妇科</td><td>$800-$2,000</td></tr>
<tr><td><strong>李思齐</strong></td><td>旺角</td><td>妇科、内分泌</td><td>$1,000-$2,500</td></tr>
<tr><td><strong>林冠杰</strong></td><td>铜锣湾</td><td>妇科、肿瘤辅助</td><td>$1,500-$3,000</td></tr>
<tr><td><strong>郑晓虹</strong></td><td>中环</td><td>试管婴儿辅助</td><td>$1,500-$3,000</td></tr>
<tr><td><strong>张琛</strong></td><td>尖沙咀</td><td>妇科、内分泌</td><td>$800-$1,500</td></tr>
</table>
<h3>肿瘤 / 癌症辅助</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>林道仪</strong></td><td>中环</td><td>肿瘤辅助</td><td>$1,500-$3,000</td></tr>
<tr><td><strong>马俊豪</strong></td><td>尖沙咀</td><td>癌症康复</td><td>$1,200-$2,500</td></tr>
<tr><td><strong>陈国正</strong></td><td>旺角</td><td>中医肿瘤</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>陈皓天</strong></td><td>中环</td><td>综合调理</td><td>$1,500-$3,000</td></tr>
<tr><td><strong>苏永平</strong></td><td>铜锣湾</td><td>肿瘤辅助</td><td>$1,000-$2,000</td></tr>
</table>
<h3>内科 / 调理</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>陈炳忠</strong></td><td>中环</td><td>综合内科</td><td>$1,000-$2,500</td></tr>
<tr><td><strong>谭莉英</strong></td><td>尖沙咀</td><td>妇科/内科</td><td>$1,200-$2,500</td></tr>
<tr><td><strong>陈玉麟</strong></td><td>旺角</td><td>综合内科</td><td>$800-$1,500</td></tr>
<tr><td><strong>卢建华</strong></td><td>铜锣湾</td><td>老人/慢病</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>何庭辉</strong></td><td>中环</td><td>综合调理</td><td>$1,000-$2,500</td></tr>
</table>
<h3>骨伤 / 推拿</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>黄杰熙</strong></td><td>油麻地</td><td>跌打骨伤</td><td>$500-$1,500</td></tr>
<tr><td><strong>刘建新</strong></td><td>旺角</td><td>骨伤/针灸</td><td>$500-$1,200</td></tr>
<tr><td><strong>李灿荣</strong></td><td>观塘</td><td>骨伤</td><td>$500-$1,500</td></tr>
<tr><td><strong>陈国华</strong></td><td>荃湾</td><td>跌打推拿</td><td>$400-$1,000</td></tr>
</table>
<h3>针灸 / 痛症</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>周蒿</strong></td><td>中环</td><td>针灸痛症</td><td>$800-$1,500</td></tr>
<tr><td><strong>袁康就</strong></td><td>尖沙咀</td><td>针灸</td><td>$500-$1,200</td></tr>
<tr><td><strong>谢永亮</strong></td><td>旺角</td><td>痛症/中风</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>陈伟</strong></td><td>铜锣湾</td><td>针灸</td><td>$800-$1,500</td></tr>
</table>
<h3>皮肤 / 暗疮</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>符文澍</strong></td><td>中环</td><td>皮肤/暗疮</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>何洁莲</strong></td><td>尖沙咀</td><td>皮肤</td><td>$800-$1,500</td></tr>
</table>
<h3>老人 / 复康</h3>
<table border="1" cellpadding="6">
<tr><th>中医师</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>--------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>黄天赐</strong></td><td>荃湾</td><td>老人中医</td><td>$500-$1,000</td></tr>
<tr><td><strong>黄海</strong></td><td>观塘</td><td>中风复康</td><td>$800-$1,500</td></tr>
</table>
<hr>
<h2>三、香港中医诊所连锁</h2>
<h3>农本方中医 (Nong's)</h3>
<p>> <strong>性质</strong>：上市公司现代化中医  <br>> <strong>专长</strong>：标准化中药配方  <br>> <strong>覆盖</strong>：港九新界 30+ 诊点  <br>> <strong>收费</strong>：$300-$800/次  <br>> <strong>电话</strong>：2832 8880</p>
<h3>仁爱堂中医</h3>
> <strong>性质</strong>：慈善机构  
> <strong>专长</strong>：平价中医  
> <strong>覆盖</strong>：新界为主 20+ 诊点  
> <strong>收费</strong>：$150-$400/次  
> <strong>电话</strong>：2655 7788
<h3>博爱医院中医</h3>
> <strong>性质</strong>：慈善机构  
> <strong>专长</strong>：综合中医  
> <strong>覆盖</strong>：新界西北 10+ 诊点  
> <strong>收费</strong>：$150-$400/次  
> <strong>电话</strong>：2476 2221
<h3>东华三院中医</h3>
> <strong>性质</strong>：慈善机构  
> <strong>专长</strong>：综合中医  
> <strong>覆盖</strong>：港九新界 15+ 诊点  
> <strong>收费</strong>：$150-$400/次
<hr>
<h2>四、按客户画像推荐</h2>
<h3>妇科/备孕客户</h3>
<table border="1" cellpadding="6">
<tr><th>推荐</th><th>理由</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>政府资助中医（$120）</td><td>长期调理便宜</td></tr>
<tr><td>陈慧琼（$1,000+）</td><td>妇科名医</td></tr>
<tr><td>仁爱堂/东华三院</td><td>平价妇科</td></tr>
</table>
<h3>肿瘤客户（西医治疗中）</h3>
<table border="1" cellpadding="6">
<tr><th>推荐</th><th>理由</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>林道仪、林冠杰</td><td>肿瘤辅助名医</td></tr>
<tr><td>政府资助中医</td><td>化疗副作用缓解</td></tr>
<tr><td>养和/港安附设中医</td><td>与西医团队合作</td></tr>
</table>
<h3>老人/慢病</h3>
<table border="1" cellpadding="6">
<tr><th>推荐</th><th>理由</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>政府资助中医</td><td>老人可减免</td></tr>
<tr><td>黄天赐/黄海</td><td>老人专科</td></tr>
<tr><td>仁爱堂/博爱</td><td>新界老人方便</td></tr>
</table>
<h3>中产家庭</h3>
<table border="1" cellpadding="6">
<tr><th>推荐</th><th>理由</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>农本方中医</td><td>标准化、品质稳定</td></tr>
<tr><td>私人名医（$1,000+）</td><td>调理/慢性病</td></tr>
<tr><td>养和/港安中医</td><td>综合医院附设</td></tr>
</table>
<h3>商务/高端</h3>
<table border="1" cellpadding="6">
<tr><th>推荐</th><th>理由</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>中环/铜锣湾私人名医</td><td>顶级服务</td></tr>
<tr><td>养和医院中医部</td><td>综合医院背书</td></tr>
<tr><td>高端中医诊所</td><td>$2,000-$5,000/次</td></tr>
</table>
<hr>
<h2>五、客户咨询 Q&A</h2>
<h3>Q1：中医和西医能同时看吗？</h3>
> A：<strong>可以</strong>：
> - 大部分病：先西医诊断，再中医调理
> - 慢性病：可同时看（如：糖尿病 + 中医调理）
> - 手术/急症：<strong>必须先西医</strong>，中医辅助
> <strong>建议</strong>：告诉医生你同时在看中医，避免药物冲突
<h3>Q2：政府资助中医和私人中医差别？</h3>
> A：
> | 维度 | 政府资助 | 私人名医 |
> |------|---------|---------|
> | 收费 | $120/次 | $1,000-$3,000/次 |
> | 轮候 | 长（1-3 月） | 短（1-2 周） |
> | 医生 | 不可指定 | 可选名医 |
> | 适合 | 长期调理 | 急症/严重病 |
<h3>Q3：中医保险能赔吗？</h3>
> A：
> - <strong>西医附加险</strong>：可加中医保障（$1,000-$3,000/年）
> - <strong>高端医疗险</strong>：可赔针灸/推拿（按次数/年）
> - <strong>独立中医险</strong>：部分公司有
> - <strong>公司医保</strong>：常包含中医
> <strong>重要</strong>：先看保单条款，是否覆盖中医
<h3>Q4：调理身体应该多久看一次？</h3>
> A：
> - <strong>急性期</strong>（感冒/肠胃炎）：1-2 周一次
> - <strong>调理期</strong>（慢性病）：2-4 周一次
> - <strong>保健期</strong>（健康人）：1-3 月一次
> - <strong>肿瘤辅助</strong>：每周一次，配合化疗
<h3>Q5：癌症病人可以看中医吗？</h3>
> A：<strong>可以</strong>，但要<strong>注意</strong>：
> 1. 告诉西医主治医生
> 2. 中药<strong>不能</strong>替代化疗/标靶
> 3. 中药可<strong>缓解副作用</strong>（呕吐/疲劳/失眠）
> 4. 选择<strong>有肿瘤经验</strong>的中医师
> 5. 部分中药可能<strong>影响化疗效果</strong>，需谨慎
<h3>Q6：孕妇可以看中医吗？</h3>
> A：<strong>可以</strong>：
> - 孕吐、安胎、产后调理都是中医强项
> - 推荐：政府资助中医（便宜）或知名妇科中医
> - <strong>避免</strong>：某些中药（活血/有毒）孕妇禁用
> - <strong>建议</strong>：先咨询西医产科，再决定是否看中医
<hr>
<h2>六、中医养生小贴士</h2>
<h3>体质分类（中医）</h3>
<table border="1" cellpadding="6">
<tr><th>体质</th><th>特征</th><th>适合</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>平和质</td><td>健康、平衡</td><td>正常饮食</td></tr>
<tr><td>气虚质</td><td>易疲劳、气短</td><td>补气（黄芪、人参）</td></tr>
<tr><td>阳虚质</td><td>怕冷、手脚冰凉</td><td>温阳（生姜、羊肉）</td></tr>
<tr><td>阴虚质</td><td>手心热、口干</td><td>滋阴（麦冬、石斛）</td></tr>
<tr><td>痰湿质</td><td>肥胖、油腻</td><td>化痰（薏米、冬瓜）</td></tr>
<tr><td>湿热质</td><td>长痘、口苦</td><td>清热（菊花、绿豆）</td></tr>
<tr><td>血瘀质</td><td>痛经、肤色暗</td><td>活血（丹参、红花）</td></tr>
<tr><td>气郁质</td><td>焦虑、失眠</td><td>疏肝（玫瑰、陈皮）</td></tr>
<tr><td>特禀质</td><td>过敏</td><td>调理（灵芝、黄芪）</td></tr>
</table>

<p>> 重要免责声明：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体方案请咨询中医师/西医主治医生。</p>`
  },
  "2.6.12 香港牙医名医清单": {
    id: "hkm_2_6_12",
    title: "2.6.12 香港牙医名医清单",
    content: `<h1>香港牙医名医清单（2026 版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>覆盖范围</strong>：香港知名牙医（按专科）+ 牙科诊所连锁<br>> <strong>数据说明</strong>：医生执业机构<strong>可能变动</strong>，预约前请电话确认</p>
<hr>
<h2>关键概念</h2>
<pre><code>牙科 = 牙医 / 牙齿 / 口腔
<p>按专科：<br><li>普通牙科：洗牙、补牙、拔牙、根管</li><br><li>牙齿矫正：牙套、隐适美</li><br><li>植牙：人工牙根</li><br><li>牙周科：牙周病治疗</li><br><li>口腔外科：智慧齿、颌面手术</li><br><li>儿童牙科：儿童牙齿</li><br><li>美容牙科：美白、贴面</li></p>
<p>按医院：<br><li>HA 公立牙科 11 间：限紧急</li><br><li>菲腊牙科医院：港大教学</li><br><li>2,300+ 私人牙科诊所</li><br><li>牙科连锁：卓健/医思/匡乔等</code></pre></li></p>
<hr>
<h2>一、香港牙科费用概览</h2>
<table border="1" cellpadding="6">
<tr><th>服务</th><th>公立</th><th>私人平价</th><th>私人中端</th><th>私人高端</th></tr>
<tr><td>------</td><td>------</td><td>----------</td><td>----------</td><td>----------</td></tr>
<tr><td><strong>洗牙</strong></td><td>$50</td><td>$300-$500</td><td>$500-$800</td><td>$1,000-$2,000</td></tr>
<tr><td><strong>补牙</strong></td><td>$50-$200</td><td>$300-$800</td><td>$800-$1,500</td><td>$1,500-$3,000</td></tr>
<tr><td><strong>拔牙</strong></td><td>$50-$200</td><td>$500-$1,500</td><td>$1,000-$2,500</td><td>$2,500-$5,000</td></tr>
<tr><td><strong>智慧齿拔除（手术）</strong></td><td>$1,000-$5,000</td><td>$3,000-$8,000</td><td>$8,000-$15,000</td><td>$15,000-$30,000</td></tr>
<tr><td><strong>根管治疗（前牙）</strong></td><td>$500-$1,500</td><td>$2,000-$4,000</td><td>$4,000-$7,000</td><td>$7,000-$15,000</td></tr>
<tr><td><strong>根管治疗（后牙）</strong></td><td>$1,000-$3,000</td><td>$4,000-$8,000</td><td>$8,000-$15,000</td><td>$15,000-$25,000</td></tr>
<tr><td><strong>牙套（传统钢丝）</strong></td><td>不提供</td><td>$30,000-$60,000</td><td>$50,000-$80,000</td><td>$80,000-$150,000</td></tr>
<tr><td><strong>牙套（陶瓷）</strong></td><td>不提供</td><td>$50,000-$80,000</td><td>$70,000-$120,000</td><td>$120,000-$200,000</td></tr>
<tr><td><strong>隐适美 (Invisalign)</strong></td><td>不提供</td><td>$40,000-$60,000</td><td>$60,000-$100,000</td><td>$100,000-$180,000</td></tr>
<tr><td><strong>植牙（单颗）</strong></td><td>不提供</td><td>$15,000-$25,000</td><td>$25,000-$40,000</td><td>$40,000-$80,000</td></tr>
<tr><td><strong>全口植牙 (All-on-4)</strong></td><td>不提供</td><td>$150,000-$200,000</td><td>$200,000-$300,000</td><td>$300,000-$500,000</td></tr>
<tr><td><strong>瓷贴面（每只）</strong></td><td>不提供</td><td>$8,000-$15,000</td><td>$15,000-$25,000</td><td>$25,000-$50,000</td></tr>
<tr><td><strong>美白（冷光/激光）</strong></td><td>不提供</td><td>$3,000-$5,000</td><td>$5,000-$10,000</td><td>$10,000-$20,000</td></tr>
</table>
<hr>
<h2>二、香港知名牙医（按专科）</h2>
<h3>牙齿矫正（Orthodontics）</h3>
<table border="1" cellpadding="6">
<tr><th>牙医</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>梁训成</strong></td><td>中环</td><td>牙齿矫正、隐适美</td><td>$80,000-$180,000</td></tr>
<tr><td><strong>陈俊</strong></td><td>尖沙咀</td><td>复杂矫正</td><td>$100,000-$200,000</td></tr>
<tr><td><strong>黄永亮</strong></td><td>中环</td><td>隐适美专家</td><td>$80,000-$150,000</td></tr>
<tr><td><strong>刘润华</strong></td><td>铜锣湾</td><td>儿童矫正</td><td>$50,000-$120,000</td></tr>
<tr><td><strong>邓尚勤</strong></td><td>旺角</td><td>矫正</td><td>$50,000-$100,000</td></tr>
<tr><td><strong>周国辉</strong></td><td>尖沙咀</td><td>隐适美顶级</td><td>$100,000-$200,000</td></tr>
<tr><td><strong>陈国基</strong></td><td>沙田</td><td>矫正</td><td>$50,000-$100,000</td></tr>
</table>
<p><strong>推荐医院</strong>：<br><li>菲腊牙科医院（公立教学）</li><br><li>卓健牙科矫正中心</li><br><li>医思 SPARK 牙科（中环/尖沙咀旗舰）</li><br><li>匡乔牙科</li></p>
<hr>
<h3>植牙（Dental Implant）</h3>
<table border="1" cellpadding="6">
<tr><th>牙医</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>周国辉</strong></td><td>中环</td><td>复杂植牙、All-on-4</td><td>$50,000-$80,000/颗</td></tr>
<tr><td><strong>黄永亮</strong></td><td>中环</td><td>即日植牙</td><td>$40,000-$60,000/颗</td></tr>
<tr><td><strong>陈伟</strong></td><td>尖沙咀</td><td>微创植牙</td><td>$30,000-$50,000/颗</td></tr>
<tr><td><strong>林振华</strong></td><td>旺角</td><td>植牙</td><td>$25,000-$45,000/颗</td></tr>
<tr><td><strong>陈俊</strong></td><td>铜锣湾</td><td>复杂案例</td><td>$40,000-$70,000/颗</td></tr>
</table>
<p><strong>植牙流程</strong>：<br><li>咨询 + CT 扫描（$3,000-$5,000）</li><br><li>手术（植入牙根，$20,000-$50,000）</li><br><li>3-6 月愈合期</li><br><li>装牙冠（$10,000-$30,000）</li><br><li><strong>总计：$30,000-$80,000/颗</strong></li></p>
<p><strong>All-on-4 全口植牙</strong>：<br><li>适合：全口无牙 / 严重牙周病</li><br><li>价格：$200,000-$500,000/全口</li><br><li>时间：1-2 天完成</li><br><li>维持：10-20 年</li></p>
<hr>
<h3>口腔外科 / 智慧齿</h3>
<table border="1" cellpadding="6">
<tr><th>牙医</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>陈伟</strong></td><td>尖沙咀</td><td>复杂智慧齿、口腔手术</td><td>$8,000-$25,000</td></tr>
<tr><td><strong>黄海</strong></td><td>铜锣湾</td><td>颌面手术</td><td>$15,000-$30,000</td></tr>
<tr><td><strong>刘建新</strong></td><td>旺角</td><td>智慧齿拔除</td><td>$3,000-$10,000</td></tr>
<tr><td><strong>陈国正</strong></td><td>观塘</td><td>颌面手术</td><td>$10,000-$20,000</td></tr>
</table>
<p><strong>智慧齿拔除费用</strong>：<br><table border="1" cellpadding="6"><br><tr><th>难度</th><th>公立</th><th>私人</th></tr><br><tr><td>------</td><td>------</td><td>------</td></tr><br><tr><td>普通（已长出）</td><td>$500-$1,500</td><td>$1,500-$5,000</td></tr><br><tr><td>阻生（部分）</td><td>$1,000-$3,000</td><td>$5,000-$15,000</td></tr><br><tr><td>复杂（横生/手术）</td><td>$3,000-$8,000</td><td>$15,000-$30,000</td></tr><br></table></p>
<p><strong>推荐</strong>：菲腊牙科医院（公立，最便宜）</p>
<hr>
<h3>牙周科（Periodontics）</h3>
<table border="1" cellpadding="6">
<tr><th>牙医</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>陈志远</strong></td><td>中环</td><td>牙周手术</td><td>$5,000-$15,000</td></tr>
<tr><td><strong>黄美玲</strong></td><td>尖沙咀</td><td>牙周治疗</td><td>$3,000-$10,000</td></tr>
</table>
<p><strong>牙周病治疗</strong>：<br><li>轻度：洗牙 + 口腔卫生指导（$1,000-$3,000）</li><br><li>中度：深层清洁（$3,000-$8,000）</li><br><li>重度：牙周手术（$10,000-$30,000）</li></p>
<hr>
<h3>儿童牙科</h3>
<table border="1" cellpadding="6">
<tr><th>牙医</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>周佩仪</strong></td><td>中环</td><td>儿童牙科</td><td>$500-$2,000</td></tr>
<tr><td><strong>陈玉萍</strong></td><td>尖沙咀</td><td>儿童牙齿</td><td>$500-$1,500</td></tr>
<tr><td><strong>林颖</strong></td><td>沙田</td><td>儿童牙医</td><td>$500-$1,500</td></tr>
</table>
<p><strong>儿童牙科服务</strong>：<br><li>涂氟：$300-$800</li><br><li>窝沟封闭：$300-$500/颗</li><br><li>补牙：$300-$1,500</li><br><li>早期矫正：$5,000-$30,000</li></p>
<p><strong>推荐医院</strong>：<br><li>菲腊牙科医院（儿童）</li><br><li>卓健儿童牙科</li><br><li>匡乔儿童牙科</li></p>
<hr>
<h3>美容牙科（Cosmetic）</h3>
<table border="1" cellpadding="6">
<tr><th>牙医</th><th>诊所</th><th>专长</th><th>收费</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>陈俊</strong></td><td>中环</td><td>瓷贴面</td><td>$20,000-$50,000/只</td></tr>
<tr><td><strong>黄永亮</strong></td><td>中环</td><td>美齿设计</td><td>$30,000-$80,000</td></tr>
<tr><td><strong>梁训成</strong></td><td>中环</td><td>全口重塑</td><td>$100,000-$300,000</td></tr>
</table>
<p><strong>美容牙科项目</strong>：<br><li><strong>瓷贴面</strong>：$15,000-$50,000/只</li><br><li><strong>冷光美白</strong>：$3,000-$10,000</li><br><li><strong>全瓷牙冠</strong>：$8,000-$20,000/只</li><br><li><strong>全口美齿（28 只瓷贴面）</strong>：$300,000-$800,000</li></p>
<hr>
<h2>三、牙科诊所连锁</h2>
<h3>卓健牙科 Quality HealthCare Dental</h3>
<p>> <strong>电话</strong>：8301 8301<br>> <strong>规模</strong>：全港 30+ 分店<br>> <strong>特色</strong>：综合 + 24h 急症<br>> <strong>适合</strong>：家庭/中端</p>
<h3>医思 SPARK 牙医</h3>
<p>> <strong>电话</strong>：3520 2880<br>> <strong>规模</strong>：10+ 高端中心<br>> <strong>特色</strong>：医美结合、高端<br>> <strong>适合</strong>：高端客户</p>
<h3>匡乔牙科 NextGen</h3>
<p>> <strong>电话</strong>：2546 6288<br>> <strong>规模</strong>：5+ 中心<br>> <strong>特色</strong>：高端、复杂案例<br>> <strong>适合</strong>：高端/复杂</p>
<h3>盈健牙科</h3>
<p>> <strong>电话</strong>：2393 7380<br>> <strong>规模</strong>：10+ 分店<br>> <strong>特色</strong>：平价<br>> <strong>适合</strong>：中产/家庭</p>
<h3>私人牙科品牌</h3>
<table border="1" cellpadding="6">
<tr><th>品牌</th><th>特色</th><th>区域</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>Your Dental</strong></td><td>中高端</td><td>港岛</td></tr>
<tr><td><strong>Dr. Smile</strong></td><td>美齿</td><td>中环</td></tr>
<tr><td><strong>iOrtho</strong></td><td>矫正专科</td><td>中环/尖沙咀</td></tr>
<tr><td><strong>Dental Concepts</strong></td><td>综合</td><td>多区</td></tr>
<tr><td><strong>Bayside Dental</strong></td><td>港岛南</td><td>黃竹坑</td></tr>
<tr><td><strong>Central Smile</strong></td><td>中环</td><td>中环</td></tr>
<tr><td><strong>Smile Concept</strong></td><td>美容</td><td>铜锣湾</td></tr>
</table>
<hr>
<h2>四、菲腊牙科医院（公立教学）</h2>
<p>> <strong>地址</strong>：香港西营盘医院道 34 号  <br>> <strong>电话</strong>：2859 0288  <br>> <strong>性质</strong>：<strong>港大牙医学院教学医院</strong>  <br>> <strong>预约</strong>：需持有<strong>注册私家牙医转介信</strong></p>
<p><strong>专科服务</strong>（便宜但轮候长）：<br><li>口腔颌面外科</li><br><li>牙齿矫正</li><br><li>儿童牙科</li><br><li>牙髓病科（根管）</li><br><li>牙周科</li><br><li>植牙（部分）</li></p>
<p><strong>收费</strong>：<br><li>首次诊症：$135</li><br><li>后续：$80-$135/次</li><br><li>专科治疗：$200-$5,000</li></p>
<p><strong>优势</strong>：<br><li>港大教授亲诊</li><br><li>价格便宜</li><br><li>复杂案例能力强</li></p>
<p><strong>劣势</strong>：<br><li>轮候时间长（部分专科 6-12 个月）</li><br><li>需转介</li></p>
<hr>
<h2>五、牙科保险（IFA 实战）</h2>
<h3>香港主流牙科保险</h3>
<table border="1" cellpadding="6">
<tr><th>险种</th><th>保费</th><th>保障</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>AIA 牙科附加</strong></td><td>$1,000-$3,000/年</td><td>洗牙+补牙+拔牙</td></tr>
<tr><td><strong>保诚牙科附加</strong></td><td>$1,500-$4,000/年</td><td>综合</td></tr>
<tr><td><strong>安盛牙科附加</strong></td><td>$1,000-$3,000/年</td><td>基础</td></tr>
<tr><td><strong>独立牙科险</strong></td><td>$3,000-$8,000/年</td><td>含矫正/植牙</td></tr>
<tr><td><strong>公司医保</strong></td><td>公司付</td><td>基础洗牙/补牙</td></tr>
</table>
<h3>牙科保障分类</h3>
<table border="1" cellpadding="6">
<tr><th>类别</th><th>一般保险覆盖</th></tr>
<tr><td>------</td><td>-------------</td></tr>
<tr><td><strong>洗牙</strong></td><td>1-2 次/年（附加险）</td></tr>
<tr><td><strong>补牙</strong></td><td>1-2 次/年</td></tr>
<tr><td><strong>拔牙</strong></td><td>全数赔</td></tr>
<tr><td><strong>根管</strong></td><td>全数赔（部分险种）</td></tr>
<tr><td><strong>矫正</strong></td><td><strong>不覆盖</strong>（需独立险）</td></tr>
<tr><td><strong>植牙</strong></td><td><strong>不覆盖</strong>（需独立险）</td></tr>
<tr><td><strong>美容</strong></td><td><strong>不覆盖</strong>（如：美白、贴面）</td></tr>
</table>
<hr>
<h2>六、客户咨询 Q&A</h2>
<h3>Q1：洗牙应该多久一次？</h3>
> A：建议<strong>6 个月-1 年一次</strong>：
> - 健康牙周：每年 1-2 次
> - 牙周病：每 3-6 月一次
> - 戴牙套：每 3-6 月一次
<h3>Q2：植牙 vs 牙桥 vs 假牙？</h3>
> A：
> | 维度 | 植牙 | 牙桥 | 假牙 |
> |------|------|------|------|
> | 价格 | $30,000-$80,000/颗 | $10,000-$25,000 | $5,000-$15,000 |
> | 寿命 | 10-20+ 年 | 5-15 年 | 3-5 年 |
> | 优点 | 持久、舒适 | 较快 | 便宜 |
> | 缺点 | 贵、需手术 | 损伤邻牙 | 不舒适 |
> <strong>建议</strong>：能植牙就植牙，预算紧选牙桥
<h3>Q3：隐适美 vs 传统牙套？</h3>
> A：
> | 维度 | 隐适美 | 传统牙套 |
> |------|--------|----------|
> | 美观 | 透明、几乎隐形 | 钢丝明显 |
> | 舒适 | 较高（可摘） | 较低 |
> | 价格 | $40,000-$180,000 | $30,000-$80,000 |
> | 治疗时间 | 12-24 月 | 18-36 月 |
> | 适合 | 成人、轻中度 | 复杂案例 |
> <strong>建议</strong>：成人首选隐适美，复杂案例用传统
<h3>Q4：智慧齿要不要拔？</h3>
> A：
> - <strong>正位长出</strong>：不一定拔
> - <strong>阻生/横生/未长出</strong>：<strong>建议拔</strong>（避免冠周炎/影响邻牙）
> - <strong>拔除最佳年龄</strong>：18-25 岁（恢复快）
> - <strong>公立医院</strong>：$1,000-$3,000（轮候 1-2 年）
> - <strong>私人诊所</strong>：$3,000-$30,000
<h3>Q5：牙齿美白安全吗？</h3>
> A：
> - <strong>冷光美白</strong>：安全，需专业操作（$3,000-$10,000）
> - <strong>家用美白贴</strong>：效果较弱，长期用伤牙釉
> - <strong>瓷贴面</strong>：最持久（10-15 年），但贵
> - <strong>不建议</strong>：漂白粉/美牙仪（伤牙）
<h3>Q6：宝宝几岁开始看牙医？</h3>
> A：
> - <strong>第一颗乳牙长出后</strong>（6-12 月）→ 第一次看诊
> - <strong>1-2 岁</strong>：建立口腔习惯
> - <strong>3 岁起</strong>：每 6 月涂氟 + 检查
> - <strong>6-12 岁</strong>：窝沟封闭 + 矫正评估
<h3>Q7：牙科保险值不值得买？</h3>
> A：
> - <strong>不常看牙</strong>：不值得（保费可能 > 实际费用）
> - <strong>常看牙 + 计划矫正/植牙</strong>：<strong>值得</strong>
> - <strong>公司医保包含</strong>：先看公司福利
> <strong>建议</strong>：先看公司医保 → 自付费 $1,000-$2,000/年 买附加险
<h3>Q8：香港 vs 内地看牙价格？</h3>
> A：
> | 服务 | 香港（私人） | 内地（私人） |
> |------|-------------|-------------|
> | 洗牙 | $500-$1,000 | ¥200-¥500 |
> | 补牙 | $800-$1,500 | ¥300-¥800 |
> | 智慧齿 | $5,000-$30,000 | ¥1,000-¥5,000 |
> | 隐适美 | $60,000-$150,000 | ¥30,000-¥60,000 |
> | 植牙 | $30,000-$80,000 | ¥10,000-¥30,000 |
> 
> <strong>香港优势</strong>：质量好、医生水平高、器材先进、私密度高  
> <strong>香港劣势</strong>：贵 2-3 倍
> <strong>建议</strong>：基础牙科可回内地做，复杂/高端在香港做
<hr>
<h2>七、牙科急症处理</h2>
<h3>常见牙科急症</h3>
<table border="1" cellpadding="6">
<tr><th>急症</th><th>处理</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>牙痛</strong></td><td>止痛药 + 预约牙医</td></tr>
<tr><td><strong>牙齿撞脱</strong></td><td>找回牙齿、泡牛奶/盐水，<strong>30 分钟内</strong>看牙医</td></tr>
<tr><td><strong>智慧齿冠周炎</strong></td><td>漱口 + 抗生素 + 预约拔除</td></tr>
<tr><td><strong>牙龈出血不止</strong></td><td>压迫止血 + 急诊</td></tr>
<tr><td><strong>牙齿崩裂</strong></td><td>保留碎片、预约牙医</td></tr>
<tr><td><strong>牙套脱落</strong></td><td>蜡覆盖、预约牙医</td></tr>
</table>
<h3>24h 牙科急症</h3>
<li><strong>菲腊牙科医院</strong>：周一至五 8:30am-5:00pm（电话预约）</li>
<li><strong>私人 24h 牙科</strong>：极少数（建议 call 卓健/医思）</li>
<li><strong>公立医院急症</strong>：可处理严重创伤</li>

<p>> 重要免责声明：以上信息仅供参考，<strong>不构成医疗建议</strong>。具体方案请咨询专业牙医。</p>`
  },
  "2.6.13 香港客户医疗病例库": {
    id: "hkm_2_6_13",
    title: "2.6.13 香港客户医疗病例库",
    content: `<h1>香港客户医疗病例库（2026 版 · IFA 实战参考）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>用途</strong>：IFA 实战参考 - 客户咨询时展示"真实案例"<br>> <strong>数据说明</strong>：以下案例为<strong>典型情景示例</strong>，非真实客户数据</p>
<hr>
<h2>关键说明</h2>
<pre><code>⚠️ 重要：本文件为 IFA 培训/参考用
所有案例为典型情景，非真实客户
请勿对外宣称是真实客户
展示给客户时，请改用脱敏版本</code></pre>
<hr>
<h1>🏥 第一部分：典型客户案例（30 个情景）</h1>
<h2>案例 1：30 岁单身男士 - 高端医疗险</h2>
<p><strong>客户背景</strong>：<br><li>张先生，30 岁，金融从业者</li><br><li>月入 HK$80,000</li><br><li>单身，无家庭负担</li><br><li>现有保险：寿险 + 意外险，<strong>无医疗险</strong></li></p>
<p><strong>咨询场景</strong>：<br>张先生认为自己年轻健康，不需要医疗险。我需要让他意识到风险。</p>
<p><strong>对话示例</strong>：<br>> 我：30 岁年轻力壮是好事，但医疗险买的是"未来风险"。  <br>> 你看个数据：30 岁男性患癌率 1/1,000，但<strong>治疗费</strong>200 万起。  <br>> 一份高端医疗险<strong>年保费 $2.5 万</strong>，<strong>杠杆 1:1,000</strong>。  <br>> 相当于用一顿饭钱买一份"免死金牌"。</p>
<p><strong>推荐方案</strong>：<br><li>产品：AIA 亚洲至尊（半私家房）</li><br><li>年保费：HK$25,000</li><br><li>保障：HK$2,500 万</li><br><li>自付额：$0</li></p>
<p><strong>跟进</strong>：<br><li>1 周后：发送产品链接</li><br><li>2 周后：安排面谈</li><br><li>1 月后：投保</li></p>
<hr>
<h2>案例 2：40 岁家庭主妇 - 中端医疗险</h2>
<p><strong>客户背景</strong>：<br><li>李太太，40 岁，家庭主妇</li><br><li>丈夫是会计师，家庭月入 HK$100,000</li><br><li>2 个孩子（5 岁、8 岁）</li><br><li>现有保险：仅丈夫有医疗险</li></p>
<p><strong>咨询场景</strong>：<br>李太太担心自己健康（家人都靠丈夫），但预算有限。</p>
<p><strong>推荐方案</strong>：<br><li>产品：宏利活亮人生（半私家房）</li><br><li>年保费：HK$15,000</li><br><li>保障：HK$1,000 万</li><br><li>自付额：$20,000</li></p>
<p><strong>追加建议</strong>：<br><li>给孩子加：儿童医疗险 + 重疾险</li><br><li>丈夫：升级高端医疗险</li><br><li>全家总保费：HK$60,000/年</li></p>
<hr>
<h2>案例 3：50 岁企业主 - 高端医疗 + 重疾</h2>
<p><strong>客户背景</strong>：<br><li>王先生，50 岁，企业主</li><br><li>年入 HK$5,000,000</li><br><li>已婚，2 个孩子（20+）</li><br><li>现有保险：基本寿险</li></p>
<p><strong>咨询场景</strong>：<br>王先生事业有成，但临近退休，开始担心健康和资产传承。</p>
<p><strong>推荐方案</strong>：<br><li><strong>高端医疗险</strong>：HK$50,000/年（保额 $5,000 万）</li><br><li><strong>重疾险</strong>：HK$100,000/年（保额 $500 万，一次性赔）</li><br><li><strong>储蓄险</strong>：HK$200,000/年（资产传承）</li></p>
<p><strong>特点</strong>：<br><li>全部保费可抵税（部分）</li><br><li>私立医院直付</li><br><li>全球含美保障</li></p>
<hr>
<h2>案例 4：内地客户 - 全球医疗险</h2>
<p><strong>客户背景</strong>：<br><li>陈先生，45 岁，内地企业家</li><br><li>在港买医疗险 + 投资移民</li><br><li>已有内地医保 + 高端医疗</li></p>
<p><strong>咨询场景</strong>：<br>陈先生想确保来港时享受香港顶级医疗。</p>
<p><strong>推荐方案</strong>：<br><li>产品：AIA 全球至尊医疗（保诚/安盛同款）</li><br><li>年保费：HK$80,000</li><br><li>保障：$5,000 万全球含美</li><br><li>房型：私家房</li></p>
<p><strong>关键点</strong>：<br><li>在港直付养和/港怡</li><br><li>在美直付梅奥诊所/麻省总医院</li><br><li>在日直付癌研有明医院</li></p>
<hr>
<h2>案例 5：60 岁退休长者 - 防癌险</h2>
<p><strong>客户背景</strong>：<br><li>黄伯，60 岁，退休</li><br><li>想买保险但<strong>超龄</strong>（多数医疗险 60 岁止）</li><br><li>担心癌症</li></p>
<p><strong>推荐方案</strong>：<br><li>产品：防癌险（独立险种）</li><br><li>年保费：HK$30,000</li><br><li>保障：癌症 $200 万一次性</li><br><li>接受：最高 70 岁投保</li></p>
<p><strong>附加建议</strong>：<br><li>公立医院：长者健康中心（免费体检）</li><br><li>私家医院：养和/港安癌症筛查</li><br><li>体检频率：每年 1 次</li></p>
<hr>
<h2>案例 6：年轻妈妈 - 宝宝保险</h2>
<p><strong>客户背景</strong>：<br><li>林太太，32 岁，新手妈妈</li><br><li>宝宝刚出生 15 天</li><br><li>咨询：宝宝保险</li></p>
<p><strong>推荐方案</strong>：<br><table border="1" cellpadding="6"><br><tr><th>险种</th><th>保障</th><th>保费</th></tr><br><tr><td>------</td><td>------</td><td>------</td></tr><br><tr><td>儿童医疗险</td><td>$500 万</td><td>$5,000/年</td></tr><br><tr><td>儿童重疾险</td><td>$300 万一次性</td><td>$3,000/年</td></tr><br><tr><td>教育储蓄险</td><td>大学基金</td><td>$30,000/年</td></tr><br><tr><td><strong>总保费</strong></td><td></td><td><strong>HK$38,000/年</strong></td></tr><br></table></p>
<p><strong>关键时间点</strong>：<br><li>出生 15 天后 → 立即投保</li><br><li>1 个月内 → 母婴健康院登记</li><br><li>1-6 月 → 疫苗（公费 + 自费）</li></p>
<hr>
<h2>案例 7：单身女性 - 妇科保障</h2>
<p><strong>客户背景</strong>：<br><li>周小姐，35 岁，HR 经理</li><br><li>单身</li><br><li>关注：妇科、乳房</li></p>
<p><strong>推荐方案</strong>：<br><li>医疗险（亚洲版）：$15,000/年</li><br><li>重疾险（含女性疾病）：$8,000/年</li><br><li>乳房 X 光年检：私人 $1,500/次</li></p>
<p><strong>关键检查</strong>：<br><li>子宫颈抹片：每 1-3 年（25 岁起）</li><br><li>乳房 X 光：每 2 年（40 岁起）</li><br><li>卵巢超声波：每 2 年</li></p>
<hr>
<h2>案例 8：夫妇 + 父母 - 家庭方案</h2>
<p><strong>客户背景</strong>：<br><li>赵先生 + 赵太太，45+42 岁</li><br><li>1 个孩子 15 岁</li><br><li>赵父 75 岁 + 赵母 70 岁</li></p>
<p><strong>推荐方案</strong>（全家）：</p>
<table border="1" cellpadding="6">
<tr><th>成员</th><th>险种</th><th>年保费</th></tr>
<tr><td>------</td><td>------</td><td>--------</td></tr>
<tr><td>赵先生</td><td>高端医疗 + 重疾</td><td>$60,000</td></tr>
<tr><td>赵太太</td><td>中端医疗 + 重疾</td><td>$30,000</td></tr>
<tr><td>孩子</td><td>儿童医疗 + 重疾 + 教育</td><td>$20,000</td></tr>
<tr><td>赵父</td><td>防癌险（75 岁止）</td><td>$20,000</td></tr>
<tr><td>赵母</td><td>防癌险（70 岁止）</td><td>$15,000</td></tr>
<tr><td><strong>总保费</strong></td><td></td><td><strong>HK$145,000/年</strong></td></tr>
</table>
<p><strong>特点</strong>：<br><li>家庭优惠（部分公司）</li><br><li>全家直付养和/港安</li><br><li>一站式管理</li></p>
<hr>
<h1>🏥 第二部分：常见疾病案例（30+ 案例）</h1>
<h2>案例 9：乳癌治愈案例</h2>
<p><strong>患者</strong>：45 岁女性<br><strong>诊断</strong>：乳癌第 2 期<br><strong>治疗</strong>：<br><li>手术（局部切除）$100,000</li><br><li>化疗 6 周期 $300,000</li><br><li>标靶治疗 1 年 $1,200,000</li><br><li>荷尔蒙治疗 5 年 $60,000</li><br><li><strong>总费用：$1,660,000</strong></li></p>
<p><strong>保险赔付</strong>（高端医疗险）：<br><li>直付$1,660,000</li><br><li>重疾险一次性$300,000</li><br><li><strong>客户实际支出：$0</strong></li></p>
<p><strong>康复</strong>：5 年生存率 89%</p>
<hr>
<h2>案例 10：肺癌标靶治疗</h2>
<p><strong>患者</strong>：55 岁男性，吸烟史<br><strong>诊断</strong>：肺癌第 3 期<br><strong>治疗</strong>：<br><li>化疗 4 周期 $200,000</li><br><li>标靶治疗 1 年 $1,500,000</li><br><li>放射治疗 1 疗程 $200,000</li><br><li>定期 CT 监测 $50,000</li><br><li><strong>总费用：$1,950,000</strong></li></p>
<p><strong>保险赔付</strong>（高端医疗险）：<br><li>全数赔付</li><br><li>标靶药全数（即使$10万/月）</li></p>
<hr>
<h2>案例 11：心脏搭桥手术</h2>
<p><strong>患者</strong>：62 岁男性<br><strong>诊断</strong>：冠心病 3 条血管阻塞<br><strong>治疗</strong>：<br><li>心脏搭桥手术 $1,200,000</li><br><li>ICU 3 天 $90,000</li><br><li>普通病房 7 天 $35,000</li><br><li>复康治疗 3 月 $150,000</li><br><li><strong>总费用：$1,475,000</strong></li></p>
<p><strong>保险赔付</strong>：<br><li>全数赔付</li><br><li>重疾险一次性$300,000（急性心肌梗塞）</li></p>
<hr>
<h2>案例 12：中风康复</h2>
<p><strong>患者</strong>：68 岁女性<br><strong>诊断</strong>：缺血性中风<br><strong>治疗</strong>：<br><li>ICU 5 天 $150,000</li><br><li>普通病房 14 天 $70,000</li><br><li>复康治疗 6 月 $300,000</li><br><li>中医辅助 $50,000</li><br><li>长期护理（居家）$100,000/月</li><br><li><strong>第一年总费用：$1,420,000</strong></li></p>
<p><strong>保险赔付</strong>：<br><li>医疗险赔付$1,420,000</li><br><li>重疾险一次性$200,000（中风）</li></p>
<hr>
<h2>案例 13：肾衰竭透析</h2>
<p><strong>患者</strong>：58 岁男性<br><strong>诊断</strong>：末期肾衰竭<br><strong>治疗</strong>：<br><li>血液透析（每周 3 次，永久）</li><br><li>每月透析费 $50,000</li><br><li>长期药物 $5,000/月</li><br><li>等待肾移植</li><br><li><strong>每月总费用：$55,000</strong></li><br><li><strong>5 年总费用：$3,300,000</strong></li></p>
<p><strong>保险赔付</strong>：<br><li>长期透析全数赔</li><br><li>若肾移植：手术费$1,000,000</li></p>
<hr>
<h2>案例 14：儿童白血病</h2>
<p><strong>患者</strong>：5 岁儿童<br><strong>诊断</strong>：急性淋巴白血病<br><strong>治疗</strong>：<br><li>化疗 2 年 $800,000</li><br><li>标靶治疗 1 年 $600,000</li><br><li>骨髓移植 $1,500,000</li><br><li>长期随访 $100,000</li><br><li><strong>总费用：$3,000,000</strong></li></p>
<p><strong>保险赔付</strong>：<br><li>全数赔</li><br><li>父母可停工陪护（部分险种有"父母陪护"保障）</li></p>
<hr>
<h2>案例 15：老人痴呆长期护理</h2>
<p><strong>患者</strong>：72 岁女性<br><strong>诊断</strong>：阿兹海默症<br><strong>治疗</strong>：<br><li>记忆诊所评估 $5,000</li><br><li>药物 $3,000/月</li><br><li>暂托服务 $200/日（每周 2 次）</li><br><li>护理安老院 $30,000/月</li><br><li><strong>每年总费用：$420,000</strong></li></p>
<p><strong>保险</strong>：<br><li><strong>医疗险通常不覆盖长期护理</strong>！</li><br><li>需要独立的"长期护理险"或"年金险"</li></p>
<p><strong>客户咨询建议</strong>：<br><li>50 岁起考虑长期护理险</li><br><li>或自购年金险</li></p>
<hr>
<h2>案例 16：试管婴儿（IVF）</h2>
<p><strong>患者</strong>：35 岁女性，备孕 2 年未果<br><strong>诊断</strong>：不明原因不育<br><strong>治疗</strong>：<br><li>IVF 一周期 $150,000</li><br><li>药物 $30,000</li><br><li>多次尝试（3 周期）$450,000</li><br><li>成功率：35%/周期</li></p>
<p><strong>保险</strong>：<br><li><strong>多数医疗险不覆盖 IVF</strong>！</li><br><li>部分高端医疗险含 IVF 保障（$50,000-$100,000）</li><br><li>独立 IVF 险种</li></p>
<hr>
<h1>🏥 第三部分：地区案例（按客户地域）</h1>
<h2>案例 17：港岛客户 - 高端首选</h2>
<p><strong>特征</strong>：<br><li>港岛客户偏好：<strong>养和、明德、嘉诺撒</strong></li><br><li>愿意支付高价</li><br><li>重视隐私</li></p>
<p><strong>推荐</strong>：<br><li>养和心脏中心</li><br><li>明德国际</li><br><li>嘉诺撒医院</li></p>
<hr>
<h2>案例 18：九龙客户 - 性价比首选</h2>
<p><strong>特征</strong>：<br><li>九龙客户偏好：<strong>浸信会、圣德肋撒、播道</strong></li><br><li>性价比敏感</li><br><li>综合服务</li></p>
<p><strong>推荐</strong>：<br><li>浸信会医院</li><br><li>圣德肋撒医院</li><br><li>播道医院</li></p>
<hr>
<h2>案例 19：新界客户 - 港安优先</h2>
<p><strong>特征</strong>：<br><li>新界客户偏好：<strong>港安（荃湾）、仁安、博爱</strong></li><br><li>离家近</li><br><li>中端价位</li></p>
<p><strong>推荐</strong>：<br><li>香港港安（荃湾）</li><br><li>仁安医院</li><br><li>博爱医院</li></p>
<hr>
<h2>案例 20：内地客户 - 全球医疗</h2>
<p><strong>特征</strong>：<br><li>内地客户偏好：<strong>全球医疗险</strong></li><br><li>在港直付</li><br><li>重视品牌</li></p>
<p><strong>推荐</strong>：<br><li>AIA 全球至尊</li><br><li>保诚医无忧</li><br><li>安盛卓越</li></p>
<hr>
<h1>🏥 第四部分：年龄案例</h1>
<h2>案例 21：20+ 岁年轻客户</h2>
<p><strong>特征</strong>：<br><li>收入低、保障需求高</li><br><li>保费便宜</li><br><li>容易接受新概念</li></p>
<p><strong>推荐</strong>：<br><li>入门级医疗险</li><br><li>储蓄险 + 投资险</li><br><li>长期保单（越年轻越便宜）</li></p>
<hr>
<h2>案例 22：30+ 岁中坚客户</h2>
<p><strong>特征</strong>：<br><li>收入上升</li><br><li>家庭责任重</li><br><li>重视保障</li></p>
<p><strong>推荐</strong>：<br><li>高端医疗险</li><br><li>重疾险</li><br><li>定期寿险</li></p>
<hr>
<h2>案例 23：40+ 岁黄金客户</h2>
<p><strong>特征</strong>：<br><li>收入顶峰</li><br><li>资产积累</li><br><li>关注健康 + 传承</li></p>
<p><strong>推荐</strong>：<br><li>高端医疗险（升级）</li><br><li>重疾险</li><br><li>储蓄险（传承）</li><br><li>长期护理险（未雨绸缪）</li></p>
<hr>
<h2>案例 24：50+ 岁临退休</h2>
<p><strong>特征</strong>：<br><li>收入下降但有资产</li><br><li>担心重疾</li><br><li>关注资产传承</li></p>
<p><strong>推荐</strong>：<br><li>短期高保费重疾险</li><br><li>防癌险</li><br><li>年金险（稳定收入）</li><br><li>长期护理险</li></p>
<hr>
<h2>案例 25：60+ 岁退休长者</h2>
<p><strong>特征</strong>：<br><li>收入有限</li><br><li>医疗需求大</li><br><li>保险选择少</li></p>
<p><strong>推荐</strong>：<br><li>防癌险（仅癌症）</li><br><li>政府医疗券</li><br><li>长者健康中心（免费体检）</li><br><li>公立医院（港人便宜）</li></p>
<hr>
<h1>🏥 第五部分：行业案例</h1>
<h2>案例 26：金融行业客户</h2>
<p><strong>特征</strong>：<br><li>高收入、高学历</li><br><li>重视风险对冲</li><br><li>决策快</li></p>
<p><strong>推荐</strong>：<br><li>高端医疗险（顶配）</li><br><li>高保额重疾险</li><br><li>投资相连寿险</li></p>
<hr>
<h2>案例 27：科技行业客户</h2>
<p><strong>特征</strong>：<br><li>中高收入</li><br><li>喜欢线上投保</li><br><li>关注创新疗法</li></p>
<p><strong>推荐</strong>：<br><li>中高端医疗险</li><br><li>重疾险（含标靶/免疫治疗）</li><br><li>在线 APP 理赔</li></p>
<hr>
<h2>案例 28：教育行业客户</h2>
<p><strong>特征</strong>：<br><li>中等收入</li><br><li>重视子女教育</li><br><li>长期规划</li></p>
<p><strong>推荐</strong>：<br><li>中端医疗险</li><br><li>教育基金（储蓄险）</li><br><li>儿童保险</li></p>
<hr>
<h2>案例 29：医生/护士客户</h2>
<p><strong>特征</strong>：<br><li>懂医疗</li><br><li>重视质量</li><br><li>不需要太多解释</li></p>
<p><strong>推荐</strong>：<br><li>顶配医疗险</li><br><li>全球含美</li><br><li>私家房</li></p>
<hr>
<h2>案例 30：公务员客户</h2>
<p><strong>特征</strong>：<br><li>有医疗福利</li><br><li>预算有限</li><br><li>重视稳定</li></p>
<p><strong>推荐</strong>：<br><li>补充医疗险</li><br><li>重大疾病险</li><br><li>储蓄险</li></p>
<hr>
<h1>🏥 第六部分：常见客户异议处理</h1>
<h2>异议 1："我现在身体很好，不需要保险"</h2>
<p><strong>回应</strong>：<br>> "你说得对，你现在身体很好是好事。但保险就是为<strong>未来不确定性</strong>准备的。  <br>> 30 岁健康，40 岁可能开始有血压问题，50 岁可能癌症。  <br>> 等到身体出问题时，再想买保险就<strong>买不到</strong>了。  <br>> 保险不是给'病人'买的，是给'健康人'买的——趁健康买，<strong>便宜 + 容易过</strong>。"</p>
<hr>
<h2>异议 2："保费太贵了"</h2>
<p><strong>回应</strong>：<br>> "我理解你的顾虑。我们来看个对比：  <br>> - 一份高端医疗险：年保费 $2.5 万  <br>> - 一杯咖啡：$50/天 × 30 天 = $1,500/月  <br>> - 一场大病：$200 万-$500 万  <br>> <br>> 你愿意用每天 $70（2 杯咖啡的钱）换 $200 万的保障吗？  <br>> 而且越年轻越便宜——你现在不保，明年更贵。"</p>
<hr>
<h2>异议 3："我有公司医保了"</h2>
<p><strong>回应</strong>：<br>> "公司医保是好事，但有几个问题：  <br>> 1. <strong>离职就没了</strong>（不是终身保障）  <br>> 2. <strong>额度有限</strong>（通常 $10-50 万/年）  <br>> 3. <strong>不覆盖私立医院</strong>（如养和、港怡）  <br>> 4. <strong>不包含重大疾病</strong>（如癌症一次性赔付）  <br>> <br>> 个人医疗险 = <strong>终身保障</strong> + <strong>高额度</strong> + <strong>私立医院</strong>。  <br>> 公司医保是基本，个人医疗险是升级。"</p>
<hr>
<h2>异议 4："我考虑考虑"</h2>
<p><strong>回应</strong>：<br>> "完全理解，保险是重大决定。  <br>> 不过有几点要提醒：  <br>> 1. <strong>保费每年涨</strong>（随年龄增加）  <br>> 2. <strong>健康状况会变</strong>（一旦查出问题，<strong>加费或拒保</strong>）  <br>> 3. <strong>医疗通胀</strong>（医疗费用每年涨 5-10%）  <br>> <br>> 我可以<strong>先给你做计划书</strong>，不签约，你拿回家研究。  <br>> 2 周内回复我就行——这样至少保住了'现在的保费'。"</p>
<hr>
<h2>异议 5："我太太/先生不同意"</h2>
<p><strong>回应</strong>：<br>> "理解，家庭决定要一起做。  <br>> 建议这样：  <br>> 1. <strong>我先给你详细资料</strong>  <br>> 2. <strong>你回家和家人讨论</strong>  <br>> 3. <strong>约个三方会议</strong>（你 + 家人 + 我）  <br>> <br>> 我可以耐心解释，<strong>绝不强推</strong>。  <br>> 保险是家庭长期规划，需要全家共识。"</p>
<hr>
<h1>🏥 第七部分：实战话术模板</h1>
<h2>开场白</h2>
<pre><code>"主任好，我姓X，是XX保险的顾问。
[客户名字]总，听您说您最近在考虑保险规划对吗？
今天主要想了解您3个方面：
<li>您的家庭情况</li>
<li>您现有的保障</li>
<li>您最担心的风险</li>
我们一起看看什么样的方案最适合您。"</code></pre>
<h2>需求挖掘</h2>
<pre><code>"我看您家里有3口人，孩子5岁，您今年40岁...
<li>收入方面您方便透露一下吗？</li>
<li>如果不幸得了大病，您希望在哪里治疗？</li>
<li>治疗费您希望保险公司直接付，还是先付后赔？</li>
<li>您对保费的心理预算是多少？"</code></pre></li>
<h2>方案呈现</h2>
<pre><code>"根据您的情况，我为您量身定制了2个方案：
<p><strong>方案A：中端医疗</strong><br><li>房型：半私家</li><br><li>保额：HK$1,000 万</li><br><li>自付额：$20,000</li><br><li>年保费：HK$15,000</li><br><li>适合：基本保障</li></p>
<p><strong>方案B：高端医疗</strong><br><li>房型：私家</li><br><li>保额：HK$2,500 万</li><br><li>自付额：$0</li><br><li>年保费：HK$30,000</li><br><li>适合：全面保障</li></p>
<p>您更倾向哪个方向？"</code></pre></p>
<h2>促成签约</h2>
<pre><code>"我建议您先从方案A开始，年保费 $15,000，相当于每天 $40。
我们可以先做健康核保，如果通过，2-3 周保单生效。
要不要先填个投保申请？我现在就帮您预约体检。"</code></pre>

<p>> 重要免责声明：以上内容为 IFA 培训/参考用，<strong>不构成实际医疗/保险建议</strong>。具体方案以专业医生/保险顾问为准。</p>`
  },
  "2.6.14 香港医疗监管与认证": {
    id: "hkm_2_6_14",
    title: "2.6.14 香港医疗监管与认证",
    content: `<h1>香港医疗监管 + 认证体系（2026 版）</h1>
<p>> <strong>最后整理</strong>：2026-06-21<br>> <strong>用途</strong>：建立客户信任 + 解释香港医疗为何可靠<br>> <strong>数据说明</strong>：监管机构信息基于 2024 年整理</p>
<hr>
<h2>关键概念</h2>
<pre><code>香港医疗的"金字招牌" = 4 大支柱
<li>医院管理局 (HA) - 公立医院统一管理</li>
<li>衞生署 (DH) - 公共卫生监管</li>
<li>医务委员会 (MCHK) - 医生执业认证</li>
<li>私家医院条例 - 私立医院监管</li>
<p>+ 国际认证：<br><li>JCI（国际医院联合委员会）</li><br><li>ISO 9001</li><br><li>各类专科认证</code></pre></li></p>
<hr>
<h2>一、医院管理局（HA - Hospital Authority）</h2>
<h3>基本信息</h3>
<p>> <strong>成立</strong>：1990 年  <br>> <strong>管理</strong>：全港 <strong>43 间</strong>公立医院/机构  <br>> <strong>员工</strong>：约 90,000 人  <br>> <strong>预算</strong>：HK$900 亿+/年（政府拨款）  <br>> <strong>官网</strong>：<a href="https://www.ha.org.hk" target="_blank" rel="noopener">https://www.ha.org.hk</a></p>
<h3>核心职责</h3>
<table border="1" cellpadding="6">
<tr><th>职责</th><th>内容</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>公立医院管理</strong></td><td>全港公立医院统一管理</td></tr>
<tr><td><strong>医生培训</strong></td><td>与医学院合作培训医生</td></tr>
<tr><td><strong>专科中心</strong></td><td>癌症、心脏、儿童等专科中心</td></tr>
<tr><td><strong>医疗服务</strong></td><td>急症、住院、专科、日间手术</td></tr>
<tr><td><strong>药物管理</strong></td><td>统一采购、药物名册</td></tr>
<tr><td><strong>IT 系统</strong></td><td>HA Go、eHealth 等</td></tr>
</table>
<h3>关键数字</h3>
<table border="1" cellpadding="6">
<tr><th>指标</th><th>数值</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td>公立医院</td><td>43 间</td></tr>
<tr><td>病床总数</td><td>~30,000 张</td></tr>
<tr><td>年住院人次</td><td>~170 万</td></tr>
<tr><td>年急症人次</td><td>~220 万</td></tr>
<tr><td>年专科门诊</td><td>~800 万</td></tr>
</table>
<h3>HA 总裁</h3>
<li>现任总裁：<strong>梁宪孙教授</strong>（Prof. Tony Ko）</li>
<li>任期：2019 年起</li>
<hr>
<h2>二、衞生署（DH - Department of Health）</h2>
<h3>基本信息</h3>
<p>> <strong>成立</strong>：1939 年（前身）  <br>> <strong>总部</strong>：香港湾仔皇后大道东 213 号  <br>> <strong>员工</strong>：约 6,000 人  <br>> <strong>官网</strong>：<a href="https://www.dh.gov.hk" target="_blank" rel="noopener">https://www.dh.gov.hk</a>  <br>> <strong>署长</strong>：现任 <strong>林文健医生</strong></p>
<h3>核心职责</h3>
<table border="1" cellpadding="6">
<tr><th>职责</th><th>内容</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>公共卫生</strong></td><td>传染病控制、疫苗接种</td></tr>
<tr><td><strong>医疗监管</strong></td><td>私家医院、医生、药物</td></tr>
<tr><td><strong>健康教育</strong></td><td>健康促进、疾病预防</td></tr>
<tr><td><strong>基层医疗</strong></td><td>长者中心、母婴院等</td></tr>
<tr><td><strong>中医药</strong></td><td>中医师注册、中药监管</td></tr>
<tr><td><strong>港口衞生</strong></td><td>入境检疫</td></tr>
</table>
<h3>关键服务</h3>
<li>母婴健康院（31 间）</li>
<li>长者健康中心（18 间）</li>
<li>妇女健康中心（3 间）</li>
<li>美沙酮诊所（17 间）</li>
<li>胸肺科诊所（12 间）</li>
<li>社会衞生科诊所（8 间）</li>
<li>学童牙科诊所（8 间）</li>
<li>旅游健康中心（2 间）</li>
<hr>
<h2>三、医务委员会（MCHK - Medical Council of Hong Kong）</h2>
<h3>基本信息</h3>
<p>> <strong>成立</strong>：1950 年代  <br>> <strong>总部</strong>：香港铜锣湾皇室大厦 17 楼  <br>> <strong>官网</strong>：<a href="https://www.mchk.org.hk" target="_blank" rel="noopener">https://www.mchk.org.hk</a>  <br>> <strong>电话</strong>：2873 5131  <br>> <strong>主席</strong>：现任（由医生选举）</p>
<h3>核心职责</h3>
<table border="1" cellpadding="6">
<tr><th>职责</th><th>内容</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>医生注册</strong></td><td>香港医生执照发放</td></tr>
<tr><td><strong>专业操守</strong></td><td>医生行为准则</td></tr>
<tr><td><strong>纪律处分</strong></td><td>处理投诉、违纪处分</td></tr>
<tr><td><strong>持续教育</strong></td><td>医生持续专业发展</td></tr>
<tr><td><strong>考试</strong></td><td>医生执业资格试（LMCHK）</td></tr>
</table>
<h3>医生注册类型</h3>
<table border="1" cellpadding="6">
<tr><th>类型</th><th>适用</th><th>说明</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>正式注册</strong></td><td>本地医学院毕业</td><td>完成实习后正式注册</td></tr>
<tr><td><strong>有限度注册</strong></td><td>海外医生</td><td>在指定机构工作</td></tr>
<tr><td><strong>临时注册</strong></td><td>海外培训</td><td>教学/交流目的</td></tr>
<tr><td><strong>专科医生注册</strong></td><td>专科认证</td><td>11 个专科</td></tr>
</table>
<h3>11 个认可专科</h3>
<table border="1" cellpadding="6">
<tr><th>#</th><th>专科</th><th>学会</th></tr>
<tr><td>---</td><td>------</td><td>------</td></tr>
<tr><td>1</td><td>内科</td><td>香港内科学院</td></tr>
<tr><td>2</td><td>外科</td><td>香港外科医学院</td></tr>
<tr><td>3</td><td>骨科</td><td>香港骨科医学院</td></tr>
<tr><td>4</td><td>儿科</td><td>香港儿科医学院</td></tr>
<tr><td>5</td><td>妇产科</td><td>香港妇产科学院</td></tr>
<tr><td>6</td><td>麻醉科</td><td>香港麻醉科医学院</td></tr>
<tr><td>7</td><td>眼科</td><td>香港眼科医学院</td></tr>
<tr><td>8</td><td>耳鼻喉科</td><td>香港耳鼻喉科医学院</td></tr>
<tr><td>9</td><td>精神科</td><td>香港精神科医学院</td></tr>
<tr><td>10</td><td>放射科</td><td>香港放射科医学院</td></tr>
<tr><td>11</td><td>病理科</td><td>香港病理科医学院</td></tr>
</table>
<h3>公众查询</h3>
<li>医生是否注册：https://www.mchk.org.hk</li>
<li>医生是否专科：查询"专科名册"</li>
<li>投诉医生：医务委员会投诉</li>
<hr>
<h2>四、私家医院监管</h2>
<h3>监管法规</h3>
<li><strong>《医院、护养院及留产院注册条例》</strong>（Cap. 165）</li>
<li><strong>《私家医院实务守则》</strong>（Code of Practice for Private Hospitals）</li>
<h3>监管机构</h3>
<li><strong>衞生署</strong> 私家医院规管办事处</li>
<li>负责：注册、巡查、调查投诉</li>
<h3>注册要求</h3>
<table border="1" cellpadding="6">
<tr><th>要求</th><th>内容</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>硬件</strong></td><td>设施、设备、卫生</td></tr>
<tr><td><strong>软件</strong></td><td>医生、护士、辅助人员</td></tr>
<tr><td><strong>管理</strong></td><td>治理结构、质量管理</td></tr>
<tr><td><strong>安全</strong></td><td>应急、感染控制</td></tr>
<tr><td><strong>收费</strong></td><td>透明、公示</td></tr>
</table>
<h3>巡查制度</h3>
<li><strong>定期巡查</strong>：每年 1-2 次</li>
<li><strong>突击检查</strong>：根据投诉/事件</li>
<li><strong>续牌</strong>：每 3-5 年续牌</li>
<hr>
<h2>五、其他重要监管机构</h2>
<h3>1. 药剂业及毒药管理局（PPB）</h3>
<li><strong>职责</strong>：药物注册、销售监管</li>
<li><strong>官网</strong>：<a href="https://www.ppbhk.org.hk" target="_blank" rel="noopener">https://www.ppbhk.org.hk</a></li>
<h3>2. 中医药管理委员会（CMC）</h3>
<li><strong>职责</strong>：中医师注册、中药监管</li>
<li><strong>官网</strong>：<a href="https://www.cmchk.org.hk" target="_blank" rel="noopener">https://www.cmchk.org.hk</a></li>
<h3>3. 牙医管理委员会（DHCHK）</h3>
<li><strong>职责</strong>：牙医注册、纪律</li>
<li><strong>官网</strong>：<a href="https://www.dchk.org.hk" target="_blank" rel="noopener">https://www.dchk.org.hk</a></li>
<h3>4. 护士管理局（NCHK）</h3>
<li><strong>职责</strong>：护士注册</li>
<li><strong>官网</strong>：<a href="https://www.nchk.org.hk" target="_blank" rel="noopener">https://www.nchk.org.hk</a></li>
<h3>5. 辅助医疗业管理局（SMCHK）</h3>
<li><strong>职责</strong>：物理治疗师、职业治疗师等</li>
<li><strong>官网</strong>：<a href="https://www.smchk.org.hk" target="_blank" rel="noopener">https://www.smchk.org.hk</a></li>
<h3>6. 香港药剂师学会</h3>
<li>药剂师专业组织</li>
<h3>7. 香港医学会（HKMSS）</h3>
<li>医生专业组织</li>
<hr>
<h2>六、国际认证</h2>
<h3>JCI（Joint Commission International）</h3>
<p>> <strong>性质</strong>：<strong>国际医院联合委员会</strong>认证  <br>> <strong>总部</strong>：美国芝加哥  <br>> <strong>官网</strong>：<a href="https://www.jointcommissioninternational.org" target="_blank" rel="noopener">https://www.jointcommissioninternational.org</a></p>
<p><strong>JCI 认证标准</strong>：<br><li>国际化患者安全目标</li><br><li>临床护理质量</li><br><li>医疗管理</li><br><li>设施安全</li><br><li>员工资质</li></p>
<p><strong>香港 JCI 认证医院</strong>（部分）：</p>
<table border="1" cellpadding="6">
<tr><th>医院</th><th>认证状态</th></tr>
<tr><td>------</td><td>----------</td></tr>
<tr><td>养和医院</td><td>已认证</td></tr>
<tr><td>港怡医院</td><td>已认证</td></tr>
<tr><td>明德国际</td><td>已认证</td></tr>
<tr><td>香港港安（荃湾）</td><td>已认证</td></tr>
<tr><td>香港港安（司徒拔道）</td><td>已认证</td></tr>
<tr><td>圣保禄医院</td><td>已认证</td></tr>
<tr><td>浸信会医院</td><td>已认证</td></tr>
<tr><td>嘉诺撒医院</td><td>已认证</td></tr>
<tr><td>播道医院</td><td>已认证</td></tr>
<tr><td>圣德肋撒医院</td><td>已认证</td></tr>
<tr><td>仁安医院</td><td>已认证</td></tr>
</table>
<p><strong>意义</strong>：<br><li>国际认可</li><br><li>适合跨境医疗（内地/海外客户）</li><br><li>客户信任度提升</li></p>
<hr>
<h3>其他认证</h3>
<table border="1" cellpadding="6">
<tr><th>认证</th><th>适用</th><th>意义</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>ISO 9001</strong></td><td>综合管理</td><td>国际质量管理体系</td></tr>
<tr><td><strong>ISO 14001</strong></td><td>环境管理</td><td>环保规范</td></tr>
<tr><td><strong>澳洲 ACHS</strong></td><td>医院</td><td>澳洲医院标准</td></tr>
<tr><td><strong>英国 QHA Trent</strong></td><td>医院</td><td>英国医院标准</td></tr>
<tr><td><strong>加拿大 Accreditation Canada</strong></td><td>医院</td><td>加拿大医院标准</td></tr>
<tr><td><strong>美国 HIMSS</strong></td><td>医院 IT</td><td>医疗信息化</td></tr>
</table>
<hr>
<h2>七、香港医疗的法律保障</h2>
<h3>主要法规</h3>
<table border="1" cellpadding="6">
<tr><th>法规</th><th>内容</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>《医院、护养院及留产院注册条例》</strong></td><td>私家医院监管</td></tr>
<tr><td><strong>《医务委员会条例》</strong></td><td>医生注册</td></tr>
<tr><td><strong>《中医药条例》</strong></td><td>中医监管</td></tr>
<tr><td><strong>《药剂业及毒药条例》</strong></td><td>药物监管</td></tr>
<tr><td><strong>《个人资料（私隐）条例》</strong></td><td>病人隐私</td></tr>
<tr><td><strong>《残疾歧视条例》</strong></td><td>残疾保障</td></tr>
<tr><td><strong>《基因改造生物（管制释出）条例》</strong></td><td>生物安全</td></tr>
<tr><td><strong>《人体器官移植条例》</strong></td><td>器官移植</td></tr>
<tr><td><strong>《死因裁判官条例》</strong></td><td>死亡调查</td></tr>
<tr><td><strong>《精神健康条例》</strong></td><td>精神病人权益</td></tr>
</table>
<h3>病人权利</h3>
<li><strong>知情同意权</strong>：治疗前必须告知</li>
<li><strong>私隐权</strong>：医疗记录保密</li>
<li><strong>选择权</strong>：选择医生/医院</li>
<li><strong>投诉权</strong>：向医院/医务委员会投诉</li>
<li><strong>查阅权</strong>：查看自己的医疗记录</li>
<hr>
<h2>八、医疗保险监管</h2>
<h3>保险业监管局（IA）</h3>
<p>> <strong>成立</strong>：2015 年（前身是 OCI）  <br>> <strong>总部</strong>：香港金钟  <br>> <strong>官网</strong>：<a href="https://www.ia.org.hk" target="_blank" rel="noopener">https://www.ia.org.hk</a>  <br>> <strong>职责</strong>：保险公司监管、保险中介人发牌</p>
<h3>核心职责</h3>
<table border="1" cellpadding="6">
<tr><th>职责</th><th>内容</th></tr>
<tr><td>------</td><td>------</td></tr>
<tr><td><strong>保险公司监管</strong></td><td>财务稳健性</td></tr>
<tr><td><strong>保险中介发牌</strong></td><td>保险代理/经纪</td></tr>
<tr><td><strong>产品审批</strong></td><td>长期保险、医疗保险</td></tr>
<tr><td><strong>投诉处理</strong></td><td>客户投诉</td></tr>
<tr><td><strong>市场行为</strong></td><td>防止销售误导</td></tr>
</table>
<h3>保险中介人分类</h3>
<table border="1" cellpadding="6">
<tr><th>类型</th><th>资格</th><th>雇主</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>持牌保险代理</strong></td><td>个人</td><td>保险公司</td></tr>
<tr><td><strong>持牌业务代表</strong></td><td>个人</td><td>持牌代理</td></tr>
<tr><td><strong>持牌保险经纪</strong></td><td>公司</td><td>经纪公司</td></tr>
<tr><td><strong>持牌业务代表（经纪）</strong></td><td>个人</td><td>持牌经纪</td></tr>
</table>
<h3>IFA 的监管</h3>
<li>必须在 IA 注册</li>
<li>必须有持续专业发展（CPD）时数</li>
<li>每年 CPD 要求：15 小时（保险中介人）</li>
<li>销售误导会受罚</li>
<hr>
<h2>九、香港医疗的国际地位</h2>
<h3>国际排名</h3>
<table border="1" cellpadding="6">
<tr><th>排名</th><th>指标</th><th>香港名次</th></tr>
<tr><td>------</td><td>------</td><td>----------</td></tr>
<tr><td>医疗效率</td><td>Bloomberg</td><td>全球第 1</td></tr>
<tr><td>人均寿命</td><td>WHO</td><td>全球第 1-2</td></tr>
<tr><td>婴儿死亡率</td><td>WHO</td><td>全球最低之列</td></tr>
<tr><td>癌症 5 年生存率</td><td>多个</td><td>全球前列</td></tr>
<tr><td>医疗系统效率</td><td>经济学人</td><td>全球前列</td></tr>
</table>
<h3>5 年生存率对比（部分癌种）</h3>
<table border="1" cellpadding="6">
<tr><th>癌种</th><th>香港</th><th>美国</th><th>内地</th></tr>
<tr><td>------</td><td>------</td><td>------</td><td>------</td></tr>
<tr><td><strong>乳癌</strong></td><td>89%</td><td>90%</td><td>82%</td></tr>
<tr><td><strong>前列腺癌</strong></td><td>84%</td><td>99%</td><td>70%</td></tr>
<tr><td><strong>肺癌</strong></td><td>21%</td><td>22%</td><td>19%</td></tr>
<tr><td><strong>大肠癌</strong></td><td>58%</td><td>65%</td><td>57%</td></tr>
<tr><td><strong>肝癌</strong></td><td>27%</td><td>20%</td><td>12%</td></tr>
<tr><td><strong>胃癌</strong></td><td>40%</td><td>32%</td><td>35%</td></tr>
<tr><td><strong>鼻咽癌</strong></td><td><strong>80%+</strong></td><td>60%</td><td>50%</td></tr>
</table>
<p><strong>数据来源</strong>：医院管理局癌症数据统计中心 2020-2024</p>
<hr>
<h2>十、客户咨询 Q&A（监管类）</h2>
<h3>Q1：香港医生水平如何保证？</h3>
> A：<strong>3 重保障</strong>：
> 1. <strong>医学院严格筛选</strong>（港大/中大录取率 < 5%）
> 2. <strong>医务委员会注册</strong>（无执照不得执业）
> 3. <strong>持续教育</strong>（每年 CPD 学时要求）
> 4. <strong>纪律处分</strong>（投诉→ 调查→ 处分）
<h3>Q2：香港的药物监管严格吗？</h3>
> A：<strong>非常严格</strong>：
> - <strong>药剂业及毒药管理局</strong>（PPB）注册
> - <strong>2 阶段审批</strong>：注册申请 + 上市后监察
> - <strong>国际标准</strong>：参考美国 FDA / 欧盟 EMA
> - <strong>新药可及性</strong>：大部分国际新药 1-2 年内可在港使用
> - <strong>药物名册</strong>：HA 标准药物目录
<h3>Q3：内地客户怎么知道香港医生是否正规？</h3>
> A：<strong>3 种方法</strong>：
> 1. <strong>查询医务委员会</strong>：https://www.mchk.org.hk
> 2. <strong>查询医院 JCI 认证</strong>：https://www.jointcommissioninternational.org
> 3. <strong>看医院/医生简介</strong>：通常列明学历、专科、年资
<h3>Q4：客户对香港医疗不信任，怎么办？</h3>
> A：强调<strong>4 大支柱</strong>：
> 1. <strong>完善法律体系</strong>（《医务委员会条例》等）
> 2. <strong>国际认证</strong>（JCI 认证医院）
> 3. <strong>公开数据</strong>（癌症生存率、医院排名）
> 4. <strong>独立监管</strong>（医务委员会、IA 等）
> + 真实案例分享
<h3>Q5：医疗纠纷怎么处理？</h3>
> A：<strong>3 种途径</strong>：
> 1. <strong>医院内部投诉</strong>（最快）
> 2. <strong>医务委员会投诉</strong>（针对医生）
> 3. <strong>民事诉讼</strong>（针对医院/医生）
> 4. <strong>医疗调解</strong>（香港有医疗调解员）
> 香港医疗纠纷相对内地<strong>少</strong>，处理也<strong>成熟</strong>
<h3>Q6：内地客户买香港保险受保护吗？</h3>
> A：<strong>有保护</strong>：
> 1. <strong>保险业监管局（IA）</strong> 监管
> 2. <strong>保险公司必须注册</strong>（香港注册的保险公司）
> 3. <strong>保单受香港法律保护</strong>
> 4. <strong>理赔受 IA 监督</strong>
> 5. <strong>万一保险公司倒闭</strong>（少见）：保单转移给其他公司
<h3>Q7：内地客户可以买香港医疗险吗？</h3>
> A：<strong>可以</strong>：
> - 香港保险<strong>不限制</strong>投保人地域
> - <strong>内地居民</strong>可正常投保
> - 部分公司有"内地客户"专属产品
> - 缴费方式：香港银行账户/信用卡/Visa/Master
<hr>
<h2>十一、客户咨询常用话术</h2>
<h3>话术 1：建立医疗专业信任</h3>
<pre><code>"主任您看，香港医疗的几大支柱：
<li>港大/中大医学院 - 全球排名前 30</li>
<li>JCI 国际认证 - 全球 1000+ 医院获认证，香港 12+ 家私立医院全部认证</li>
<li>医务委员会 - 严格医生注册制度</li>
<li>5 年生存率 - 多个癌种国际领先</li>
<p>所以香港医疗不光是'贵'，是'值得贵'。"</code></pre></p>
<h3>话术 2：解释为什么香港医疗值得</h3>
<pre><code>"很多客户问：'为什么香港医疗比内地贵那么多？'
<p>我列 3 个差异您就明白了：</p>
<li><strong>医生</strong> - 港大/中大医学院 + 6 年训练 + 专科 6-8 年</li>
<li><strong>设备</strong> - MRI/PET-CT/达芬奇机械臂/CAR-T 治疗</li>
<li><strong>药物</strong> - 90% 国际新药 1-2 年内可在港使用</li>
<p>这就是香港医疗的'品牌溢价'。<br>买保险不是买便宜，是买'万一时的救命稻草'。"</code></pre></p>
<h3>话术 3：JCI 认证的重要性</h3>
<pre><code>"JCI（Joint Commission International）是全球最严格的医院认证。
<p>全球 1,000+ 医院获认证，香港有 12+ 家私立医院全部获认证。</p>
<p>这意味着：<br><li>国际质量标准</li><br><li>患者安全目标</li><br><li>临床护理质量</li><br><li>持续改进机制</li></p>
<p>客户去香港看病，不光买服务，更买'国际标准'的安心。"</code></pre></p>
<hr>
<h2>十二、监管机构联系方式速查</h2>
<table border="1" cellpadding="6">
<tr><th>机构</th><th>电话</th><th>官网</th></tr>
<tr><td>------</td><td>------</td><td>------</td></tr>
<tr><td>医院管理局（HA）</td><td>2300 6555</td><td>www.ha.org.hk</td></tr>
<tr><td>衞生署（DH）</td><td>2961 8989</td><td>www.dh.gov.hk</td></tr>
<tr><td>医务委员会（MCHK）</td><td>2873 5131</td><td>www.mchk.org.hk</td></tr>
<tr><td>中医药管理委员会（CMC）</td><td>2121 1888</td><td>www.cmchk.org.hk</td></tr>
<tr><td>牙医管理委员会（DHCHK）</td><td>2873 5313</td><td>www.dchk.org.hk</td></tr>
<tr><td>药剂业及毒药管理局（PPB）</td><td>2527 2198</td><td>www.ppbhk.org.hk</td></tr>
<tr><td>保险业监管局（IA）</td><td>3899 9983</td><td>www.ia.org.hk</td></tr>
<tr><td>私家医院规管办事处（DH）</td><td>3107 8462</td><td>-</td></tr>
</table>

<p>> 重要免责声明：以上信息仅供参考，<strong>不构成医疗/法律建议</strong>。具体案件请咨询专业律师/医生/监管机构。</p>`
  },
};

// 自动注入到 contentData（如已加载）
(function() {
  if (typeof contentData === 'undefined' || !contentData || !contentData.categories) return;
  var wikiCat = contentData.categories.find(function(c) { return c.id === 'wiki'; });
  if (!wikiCat) return;
  if (wikiCat.children && wikiCat.children.find(function(c) { return c.id === 'w26'; })) return;
  
  var medicalChildren = [
    { id: 'hkm_2_6_1',  title: '2.6.1 香港医院大全（主流版）', content: hkMedicalData['2.6.1 香港医院大全（主流版）'].content },
    { id: 'hkm_2_6_2',  title: '2.6.2 香港医院大全（完整版）', content: hkMedicalData['2.6.2 香港医院大全（完整版）'].content },
    { id: 'hkm_2_6_3',  title: '2.6.3 香港基层医疗大全',       content: hkMedicalData['2.6.3 香港基层医疗大全'].content },
    { id: 'hkm_2_6_4',  title: '2.6.4 香港私人连锁诊所大全',   content: hkMedicalData['2.6.4 香港私人连锁诊所大全'].content },
    { id: 'hkm_2_6_5',  title: '2.6.5 香港医疗总图速查',       content: hkMedicalData['2.6.5 香港医疗总图速查'].content },
    { id: 'hkm_2_6_6',  title: '2.6.6 香港医疗速查海报版',     content: hkMedicalData['2.6.6 香港医疗速查海报版'].content },
    { id: 'hkm_2_6_7',  title: '2.6.7 香港专科医生与复康大全', content: hkMedicalData['2.6.7 香港专科医生与复康大全'].content },
    { id: 'hkm_2_6_8',  title: '2.6.8 香港保险直付医院清单',   content: hkMedicalData['2.6.8 香港保险直付医院清单'].content },
    { id: 'hkm_2_6_9',  title: '2.6.9 香港手术住院费参考',     content: hkMedicalData['2.6.9 香港手术住院费参考'].content },
    { id: 'hkm_2_6_10', title: '2.6.10 香港癌症心脏儿科专题',   content: hkMedicalData['2.6.10 香港癌症心脏儿科专题'].content },
    { id: 'hkm_2_6_11', title: '2.6.11 香港中医名医清单',     content: hkMedicalData['2.6.11 香港中医名医清单'].content },
    { id: 'hkm_2_6_12', title: '2.6.12 香港牙医名医清单',     content: hkMedicalData['2.6.12 香港牙医名医清单'].content },
    { id: 'hkm_2_6_13', title: '2.6.13 香港客户医疗病例库',   content: hkMedicalData['2.6.13 香港客户医疗病例库'].content },
    { id: 'hkm_2_6_14', title: '2.6.14 香港医疗监管与认证',   content: hkMedicalData['2.6.14 香港医疗监管与认证'].content }
  ];
  
  wikiCat.children.push({
    id: 'w26',
    name: '2.6 香港医疗工具包',
    subtitle: '14 份完整工具·医院+基层+连锁+专科+监管',
    children: medicalChildren
  });
  
  console.log('已注入 2.6 香港医疗工具包（14 份）');
})();
