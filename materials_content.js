// ============ chunks/materials_content.js ============
// 一级分类4：素材资料库（现有内容，已在网站上）
// 保留原有结构：3.1公众号 / 3.2小红书 / 3.3图片 / 3.4综合

contentData.categories.push({
  id: '素材',
  name: '🖼️ 素材资料库',
  subtitle: '内容创作素材汇总',
  children: [
    {
      id: 'content01',
      name: '3.1 公众号题材',
      children: [
        { id: 'content01a', title: '3.1.1 2025年', content: '<h2>3.1.1 2025年公众号题材</h2><p>内容待补充...</p>' },
        { id: 'content01b', title: '3.1.2 2026年', content: '<h2>3.1.2 2026年公众号题材</h2><p>内容待补充...</p>' },
        { id: 'content01c', title: '3.1.3 2027年', content: '<h2>3.1.3 2027年公众号题材</h2><p>内容待补充...</p>' }
      ]
    },
    {
      id: 'content02',
      name: '3.2 小红书题材',
      children: [
        { id: 'content02a', title: '3.2.1 2025年', content: '<h2>3.2.1 2025年小红书题材</h2><p>内容待补充...</p>' },
        { id: 'content02b', title: '3.2.2 2026年', content: '<h2>3.2.2 2026年小红书题材</h2><p>内容待补充...</p>' },
        { id: 'content02c', title: '3.2.3 2027年', content: '<h2>3.2.3 2027年小红书题材</h2><p>内容待补充...</p>' }
      ]
    },
    {
      id: 'content03',
      name: '3.3 图片题材',
      children: [
        { id: 'content03a', title: '3.3.1 2025年', content: '<h2>3.3.1 2025年图片题材</h2><p>内容待补充...</p>' },
        { id: 'content03b', title: '3.3.2 2026年', content: '<h2>3.3.2 2026年图片题材</h2><p>内容待补充...</p>' },
        { id: 'content03c', title: '3.3.3 2027年', content: '<h2>3.3.3 2027年图片题材</h2><p>内容待补充...</p>' }
      ]
    },
    {
      id: 'content04',
      name: '3.4 综合题材',
      children: [
        { id: 'content04a', title: '3.4.1 2025年', content: '<h2>3.4.1 2025年综合题材</h2><p>内容待补充...</p>' },
        { id: 'content04b', title: '3.4.2 2026年', content: '<h2>3.4.2 2026年综合题材</h2><p>内容待补充...</p>' },
        { id: 'content04c', title: '3.4.3 2027年', content: '<h2>3.4.3 2027年综合题材</h2><p>内容待补充...</p>' }
      ]
    }
  ]
});

onChunkLoaded();
