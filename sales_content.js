// sales_content.js - 进阶销售全流程实操

contentData.categories.push({
  id: 'sales',
  name: '\uD83D\uDCCA 销售进阶',
  subtitle: '进阶销售核心教程',
  children: [
    {
      id: 'sales_mod01_s0', name: '合规铺垫',
      children: [
        {
          id: 'sales_mod01_s0_sec00', name: '自身持牌资质合规自查',
          children: [
            { id: "sales_mod01_s0_sec00_item00", title: "从业身份合规边界", content: "<h2>从业身份合规边界</h2><p><strong>需求：</strong>内地从业者不得在内地公开以港险持牌人名义线下设点、办公驻点销售；\\n只能做客观咨询、需求规划、合规引导赴港流程，不得在内地完成签单、收款、出单；\\n严禁伪造牌照、PS 牌照截图、虚构持牌资质对外宣传获客。</p>" },
            { id: "sales_mod01_s0_sec00_item01", title: "官方核验路径与操作", content: "<h2>官方核验路径与操作</h2><p><strong>需求：</strong>登录香港保监局官网 → 持牌保险中介人登记册</p>" },
            { id: "sales_mod01_s0_sec00_item02", title: "持牌资质硬性要求", content: "<h2>持牌资质硬性要求</h2><p><strong>需求：</strong>必须持有香港保监局（IA）正规保险中介人牌照（个人牌照 / 机构牌照），包含：保险代理牌照、保险经纪牌照。</p>" },
          ]
        },
        {
          id: 'sales_mod01_s0_sec01', name: '香港保险核心合规要点',
          children: [
            { id: "sales_mod01_s0_sec01_item00", title: "严格禁止回佣、返佣、利益输送", content: "<h2>严格禁止回佣、返佣、利益输送</h2><p><strong>需求：</strong>绝对禁止行为\\n禁止向客户返还佣金、现金返利、礼品返利、购物卡、红包抵扣保费；\\n禁止以送旅游、送礼品、返现作为签单条件；禁止同业之间私下分佣、拆佣、互相返佣</p>" },
            { id: "sales_mod01_s0_sec01_item01", title: "保费支付规范合规", content: "<h2>保费支付规范合规</h2><p><strong>需求：</strong>资金来源合法合规\\n保费必须为个人合法收入、自有资金；\\n禁止洗钱、代收代缴、第三方代大额垫付保费。</p>" },
            { id: "sales_mod01_s0_sec01_item02", title: "售后与续期合规", content: "<h2>售后与续期合规</h2><p><strong>需求：</strong>不得承诺保证分红、保证理赔、随意承诺理赔结果；\\n续期保费不得个人代收，引导客户自主合规转账；\\n理赔、变更受益人、保单贷款等流程，按港保监局及保险公司正规流程办理，不得私下操作。</p>" },
            { id: "sales_mod01_s0_sec01_item03", title: "如实告知义务合规      （核保最大诚信原则", content: "<h2>如实告知义务合规      （核保最大诚信原则</h2><p><strong>需求：</strong>必须引导客户如实告知健康告知、过往体检异常、住院史、结节 / 三高 / 慢性病；</p>" },
            { id: "sales_mod01_s0_sec01_item04", title: "宣传与推广合规红线", content: "<h2>宣传与推广合规红线</h2><p><strong>需求：</strong>禁止夸大分红收益、演示收益当作保证收益；</p>" },
            { id: "sales_mod01_s0_sec01_item05", title: "赴港投保硬性合规要求（缺一不可", content: "<h2>赴港投保硬性合规要求（缺一不可</h2><p><strong>需求：</strong>投保人必须亲自赴港，本人亲临香港完成：身份核验、见证签署、录音录像、风险告知；\\n禁止：代签、远程签、内地异地签、视频代替面签、代办投保。</p>" },
          ]
        },
      ]
    },
    {
      id: 'sales_mod02_s0', name: '客群调研',
      children: [
        {
          id: 'sales_mod02_s0_sec00', name: '核心调研维度      （必收集，无遗漏）KYC',
          children: [
            { id: "sales_mod02_s0_sec00_item00", title: "1 基础职业信息（判断收入稳定性、风险等级、适配产品类型）", content: "<h2>1 基础职业信息（判断收入稳定性、风险等级、适配产品类型）</h2><p><strong>需求：</strong>核心提问：当前从事行业（如企业主、公职人员、自由职业、职场白领、高危职业等）、从业年限；</p>" },
            { id: "sales_mod02_s0_sec00_item01", title: "2资产规模信息（判断投保能力、产品档位，规避过度推介", content: "<h2>2资产规模信息（判断投保能力、产品档位，规避过度推介</h2><p><strong>需求：</strong>•核心提问：个人/家庭可支配金融资产（存款、理财、基金等）、固定资产（房产、车辆）规模；</p>" },
            { id: "sales_mod02_s0_sec00_item02", title: "3家庭结构信息（判断保障/规划需求优先级", content: "<h2>3家庭结构信息（判断保障/规划需求优先级</h2><p><strong>需求：</strong>- 核心提问：婚姻状态（单身/已婚/再婚/离异）、子女情况（是否有子女、子女年龄、是否有留学/婚嫁规划）、父母赡养情况（父母年龄、是否需要养老兜底）；</p>" },
            { id: "sales_mod02_s0_sec00_item03", title: "4核心需求痛点（精准匹配港险产品，拒绝无效推介", content: "<h2>4核心需求痛点（精准匹配港险产品，拒绝无效推介</h2><p><strong>需求：</strong>核心提问：想通过港险解决什么问题（可多选，引导客户明确）；</p><p><strong>适配产品：</strong>具体需求选项（可直接发给客户勾选</p>" },
            { id: "sales_mod02_s0_sec00_item04", title: "5对香港保险的认知程度（判断推介重点，规避认知偏差）", content: "<h2>5对香港保险的认知程度（判断推介重点，规避认知偏差）</h2><p><strong>需求：</strong>核心提问：了解港险的渠道（朋友圈、熟人介绍、线上科普等）、对港险的核心认知（如产品优势、风险点）；</p>" },
            { id: "sales_mod02_s0_sec00_item05", title: "6跨境需求情况（匹配港险核心优势，精准对接", content: "<h2>6跨境需求情况（匹配港险核心优势，精准对接</h2><p><strong>需求：</strong>- 核心提问：是否有跨境相关需求（可多选）；：</p>" },
          ]
        },
        {
          id: 'sales_mod02_s0_sec01', name: '调研后信息整理与应用（核心：拒绝盲目推介',
          children: [
            { id: "sales_mod02_s0_sec01_item00", title: "信息分类归档", content: "<h2>信息分类归档</h2><p><strong>需求：</strong>将收集到的客户信息按“职业类型+核心需求+跨境需求”分类，建立客户调研档案，标注客户认知误区、核心痛点；</p>" },
            { id: "sales_mod02_s0_sec01_item01", title: "规避盲目推介", content: "<h2>规避盲目推介</h2><p><strong>需求：</strong>未完成调研、未明确客户需求前，不发送产品详情、不邀约赴港签单；针对认知偏差较大的客户，先做科普引导，再谈产品匹配</p>" },
            { id: "sales_mod02_s0_sec01_item02", title: "需求匹配筛选", content: "<h2>需求匹配筛选</h2><p><strong>需求：</strong>进阶销售\\\\需求匹配筛选.docx</p>" },
          ]
        },
        {
          id: 'sales_mod02_s0_sec02', name: '调研方式（合规、高效，不引起客户反感',
          children: [
            { id: "sales_mod02_s0_sec02_item00", title: "一对一沟通（补充", content: "<h2>一对一沟通（补充</h2><p><strong>需求：</strong>针对问卷中模糊的信息（如需求痛点、资产规模），通过微信/电话简要沟通，避免追问过于隐私的细节（如具体存款金额，可引导客户选择区间）；</p>" },
            { id: "sales_mod02_s0_sec02_item01", title: "合规注意", content: "<h2>合规注意</h2><p><strong>需求：</strong>调研过程中，不提前推介产品、不夸大港险优势、不隐瞒风险，仅收集信息；不泄露其他客户调研信息，保护客户隐私</p>" },
            { id: "sales_mod02_s0_sec02_item02", title: "线上调研（首选", content: "<h2>线上调研（首选</h2><p><strong>需求：</strong>设计简洁调研问卷（10-15题，单选+多选，5分钟内完成），通过微信发给客户，明确告知“调研目的是为了精准匹配产品，不盲目推介，保护客户隐私”；</p>" },
          ]
        },
      ]
    },
    {
      id: 'sales_mod03_s0', name: '方案素材',
      children: [
        {
          id: 'sales_mod03_s0_sec00', name: '合规投保流程手册（分步落地，规避违规',
          children: [
            { id: "sales_mod03_s0_sec00_item00", title: "投保前期准备（合规前置，避免遗漏）", content: "<h2>投保前期准备（合规前置，避免遗漏）</h2><p><strong>需求：</strong>进阶销售\\\\第一步：前期筹备\\\\1.1.4香港保险定制化方案核心素材（投保前期准备）.docx</p>" },
            { id: "sales_mod03_s0_sec00_item01", title: "投保合规禁忌（红线不可触碰）", content: "<h2>投保合规禁忌（红线不可触碰）</h2><p><strong>需求：</strong>1禁止代签、远程签、内地异地签，禁止协助客户伪造证件、地址证明、收入证明</p>" },
            { id: "sales_mod03_s0_sec00_item02", title: "投保后期跟进（合规收尾，降低纠纷）", content: "<h2>投保后期跟进（合规收尾，降低纠纷）</h2><p><strong>需求：</strong>进阶销售\\\\第一步：前期筹备\\\\1.1.4.2香港保险定制化方案核心素材（合规投保流程手册）.docx</p>" },
          ]
        },
        {
          id: 'sales_mod03_s0_sec01', name: '理赔案例合集（真实参考，增强信任）',
          children: [
            { id: "sales_mod03_s0_sec01_item00", title: "案例1：少儿重疾理赔（三口之家客群", content: "<h2>案例1：少儿重疾理赔（三口之家客群</h2>" },
            { id: "sales_mod03_s0_sec01_item01", title: "案例2：全球医疗理赔（跨境留学客群", content: "<h2>案例2：全球医疗理赔（跨境留学客群</h2>" },
            { id: "sales_mod03_s0_sec01_item02", title: "案例3：储蓄分红保单领取（养老规划客群）", content: "<h2>案例3：储蓄分红保单领取（养老规划客群）</h2>" },
            { id: "sales_mod03_s0_sec01_item03", title: "案例4：非标体理赔（健康异常客群", content: "<h2>案例4：非标体理赔（健康异常客群</h2>" },
          ]
        },
        {
          id: 'sales_mod03_s0_sec02', name: '自身专业背书资料（建立信任，提升竞争力）',
          children: [
            { id: "sales_mod03_s0_sec02_item00", title: "个人专业资质背书（核心必备", content: "<h2>个人专业资质背书（核心必备</h2><p><strong>需求：</strong>1. 持牌资质证明：香港保监局颁发的保险中介人牌照（清晰照片，标注牌照编号、有效期、执业状态），可附官网核验截图，证明自身合法执业。</p>" },
            { id: "sales_mod03_s0_sec02_item01", title: "团队服务优势背书（差异化竞争力）", content: "<h2>团队服务优势背书（差异化竞争力）</h2><p><strong>需求：</strong>1. 合规服务承诺：书面合规服务承诺（明确不代签、不回佣、不夸大收益、如实告知引导、客户信息保密等），可签字盖章，增强客户信任。</p>" },
            { id: "sales_mod03_s0_sec02_item02", title: "背书资料使用注意事项", content: "<h2>背书资料使用注意事项</h2><p><strong>需求：</strong>- 所有资质证明需真实有效，禁止伪造、PS牌照、虚构培训经历、夸大从业经验；</p>" },
          ]
        },
        {
          id: 'sales_mod03_s0_sec03', name: '香港保监局官方合规提示（权威背书，规避风险）',
          children: [
            { id: "sales_mod03_s0_sec03_item00", title: "1官方核心合规提示（原文摘录+解读", content: "<h2>1官方核心合规提示（原文摘录+解读</h2><p><strong>需求：</strong>1. 投保要求提示</p>" },
            { id: "sales_mod03_s0_sec03_item01", title: "2官方核验与投诉渠道（权威指引）", content: "<h2>2官方核验与投诉渠道（权威指引）</h2><p><strong>需求：</strong>- 持牌资质核验：登录香港保监局官网 → 持牌保险中介人登记册，输入姓名、证件编号，可核验从业者牌照状态、是否有违规记录。</p>" },
          ]
        },
      ]
    },
    {
      id: 'sales_mod04_s0', name: '精准定位细分客群',
      children: [
        {
          id: 'sales_mod04_s0_sec00', name: '',
          children: [
            { id: "sales_mod04_s0_sec00_item00", title: "单亲家庭保障客群", content: "<h2>单亲家庭保障客群</h2><p><strong>需求：</strong>家庭结构的特殊性</p><p><strong>适配产品：</strong>高额万用寿险、加重疾险、美金稳健储蓄</p><p><strong>关键词：</strong>单一经济支柱、家庭兜底、高保额防护、资产保全、一人撑起全家</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec01', name: '中产阶级储蓄增值客群',
          children: [
            { id: "sales_mod04_s0_sec01_item00", title: "中年提前养老规划客群", content: "<h2>中年提前养老规划客群</h2><p><strong>需求：</strong>35–50 岁中产，提前筹备退休，需求：年金、增额寿，锁定终身养老现金流</p><p><strong>适配产品：</strong>长期分红储蓄、养老型万用寿险</p><p><strong>关键词：</strong>提前备老、终身现金流、补充养老、退休体面</p>" },
            { id: "sales_mod04_s0_sec01_item01", title: "保守型理财置换客群", content: "<h2>保守型理财置换客群</h2><p><strong>需求：</strong>不炒股不买基金、只存银行，嫌利率低，置换增额寿、年金做长期增值。</p><p><strong>适配产品：</strong>稳健分红储蓄、复利增值保单</p><p><strong>关键词：</strong>利率下行、资产置换、保本复利、稳稳增值</p>" },
            { id: "sales_mod04_s0_sec01_item02", title: "子女教育储备中产客群", content: "<h2>子女教育储备中产客群</h2><p><strong>需求：</strong>孩子幼小初高阶段，需求：专款专用教育金、锁定未来学费、不被挪用。</p><p><strong>适配产品：</strong>少儿美金教育储蓄、分红定投险</p><p><strong>关键词：</strong>教育专款、锁定利率、专款专用、不被挪用</p>" },
            { id: "sales_mod04_s0_sec01_item03", title: "工薪白领稳健储蓄客群", content: "<h2>工薪白领稳健储蓄客群</h2><p><strong>需求：</strong>上班族、固定收入，怕亏损，需求：保本复利、强制储蓄、替代理财。</p><p><strong>适配产品：</strong>中短期美金分红储蓄、低门槛万用寿险</p><p><strong>关键词：</strong>保本复利、强制储蓄、替代理财、稳健躺息</p>" },
            { id: "sales_mod04_s0_sec01_item04", title: "房贷车贷负债中产客群", content: "<h2>房贷车贷负债中产客群</h2><p><strong>需求：</strong>背负大额房贷车贷，需求：稳健存钱 + 基础保障兼顾、防止失业大病断供。</p><p><strong>适配产品：</strong>定期寿险、均衡分红储蓄</p><p><strong>关键词：</strong>房贷兜底、风险对冲、保障储蓄两不误</p>" },
            { id: "sales_mod04_s0_sec01_item05", title: "自由职业个体户中产客群", content: "<h2>自由职业个体户中产客群</h2><p><strong>需求：</strong>小店主、微商、自由职业，社保不全，需求：自我医疗重疾 + 稳健储蓄双兼顾。</p><p><strong>适配产品：</strong>中低门槛港储蓄、基础重疾</p><p><strong>关键词：</strong>社保补充、收入兜底、稳健增值、自主养老</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec02', name: '人生阶段类客群',
          children: [
            { id: "sales_mod04_s0_sec02_item00", title: "三口之家育儿规划客群", content: "<h2>三口之家育儿规划客群</h2><p><strong>需求：</strong>重点给孩子配置教育金、少儿重疾、医疗、意外险、成长储备。</p><p><strong>适配产品：</strong>香港少儿美金教育储蓄、少儿重疾、国际留学医疗、儿童意外保障</p><p><strong>关键词：</strong>子女教育专款、成长储备、少儿全面保障、留学提前布局、锁定未来学费</p>" },
            { id: "sales_mod04_s0_sec02_item01", title: "单身青年刚需客群", content: "<h2>单身青年刚需客群</h2><p><strong>需求：</strong>刚工作、月光、怕大病意外，主打：重疾、医疗、意外险、定期寿险</p><p><strong>适配产品：</strong>香港常规重疾险、高端小额医疗、全球意外险、简约定期寿险</p><p><strong>关键词：</strong>初入职场、月光存钱、大病兜底、意外保障、低成本配齐、年轻人基础保障</p>" },
            { id: "sales_mod04_s0_sec02_item02", title: "子女独立自主期", content: "<h2>子女独立自主期</h2><p><strong>需求：</strong>孩子现在正处于成长期教育开销主打:教育金.医疗、意外险</p><p><strong>适配产品：</strong>香港少儿美金教育储蓄、教育金.医疗、意外险</p>" },
            { id: "sales_mod04_s0_sec02_item03", title: "新婚家庭刚需客群", content: "<h2>新婚家庭刚需客群</h2><p><strong>需求：</strong>刚组建家庭、房贷压力大，主打：家庭保障、房贷寿险、夫妻互保</p><p><strong>适配产品：</strong>香港重疾互保、万用寿险（房贷杠杆）、全球医疗、夫妻联名储蓄分红</p><p><strong>关键词：</strong>新婚成家、房贷压力、家庭责任、夫妻互保、房贷兜底、家庭基础风控</p>" },
            { id: "sales_mod04_s0_sec02_item04", title: "退休养老规划客群", content: "<h2>退休养老规划客群</h2><p><strong>需求：</strong>中老年群体，主打：养老年金、增额终身寿、医疗防癌险、长期护理</p><p><strong>适配产品：</strong>港分红养老储蓄、美金年金、高端养老医疗、防癌医疗险、长期护理配套储蓄</p><p><strong>关键词：</strong>退休养老、被动现金流、晚年体面、防癌兜底、长期护理、复利养老</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec03', name: '政策 & 场景类客群',
          children: [
            { id: "sales_mod04_s0_sec03_item00", title: "房产负债杠杆客群", content: "<h2>房产负债杠杆客群</h2><p><strong>需求：</strong>大额房贷、经营贷，用定寿、重疾做收入兜底、防止断供</p><p><strong>适配产品：</strong>高额定期寿险、万用寿险对冲房贷、重疾险守住收入</p><p><strong>关键词：</strong>大额房贷、经营负债、防止大病断供、收入兜底、负债风险对冲</p>" },
            { id: "sales_mod04_s0_sec03_item01", title: "社保不足补充客群", content: "<h2>社保不足补充客群</h2><p><strong>需求：</strong>新农合、城乡居民社保报销低，补齐百万医疗、重疾</p><p><strong>适配产品：</strong>港平价重疾、中端全球医疗、小额分红储蓄打底</p><p><strong>关键词：</strong>社保报销低、补齐商业保障、大病大额报销、城乡居民社保补充</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec04', name: '留学 / 移民规划客群 细分',
          children: [
            { id: "sales_mod04_s0_sec04_item00", title: "低龄本科留学规划客群", content: "<h2>低龄本科留学规划客群</h2><p><strong>需求：</strong>初高中 / 本科出国，需求：海外医疗、意外、留学保障、教育金提前锁定。</p><p><strong>适配产品：</strong>少儿美金教育储蓄、国际留学医疗、意外险</p><p><strong>关键词：</strong>留学专款、锁定学费、海外就医、意外兜底</p>" },
            { id: "sales_mod04_s0_sec04_item01", title: "候鸟式跨境养老客群", content: "<h2>候鸟式跨境养老客群</h2><p><strong>需求：</strong>内地过冬、港澳 / 海外避暑旅居，需求：全球医疗、异地就医报销、养老现金流规划</p><p><strong>适配产品：</strong>全球高端医疗、分红养老储蓄</p><p><strong>关键词：</strong>旅居养老、全球就医、终身现金流、稳健养老</p>" },
            { id: "sales_mod04_s0_sec04_item02", title: "全家移民前置规划客群", content: "<h2>全家移民前置规划客群</h2><p><strong>需求：</strong>准备办理港澳身份、海外移民，需求：移民前资产配置、税务筹划、保障无缝衔接</p><p><strong>适配产品：</strong>大额美金储蓄、万用寿险、移民配套保单</p><p><strong>关键词：</strong>移民前置、资产保全、税务优化、保障无缝衔接</p>" },
            { id: "sales_mod04_s0_sec04_item03", title: "子女定居海外父母养老客群", content: "<h2>子女定居海外父母养老客群</h2><p><strong>需求：</strong>子女已移民定居，父母在内地，需求：养老年金、医疗护理、备用现金流、跨境探视保障</p><p><strong>适配产品：</strong>港稳健分红储蓄、养老年金</p><p><strong>关键词：</strong>候鸟养老、被动现金流、医疗陪护、晚年兜底</p>" },
            { id: "sales_mod04_s0_sec04_item04", title: "硕博高端留学客群", content: "<h2>硕博高端留学客群</h2><p><strong>需求：</strong>研究生、博士深造，需求：高端国际医疗、身故伤残保障、毕业后留港 / 留外身份配套</p><p><strong>适配产品：</strong>高端全球医疗、万用寿险、美金稳健储蓄</p><p><strong>关键词：</strong>精英留学、全球医疗、身份规划、资产前置</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec05', name: '职业 / 身份专属客群',
          children: [
            { id: "sales_mod04_s0_sec05_item00", title: "企业主 / 个体户经营客群", content: "<h2>企业主 / 个体户经营客群</h2><p><strong>需求：</strong>企业资产与家庭资产隔离、债务隔离、企业传承、员工团体险</p><p><strong>适配产品：</strong>大额万用寿险、美金资产隔离储蓄、保单绑定家族信托、高端团体医疗</p><p><strong>关键词：</strong>家企隔离、债务隔离、资产保全、企业传承、税务规划、公私资产分开</p>" },
            { id: "sales_mod04_s0_sec05_item01", title: "公职 / 事业单位客群", content: "<h2>公职 / 事业单位客群</h2><p><strong>需求：</strong>社保完善，侧重补充养老、资产保本传承、增额寿、年金</p><p><strong>适配产品：</strong>美金分红储蓄、万用寿险、长期养老年金、稳健复利增额类保单</p><p><strong>关键词：</strong>社保完善、补充养老、保本传承、低风险增值、资产稳健打底</p>" },
            { id: "sales_mod04_s0_sec05_item02", title: "职场精英白领客群", content: "<h2>职场精英白领客群</h2><p><strong>需求：</strong>收入稳定、追求稳健增值、养老提前规划、高端医疗</p><p><strong>适配产品：</strong>全球高端医疗、均衡分红储蓄、中端万用寿险、退休前置年金</p><p><strong>关键词：</strong>精英收入、稳健增值、提前养老、私立就医、全球医疗、资产多元配置</p>" },
            { id: "sales_mod04_s0_sec05_item03", title: "自由职业 / 灵活就业客群", content: "<h2>自由职业 / 灵活就业客群</h2><p><strong>需求：</strong>无社保或社保薄弱，补齐医疗、重疾、养老储蓄</p><p><strong>适配产品：</strong>港基础重疾、中端医疗、灵活缴费美金储蓄分红</p><p><strong>关键词：</strong>社保薄弱、收入不稳定、自配医疗重疾、自主养老、强制稳健储蓄</p>" },
            { id: "sales_mod04_s0_sec05_item04", title: "高危职业从业客群", content: "<h2>高危职业从业客群</h2><p><strong>需求：</strong>建筑、货运、高空、军警等，专属意外险、定期寿险。</p><p><strong>适配产品：</strong>香港专属高风险职业意外险、高额定期寿险、定制加重疾</p><p><strong>关键词：</strong>高危职业、职业专属保障、高身故保额、务工兜底、意外防护</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec06', name: '财富传承客群',
          children: [
            { id: "sales_mod04_s0_sec06_item00", title: "再婚重组家庭传承客群", content: "<h2>再婚重组家庭传承客群</h2><p><strong>需求：</strong>二婚、带子女，需求：婚前资产隔离、财产定向给到亲子女、避免继子女财产纠纷。</p><p><strong>适配产品：</strong>万用寿险、定额终身寿、长期分红储蓄</p><p><strong>关键词：</strong>重组家庭、定向给付、资产锁定、避免分割、专属传承</p>" },
            { id: "sales_mod04_s0_sec06_item01", title: "超高净值家族传承客群", content: "<h2>超高净值家族传承客群</h2><p><strong>需求：</strong>大额资产、多套房产、金融资产丰厚，需求：保单 + 家族信托、定向分配、避纠纷、税务规划</p><p><strong>适配产品：</strong>高端万用寿险、家族信托 + 保单、美元传承储蓄</p><p><strong>关键词：</strong>家族资产、代际传承、避纠纷、税务规划、全球资产配置</p>" },
            { id: "sales_mod04_s0_sec06_item02", title: "隔代祖辈赠与传承客群", content: "<h2>隔代祖辈赠与传承客群</h2><p><strong>需求：</strong>爷爷奶奶外公外婆，需求：隔代给孙辈留资产、锁定教育 / 婚嫁金、避免父辈挥霍</p><p><strong>适配产品：</strong>少儿美金储蓄、万用寿险定投</p><p><strong>关键词：</strong>隔代传承、孙辈专款、锁定用途、防止挥霍、世代财富</p>" },
            { id: "sales_mod04_s0_sec06_item03", title: "高知专业人士传承客群", content: "<h2>高知专业人士传承客群</h2><p><strong>需求：</strong>医生、律师、高管、资深专家，需求：稳健资产兜底、身后财富定向传承、遗产规划。</p><p><strong>适配产品：</strong>中端万用寿险、均衡分红储蓄险</p><p><strong>关键词：</strong>精英资产、稳健兜底、身后安排、平稳传承</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec07', name: '跨境家庭保障客群 细分',
          children: [
            { id: "sales_mod04_s0_sec07_item00", title: "两地分居跨境家庭客群", content: "<h2>两地分居跨境家庭客群</h2><p><strong>需求：</strong>一方香港 / 海外定居、一方内地生活，需求：两地医疗互通、家庭共用保障、跨境资产配置</p><p><strong>适配产品：</strong>全球高端医疗、两地通用重疾、美金储蓄</p><p><strong>关键词：</strong>两地互通、全球就医、家庭共用、跨区保障</p>" },
            { id: "sales_mod04_s0_sec07_item01", title: "内地定居、配置港险跨境客群", content: "<h2>内地定居、配置港险跨境客群</h2><p><strong>需求：</strong>常住内地，想配置香港储蓄、重疾、万用寿险，做美元资产分散、保障升级。</p><p><strong>适配产品：</strong>港重疾、美金储蓄、万用寿险、高端医疗</p><p><strong>关键词：</strong>资产分散、美元配置、分红优势、医疗升级、汇率对冲</p>" },
            { id: "sales_mod04_s0_sec07_item02", title: "海外华侨侨眷客群", content: "<h2>海外华侨侨眷客群</h2><p><strong>需求：</strong>定居海外、亲属在内地，需求：跨境医疗、资产全球配置、身后财富跨境传承</p><p><strong>适配产品：</strong>全球医疗、美金大额储蓄、万用寿险</p><p><strong>关键词：</strong>华侨资产、全球医疗、跨境传承、异地兜底</p>" },
            { id: "sales_mod04_s0_sec07_item03", title: "港人在内地生活安居客群", content: "<h2>港人在内地生活安居客群</h2><p><strong>需求：</strong>香港居民长居内地，需求：内地医疗报销、重疾兜底、养老规划、两地权益衔接</p><p><strong>适配产品：</strong>港高端医疗、储蓄分红险</p><p><strong>关键词：</strong>港人内地安居、就医报销、养老兜底、保障衔接</p>" },
            { id: "sales_mod04_s0_sec07_item04", title: "跨境婚姻家庭客群", content: "<h2>跨境婚姻家庭客群</h2><p><strong>需求：</strong>内地与港澳台 / 外籍通婚，需求：资产隔离、婚姻财产保障、子女跨境福利规划</p><p><strong>适配产品：</strong>万用寿险、少儿美金教育储蓄、全球医疗</p><p><strong>关键词：</strong>跨境婚姻、财产隔离、子女规划、全球福利</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec08', name: '风险 & 需求专项客群',
          children: [
            { id: "sales_mod04_s0_sec08_item00", title: "健康异常非标体客群", content: "<h2>健康异常非标体客群</h2><p><strong>需求：</strong>有体检异常、结节、三高、既往症，适配防癌险、宽松核保重疾、普惠医疗</p><p><strong>适配产品：</strong>港宽松核保重疾、高端防癌医疗、非标体友好储蓄</p><p><strong>关键词：</strong>结节三高、体检异常、非标体可投、宽松核保、带病也能配保障</p>" },
            { id: "sales_mod04_s0_sec08_item01", title: "女性专属保障客群", content: "<h2>女性专属保障客群</h2><p><strong>需求：</strong>女性特定重疾、生育险、妇科专项、养老储蓄</p><p><strong>适配产品：</strong>香港女性专项重疾、妇科额外赔付、生育配套医疗、女性养老储蓄</p><p><strong>关键词：</strong>女性专属、妇科保障、生育兜底、女性养老、特定疾病多赔</p>" },
            { id: "sales_mod04_s0_sec08_item02", title: "子女婚嫁储备客群", content: "<h2>子女婚嫁储备客群</h2><p><strong>需求：</strong>专门为孩子攒婚嫁金、创业金，用增额寿 / 教育金锁定利率。</p><p><strong>适配产品：</strong>少儿美金长期分红储蓄、万用寿险定投做婚嫁金 / 创业金</p><p><strong>关键词：</strong>婚嫁专款、创业备用金、锁定利率、专款专用、提前锁定子女未来现金流</p>" },
            { id: "sales_mod04_s0_sec08_item03", title: "资产保本稳健理财客群", content: "<h2>资产保本稳健理财客群</h2><p><strong>需求：</strong>厌恶风险、不炒股不基金，只接受保险类保本复利资产</p><p><strong>适配产品：</strong>港稳健分红储蓄、复利增值万用寿险、低波动美金固收类保单</p><p><strong>关键词：</strong>厌恶风险、不炒股不基金、保本复利、利率下行、稳健躺息、替代银行存款</p>" },
            { id: "sales_mod04_s0_sec08_item04", title: "隔代传承赠与客群", content: "<h2>隔代传承赠与客群</h2><p><strong>需求：</strong>祖辈给孙辈留资产，定向传承、避免纠纷</p><p><strong>适配产品：</strong>祖辈投保孙辈受益美金储蓄、万用寿险指定受益人传承</p><p><strong>关键词：</strong>隔代传承、祖辈赠与、定向给到孙辈、防止父辈挥霍、规避家产纠纷</p>" },
          ]
        },
        {
          id: 'sales_mod04_s0_sec09', name: '高端细分延伸客群',
          children: [
            { id: "sales_mod04_s0_sec09_item00", title: "再婚家庭资产隔离客群", content: "<h2>再婚家庭资产隔离客群</h2><p><strong>需求：</strong>二婚重组家庭，规避财产纠纷、定向给到亲生子女</p><p><strong>适配产品：</strong>万用寿险、定额终身寿、指定受益人分红储蓄</p><p><strong>关键词：</strong>重组家庭、婚前资产隔离、定向传承亲子女、避免家产分割、婚姻财产风控</p>" },
            { id: "sales_mod04_s0_sec09_item01", title: "家族信托配套客群", content: "<h2>家族信托配套客群</h2><p><strong>需求：</strong>超高净值，保险 + 信托结合，做资产隔离、代际传承</p><p><strong>适配产品：</strong>大额万用寿险、高额分红储蓄、保单装入家族信托</p><p><strong>关键词：</strong>超高净值、保险 + 信托、代际传承、资产隔离、家业永续、遗产规划</p>" },
            { id: "sales_mod04_s0_sec09_item02", title: "高端医疗私立就医客群", content: "<h2>高端医疗私立就医客群</h2><p><strong>需求：</strong>追求私立医院、国际部、海外就医，配置高端医疗险、全球医疗</p><p><strong>适配产品：</strong>全球高端医疗险、国际部直付医疗、海外就医高端保障</p><p><strong>关键词：</strong>私立就医、国际部直付、全球就医、海外看病、高端医疗资源</p>" },
          ]
        },
      ]
    },
  ]
});

onChunkLoaded();