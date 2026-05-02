// ============ IFA内容库 - 完整导航结构 ============

const contentData = {
 categories: [
 // ===== 一级分类1：IFA流程指引 =====
 {
 id: "ifa",
 name: "📖 IFA流程指引",
 subtitle: "从考牌到展业 每步清晰可查",
 children: [
 // 1.1 新手必做
 {
 id: "newbie",
 name: "1.1 新手必做",
 children: [
 { id: "newbie01", title: "1.1.1 你的入职全流程总览", content: "<h2>1.1.1 你的入职全流程总览</h2><p>内容待补充...</p>" },
 { id: "newbie02", title: "1.1.2 入职流程", content: "<h2>1.1.2 入职流程</h2><p>内容待补充...</p>" },
 { id: "newbie03", title: "1.1.3 认识你的支持网络", content: "<h2>1.1.3 认识你的支持网络</h2><p>内容待补充...</p>" }
 ]
 },
 // 1.2 入职流程
 {
 id: "onboard",
 name: "1.2 入职流程",
 children: [
 { id: "onboard01", title: "1.2.1 考牌准备（保险中介人资格考试）", content: "<h2>1.2.1 考牌准备</h2><p>保险中介人资格考试相关内容...</p>" },
 { id: "onboard02", title: "1.2.2 入职资料准备", content: "<h2>1.2.2 入职资料准备</h2><p>收集并提交全部入职材料...</p>" },
 { id: "onboard03", title: "1.2.3 签署合约", content: "<h2>1.2.3 签署合约</h2><p>办理入职 → 预约签约 → 进入审批</p><h3>步骤说明</h3><ul><li>1.2.3.1 A</li><li>1.2.3.2 AA</li><li>1.2.3.3 AAA</li><li>1.2.3.4 AAAA</li><li>1.2.3.5 AAAAA</li><li>1.2.3.6 AAAAAA</li><li>1.2.3.7 AAAAAAA</li><li>1.2.3.8 AAAAAAA</li></ul>" },
 { id: "onboard04", title: "1.2.4 正式挂牌审批", content: "<h2>1.2.4 正式挂牌审批</h2><p>从入群到IA审核共8步</p><ul><li>步骤1</li><li>步骤2</li><li>步骤3</li><li>步骤4</li><li>步骤5</li><li>步骤6</li><li>步骤7</li><li>步骤8</li></ul>" },
 { id: "onboard05", title: "1.2.5 入职大礼包", content: "<h2>1.2.5 入职大礼包</h2><p>上牌后的权限配置</p><ul><li>1.2.5.1 A1</li><li>1.2.5.2 A2</li><li>1.2.5.3 A3</li><li>1.2.5.4 A4</li><li>1.2.5.5 A5</li><li>1.2.5.6 A6</li><li>1.2.5.7 A7</li><li>1.2.5.8 A8</li><li>1.2.5.9 A9</li></ul>" },
 { id: "onboard06", title: "1.2.6 保司Code开通", content: "<h2>1.2.6 保司Code开通</h2><p>各家保司账号开通共10家</p><ul><li>1.2.6.1 安盛</li><li>1.2.6.2 友邦</li><li>1.2.6.3 保诚</li><li>1.2.6.4 国寿</li><li>1.2.6.5 万通</li><li>1.2.6.6 太平洋</li><li>1.2.6.7 富卫</li><li>1.2.6.8 苏黎世</li><li>1.2.6.9 第9家</li><li>1.2.6.10 第10家</li></ul>" },
 { id: "onboard07", title: "1.2.7 积金易/MPF", content: "<h2>1.2.7 积金易/MPF</h2><p>eMPF注册 → 自雇人士申请 → 缴交MPF</p>" }
 ]
 },
 // 1.3 岗前培训
 {
 id: "training",
 name: "1.3 岗前培训（4步）",
 children: [
 { id: "training01", title: "1.3.1 新人培训课程", content: "<h2>1.3.1 新人培训课程</h2><p>分层培训体系，等待持牌期间完成</p>" },
 { id: "training02", title: "1.3.2 公司合规培训", content: "<h2>1.3.2 公司合规培训</h2><p>签单前必须完成</p>" },
 { id: "training03", title: "1.3.3 AIA学院课程", content: "<h2>1.3.3 AIA学院课程</h2><p>签AIA内地单前必须通过</p>" },
 { id: "training04", title: "1.3.4 AXA IPOS课程培训", content: "<h2>1.3.4 AXA IPOS课程培训</h2><p>开AXA Code前必须完成</p>" }
 ]
 },
 // 1.4 签单指引
 {
 id: "sign",
 name: "1.4 签单指引",
 children: [
 { id: "sign01", title: "1.4.1 签单全流程速览", content: "<h2>1.4.1 签单全流程速览</h2><p>从约单到交单，7步完成</p><ul><li>1.4.1.1</li><li>1.4.1.2</li><li>1.4.1.3</li><li>1.4.1.4</li><li>1.4.1.5</li><li>1.4.1.6</li><li>1.4.1.7</li></ul>" },
 { id: "sign02", title: "1.4.2 提交意向投保书申请", content: "<h2>1.4.2 提交意向投保书申请</h2><p>填写投保申请前的准备</p>" },
 { id: "sign03", title: "1.4.3 填写投保预约表", content: "<h2>1.4.3 填写投保预约表</h2><p>客户信息详细记录</p>" },
 { id: "sign04", title: "1.4.4 创建签单服务群", content: "<h2>1.4.4 创建签单服务群</h2><p>建立签单协调群组</p>" },
 { id: "sign05", title: "1.4.5 签约检查清单&SOP", content: "<h2>1.4.5 签约检查清单&SOP</h2><p>签单前的准备工作</p>" },
 { id: "sign06", title: "1.4.6 签单文件讲解", content: "<h2>1.4.6 签单文件讲解</h2><p>IFA必须掌握</p>" },
 { id: "sign07", title: "1.4.7 签单步骤7", content: "<h2>1.4.7 签单步骤7</h2><p>内容待补充...</p>" },
 { id: "sign08", title: "1.4.8 签单步骤8", content: "<h2>1.4.8 签单步骤8</h2><p>内容待补充...</p>" },
 { id: "sign09", title: "1.4.9 签单步骤9", content: "<h2>1.4.9 签单步骤9</h2><p>内容待补充...</p>" },
 { id: "sign10", title: "1.4.10 签单步骤10", content: "<h2>1.4.10 签单步骤10</h2><p>内容待补充...</p>" }
 ]
 },
 // 1.5-1.10 签单后
 { id: "after01", name: "1.5 签单中", children: [{ id: "after01a", title: "1.5 签单中", content: "<h2>1.5 签单中</h2><p>内容待补充...</p>" }] },
 { id: "after02", name: "1.6 签单中A", children: [{ id: "after02a", title: "1.6 签单中A", content: "<h2>1.6 签单中A</h2><p>内容待补充...</p>" }] },
 { id: "after03", name: "1.7 签单中B", children: [{ id: "after03a", title: "1.7 签单中B", content: "<h2>1.7 签单中B</h2><p>内容待补充...</p>" }] },
 { id: "after04", name: "1.8 签单C", children: [{ id: "after04a", title: "1.8 签单C", content: "<h2>1.8 签单C</h2><p>内容待补充...</p>" }] },
 { id: "after05", name: "1.9 签单后", children: [{ id: "after05a", title: "1.9 签单后", content: "<h2>1.9 签单后</h2><p>内容待补充...</p>" }] },
 { id: "after06", name: "1.10 签单后", children: [{ id: "after06a", title: "1.10 签单后", content: "<h2>1.10 签单后</h2><p>内容待补充...</p>" }] }
 ]
 },
 // ===== 一级分类2：百科全书 =====
 {
 id: "wiki",
 name: "📚 百科全书",
 subtitle: "IFA必备知识库",
 children: [
 { id: "wiki01", name: "2.1 企微群组一览", children: [{ id: "wiki01a", title: "2.1 企微群组一览", content: "<h2>2.1 企微群组一览</h2><p>内容待补充...</p>" }] },
 { id: "wiki02", name: "2.2 各保司的签单方式", children: [{ id: "wiki02a", title: "2.2 各保司的签单方式", content: "<h2>2.2 各保司的签单方式</h2><p>内容待补充...</p>" }] },
 { id: "wiki03", name: "2.3 Life Bee 使用指南", children: [{ id: "wiki03a", title: "2.3 Life Bee 使用指南", content: "<h2>2.3 Life Bee 使用指南</h2><p>内容待补充...</p>" }] },
 { id: "wiki04", name: "2.4 培训课程清单", children: [{ id: "wiki04a", title: "2.4 培训课程清单", content: "<h2>2.4 培训课程清单</h2><p>内容待补充...</p>" }] },
 { id: "wiki05", name: "2.5 运营团队通讯录", children: [{ id: "wiki05a", title: "2.5 运营团队通讯录", content: "<h2>2.5 运营团队通讯录</h2><p>内容待补充...</p>" }] },
 { id: "wiki06", name: "2.6 转经纪公司指引", children: [{ id: "wiki06a", title: "2.6 转经纪公司指引", content: "<h2>2.6 转经纪公司指引</h2><p>内容待补充...</p>" }] },
 { id: "wiki07", name: "2.7 术语小字典（新人必看）", children: [{ id: "wiki07a", title: "2.7 术语小字典（新人必看）", content: "<h2>2.7 术语小字典（新人必看）</h2><p>内容待补充...</p>" }] },
 { id: "wiki08", name: "2.8 紧急救助指南", children: [{ id: "wiki08a", title: "2.8 紧急救助指南", content: "<h2>2.8 紧急救助指南</h2><p>内容待补充...</p>" }] },
 { id: "wiki09", name: "2.9 常见问题FAQ", children: [{ id: "wiki09a", title: "2.9 常见问题FAQ", content: "<h2>2.9 常见问题FAQ</h2><p>内容待补充...</p>" }] }
 ]
 },
 // ===== 一级分类3：素材资料库 =====
 {
 id: "素材",
 name: "🖼️ 素材资料库",
 subtitle: "内容创作素材汇总",
 children: [
 // 3.1 公众号题材
 {
 id: "content01",
 name: "3.1 公众号题材",
 children: [
 { id: "content01a", title: "3.1.1 2025年", content: "<h2>3.1.1 2025年公众号题材</h2><p>内容待补充...</p>" },
 { id: "content01b", title: "3.1.2 2026年", content: "<h2>3.1.2 2026年公众号题材</h2><p>内容待补充...</p>" },
 { id: "content01c", title: "3.1.3 2027年", content: "<h2>3.1.3 2027年公众号题材</h2><p>内容待补充...</p>" }
 ]
 },
 // 3.2 小红书题材
 {
 id: "content02",
 name: "3.2 小红书题材",
 children: [
 { id: "content02a", title: "3.2.1 2025年", content: "<h2>3.2.1 2025年小红书题材</h2><p>内容待补充...</p>" },
 { id: "content02b", title: "3.2.2 2026年", content: "<h2>3.2.2 2026年小红书题材</h2><p>内容待补充...</p>" },
 { id: "content02c", title: "3.2.3 2027年", content: "<h2>3.2.3 2027年小红书题材</h2><p>内容待补充...</p>" }
 ]
 },
 // 3.3 图片题材
 {
 id: "content03",
 name: "3.3 图片题材",
 children: [
 { id: "content03a", title: "3.3.1 2025年", content: "<h2>3.3.1 2025年图片题材</h2><p>内容待补充...</p>" },
 { id: "content03b", title: "3.3.2 2026年", content: "<h2>3.3.2 2026年图片题材</h2><p>内容待补充...</p>" },
 { id: "content03c", title: "3.3.3 2027年", content: "<h2>3.3.3 2027年图片题材</h2><p>内容待补充...</p>" }
 ]
 },
 // 3.4 综合题材
 {
 id: "content04",
 name: "3.4 综合题材",
 children: [
 { id: "content04a", title: "3.4.1 2025年", content: "<h2>3.4.1 2025年综合题材</h2><p>内容待补充...</p>" },
 { id: "content04b", title: "3.4.2 2026年", content: "<h2>3.4.2 2026年综合题材</h2><p>内容待补充...</p>" },
 { id: "content04c", title: "3.4.3 2027年", content: "<h2>3.4.3 2027年综合题材</h2><p>内容待补充...</p>" }
 ]
 }
 ]
 }
 ]
};

// 状态管理
let currentCategory = null;
let currentChild = null;
let currentDoc = null;
let fontSizeLevel = 0;
let isDarkMode = false;
const fontSizes = [13, 14, 15, 16, 17, 18];

window.onload = function() { renderCategories(); };

function renderCategories() {
 const grid = document.getElementById('categoryGrid');
 document.getElementById('navArea').style.display = 'block';
 document.getElementById('contentArea').style.display = 'none';
 document.getElementById('detailArea').style.display = 'none';
 grid.innerHTML = contentData.categories.map(cat => `
 <div class="category-item" onclick="selectCategory('${cat.id}')">
 <div>${cat.name}</div>
 <div style="font-size:12px;color:#666;margin-top:5px">${cat.subtitle || ''}</div>
 </div>
 `).join('');
 updateBreadcrumb('首页');
}

function selectCategory(categoryId) {
 const category = contentData.categories.find(c => c.id === categoryId);
 if (!category) return;
 currentCategory = category;
 document.getElementById('navArea').style.display = 'none';
 document.getElementById('contentArea').style.display = 'block';
 document.getElementById('detailArea').style.display = 'none';
 document.getElementById('contentTitle').textContent = category.name;
 updateBreadcrumb('首页', category.name);
 document.getElementById('itemList').innerHTML = category.children.map(child => `
 <div class="list-item" onclick="selectChild('${child.id}')">
 ${child.name}
 </div>
 `).join('');
}

function selectChild(childId) {
 const child = currentCategory.children.find(c => c.id === childId);
 if (!child) return;
 currentChild = child;
 document.getElementById('contentArea').style.display = 'block';
 document.getElementById('detailArea').style.display = 'none';
 document.getElementById('contentTitle').textContent = child.name;
 updateBreadcrumb('首页', currentCategory.name, child.name);
 document.getElementById('itemList').innerHTML = child.children.map(doc => `
 <div class="list-item" onclick="showDoc('${doc.id}')">
 ${doc.title}
 </div>
 `).join('');
}

function showDoc(docId) {
 const doc = currentChild.children.find(d => d.id === docId);
 if (!doc) return;
 currentDoc = doc;
 document.getElementById('contentArea').style.display = 'none';
 document.getElementById('detailArea').style.display = 'block';
 document.getElementById('docTitle').textContent = doc.title;
 document.getElementById('docContent').innerHTML = '<div class="loading">正在加载...</div>';
 setTimeout(() => {
 document.getElementById('docContent').innerHTML = doc.content;
 updateProgress();
 }, 300);
 updateBreadcrumb('首页', currentCategory.name, currentChild.name, doc.title);
}

function updateBreadcrumb(...items) {
 document.getElementById('breadcrumb').innerHTML = items.map((item, index) =>
 index === items.length - 1 ? `<span class="breadcrumb-item">${item}</span>` : `<span class="breadcrumb-item" onclick="goBackTo(${index})">${item}</span> > `
 ).join('');
}

function goBack() {
 if (currentDoc) selectChild(currentChild.id);
 else if (currentChild) selectCategory(currentCategory.id);
 else renderCategories();
}

function goBackTo(level) {
 if (level === 0) renderCategories();
 else if (level === 1) selectCategory(currentCategory.id);
 else if (level === 2) selectChild(currentChild.id);
}

function goHome() { renderCategories(); }

function adjustFontSize(direction) {
 fontSizeLevel = Math.max(-2, Math.min(2, fontSizeLevel + direction));
 const docContent = document.getElementById('docContent');
 if (docContent) docContent.style.fontSize = fontSizes[fontSizeLevel + 2] + 'px';
}

function scrollToTop() { window.scrollTo({ top: 0, behavior: 'smooth' }); }

function updateProgress() {
 const docContent = document.getElementById('docContent');
 const progressText = document.getElementById('progressText');
 if (docContent && progressText) {
 const h2Count = docContent.querySelectorAll('h2').length;
 progressText.textContent = `共 ${h2Count || 1} 章节`;
 }
}

function toggleMode() {
 isDarkMode = !isDarkMode;
 document.querySelector('.app-container').classList.toggle('dark-mode', isDarkMode);
 document.getElementById('modeToggle').textContent = isDarkMode ? '☀️' : '🌙';
}