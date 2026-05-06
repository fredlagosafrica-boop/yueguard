// ============ IFA内容库 - 分块架构 ============
// 匹配 index.html 结构：navArea/categoryGrid/contentArea/detailArea
// ─────────────────────────────────────────────

const contentData = { categories: [] };

let loadedChunks = 0;
const totalChunks = 4;

function onChunkLoaded() {
  loadedChunks++;
  if (loadedChunks >= totalChunks) {
    renderCategories();
  }
}

// ─── 动态加载 content chunks（根目录，无chunks/前缀）────
var scripts = [
  'ifa_content.js',
  'wiki_content.js',
  'sales_content.js',
  'materials_content.js'
];

function loadScript(i) {
  if (i >= scripts.length) {
    renderCategories();
    return;
  }
  var script = document.createElement('script');
  script.src = scripts[i];
  script.onload = function() { loadScript(i + 1); };
  script.onerror = function() { console.error('Failed to load: ' + scripts[i]); loadScript(i + 1); };
  document.head.appendChild(script);
}

loadScript(0);

// ─── 渲染函数 ───
function renderCategories() {
  var grid = document.getElementById('categoryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  contentData.categories.forEach(function(cat) {
    var card = document.createElement('div');
    card.className = 'category-card';
    card.innerHTML = '<div class="cat-icon">' + (cat.icon || '📁') + '</div>' +
      '<div class="cat-name">' + cat.name + '</div>' +
      '<div class="cat-sub">' + (cat.subtitle || '') + '</div>';
    card.onclick = function() { showCategory(cat); };
    grid.appendChild(card);
  });
}

function showCategory(cat) {
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (!navArea || !contentArea || !detailArea) return;
  
  navArea.style.display = 'none';
  detailArea.style.display = 'none';
  contentArea.style.display = 'block';
  
  var contentTitle = document.getElementById('contentTitle');
  var itemList = document.getElementById('itemList');
  if (contentTitle) contentTitle.textContent = cat.name;
  if (!itemList) return;
  
  itemList.innerHTML = '';
  cat.children.forEach(function(child) {
    var item = document.createElement('div');
    item.className = 'item-row';
    item.innerHTML = '<span class="item-name">' + child.name + '</span><span class="item-arrow">›</span>';
    item.onclick = function() { showChild(cat, child); };
    itemList.appendChild(item);
  });
  
  // 更新面包屑
  var breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = '<span class="breadcrumb-item" onclick="goHome()">首页</span><span class="sep"> › </span><span class="breadcrumb-current">' + cat.name + '</span>';
  }
}

function showChild(cat, child) {
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (!contentArea || !detailArea) return;
  
  contentArea.style.display = 'none';
  detailArea.style.display = 'block';
  
  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  if (docTitle) docTitle.textContent = cat.name + ' - ' + child.name;
  
  if (!docContent) return;
  
  // 构建子项列表
  var html = '<div class="child-items-list">';
  child.children.forEach(function(item) {
    html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
      '<span class="child-item-title">' + item.title + '</span><span class="child-item-arrow">›</span></div>';
  });
  html += '</div>';
  docContent.innerHTML = html;
  
  // 更新面包屑
  var breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = '<span class="breadcrumb-item" onclick="goHome()">首页</span><span class="sep"> › </span>' +
      '<span class="breadcrumb-item" onclick="goBack()">' + cat.name + '</span><span class="sep"> › </span>' +
      '<span class="breadcrumb-current">' + child.name + '</span>';
  }
}

function showDoc(catId, childId, itemId) {
  var cat = contentData.categories.find(function(c) { return c.id === catId; });
  if (!cat) return;
  var child = cat.children.find(function(c) { return c.id === childId; });
  if (!child) return;
  var item = child.children.find(function(i) { return i.id === itemId; });
  if (!item) return;
  
  var docContent = document.getElementById('docContent');
  if (docContent) {
    docContent.innerHTML = '<div class="doc-view">' + item.content + '</div>';
  }
  
  var docTitle = document.getElementById('docTitle');
  if (docTitle) docTitle.textContent = item.title;
  
  // 更新面包屑
  var breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) {
    breadcrumb.innerHTML = '<span class="breadcrumb-item" onclick="goHome()">首页</span><span class="sep"> › </span>' +
      '<span class="breadcrumb-item" onclick="goBack()">' + cat.name + '</span><span class="sep"> › </span>' +
      '<span class="breadcrumb-item" onclick="goBackChild()">' + child.name + '</span><span class="sep"> › </span>' +
      '<span class="breadcrumb-current">' + item.title + '</span>';
  }
}

function goHome() {
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (navArea) navArea.style.display = 'block';
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'none';
  var breadcrumb = document.getElementById('breadcrumb');
  if (breadcrumb) breadcrumb.innerHTML = '<span class="breadcrumb-item" onclick="goHome()">首页</span>';
  renderCategories();
}

function goBack() {
  showCategory(contentData.categories.find(function(c) { return c.id === window.lastCatId; }) || contentData.categories[0]);
}

function goBackChild() {
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (contentArea) contentArea.style.display = 'block';
  if (detailArea) detailArea.style.display = 'none';
}

function adjustFontSize(delta) {
  var content = document.getElementById('docContent');
  if (!content) return;
  var current = parseInt(content.style.fontSize) || 15;
  current = Math.max(12, Math.min(24, current + delta));
  content.style.fontSize = current + 'px';
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMode() {
  document.body.classList.toggle('dark-mode');
  var btn = document.getElementById('modeToggle');
  if (btn) btn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}
