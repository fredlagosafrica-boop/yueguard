// ============ IFA内容库 - 懒加载架构（按需请求版）============
// 匹配 index.html 结构：navArea/categoryGrid/contentArea/detailArea
// ─────────────────────────────────────────────

const contentData = { categories: [] };
const docCache = {};  // 文档缓存，避免重复请求

// ─── 视图堆栈：追踪完整导航路径 ───
let viewStack = [{ view: 'home' }];

// ─── 向后兼容：旧版 onChunkLoaded（已废弃，由 loadCategoryScript 替代）────
function onChunkLoaded() {
  // 新架构不再使用此函数，保留以兼容旧版内容文件
  console.log('onChunkLoaded called (deprecated)');
}

// ─── 懒加载：按需获取文档内容 ───
async function loadDoc(docId, catId, itemId) {
  console.log('loadDoc called:', docId, catId, itemId);
  var docCacheKey = docId;

  // 先检查缓存
  if (docCache[docCacheKey]) {
    renderDoc(docCache[docCacheKey]);
    return;
  }

  // 先检查分类数据中是否有内联内容
  var cat = contentData.categories.find(function(c) { return c.id === catId; });
  if (cat) {
    // 递归查找文档内容
    function findContent(children) {
      if (!children) return null;
      for (var i = 0; i < children.length; i++) {
        if (children[i].id === docId && children[i].content) {
          return children[i].content;
        }
        if (children[i].children) {
          var found = findContent(children[i].children);
          if (found) return found;
        }
      }
      return null;
    }
    var inlineContent = findContent(cat.children);
    console.log('inlineContent for', docId, ':', inlineContent ? 'found' : 'not found');
    if (inlineContent) {
      docCache[docCacheKey] = inlineContent;
      renderDoc(inlineContent);
      return;
    }
  }

  // 显示加载中
  var docContent = document.getElementById('docContent');
  if (docContent) {
    docContent.innerHTML = '<div class="doc-view"><p style="text-align:center;padding:40px;color:#666;">内容加载中...</p></div>';
  }

  try {
    // 按需获取文档
    var response = await fetch('docs/' + docId + '.js');
    if (!response.ok) throw new Error('Doc not found');
    var docData = await response.text();
    
    // 执行文档内容
    eval(docData);
    
    // 存入缓存
    if (window.currentDocContent) {
      docCache[docCacheKey] = window.currentDocContent;
      window.currentDocContent = null;
    }
    
    renderDoc(docCache[docCacheKey]);
  } catch (error) {
    console.error('Failed to load doc:', docId, error);
    if (docContent) {
      docContent.innerHTML = '<div class="doc-view"><p style="text-align:center;padding:40px;color:#999;">内容加载失败，请稍后重试。</p></div>';
    }
  }
}

// ─── 渲染文档内容 ───
function renderDoc(content) {
  var docContent = document.getElementById('docContent');
  if (docContent) {
    docContent.innerHTML = '<div class="doc-view">' + content + '</div>';
  }
}

// ─── 渲染目录分类（一级分类） ───
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

// ─── 显示一级分类 ───
function showCategory(cat) {
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  
  if (navArea) navArea.style.display = 'none';
  if (contentArea) contentArea.style.display = 'block';
  if (detailArea) detailArea.style.display = 'none';
  
  document.getElementById('contentTitle').textContent = cat.name;
  var itemList = document.getElementById('itemList');
  itemList.innerHTML = '';
  
  cat.children.forEach(function(child) {
    var item = document.createElement('div');
    item.className = 'content-item';
    var hasChildren = child.children && child.children.length > 0;
    item.innerHTML = '<span>' + child.name + '</span>' + (hasChildren ? '<span class="arrow">›</span>' : '');
    item.onclick = function() {
      if (hasChildren) {
        showChild(cat, child);
      } else {
        loadDoc(child.id, cat.id, child.id);
      }
    };
    itemList.appendChild(item);
  });
  
  viewStack.push({ view: 'category', catId: cat.id });
  updateBreadcrumb();
}

// ─── 显示二级分类（子项目列表） ───
function showChild(cat, child) {
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'block';
  
  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  
  if (docTitle) docTitle.textContent = cat.name + ' - ' + child.name;
  
  viewStack.push({ view: 'child', catId: cat.id, childId: child.id });
  updateBreadcrumb();
  
  if (!docContent) return;
  
  // 构建子项列表，支持任意层级
  var html = '<div class="child-items-list">';
  child.children.forEach(function(item) {
    var hasChildren = item.children && item.children.length > 0;
    if (hasChildren) {
      // 有子节点：点击展开
      html += '<div class="child-item has-children" onclick="toggleChildren(this, \'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' +
        '<span class="child-item-title">' + (item.name || item.title) + '</span><span class="child-item-arrow child-arrow">›</span></div>' +
        '<div class="sub-child-list" style="display:none;padding-left:16px;">';
      item.children.forEach(function(sub) {
        var subHasChildren = sub.children && sub.children.length > 0;
        if (subHasChildren) {
          html += '<div class="child-item has-children" onclick="toggleChildren(this, \'' + cat.id + '\',\'' + item.id + '\',\'' + sub.id + '\')">' +
            '<span class="child-item-title">' + (sub.name || sub.title) + '</span><span class="child-item-arrow child-arrow">›</span></div>';
        } else {
          html += '<div class="child-item" onclick="loadDoc(\'' + sub.id + '\', \'' + cat.id + '\', \'' + sub.id + '\')">' +
            '<span class="child-item-title">' + (sub.name || sub.title) + '</span><span class="child-item-arrow">›</span></div>';
        }
      });
      html += '</div>';
    } else {
      // 没有子节点：直接加载文档
      html += '<div class="child-item" onclick="loadDoc(\'' + item.id + '\', \'' + cat.id + '\', \'' + item.id + '\')">' +
        '<span class="child-item-title">' + (item.name || item.title) + '</span><span class="child-item-arrow">›</span></div>';
    }
  });
  html += '</div>';
  docContent.innerHTML = html;
}

// ─── 展开/收起子节点 ───
function toggleChildren(el, catId, childId, itemId) {
  var subList = el.nextElementSibling;
  if (subList && subList.classList.contains('sub-child-list')) {
    var isHidden = subList.style.display === 'none';
    subList.style.display = isHidden ? 'block' : 'none';
    el.querySelector('.child-arrow').textContent = isHidden ? '∨' : '›';
  }
}

// ─── 返回 ───
function goBack() {
  if (viewStack.length <= 1) {
    goHome();
    return;
  }
  
  var prev = viewStack[viewStack.length - 2];
  viewStack.pop();
  
  if (prev.view === 'home') {
    goHome();
  } else if (prev.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === prev.catId; });
    if (cat) showCategory(cat);
  } else if (prev.view === 'child') {
    var cat2 = contentData.categories.find(function(c) { return c.id === prev.catId; });
    var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === prev.childId; }) : null;
    if (cat2 && child2) showChild(cat2, child2);
  } else if (prev.view === 'doc') {
    goBack(); // 再退一步
  }
  
  updateBreadcrumb();
}

// ─── 返回首页 ───
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

// ─── 面包屑导航 ───
function updateBreadcrumb() {
  var breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;
  
  var html = '<span class="breadcrumb-item" onclick="goHome()">首页</span>';
  
  viewStack.forEach(function(item, index) {
    if (item.view === 'home') return;
    
    var label = '';
    if (item.view === 'category') {
      var cat = contentData.categories.find(function(c) { return c.id === item.catId; });
      label = cat ? cat.name : '';
    } else if (item.view === 'child') {
      var cat2 = contentData.categories.find(function(c) { return c.id === item.catId; });
      var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === item.childId; }) : null;
      label = child2 ? child2.name : '';
    }
    
    if (label) {
      html += ' <span class="breadcrumb-sep">›</span> ';
      if (index < viewStack.length - 1) {
        html += '<span class="breadcrumb-item" onclick="restoreToIndex(' + index + ')">' + label + '</span>';
      } else {
        html += '<span class="breadcrumb-current">' + label + '</span>';
      }
    }
  });
  
  breadcrumb.innerHTML = html;
}

// ─── 恢复指定索引的视图 ───
function restoreToIndex(idx) {
  if (idx < 0 || idx >= viewStack.length) return;
  viewStack = viewStack.slice(0, idx + 1);
  var target = viewStack[idx];
  
  if (target.view === 'home') {
    goHome();
  } else if (target.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === target.catId; });
    if (cat) showCategory(cat);
  } else if (target.view === 'child') {
    var cat2 = contentData.categories.find(function(c) { return c.id === target.catId; });
    var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === target.childId; }) : null;
    if (cat2 && child2) showChild(cat2, child2);
  }
}

// ─── 字体调整 ───
var currentFontSize = 16;
function adjustFontSize(delta) {
  currentFontSize += delta;
  var docContent = document.getElementById('docContent');
  if (docContent) {
    docContent.style.fontSize = currentFontSize + 'px';
  }
}

function scrollToTop() {
  var docContent = document.getElementById('docContent');
  if (docContent) docContent.scrollTop = 0;
}

// ─── 加载目录（只需要4个分类文件） ───
var categoryScripts = [
  'ifa_content.js',
  'wiki_content.js',
  'sales_content.js',
  'referral_content.js',
  'materials_content.js'
];

function loadCategoryScript(i) {
  if (i >= categoryScripts.length) {
    renderCategories();
    return;
  }
  var script = document.createElement('script');
  script.src = categoryScripts[i];
  script.onload = function() { loadCategoryScript(i + 1); };
  script.onerror = function() { console.error('Failed to load: ' + categoryScripts[i]); loadCategoryScript(i + 1); };
  document.head.appendChild(script);
}

loadCategoryScript(0);