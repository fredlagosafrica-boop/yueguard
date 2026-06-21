// ============ IFA内容库 - 分块架构（逐层返回修复版 v2）============
// 匹配 index.html 结构：navArea/categoryGrid/contentArea/detailArea
// ─────────────────────────────────────────────

const contentData = { categories: [] };

let loadedChunks = 0;
const totalChunks = 7;

// 视图堆栈：追踪完整导航路径
// 每个条目: { view: 'home'|'category'|'child'|'doc', catId, childId, itemId }
let viewStack = [{ view: 'home' }];

function onChunkLoaded() {
  loadedChunks++;
  if (loadedChunks >= totalChunks) {
    renderCategories();
  }
}

// ─── 动态加载 content chunks（jsDelivr CDN + 智能客服懒加载）────
// [PERF 2026-06-21] 切换 jsDelivr CDN：亚洲节点自动 gzip，总流量从 982KB→~300KB
// [PERF 2026-06-21] chatbot_content.js (128KB) 改为懒加载：用户点击"智能客服"卡片时才下载
//   解决"登录后空白 15s"问题——之前 chatbot_content.js 在 GitHub Pages 上访问极不稳定
//   实测首次 1.88s 成功，二次请求 15s 超时
var CDN_BASE = 'https://cdn.jsdelivr.net/gh/fredlagosafrica-boop/yueguard@main/';
var scripts = [
  CDN_BASE + 'ifa_content.js?v=2026052401',
  CDN_BASE + 'wiki_content.js?v=2026052301',
  CDN_BASE + 'sales_content.js?v=2026052401',
  CDN_BASE + 'referral_content.js?v=20260610',
  CDN_BASE + 'materials_content.js?v=2026060102',
  // chatbot_content.js 改为懒加载：见 loadChatbotCategory()
  CDN_BASE + 'faq_content.js?v=2026052901',
  CDN_BASE + 'biyuan_content.js?v=2026052301',
];

var loadedCount = 0;
var loadTimeout = null;
var totalScripts = scripts.length;

function updateProgress(loaded, total) {
  var p = document.getElementById('loadProgress');
  if (p) p.textContent = '⏳ 加载中 ' + loaded + '/' + total;
}

function tryRender() {
  if (loadedCount >= totalScripts) {
    clearTimeout(loadTimeout);
    var p = document.getElementById('loadProgress');
    if (p) { p.textContent = '✅ 加载完成，正在渲染...'; setTimeout(function() { if (p) p.style.display = 'none'; }, 500); }
    renderCategories();
  }
}

// 并行加载所有 script
updateProgress(0, totalScripts);
scripts.forEach(function(url) {
  var script = document.createElement('script');
  script.src = url;
  script.async = false; // 保持执行顺序（Firefox 上 async=true 可能乱序）
  script.onload = function() {
    loadedCount++;
    updateProgress(loadedCount, totalScripts);
    tryRender();
  };
  script.onerror = function() {
    console.error('加载失败（跳过）: ' + url);
    loadedCount++;
    updateProgress(loadedCount, totalScripts);
    tryRender();
  };
  document.head.appendChild(script);
});

// 全局超时：15秒后强制渲染（即使未全部加载完）
// [PERF] 从 25s 缩到 15s，因为并行后正常情况 1-3s 就完了
loadTimeout = setTimeout(function() {
  var p = document.getElementById('loadProgress');
  if (p) { p.textContent = '⚠️ 加载超时（' + loadedCount + '/' + totalScripts + '），已显示已加载内容'; setTimeout(function() { if (p) p.style.display = 'none'; }, 2000); }
  if (contentData.categories.length > 0) renderCategories();
}, 15000);

// ─── 搜索功能 ───
var lastSearchKeyword = ''; // 记录最近搜索关键词，用于内容高亮

// HTML转义：防止搜索结果注入HTML到属性和文本
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function handleSearch(keyword) {
  var resultsContainer = document.getElementById('searchResults');
  if (!resultsContainer) return;
  
  if (!keyword || keyword.trim().length < 1) {
    resultsContainer.classList.remove('active');
    return;
  }
  
  keyword = keyword.trim().toLowerCase();
  lastSearchKeyword = keyword; // 记录关键词
  var results = [];
  
  // 遍历所有分类、子类、内容项进行搜索
  if (!contentData || !contentData.categories || contentData.categories.length === 0) {
    resultsContainer.innerHTML = '<div class="search-no-result">内容加载中，请稍候...</div>';
    resultsContainer.classList.add('active');
    return;
  }
  
  contentData.categories.forEach(function(cat) {
    // 匹配分类名
    if (cat.name && cat.name.toLowerCase().includes(keyword)) {
      results.push({ type: 'category', cat: cat.name, catId: cat.id, title: cat.name, item: cat });
    }
    // 匹配子类
    if (cat.children) {
      cat.children.forEach(function(child) {
        if (child.name && child.name.toLowerCase().includes(keyword)) {
          results.push({ type: 'child', cat: cat.name, title: child.name, item: child, catId: cat.id });
        }
        // 匹配直接挂在 child 下的 items（如 flat 类内容库）
        if (child.items) {
          child.items.forEach(function(it) {
            var matchTitle = it.name && it.name.toLowerCase().includes(keyword);
            var matchContent = it.content && it.content.toLowerCase().includes(keyword);
            if (matchTitle || matchContent) {
              results.push({ type: 'item', cat: cat.name, title: it.name || it.title || '未命名', item: it, catId: cat.id, childId: child.id, matchContent: matchContent ? it.content : null });
            }
          });
        }
        // 匹配子子分类 child.children（递归查到底）
        if (child.children) {
          child.children.forEach(function(sub) {
            var matchTitle = sub.name && sub.name.toLowerCase().includes(keyword);
            var matchContent = sub.content && sub.content.toLowerCase().includes(keyword);
            if (matchTitle || matchContent) {
              results.push({ type: 'item', cat: cat.name, title: sub.name || sub.title || '未命名', item: sub, catId: cat.id, childId: child.id, matchContent: matchContent ? sub.content : null });
            }
            // 递归：sub 也可能有 items 或更深层 children
            if (sub.items) {
              sub.items.forEach(function(it) {
                var mT = it.name && it.name.toLowerCase().includes(keyword);
                var mC = it.content && it.content.toLowerCase().includes(keyword);
                if (mT || mC) {
                  results.push({ type: 'item', cat: cat.name, title: it.name || it.title || '未命名', item: it, catId: cat.id, childId: child.id, matchContent: mC ? it.content : null });
                }
              });
            }
            if (sub.children) {
              sub.children.forEach(function(sub2) {
                var mT2 = sub2.name && sub2.name.toLowerCase().includes(keyword);
                var mC2 = sub2.content && sub2.content.toLowerCase().includes(keyword);
                if (mT2 || mC2) {
                  results.push({ type: 'item', cat: cat.name, title: sub2.name || sub2.title || '未命名', item: sub2, catId: cat.id, childId: child.id, matchContent: mC2 ? sub2.content : null });
                }
                // 第四层
                if (sub2.items) {
                  sub2.items.forEach(function(it2) {
                    var mT3 = it2.name && it2.name.toLowerCase().includes(keyword);
                    var mC3 = it2.content && it2.content.toLowerCase().includes(keyword);
                    if (mT3 || mC3) {
                      results.push({ type: 'item', cat: cat.name, title: it2.name || it2.title || '未命名', item: it2, catId: cat.id, childId: child.id, matchContent: mC3 ? it2.content : null });
                    }
                  });
                }
                if (sub2.children) {
                  sub2.children.forEach(function(sub3) {
                    var mT3 = sub3.name && sub3.name.toLowerCase().includes(keyword);
                    var mC3 = sub3.content && sub3.content.toLowerCase().includes(keyword);
                    if (mT3 || mC3) {
                      results.push({ type: 'item', cat: cat.name, title: sub3.name || sub3.title || '未命名', item: sub3, catId: cat.id, childId: child.id, matchContent: mC3 ? sub3.content : null });
                    }
                    // 第五层（安全兜底）
                    if (sub3.items) {
                      sub3.items.forEach(function(it3) {
                        var mT4 = it3.name && it3.name.toLowerCase().includes(keyword);
                        var mC4 = it3.content && it3.content.toLowerCase().includes(keyword);
                        if (mT4 || mC4) {
                          results.push({ type: 'item', cat: cat.name, title: it3.name || it3.title || '未命名', item: it3, catId: cat.id, childId: child.id, matchContent: mC4 ? it3.content : null });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
  
  // 渲染结果
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div class="search-no-result">未找到相关内容</div>';
  } else {
    resultsContainer.innerHTML = results.slice(0, 20).map(function(r) {
      // 提取内容匹配片段
      var snippet = '';
      if (r.type === 'item' && r.matchContent) {
        var plain = r.matchContent.replace(/<[^>]+>/g, ''); // 去掉HTML标签
        var idx = plain.toLowerCase().indexOf(keyword);
        if (idx > -1) {
          var start = Math.max(0, idx - 15);
          var end = Math.min(plain.length, idx + keyword.length + 20);
          snippet = '...' + plain.slice(start, end) + '...';
          snippet = snippet.replace(new RegExp(keyword, 'gi'), '<mark>$&</mark>');
        }
      }
      return '<div class="search-result-item" data-type="' + escapeHtml(r.type) + '" data-cat="' + escapeHtml(r.catId || '') + '" data-child="' + escapeHtml(r.childId || '') + '" data-itemid="' + escapeHtml(r.item.id || '') + '" data-title="' + encodeURIComponent(r.title) + '">' +
        '<div class="result-cat">' + escapeHtml(r.cat) + ' ' + (r.type === 'category' ? '(分类)' : r.type === 'child' ? '(子分类)' : '(内容)') + '</div>' +
        '<div class="result-title">' + escapeHtml(r.title) + '</div>' +
        (snippet ? '<div class="result-snippet">' + snippet + '</div>' : '') + '</div>';
    }).join('');
  }
  
  resultsContainer.classList.add('active');
  
  // 绑定点击事件（事件委托）
  resultsContainer.querySelectorAll('.search-result-item').forEach(function(el) {
    el.onclick = function() {
      var type = this.getAttribute('data-type');
      var catId = this.getAttribute('data-cat');
      var childId = this.getAttribute('data-child');
      var itemId = this.getAttribute('data-itemid');
      var title = decodeURIComponent(this.getAttribute('data-title'));
      openSearchResult(type, catId, childId, title, itemId);
    };
  });
}

function openSearchResult(type, catId, childId, title, itemId) {
  var resultsContainer = document.getElementById('searchResults');
  if (resultsContainer) resultsContainer.classList.remove('active');
  document.getElementById('searchInput').value = '';
  
  if (type === 'category') {
    var cat = catId ? contentData.categories.find(function(c) { return c.id === catId; }) : null;
    if (!cat) cat = contentData.categories.find(function(c) { return c.name === title; });
    if (cat) showCategory(cat);
  } else if (type === 'child') {
    var cat = contentData.categories.find(function(c) { return c.id === catId; });
    if (cat) {
      var child = cat.children.find(function(c) { return c.name === title; });
      if (child) showChild(cat, child);
    }
  } else if (type === 'item') {
    // 搜索结果点击 → 直接用 itemId 跳转到文章页
    if (itemId) {
      showDoc(catId, childId, itemId);
    }
  }
}

// 点击空白处关闭搜索结果
document.addEventListener('click', function(e) {
  var searchBox = document.getElementById('searchBox');
  var resultsContainer = document.getElementById('searchResults');
  if (searchBox && !searchBox.contains(e.target)) {
    if (resultsContainer) resultsContainer.classList.remove('active');
  }
});

// ─── 渲染函数 ───
function renderCategories() {
  var grid = document.getElementById('categoryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  contentData.categories.forEach(function(cat) {
    var card = document.createElement('div');
    card.className = 'category-item';
    card.innerHTML = '<div class="cat-icon">' + (cat.icon || '📁') + '</div>' +
      '<div class="cat-name">' + cat.name + '</div>' +
      '<div class="cat-sub">' + (cat.subtitle || '') + '</div>';
    card.onclick = function() { showCategory(cat); };
    grid.appendChild(card);
  });
  // [PERF 2026-06-21] 智能客服懒加载占位卡：未加载时显示，点击触发加载
  if (!contentData.categories.find(function(c) { return c.id === 'chatbot'; })) {
    var cbCard = document.createElement('div');
    cbCard.className = 'category-item chatbot-lazy';
    cbCard.id = 'chatbotLazyCard';
    cbCard.innerHTML = '<div class="cat-icon">🤖</div>' +
      '<div class="cat-name">智能客服问答库</div>' +
      '<div class="cat-sub">点击加载 · 18个分组198条话术</div>';
    cbCard.onclick = loadChatbotCategory;
    grid.appendChild(cbCard);
  }
}

// [PERF 2026-06-21] 懒加载智能客服：用户点击时才下载 chatbot_content.js
// 解决 GitHub Pages 跨境访问 chatbot_content.js 慢/超时问题
function loadChatbotCategory() {
  var card = document.getElementById('chatbotLazyCard');
  if (!card) return;
  // 防止重复点击
  if (card.dataset.loading === '1') return;
  card.dataset.loading = '1';
  card.innerHTML = '<div class="cat-icon">⏳</div>' +
    '<div class="cat-name">智能客服问答库</div>' +
    '<div class="cat-sub">正在加载（首次约 1-2s）...</div>';

  var s = document.createElement('script');
  s.src = CDN_BASE + 'chatbot_content.js?v=20260516';
  s.onload = function() {
    // 加载完成后，移除占位卡 + 重新渲染（让真实 chatbot 分类卡片出现）
    var exists = contentData.categories.find(function(c) { return c.id === 'chatbot'; });
    if (exists) {
      renderCategories();
    } else {
      card.innerHTML = '<div class="cat-icon">⚠️</div>' +
        '<div class="cat-name">智能客服问答库</div>' +
        '<div class="cat-sub">加载完成但未找到内容，点击重试</div>';
      card.dataset.loading = '';
    }
  };
  s.onerror = function() {
    card.innerHTML = '<div class="cat-icon">❌</div>' +
      '<div class="cat-name">智能客服问答库</div>' +
      '<div class="cat-sub">加载失败，点击重试</div>';
    card.dataset.loading = '';
  };
  document.head.appendChild(s);
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

  var html = '<span class="breadcrumb-item" onclick="goHome()">首页</span>';

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
  console.log('[updateBreadcrumb] html=', html);
}

function updateBreadcrumbDocOnly(cat, child, item) {
  var breadcrumb = document.getElementById('breadcrumb');
  if (!breadcrumb) return;

  var html = '<span class="breadcrumb-item" onclick="goHome()">首页</span>';

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
  lastSearchKeyword = ''; // 退出搜索模式，清除残留高亮
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
    item.className = 'list-item';
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

function showChild(cat, child, itemIdToShow) {
  lastSearchKeyword = ''; // 退出搜索模式，清除残留高亮
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (!contentArea || !detailArea) return;

  contentArea.style.display = 'none';
  detailArea.style.display = 'block';
  window.scrollTo(0, 0);

  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  if (docTitle) docTitle.textContent = cat.name + ' - ' + child.name;

  if (!docContent) return;

  viewStack.push({ view: 'child', catId: cat.id, childId: child.id });
  updateBreadcrumb();

  // 如果传入了 itemIdToShow，直接跳转到文章
  if (itemIdToShow) {
    showDoc(cat.id, child.id, itemIdToShow);
    return;
  }

  // 如果没有 children（叶子节点），直接显示内容
  if (!child.children || child.children.length === 0) {
    showDoc(cat.id, child.id, child.id);
    return;
  }

  // 构建子项列表，支持第3层有children的情况
  console.log('[showChild] 开始渲染子目录列表，清空docContent');
  var html = '<div class="child-items-list">';
  child.children.forEach(function(item) {
    // 提取内容摘要（如果有content字段）
    var snippetHtml = '';
    if (item.content) {
      var plain = item.content.replace(/<[^>]+>/g, '');
      var short = plain.length > 60 ? plain.slice(0, 60) + '...' : plain;
      snippetHtml = '<div class="child-item-snippet">' + short + '</div>';
    }
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
      if (snippetHtml) {
        var lastItem = html.lastIndexOf('<div class="child-item"');
        var insertPos = html.indexOf('</div>', lastItem) + 6;
        html = html.slice(0, insertPos) + snippetHtml.replace('class="child-item-snippet"', 'class="child-item-snippet child-snippet-inline"') + html.slice(insertPos);
      }
    }
  });
  html += '</div>';
  docContent.innerHTML = ''; // 强制清空
  docContent.innerHTML = html;
  console.log('[showChild] 渲染完成，innerHTML已设置');
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
  window.scrollTo(0, 0);

  var docTitle = document.getElementById('docTitle');
  var docContent = document.getElementById('docContent');
  if (docTitle) docTitle.textContent = cat.name + ' - ' + child.name;
  if (docContent) {
    docContent.innerHTML = ''; // 先清空旧内容
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
  lastSearchKeyword = ''; // 退出搜索模式，清除残留高亮
  console.log('[DEBUG showDoc] catId:', catId, 'childId:', childId, 'itemId:', itemId);
  console.log('[DEBUG showDoc] REFERRAL_UPDATES["ref-4-2-3"]?', !!window.REFERRAL_UPDATES && !!window.REFERRAL_UPDATES['ref-4-2-3']);
  var cat = contentData.categories.find(function(c) { return c.id === catId; });
  if (!cat) { console.log('[DEBUG showDoc] cat not found!'); return; }

  // 递归搜索：支持任意深度的 children + items 混合查找（含稀疏数组防护）
  // 迭代版 findItemDeep：用栈代替递归，彻底避免堆栈溢出
  function findItemDeep(nodes, targetId) {
    if (!nodes) return null;
    var stack = nodes.slice ? nodes.slice() : Object.values(nodes).filter(Boolean);
    while (stack.length > 0) {
      var node = stack.pop();
      if (!node) continue;
      if (node.id === targetId) return node;
      if (node.items) {
        for (var j = 0; j < node.items.length; j++) {
          if (node.items[j] && node.items[j].id === targetId) return node.items[j];
        }
      }
      if (node.children) {
        for (var k = node.children.length - 1; k >= 0; k--) {
          if (node.children[k]) stack.push(node.children[k]);
        }
      }
    }
    return null;
  }

  var item = findItemDeep(cat.children, itemId);
  if (!item) return;

  // 热补丁：优先用 referral_update.js 里的更新内容（即使有 children 也优先显示补丁内容）
  if (window.REFERRAL_UPDATES && window.REFERRAL_UPDATES[itemId]) {
    console.log('[DEBUG showDoc] HOT PATCH APPLIED for itemId:', itemId);
    var rawContent = window.REFERRAL_UPDATES[itemId];
    // 显示详情区，隐藏分类列表区
    var categoryGrid = document.getElementById('categoryGrid');
    var contentArea = document.getElementById('contentArea');
    var detailArea = document.getElementById('detailArea');
    if (categoryGrid) categoryGrid.style.display = 'none';
    if (contentArea) contentArea.style.display = 'none';
    if (detailArea) detailArea.style.display = 'block';
    var docContent = document.getElementById('docContent');
    if (docContent) docContent.innerHTML = '<div class="doc-view">' + rawContent + '</div>';
    var docTitle = document.getElementById('docTitle');
    if (docTitle) docTitle.textContent = item.name || item.title || '';
    viewStack.push({ view: 'doc', catId: catId, childId: itemId, itemId: itemId });
    updateBreadcrumb();
    return;
  }

  // 有 children 的项目 → 调用 showChild 显示子项目列表
  if (item.children && item.children.length > 0) {
    showChild(cat, item);
    return;
  }

  // 显示详情区，隐藏分类列表区
  var categoryGrid = document.getElementById('categoryGrid');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  if (categoryGrid) categoryGrid.style.display = 'none';
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'block';

  var docContent = document.getElementById('docContent');
  if (docContent) {
    docContent.innerHTML = ''; // 先清空旧内容
    rawContent = item.content || '<p>内容待补充...</p>';
    // 安全高亮：只在文本节点中替换关键词，不碰HTML标签和属性，防止破坏iframe等结构
    if (lastSearchKeyword) {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = rawContent;
      var walk = document.createTreeWalker(tempDiv, NodeFilter.SHOW_TEXT, null, false);
      var nodesToHighlight = [];
      while (walk.nextNode()) nodesToHighlight.push(walk.currentNode);
      nodesToHighlight.forEach(function(textNode) {
        textNode.textContent = textNode.textContent.replace(
          new RegExp(lastSearchKeyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'),
          '<mark class="search-highlight">$&</mark>'
        );
      });
      rawContent = tempDiv.innerHTML;
    }
    docContent.innerHTML = '<div class="doc-view">' + rawContent + '</div>';
  }

  var docTitle = document.getElementById('docTitle');
  if (docTitle) docTitle.textContent = item.name || item.title || '';

  viewStack.push({ view: 'doc', catId: catId, childId: itemId, itemId: itemId });
  updateBreadcrumb();
  window.scrollTo(0, 0); // 每次进入文章都滚动到顶部
  
  // 如果有高亮内容，滚动到第一个高亮位置
  if (lastSearchKeyword) {
    setTimeout(function() {
      var highlight = document.querySelector('.search-highlight');
      if (highlight) {
        highlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
}

function goHome() {
  lastSearchKeyword = ''; // 退出搜索模式，清除残留高亮
  var navArea = document.getElementById('navArea');
  var contentArea = document.getElementById('contentArea');
  var detailArea = document.getElementById('detailArea');
  var categoryGrid = document.getElementById('categoryGrid');
  if (navArea) navArea.style.display = 'block';
  if (categoryGrid) categoryGrid.style.display = 'grid';
  if (contentArea) contentArea.style.display = 'none';
  if (detailArea) detailArea.style.display = 'none';

  viewStack = [{ view: 'home' }];
  updateBreadcrumb();
  renderCategories();

  // DEBUG
  console.log('[goHome] navArea.display=' + (navArea ? navArea.style.display : 'null') +
    ' categoryGrid.display=' + (categoryGrid ? categoryGrid.style.display : 'null') +
    ' contentArea.display=' + (contentArea ? contentArea.style.display : 'null'));
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

// 声明弹窗
function acceptDisclaimer(){
  localStorage.setItem("disclaimerAccepted","1");
  document.getElementById("disclaimerModal").style.display = "none";
}
function showDisclaimer(){
  var e = document.getElementById("disclaimerModal");
  // 仅在密码正确后、未点过同意时弹出
  if(localStorage.getItem("disclaimerAccepted") !== "1"){
    e.style.display = "flex";
  } else {
    e.style.display = "none";
  }
}

// 密码锁屏（每次访问都需要输入，不记住）
function checkPassword(){
  var val = document.getElementById("lockInput").value;
  if(val === "8888"){
    document.getElementById("passwordLock").style.display = "none";
    // 每次输入正确密码后都弹出声明
    localStorage.removeItem("disclaimerAccepted");
    showDisclaimer();
  } else {
    var err = document.getElementById("lockError");
    err.classList.add("show");
    setTimeout(function(){ err.classList.remove("show"); }, 2000);
  }
}
document.getElementById("lockInput").addEventListener("keyup",function(e){
  if(e.key==="Enter") checkPassword();
});
document.addEventListener("DOMContentLoaded",function(){
  // 锁屏由HTML内联style="display:flex"控制，这里仅在密码正确时隐藏
});
