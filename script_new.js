// ============ IFA内容库 - 分块架构（逐层返回修复版 v2）============
// 匹配 index.html 结构：navArea/categoryGrid/contentArea/detailArea
// ─────────────────────────────────────────────

const contentData = { categories: [] };

let loadedChunks = 0;
const totalChunks = 5;

// 视图堆栈：追踪完整导航路径
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
  'referral_content.js',
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

// 恢复任意历史视图（用于面包屑点击）
function restoreToIndex(idx) {
  if (idx < 0 || idx >= viewStack.length) return;

  // 截断堆栈到目标位置
  viewStack = viewStack.slice(0, idx + 1);
  var target = viewStack[idx];

  if (target.view === 'home') {
    goHome();
  } else if (target.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === target.catId; });
    if (cat) restoreCategory(cat);
  } else if (target.view === 'child') {
    var cat2 = contentData.categories.find(function(c) { return c.id === target.catId; });
    var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === target.childId; }) : null;
    if (cat2 && child2) restoreChild(cat2, child2);
  } else if (target.view === 'doc') {
    restoreToIndex(idx - 1);
    var cat3 = contentData.categories.find(function(c) { return c.id === target.catId; });
    var child3 = cat3 ? cat3.children.find(function(ch) { return ch.id === target.childId; }) : null;
    var item3 = child3 ? child3.children.find(function(i) { return i.id === target.itemId; }) : null;
    if (cat3 && child3 && item3) {
      var docContent = document.getElementById('docContent');
      var docTitle = document.getElementById('docTitle');
      if (docContent) docContent.innerHTML = '<div class="doc-view">' + item3.content + '</div>';
      if (docTitle) docTitle.textContent = item3.name || item3.title || '';
      updateBreadcrumbDocOnly(cat3, child3, item3);
    }
  }
}

function updateBreadcrumb() {
  var breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;

  var html = '<span class="breadcrumb-item" onclick="restoreToIndex(0)">首页</span>';

  for (var i = 1; i < viewStack.length; i++) {
    var v = viewStack[i];
    var label = '';
    var isLast = (i === viewStack.length - 1);

    if (v.view === 'category') {
      var cat = contentData.categories.find(function(c) { return c.id === v.catId; });
      label = cat ? cat.name : '';
    } else if (v.view === 'child') {
      var cat2 = contentData.categories.find(function(c) { return c.id === v.catId; });
      var child = cat2 ? cat2.children.find(function(ch) { return ch.id === v.childId; }) : null;
      label = child ? child.name : '';
    } else if (v.view === 'doc') {
      var cat3 = contentData.categories.find(function(c) { return c.id === v.catId; });
      var child3 = cat3 ? cat3.children.find(function(ch) { return ch.id === v.childId; }) : null;
      var item3 = child3 ? child3.children.find(function(it) { return it.id === v.itemId; }) : null;
      label = item3 ? (item3.name || item3.title) : '';
    }

    if (label) {
      if (isLast) {
        html += '<span class="sep"> › </span><span class="breadcrumb-current">' + label + '</span>';
      } else {
        html += '<span class="sep"> › </span><span class="breadcrumb-item" onclick="restoreToIndex(' + i + ')">' + label + '</span>';
      }
    }
  }

  breadcrumb.innerHTML = html;
}

function updateBreadcrumbDocOnly(cat, child, item) {
  var breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;

  var html = '<span class="breadcrumb-item" onclick="restoreToIndex(0)">首页</span>';

  for (var i = 1; i < viewStack.length; i++) {
    var v = viewStack[i];
    var label = '';
    var isLast = (i === viewStack.length - 1);

    if (v.view === 'category') {
      var c = contentData.categories.find(function(c) { return c.id === v.catId; });
      label = c ? c.name : '';
    } else if (v.view === 'child') {
      var c = contentData.categories.find(function(c) { return c.id === v.catId; });
      var ch = c ? c.children.find(function(ch) { return ch.id === v.childId; }) : null;
      label = ch ? ch.name : '';
    } else if (v.view === 'doc') {
      var c = contentData.categories.find(function(c) { return c.id === v.catId; });
      var ch = c ? c.children.find(function(ch) { return ch.id === v.childId; }) : null;
      var it = ch ? ch.children.find(function(it) { return it.id === v.itemId; }) : null;
      label = it ? (it.name || it.title) : '';
    }

    if (label) {
      if (isLast) {
        html += '<span class="sep"> › </span><span class="breadcrumb-current">' + label + '</span>';
      } else {
        html += '<span class="sep"> › </span><span class="breadcrumb-item" onclick="restoreToIndex(' + i + ')">' + label + '</span>';
      }
    }
  }

  breadcrumb.innerHTML = html;
}

function showCategory(cat) {
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (!navArea || !contentArea || !detailArea) return;

  navArea.style.display = 'none';
  detailArea.style.display = 'none';
  contentArea.style.display = 'block';

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

function restoreCategory(cat) {
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

  viewStack.push({ view: 'child', catId: cat.id, childId: child.id });
  updateBreadcrumb();

  // 构建子项列表，支持第3层有children的情况
  var html = '<div class="child-items-list">';
  child.children.forEach(function(item) {
    if (item.children && item.children.length > 0) {
      // 第3层节点还有children → 第4层 → 点击展开显示第4层列表
      html += '<div class="child-item has-children" onclick="expandSubChildren(this, \'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
        '<span class="child-item-title">' + (item.name || item.title) + '</span><span class="child-item-arrow child-arrow">›</span></div>' +
        '<div class="sub-child-list" style="display:none;padding-left:16px;">';
      item.children.forEach(function(sub) {
        html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + sub.id + '\')">' +
          '<span class="child-item-title">' + (sub.name || sub.title) + '</span><span class="child-item-arrow">›</span></div>';
      });
      html += '</div>';
    } else {
      // 第3层没有children → 直接是文章
      html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
        '<span class="child-item-title">' + (item.name || item.title) + '</span><span class="child-item-arrow">›</span></div>';
    }
  });
  html += '</div>';
  docContent.innerHTML = html;
}

// 展开第4层子节点（点击有children的第3层节点时触发）
function expandSubChildren(el, catId, childId, itemId) {
  var subList = el.nextElementSibling;
  if (subList && subList.classList.contains('sub-child-list')) {
    var isHidden = subList.style.display === 'none';
    subList.style.display = isHidden ? 'block' : 'none';
    el.querySelector('.child-arrow').textContent = isHidden ? '∨' : '›';
  }
}

function restoreChild(cat, child) {
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (!contentArea || !detailArea) return;

  contentArea.style.display = 'none';
  detailArea.style.display = 'block';

  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  if (docTitle) docTitle.textContent = cat.name + ' - ' + child.name;
  if (docContent) {
    var html = '<div class="child-items-list">';
    child.children.forEach(function(item) {
      if (item.children && item.children.length > 0) {
        html += '<div class="child-item has-children" onclick="expandSubChildren(this, \'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
          '<span class="child-item-title">' + (item.name || item.title) + '</span><span class="child-item-arrow child-arrow">›</span></div>' +
          '<div class="sub-child-list" style="display:none;padding-left:16px;">';
        item.children.forEach(function(sub) {
          html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + sub.id + '\')">' +
            '<span class="child-item-title">' + (sub.name || sub.title) + '</span><span class="child-item-arrow">›</span></div>';
        });
        html += '</div>';
      } else {
        html += '<div class="child-item" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
          '<span class="child-item-title">' + (item.name || item.title) + '</span><span class="child-item-arrow">›</span></div>';
      }
    });
    html += '</div>';
    docContent.innerHTML = html;
  }

  updateBreadcrumb();
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
  if (docTitle) docTitle.textContent = item.name || item.title || '';

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
  if (viewStack.length <= 1) {
    goHome();
    return;
  }

  viewStack.pop();
  var prev = viewStack[viewStack.length - 1];

  if (prev.view === 'home') {
    goHome();
  } else if (prev.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === prev.catId; });
    if (cat) restoreCategory(cat);
  } else if (prev.view === 'child') {
    var cat2 = contentData.categories.find(function(c) { return c.id === prev.catId; });
    var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === prev.childId; }) : null;
    if (cat2 && child2) restoreChild(cat2, child2);
  } else if (prev.view === 'doc') {
    var cat3 = contentData.categories.find(function(c) { return c.id === prev.catId; });
    var child3 = cat3 ? cat3.children.find(function(ch) { return ch.id === prev.childId; }) : null;
    if (cat3 && child3) restoreChild(cat3, child3);
  }
}

function goBackChild() {
  for (var i = viewStack.length - 2; i >= 0; i--) {
    if (viewStack[i].view === 'child') {
      restoreToIndex(i);
      return;
    }
  }
  goHome();
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
