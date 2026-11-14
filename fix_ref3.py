#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import re

with open('referral_content.js', 'r', encoding='utf-8') as f:
    content = f.read()

# The exact pattern we need to replace
old_pattern = r"""    // 三、全程合规红线
    \{
      id: 'ref-3',
      name: '三、全程合规红线（必看必守）',
      content: '<h3>三、全程合规红线（必看必守）</h3><p>1\. 转介人无保险销售牌照，严禁从事任何保险销售活动。</p><p>2\. 严禁私下给客户返佣、回扣、红包等任何形式的利益输送。</p><p>3\. 严格遵守"香港线下签单"规定，严禁内地远程签单、代签、代填资料。</p><p>4\. 不夸大港险收益、不承诺保本保息、不避而不谈风险。</p><p>5\. 仅对接香港保监局正规持牌经纪公司/持牌顾问。</p><p>6\. 所有转介行为需签订正规转介协议。</p>'
    \},"""

new_block = """    // 三、全程合规红线
    {
      id: 'ref-3',
      name: '三、全程合规红线（必看必守）',
      children: [
        { id: 'ref-3-1', name: '一、从业资质红线', content: '<h3>一、从业资质红线</h3><p>转介人无保险销售牌照，严禁开展任何保险经营性销售行为：禁止产品讲解、方案定制设计、收益测算承诺、保费报价、投保引导等一切销售类动作，仅可做信息科普与意向转介。</p>' },
        { id: 'ref-3-2', name: '二、利益输送红线', content: '<h3>二、利益输送红线</h3><p>严禁任何形式私下返佣、回扣、红包、礼品馈赠、变相让利等利益输送行为；一经违规，存在保单撤销、监管追责、承担民事及法律责任风险。</p>' },
        { id: 'ref-3-3', name: '三、签单流程红线', content: '<h3>三、签单流程红线</h3><p>严格执行香港线下当面签单合规要求：严禁内地远程签单、代签签名、代填投保资料、视频隔空签单；所有投保、见证、签单流程必须在香港本地现场完成，全程保留合规影像、流程留痕备查。</p>' },
        { id: 'ref-3-4', name: '四、宣传销售话术红线', content: '<h3>四、宣传销售话术红线</h3><p>不夸大港险分红、复利、预期收益；不口头承诺保本保息、保底收益；不隐瞒、回避汇率风险、市场波动风险、政策风险；必须如实同步优势+风险，杜绝误导销售、诱导投保。</p>' },
        { id: 'ref-3-5', name: '五、合作渠道红线', content: '<h3>五、合作渠道红线</h3><p>只对接香港保监局正规持牌经纪公司、持牌顾问；坚决不合作无牌机构、地下团队、不合规居间渠道，防止合作方违规牵连个人及客户保单。</p>' },
        { id: 'ref-3-6', name: '六、转介合作协议红线', content: '<h3>六、转介合作协议红线</h3><p>所有转介业务必须签订正式书面转介协议；明确双方权责、转介服务费比例、结算周期、结算条件、合规责任划分，规避后期财务与纠纷风险。</p>' }
      ]
    },"""

new_content, count = re.subn(old_pattern, new_block, content)
if count > 0:
    with open('referral_content.js', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"SUCCESS: Replaced {count} block(s)")
else:
    print("ERROR: Pattern not found")
    # Try simpler approach
    if "id: 'ref-3'" in content and "三、全程合规红线" in content:
        print("Found ref-3 but pattern didn't match")
        # Find the block boundaries
        idx = content.find("id: 'ref-3'")
        print(f"ref-3 at index {idx}")
        print("Context:")
        print(repr(content[idx-50:idx+300]))