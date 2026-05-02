const contentData = {
 categories: [
  { id: "manual", name: "📖 产品手册", icon: "📖", children: [
   { id: "guide", name: "操作指南", children: [
    { id: "basic", title: "基础操作", content: "<h2>基础操作指南</h2><p>这里是基础操作的内容...</p><h3>第一步：启动</h3><p>首先，打开应用程序...</p><h3>第二步：配置</h3><p>根据需要配置相关参数...</p>" },
    { id: "advanced", title: "高级功能", content: "<h2>高级功能</h2><p>本章节介绍高级功能的使用方法...</p><h3>批量操作</h3><p>支持批量导入、导出功能...</p>" }
   ]},
   { id: "faq", name: "常见问题", children: [
    { id: "q1", title: "无法启动？", content: "<h2>常见问题解答</h2><p>如果遇到无法启动的问题，请检查以下几点...</p>" },
    { id: "q2", title: "连接失败？", content: "<h2>连接失败解决方案</h2><p>请确保网络连接正常...</p>" }
   ]}
  ]},
  { id: "tech", name: "📋 技术文档", icon: "📋", children: [
   { id: "api", name: "API文档", children: [
    { id: "api1", title: "接口说明", content: "<h2>API接口说明</h2><p>本文档介绍所有可用的API接口...</p>" }
   ]},
   { id: "dev", name: "开发指南", children: [
    { id: "dev1", title: "开发环境搭建", content: "<h2>开发环境搭建</h2><p>介绍如何搭建开发环境...</p>" }
   ]}
  ]},
  { id: "help", name: "❓ 使用帮助", icon: "❓", children: [
   { id: "tutorial", name: "视频教程", children: [
    { id: "t1", title: "入门教程", content: "<h2>入门教程</h2><p>欢迎观看入门视频教程...</p>" }
   ]}
  ]}
 ]
};

let currentCategory = null, currentChild = null, currentDoc = null;
let fontSizeLevel = 0, isDarkMode = false;
const fontSizes = [13, 14, 15, 16, 17, 18];

window.onload = function() { renderCategories(); };

function renderCategories() {
 const grid = document.getElementById('categoryGrid');
 document.getElementById('navArea').style.display = 'block';
 document.getElementById('contentArea').style.display = 'none';
 document.getElementById('detailArea').style.display = 'none';
 grid.innerHTML = contentData.categories.map(cat => `<div class="category-item" onclick="selectCategory('${cat.id}')">${cat.icon} ${cat.name}</div>`).join('');
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
 document.getElementById('itemList').innerHTML = category.children.map(child => `<div class="list-item" onclick="selectChild('${child.id}')">${child.name}</div>`).join('');
}

function selectChild(childId) {
 const child = currentCategory.children.find(c => c.id === childId);
 if (!child) return;
 currentChild = child;
 document.getElementById('contentArea').style.display = 'block';
 document.getElementById('detailArea').style.display = 'none';
 document.getElementById('contentTitle').textContent = child.name;
 updateBreadcrumb('首页', currentCategory.name, child.name);
 document.getElementById('itemList').innerHTML = child.children.map(doc => `<div class="list-item" onclick="showDoc('${doc.id}')">${doc.title}</div>`).join('');
}

function showDoc(docId) {
 const doc = currentChild.children.find(d => d.id === docId);
 if (!doc) return;
 currentDoc = doc;
 document.getElementById('contentArea').style.display = 'none';
 document.getElementById('detailArea').style.display = 'block';
 document.getElementById('docTitle').textContent = doc.title;
 document.getElementById('docContent').innerHTML = '<div class="loading">正在加载文本...</div>';
 setTimeout(() => { document.getElementById('docContent').innerHTML = doc.content; updateProgress(); }, 300);
 updateBreadcrumb('首页', currentCategory.name, currentChild.name, doc.title);
}

function updateBreadcrumb(...items) {
 document.getElementById('breadcrumb').innerHTML = items.map((item, index) => index === items.length - 1 ? `<span class="breadcrumb-item">${item}</span>` : `<span class="breadcrumb-item" onclick="goBackTo(${index})">${item}</span> > `).join('');
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