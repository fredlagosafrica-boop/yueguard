// ============ chunks/sales_content.js ============
// 一级分类3：销售进阶（模块一~四）
// 内容已从 Excel 提取并整理

contentData.categories.push({
  id: 'sales',
  name: '📊 销售进阶',
  subtitle: '进阶销售核心教程',
  children: [

    // ===== 模块一：认知升级 =====
    {
      id: 'mod1',
      name: '模块一：认知升级',
      children: [
        { id: 'm1_0', title: '重新理解IFA这个身份', content: '<h2>重新理解IFA这个身份</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_1', title: '为什么客户需要IFA而不是直接找保司？', content: '<h2>为什么客户需要IFA而不是直接找保司？</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_2', title: 'IFA的核心价值到底是什么', content: '<h2>IFA的核心价值到底是什么</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_3', title: '什么样的人适合做IFA', content: '<h2>什么样的人适合做IFA</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_4', title: 'IFA工作的本质：卖的是信任', content: '<h2>IFA工作的本质：卖的是信任</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_5', title: 'IFA收入与晋升路径', content: '<h2>IFA收入与晋升路径</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_6', title: 'IFA展业核心心态', content: '<h2>IFA展业核心心态</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_7', title: 'IFA常见的4大致命误区', content: '<h2>IFA常见的4大致命误区</h2><p>内容见Excel模块一</p>' },
        { id: 'm1_8', title: 'IFA日常工作全景图', content: '<h2>IFA日常工作全景图</h2><p>内容见Excel模块一</p>' }
      ]
    },

    // ===== 模块二：进阶销售全流程实操 =====
    {
      id: 'mod2_parent',
      name: '模块二：进阶销售全流程实操',
      children: [
        {
          id: 'child_m2_0',
          name: '第一步：前期筹备',
          children: [
            { id: 'm2_0_0', title: '第一步-客户画像分析', content: '<h2>第一步-客户画像分析</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_0_1', title: '第一步-需求预判', content: '<h2>第一步-需求预判</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_0_2', title: '第一步-产品匹配', content: '<h2>第一步-产品匹配</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_0_3', title: '第一步-展业工具准备', content: '<h2>第一步-展业工具准备</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_0_4', title: '第一步-约见理由设计', content: '<h2>第一步-约见理由设计</h2><p>内容见Excel模块二</p>' }
          ]
        },
        {
          id: 'child_m2_1',
          name: '第二步：精准获客',
          children: [
            { id: 'm2_1_0', title: '第二步-线上获客渠道', content: '<h2>第二步-线上获客渠道</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_1_1', title: '第二步-线下获客渠道', content: '<h2>第二步-线下获客渠道</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_1_2', title: '第二步-转介绍系统搭建', content: '<h2>第二步-转介绍系统搭建</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_1_3', title: '第二步-客户分级管理', content: '<h2>第二步-客户分级管理</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_1_4', title: '第二步-跟进节奏设计', content: '<h2>第二步-跟进节奏设计</h2><p>内容见Excel模块二</p>' }
          ]
        },
        {
          id: 'child_m2_2',
          name: '第三步：深度需求挖掘',
          children: [
            { id: 'm2_2_0', title: '第三步-SPIN需求挖掘法', content: '<h2>第三步-SPIN需求挖掘法</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_2_1', title: '第三步-家庭结构分析', content: '<h2>第三步-家庭结构分析</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_2_2', title: '第三步-风险偏好测评', content: '<h2>第三步-风险偏好测评</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_2_3', title: '第三步-预算与期望管理', content: '<h2>第三步-预算与期望管理</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_2_4', title: '第三步-决策链分析', content: '<h2>第三步-决策链分析</h2><p>内容见Excel模块二</p>' }
          ]
        },
        {
          id: 'child_m2_3',
          name: '第四步：方案呈现与专业讲解',
          children: [
            { id: 'm2_3_0', title: '第四步-FABE产品呈现法', content: '<h2>第四步-FABE产品呈现法</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_3_1', title: '第四步-对比分析法', content: '<h2>第四步-对比分析法</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_3_2', title: '第四步-计划书制作', content: '<h2>第四步-计划书制作</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_3_3', title: '第四步-促单时机把握', content: '<h2>第四步-促单时机把握</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_3_4', title: '第四步-远程签约流程', content: '<h2>第四步-远程签约流程</h2><p>内容见Excel模块二</p>' }
          ]
        },
        {
          id: 'child_m2_4',
          name: '第五步：异议处理',
          children: [
            { id: 'm2_4_0', title: '第五步-价格异议处理', content: '<h2>第五步-价格异议处理</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_4_1', title: '第五步-时机异议处理', content: '<h2>第五步-时机异议处理</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_4_2', title: '第五步-信任异议处理', content: '<h2>第五步-信任异议处理</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_4_3', title: '第五步-竞品对比异议', content: '<h2>第五步-竞品对比异议</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_4_4', title: '第五步-家庭反对处理', content: '<h2>第五步-家庭反对处理</h2><p>内容见Excel模块二</p>' },
            { id: 'm2_4_5', title: '第五步-最后一次跟进', content: '<h2>第五步-最后一次跟进</h2><p>内容见Excel模块二</p>' }
          ]
        }
      ]
    },

    // ===== 模块三：进阶销售核心技巧 =====
    {
      id: 'mod3',
      name: '模块三：进阶销售核心技巧',
      children: [
        { id: 'm3_0', title: '技巧一：快速建立信任的3个开场白', content: '<h2>技巧一：快速建立信任的3个开场白</h2><p>内容见Excel模块三</p>' },
        { id: 'm3_1', title: '技巧二：挖掘客户真实需求的4层提问', content: '<h2>技巧二：挖掘客户真实需求的4层提问</h2><p>内容见Excel模块三</p>' },
        { id: 'm3_2', title: '技巧三：让客户主动转介绍的3种情境', content: '<h2>技巧三：让客户主动转介绍的3种情境</h2><p>内容见Excel模块三</p>' },
        { id: 'm3_3', title: '技巧四：高净值客户的沟通密码', content: '<h2>技巧四：高净值客户的沟通密码</h2><p>内容见Excel模块三</p>' },
        { id: 'm3_4', title: '技巧五：用故事卖保单的呈现方式', content: '<h2>技巧五：用故事卖保单的呈现方式</h2><p>内容见Excel模块三</p>' },
        { id: 'm3_5', title: '技巧六：处理"我要考虑一下"的句式', content: '<h2>技巧六：处理"我要考虑一下"的句式</h2><p>内容见Excel模块三</p>' }
      ]
    },

    // ===== 模块四：进阶销售禁忌 =====
    {
      id: 'mod4',
      name: '模块四：进阶销售禁忌',
      children: [
        { id: 'm4_0', title: '禁忌一：夸大收益承诺', content: '<h2>禁忌一：夸大收益承诺</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_1', title: '禁忌二：诋毁同业', content: '<h2>禁忌二：诋毁同业</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_2', title: '禁忌三：忽视合规要求', content: '<h2>禁忌三：忽视合规要求</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_3', title: '禁忌四：强行推销引发反感', content: '<h2>禁忌四：强行推销引发反感</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_4', title: '禁忌五：签单后失联', content: '<h2>禁忌五：签单后失联</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_5', title: '禁忌六：不懂装懂误导客户', content: '<h2>禁忌六：不懂装懂误导客户</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_6', title: '禁忌七：过度依赖话术而非专业', content: '<h2>禁忌七：过度依赖话术而非专业</h2><p>内容见Excel模块四</p>' },
        { id: 'm4_7', title: '禁忌八：不跟进老客户', content: '<h2>禁忌八：不跟进老客户</h2><p>内容见Excel模块四</p>' }
      ]
    }

  ]
});

onChunkLoaded();
