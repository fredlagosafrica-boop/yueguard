// ============ IFA内容库 - 分块架构（逐层返回修复版）============
// 匹配 index.html 结构：navArea/categoryGrid/contentArea/detailArea
// ─────────────────────────────────────────────

const contentData = { categories: [] };

let loadedChunks = 0;
const totalChunks = 4;

// 视图堆栈：追踪导航层级
// 每个条目: { view: 'home'|'category'|'child'|'doc', catId, childId, itemId }
let viewStack = [{ view: 'home' }];

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

function updateBreadcrumb() {
  var breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;
  
  var html = '<span class="breadcrumb-item" onclick="goHome()">首页</span>';
  
  if (viewStack.length >= 2) {
    var prev = viewStack[viewStack.length - 2];
    if (prev.view === 'category' || prev.view === 'child' || prev.view === 'doc') {
      var cat = contentData.categories.find(function(c) { return c.id === prev.catId; });
      if (cat) {
        html += '<span class="sep"> › </span><span class="breadcrumb-item" onclick="goBack()">' + cat.name + '</span>';
      }
    }
  }
  
  if (viewStack.length >= 3) {
    var prev2 = viewStack[viewStack.length - 2];
    if (prev2.view === 'child' || prev2.view === 'doc') {
      var cat2 = contentData.categories.find(function(c) { return c.id === prev2.catId; });
      var child = cat2 ? cat2.children.find(function(ch) { return ch.id === prev2.childId; }) : null;
      if (child) {
        html += '<span class="sep"> › </span><span class="breadcrumb-item" onclick="goBackChild()">' + child.name + '</span>';
      }
    }
  }
  
  var current = viewStack[viewStack.length - 1];
  if (current.view === 'home') {
    breadcrumb.innerHTML = '<span class="breadcrumb-item" onclick="goHome()">首页</span>';
  } else if (current.view === 'category') {
    var cat3 = contentData.categories.find(function(c) { return c.id === current.catId; });
    breadcrumb.innerHTML = html + '<span class="sep"> › </span><span class="breadcrumb-current">' + (cat3 ? cat3.name : '') + '</span>';
  } else if (current.view === 'child') {
    var cat4 = contentData.categories.find(function(c) { return c.id === current.catId; });
    var child4 = cat4 ? cat4.children.find(function(ch) { return ch.id === current.childId; }) : null;
    breadcrumb.innerHTML = html + '<span class="sep"> › </span><span class="breadcrumb-current">' + (child4 ? child4.name : '') + '</span>';
  } else if (current.view === 'doc') {
    var cat5 = contentData.categories.find(function(c) { return c.id === current.catId; });
    var child5 = cat5 ? cat5.children.find(function(ch) { return ch.id === current.childId; }) : null;
    var item5 = child5 ? child5.children.find(function(i) { return i.id === current.itemId; }) : null;
    breadcrumb.innerHTML = html + '<span class="sep"> › </span><span class="breadcrumb-current">' + (item5 ? item5.title : '') + '</span>';
  }
}

function showCategory(cat) {
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (!navArea || !contentArea || !detailArea) return;
  
  navArea.style.display = 'none';
  detailArea.style.display = 'none';
  contentArea.style.display = 'block';
  
  // 压入category视图
  viewStack.push({ view: 'category', catId: cat.id });
  updateBreadcrumb();
  
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
  
  // 压入child视图
  viewStack.push({ view: 'child', catId: cat.id, childId: child.id });
  updateBreadcrumb();
  
  // 构建子项列表
  var html = '<div class="child-items-list">';
  child.children.forEach(function(item) {
    html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
      '<span class="child-item-title">' + item.title + '</span><span class="child-item-arrow">›</span></div>';
  });
  html += '</div>';
  docContent.innerHTML = html;
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
  
  // 压入doc视图
  viewStack.push({ view: 'doc', catId: catId, childId: childId, itemId: itemId });
  updateBreadcrumb();
}

function goHome() {
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (navArea) navArea.style.display = 'block';
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'none';
  
  viewStack = [{ view: 'home' }];
  updateBreadcrumb();
  renderCategories();
}

function goBack() {
  // 从堆栈弹出一层，返回上一级
  if (viewStack.length <= 1) {
    goHome();
    return;
  }
  
  viewStack.pop(); // 移除当前视图
  var prev = viewStack[viewStack.length - 1];
  
  if (prev.view === 'home') {
    goHome();
  } else if (prev.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === prev.catId; });
    if (cat) {
      // 重新显示category视图（但不加堆栈）
      var navArea = document.getElementById('navArea');
      var contentArea = document.getElementById('contentArea');
      var detailArea = document.getElementById('detailArea');
      if (navArea) navArea.style.display = 'none';
      if (detailArea) detailArea.style.display = 'none';
      if (contentArea) contentArea.style.display = 'block';
      
      var contentTitle = document.getElementById('contentTitle');
      var itemList = document.getElementById('itemList');
      if (contentTitle) contentTitle.textContent = cat.name;
      if (itemList) {
        itemList.innerHTML = '';
        cat.children.forEach(function(child) {
          var item = document.createElement('div');
          item.className = 'item-row';
          item.innerHTML = '<span class="item-name">' + child.name + '</span><span class="item-arrow">›</span>';
          item.onclick = function() { showChild(cat, child); };
          itemList.appendChild(item);
        });
      }
      updateBreadcrumb();
    }
  } else if (prev.view === 'child') {
    goBackChild();
  } else if (prev.view === 'doc') {
    goBackDoc();
  }
}

function goBackChild() {
  // 返回到子列表（child视图）
  if (viewStack.length < 2) { goHome(); return; }
  
  var current = viewStack[viewStack.length - 1];
  if (current.view !== 'child') {
    // 先弹出doc层
    if (current.view === 'doc') {
      viewStack.pop();
      current = viewStack[viewStack.length - 1];
    }
  }
  
  if (current.view !== 'child') { goHome(); return; }
  
  var cat = contentData.categories.find(function(c) { return c.id === current.catId; });
  var child = cat ? cat.children.find(function(ch) { return ch.id === current.childId; }) : null;
  if (!cat || !child) { goHome(); return; }
  
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'block';
  
  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  if (docTitle) docTitle.textContent = cat.name + ' - ' + child.name;
  if (docContent) {
    var html = '<div class="child-items-list">';
    child.children.forEach(function(item) {
      html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
        '<span class="child-item-title">' + item.title + '</span><span class="child-item-arrow">›</span></div>';
    });
    html += '</div>';
    docContent.innerHTML = html;
  }
  
  updateBreadcrumb();
}

function goBackDoc() {
  // 返回到文档视图的子列表
  if (viewStack.length < 2) { goHome(); return; }
  goBackChild();
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
