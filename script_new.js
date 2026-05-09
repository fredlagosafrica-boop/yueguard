// ============ IFA内容库 - 懒加载架构（按需请求版 v3）============
// 修复：支持 window.__CHUNKS__ 格式 + showChild 展开逻辑
// ─────────────────────────────────────────────

const contentData = { categories: [] };
const docCache = {};
let viewStack = [{ view: 'home' }];

// ─── 加载 window.__CHUNKS__ 到 contentData.categories ───
function registerChunks() {
  if (!window.__CHUNKS__ || !Array.isArray(window.__CHUNKS__)) return;
  
  window.__CHUNKS__.forEach(function(chunk) {
    if (contentData.categories.find(function(c) { return c.id === chunk.id; })) return;
    
    var cat = {
      id: chunk.id,
      name: chunk.title || chunk.name || '',
      icon: chunk.icon || '📁',
      subtitle: chunk.subtitle || '',
      children: (chunk.children || []).map(function(ch) {
        return {
          id: ch.id,
          name: ch.title || ch.name || '',
          type: ch.type,
          children: (ch.children || []).map(function(sub) {
            return {
              id: sub.id,
              name: sub.title || sub.name || '',
              type: sub.type,
              content: sub.content || null,
              children: (sub.children || []).map(function(leaf) {
                return {
                  id: leaf.id,
                  name: leaf.title || leaf.name || '',
                  type: leaf.type,
                  content: leaf.content || null
                };
              })
            };
          })
        };
      })
    };
    
    if (chunk.content && (!chunk.children || chunk.children.length === 0)) {
      cat.content = chunk.content;
    }
    
    contentData.categories.push(cat);
  });
}

function onChunkLoaded() {
  registerChunks();
}

async function loadDoc(docId, catId, itemId) {
  var docCacheKey = docId;
  if (docCache[docCacheKey]) {
    renderDoc(docCache[docCacheKey]);
    viewStack.push({ view: 'doc', catId: catId, childId: itemId, itemId: docId });
    updateBreadcrumb();
    return;
  }

  function findContent(children, targetId) {
    if (!children) return null;
    for (var i = 0; i < children.length; i++) {
      if (children[i].id === targetId) return children[i].content || null;
      if (children[i].children) {
        var found = findContent(children[i].children, targetId);
        if (found !== null) return found;
      }
    }
    return null;
  }

  var inlineContent = findContent(contentData.categories, docId);
  var docContent = document.getElementById('docContent');
  
  if (docContent) {
    docContent.innerHTML = '<div class="doc-view"><p style="text-align:center;padding:40px;color:#666;">内容加载中...</p></div>';
  }

  if (inlineContent) {
    docCache[docCacheKey] = inlineContent;
    renderDoc(inlineContent);
    viewStack.push({ view: 'doc', catId: catId, childId: itemId, itemId: docId });
    updateBreadcrumb();
    return;
  }

  try {
    var response = await fetch('docs/' + docId + '.js');
    if (!response.ok) throw new Error('Doc not found');
    eval(await response.text());
    if (window.currentDocContent) {
      docCache[docCacheKey] = window.currentDocContent;
      renderDoc(window.currentDocContent);
    }
  } catch(e) {
    if (docContent) {
      docContent.innerHTML = '<div class="doc-view"><p style="text-align:center;padding:40px;color:#999;">内容为空或加载失败</p></div>';
    }
  }
  
  viewStack.push({ view: 'doc', catId: catId, childId: itemId, itemId: docId });
  updateBreadcrumb();
}

function renderDoc(content) {
  var docContent = document.getElementById('docContent');
  if (docContent) {
    docContent.innerHTML = '<div class="doc-view">' + (content || '<p>暂无内容</p>') + '</div>';
  }
}

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
    item.innerHTML = '<span>' + (child.name || child.title || '') + '</span>' +
      (hasChildren ? '<span class="arrow">›</span>' : '');
    item.onclick = function() {
      if (hasChildren || child.type === 'folder') {
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

function showChild(cat, child) {
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'block';
  
  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  
  if (docTitle) docTitle.textContent = cat.name + ' - ' + (child.name || child.title || '');
  
  viewStack.push({ view: 'child', catId: cat.id, childId: child.id });
  updateBreadcrumb();
  
  if (!docContent) return;
  
  var html = '<div class="child-items-list">';
  
  if (child.children && child.children.length > 0) {
    child.children.forEach(function(item, idx) {
      var hasGrandChildren = item.children && item.children.length > 0;
      var isFolder = hasGrandChildren; // Only expand if actually has children
      
      if (isFolder) {
        var subListId = 'sub-list-' + child.id + '-' + idx;
        html += '<div class="child-item has-children" onclick="toggleChildren(\'' + subListId + '\', this)">' +
          '<span class="child-item-title">' + (item.name || item.title || '') + '</span>' +
          '<span class="child-item-arrow child-arrow">›</span></div>' +
          '<div class="sub-child-list" id="' + subListId + '" style="display:none;padding-left:16px;">';
        
        if (hasGrandChildren) {
          item.children.forEach(function(sub, subIdx) {
            var subHasChildren = sub.children && sub.children.length > 0;
            var subIsFolder = subHasChildren;
            
            if (subIsFolder) {
              var subSubListId = 'sub-list-' + item.id + '-' + idx + '-' + subIdx;
              html += '<div class="child-item has-children" onclick="toggleChildren(\'' + subSubListId + '\', this)">' +
                '<span class="child-item-title">' + (sub.name || sub.title || '') + '</span>' +
                '<span class="child-item-arrow child-arrow">›</span></div>' +
                '<div class="sub-child-list" id="' + subSubListId + '" style="display:none;padding-left:16px;">';
              
              if (sub.children) {
                sub.children.forEach(function(leaf, leafIdx) {
                  html += '<div class="child-item" onclick="loadDoc(\'' + leaf.id + '\', \'' + cat.id + '\', \'' + leaf.id + '\')">' +
                    '<span class="child-item-title">' + (leaf.name || leaf.title || '') + '</span></div>';
                });
              }
              html += '</div>';
            } else {
              html += '<div class="child-item" onclick="loadDoc(\'' + sub.id + '\', \'' + cat.id + '\', \'' + sub.id + '\')">' +
                '<span class="child-item-title">' + (sub.name || sub.title || '') + '</span></div>';
            }
          });
        } else {
          html += '<div class="child-item" onclick="loadDoc(\'' + item.id + '\', \'' + cat.id + '\', \'' + item.id + '\')">' +
            '<span class="child-item-title">' + (item.name || item.title || '') + '</span></div>';
        }
        html += '</div>';
      } else {
        html += '<div class="child-item" onclick="loadDoc(\'' + item.id + '\', \'' + cat.id + '\', \'' + item.id + '\')">' +
          '<span class="child-item-title">' + (item.name || item.title || '') + '</span></div>';
      }
    });
  } else if (child.content) {
    html += '<div class="doc-view">' + child.content + '</div>';
  }
  
  html += '</div>';
  docContent.innerHTML = html;
}

function toggleChildren(listId, el) {
  if (typeof listId === 'object') {
    var tmp = listId; listId = el; el = tmp;
  }
  var subList = null;
  var cur = el;
  while (cur && cur !== document.body) {
    if (cur.classList && cur.classList.contains('sub-child-list')) {
      subList = cur; break;
    }
    cur = cur.parentElement;
  }
  if (!subList) {
    var next = el.nextElementSibling;
    if (next && next.classList && next.classList.contains('sub-child-list')) {
      subList = next;
    }
  }
  if (subList) {
    var isHidden = subList.style.display === 'none';
    subList.style.display = isHidden ? 'block' : 'none';
    var arrow = el.querySelector ? el.querySelector('.child-arrow') : null;
    if (arrow) arrow.textContent = isHidden ? '∨' : '›';
  }
}

function goBack() {
  if (viewStack.length <= 1) { goHome(); return; }
  var prev = viewStack[viewStack.length - 2];
  viewStack.pop();
  
  if (prev.view === 'home') goHome();
  else if (prev.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === prev.catId; });
    if (cat) showCategory(cat);
  } else if (prev.view === 'child') {
    var cat2 = contentData.categories.find(function(c) { return c.id === prev.catId; });
    var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === prev.childId; }) : null;
    if (cat2 && child2) showChild(cat2, child2);
  } else if (prev.view === 'doc') {
    goBack();
  }
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
      label = child2 ? (child2.name || child2.title || '') : '';
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

function restoreToIndex(idx) {
  if (idx < 0 || idx >= viewStack.length) return;
  viewStack = viewStack.slice(0, idx + 1);
  var target = viewStack[idx];
  if (target.view === 'home') goHome();
  else if (target.view === 'category') {
    var cat = contentData.categories.find(function(c) { return c.id === target.catId; });
    if (cat) showCategory(cat);
  } else if (target.view === 'child') {
    var cat2 = contentData.categories.find(function(c) { return c.id === target.catId; });
    var child2 = cat2 ? cat2.children.find(function(ch) { return ch.id === target.childId; }) : null;
    if (cat2 && child2) showChild(cat2, child2);
  }
  updateBreadcrumb();
}

var currentFontSize = 16;
function adjustFontSize(delta) {
  currentFontSize += delta;
  var docContent = document.getElementById('docContent');
  if (docContent) docContent.style.fontSize = currentFontSize + 'px';
}

function scrollToTop() {
  var docContent = document.getElementById('docContent');
  if (docContent) docContent.scrollTop = 0;
}

// ─── 加载目录 + 懒注册 chunks ───
var categoryScripts = [
  'ifa_content.js',
  'wiki_content.js',
  'sales_content.js',
  'referral_content.js',
  'materials_content.js'
];

function loadCategoryScript(i) {
  if (i >= categoryScripts.length) {
    registerChunks();
    renderCategories();
    return;
  }
  var script = document.createElement('script');
  script.src = categoryScripts[i];
  script.onload = function() {
    if (window.__CHUNKS__) registerChunks();
    loadCategoryScript(i + 1);
  };
  script.onerror = function() {
    console.error('Failed to load: ' + categoryScripts[i]);
    loadCategoryScript(i + 1);
  };
  document.head.appendChild(script);
}

loadCategoryScript(0);
