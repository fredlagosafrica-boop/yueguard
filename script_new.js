// ============ IFA内容库 - 分块架构 ============
// 架构：主文件只含框架 + 状态管理，内容块独立文件
// ─────────────────────────────────────────────

const contentData = { categories: [] };

let loadedChunks = 0;
const totalChunks = 4;

function onChunkLoaded() {
  loadedChunks++;
  if (loadedChunks >= totalChunks) {
    if (document.readyState === 'complete') {
      renderCategories();
    } else {
      window.onload = renderCategories;
    }
  }
}

let currentCategory = null;
let currentChild = null;
let currentDoc = null;
let fontSizeLevel = 0;
let isDarkMode = false;
const fontSizes = [13, 14, 15, 16, 17, 18];

// ─── 动态加载 content chunks ───
var scripts = [
  'chunks/ifa_content.js',
  'chunks/wiki_content.js',
  'chunks/sales_content.js',
  'chunks/materials_content.js'
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

// 启动加载
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() { loadScript(0); });
} else {
  loadScript(0);
}

// ─── 渲染函数 ───
function renderCategories() {
  var container = document.getElementById('categories-container');
  if (!container) return;
  container.innerHTML = '';
  contentData.categories.forEach(function(cat) {
    var catDiv = document.createElement('div');
    catDiv.className = 'category';
    catDiv.innerHTML = '<div class="cat-header" onclick="toggleCategory(this)">' +
      '<span class="cat-name">' + cat.name + '</span>' +
      '<span class="cat-subtitle">' + (cat.subtitle || '') + '</span>' +
      '<span class="arrow">▼</span></div>' +
      '<div class="cat-children"></div>';
    var childrenDiv = catDiv.querySelector('.cat-children');
    cat.children.forEach(function(child) {
      var childDiv = document.createElement('div');
      childDiv.className = 'child';
      childDiv.innerHTML = '<div class="child-header" onclick="toggleChild(this)">' +
        '<span class="child-name">' + child.name + '</span><span class="arrow">▶</span></div>' +
        '<div class="child-items"></div>';
      var itemsDiv = childDiv.querySelector('.child-items');
      child.children.forEach(function(item) {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = '<a href="javascript:void(0)" onclick="showDoc(\'' + cat.id + '\',\'' + child.id + '\',\'' + item.id + '\')">' + item.title + '</a>';
        itemsDiv.appendChild(itemDiv);
      });
      childrenDiv.appendChild(childDiv);
    });
    container.appendChild(catDiv);
  });
}

function toggleCategory(header) {
  var catDiv = header.parentElement;
  var childrenDiv = catDiv.querySelector('.cat-children');
  var arrow = header.querySelector('.arrow');
  if (childrenDiv.style.display === 'none') {
    childrenDiv.style.display = 'block';
    arrow.textContent = '▼';
  } else {
    childrenDiv.style.display = 'none';
    arrow.textContent = '▶';
  }
}

function toggleChild(header) {
  var childDiv = header.parentElement;
  var itemsDiv = childDiv.querySelector('.child-items');
  var arrow = header.querySelector('.arrow');
  if (itemsDiv.style.display === 'none') {
    itemsDiv.style.display = 'block';
    arrow.textContent = '▼';
  } else {
    itemsDiv.style.display = 'none';
    arrow.textContent = '▶';
  }
}

function showDoc(catId, childId, itemId) {
  var cat = contentData.categories.find(function(c) { return c.id === catId; });
  if (!cat) return;
  var child = cat.children.find(function(c) { return c.id === childId; });
  if (!child) return;
  var item = child.children.find(function(i) { return i.id === itemId; });
  if (!item) return;
  var right = document.getElementById('right-panel');
  if (!right) return;
  right.innerHTML = '<div class="doc-header"><h2>' + item.title + '</h2></div>' +
    '<div class="doc-actions">' +
    '<button onclick="adjustFontSize(-1)">A-</button>' +
    '<button onclick="adjustFontSize(1)">A+</button>' +
    '<button onclick="toggleDarkMode()">' + (isDarkMode ? '☀️' : '🌙') + '</button>' +
    '<button onclick="window.print()">🖨️</button></div>' +
    '<div class="doc-content" id="doc-content">' + item.content + '</div>';
  currentDoc = item;
  currentCategory = cat;
  currentChild = child;
  fontSizeLevel = 2;
  applyFontSize();
}

function adjustFontSize(delta) {
  fontSizeLevel = Math.max(0, Math.min(fontSizes.length - 1, fontSizeLevel + delta));
  applyFontSize();
}

function applyFontSize() {
  var content = document.getElementById('doc-content');
  if (content) content.style.fontSize = fontSizes[fontSizeLevel] + 'px';
}

function toggleDarkMode() {
  isDarkMode = !isDarkMode;
  document.body.classList.toggle('dark-mode', isDarkMode);
  var btn = document.querySelector('.doc-actions button:nth-child(3)');
  if (btn) btn.textContent = isDarkMode ? '☀️' : '🌙';
}

// ─── 样式 ───
var style = document.createElement('style');
style.textContent = `
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 0; background: #f5f5f5; }
.container { display: flex; height: 100vh; }
#left-panel { width: 320px; background: #fff; border-right: 1px solid #ddd; overflow-y: auto; padding: 16px; box-shadow: 2px 0 8px rgba(0,0,0,0.05); }
#right-panel { flex: 1; overflow-y: auto; padding: 32px 48px; background: #fff; }
.category { margin-bottom: 12px; border: 1px solid #e0e0e0; border-radius: 10px; overflow: hidden; }
.cat-header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #fff; padding: 14px 16px; cursor: pointer; display: flex; align-items: center; gap: 8px; font-weight: 600; }
.cat-header:hover { background: linear-gradient(135deg, #5a6fd6 0%, #6a4190 100%); }
.cat-name { flex: 1; font-size: 15px; }
.cat-subtitle { font-size: 11px; opacity: 0.85; font-weight: 400; }
.arrow { font-size: 10px; transition: transform 0.2s; }
.cat-children { display: none; padding: 8px; background: #fafafa; }
.child { margin-bottom: 6px; border: 1px solid #e8e8e8; border-radius: 6px; overflow: hidden; }
.child-header { background: #f0f4ff; padding: 10px 14px; cursor: pointer; display: flex; justify-content: space-between; align-items: center; font-size: 13px; color: #333; font-weight: 500; }
.child-header:hover { background: #e6edff; }
.child-items { display: none; padding: 6px 8px; }
.item { padding: 6px 10px; border-radius: 4px; }
.item:hover { background: #eef2ff; }
.item a { color: #444; text-decoration: none; font-size: 13px; display: block; }
.item a:hover { color: #667eea; }
.doc-header { margin-bottom: 20px; border-bottom: 2px solid #667eea; padding-bottom: 12px; }
.doc-header h2 { margin: 0; color: #333; font-size: 22px; }
.doc-actions { margin-bottom: 16px; display: flex; gap: 8px; }
.doc-actions button { padding: 6px 14px; border: 1px solid #ddd; background: #fff; border-radius: 6px; cursor: pointer; font-size: 13px; }
.doc-actions button:hover { background: #f5f5f5; }
.doc-content { line-height: 1.8; color: #333; font-size: 15px; max-width: 800px; }
.doc-content h2 { color: #667eea; margin-top: 32px; font-size: 20px; }
.doc-content h3 { color: #764ba2; margin-top: 24px; font-size: 16px; }
.doc-content ul { padding-left: 24px; }
.dark-mode { background: #1a1a2e; color: #e0e0e0; }
.dark-mode #left-panel, .dark-mode #right-panel { background: #1a1a2e; color: #e0e0e0; }
.dark-mode .cat-header { background: linear-gradient(135deg, #4a5568 0%, #2d3748 100%); }
.dark-mode .cat-children { background: #16162a; }
.dark-mode .child-header { background: #2a2a4a; color: #e0e0e0; }
.dark-mode .child-items { background: #1a1a2e; }
.dark-mode .item a { color: #c0c0c0; }
.dark-mode .item:hover { background: #2a2a4a; }
@media (max-width: 768px) { .container { flex-direction: column; } #left-panel { width: 100%; height: 40vh; } }
`;
document.head.appendChild(style);
