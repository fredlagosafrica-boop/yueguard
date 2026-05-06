// ============ IFA内容库 - 分块架构 ============
// 架构：主文件只含框架 + 状态管理，chunks/ 含各分类内容
// 上传顺序：先传 script_new.js，再逐个传 chunks/
// ─────────────────────────────────────────────

const contentData = { categories: [] };

let loadedChunks = 0;
const totalChunks = 4;

function onChunkLoaded() {
  loadedChunks++;
  if (loadedChunks >= totalChunks) {
    window.onload = function() { renderCategories(); };
    if (document.readyState === 'complete') renderCategories();
  }
}

let currentCategory = null;
let currentChild = null;
let currentDoc = null;
let fontSizeLevel = 0;
let isDarkMode = false;
const fontSizes = [13, 14, 15, 16, 17, 18];

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
    <div class="list-item" onclick="selectChild('${child.id}', '${category.id}')">
      ${child.name}
    </div>
  `).join('');
}

function selectChild(childId, categoryId) {
  const category = contentData.categories.find(c => c.id === categoryId);
  const child = category.children.find(c => c.id === childId);
  if (!child) return;
  currentChild = child;
  document.getElementById('contentArea').style.display = 'block';
  document.getElementById('detailArea').style.display = 'none';
  document.getElementById('contentTitle').textContent = child.name;
  updateBreadcrumb('首页', currentCategory.name, child.name);
  document.getElementById('itemList').innerHTML = child.children.map(doc => `
    <div class="list-item" onclick="showDoc('${doc.id}', '${child.id}', '${categoryId}')">
      ${doc.title}
    </div>
  `).join('');
}

function showDoc(docId, childId, categoryId) {
  const category = contentData.categories.find(c => c.id === categoryId);
  const child = category.children.find(c => c.id === childId);
  const doc = child.children.find(d => d.id === docId);
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
  if (currentDoc && currentChild) selectChild(currentChild.id, currentCategory.id);
  else if (currentChild) selectCategory(currentCategory.id);
  else renderCategories();
}

function goBackTo(level) {
  if (level === 0) renderCategories();
  else if (level === 1 && currentCategory) selectCategory(currentCategory.id);
  else if (level === 2 && currentChild) selectChild(currentChild.id, currentCategory.id);
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

// 动态加载所有 chunks
document.write('<script src="chunks/ifa_content.js"><\/script>');
document.write('<script src="chunks/wiki_content.js"><\/script>');
document.write('<script src="chunks/sales_content.js"><\/script>');
document.write('<script src="chunks/materials_content.js"><\/script>');
