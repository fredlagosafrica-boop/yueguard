#!/usr/bin/env python3
# -*- coding: utf-8 -*-
with open('materials_content.js', 'r', encoding='utf-8') as f:
    c = f.read()

new_entry = (
    "{ id: 'content05d', title: '3.5.3 香港主要银行官网链接', content: '<h2>🏦 香港主要银行官网链接</h2>"
    "<p style=\"color:#888;font-size:13px;\">恒玥 Yuanguard | 收录香港主要银行官网及IFA常用功能入口</p>"
    "<h3>📋 总览表</h3>"
    "<div style=\"overflow-x:auto;margin:16px 0;\">"
    "<table border=\"1\" cellpadding=\"8\" cellspacing=\"0\" style=\"border-collapse:collapse;width:100%;font-size:14px;\">"
    "<tr style=\"background:#1e3a5f;color:#d4af37;\"><th>银行</th><th>官网</th><th>客服电话</th></tr>"
    "<tr><td>🏦 汇丰银行 HSBC</td><td><a href=\"https://www.hsbc.com.hk\" target=\"_blank\">hsbc.com.hk</a></td><td>(+852) 2233 3000</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 渣打银行 Standard Chartered</td><td><a href=\"https://www.sc.com/hk\" target=\"_blank\">sc.com/hk</a></td><td>(+852) 2886 8868</td></tr>"
    "<tr><td>🏦 恒生银行 Hang Seng</td><td><a href=\"https://www.hangseng.com\" target=\"_blank\">hangseng.com</a></td><td>(+852) 2822 0228</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 中国银行（香港）BOCHK</td><td><a href=\"https://www.bochk.com\" target=\"_blank\">bochk.com</a></td><td>(+852) 3988 2388</td></tr>"
    "<tr><td>🏦 东亚银行 BEA</td><td><a href=\"https://www.hkbea.com\" target=\"_blank\">hkbea.com</a></td><td>(+852) 2211 1333</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 星展银行 DBS</td><td><a href=\"https://www.dbs.com.hk\" target=\"_blank\">dbs.com.hk</a></td><td>(+852) 2290 8888</td></tr>"
    "<tr><td>🏦 花旗银行 Citibank</td><td><a href=\"https://www.citibank.com.hk\" target=\"_blank\">citibank.com.hk</a></td><td>(+852) 2860 0333</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 招商永隆银行 Wing Lung</td><td><a href=\"https://www.winglung.com\" target=\"_blank\">winglung.com</a></td><td>(+852) 2826 8111</td></tr>"
    "<tr><td>🏦 华侨银行 OCBC</td><td><a href=\"https://www.ocbc.com.hk\" target=\"_blank\">ocbc.com.hk</a></td><td>(+852) 2232 2333</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 上海商业银行 SCB</td><td><a href=\"https://www.shanghaicommercialbank.com\" target=\"_blank\">shanghaicommercialbank.com</a></td><td>(+852) 2541 0121</td></tr>"
    "<tr><td>🏦 富邦银行 Fubon</td><td><a href=\"https://www.fubonbank.com.hk\" target=\"_blank\">fubonbank.com.hk</a></td><td>(+852) 2566 8181</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 中国工商银行（亚洲） ICBC Asia</td><td><a href=\"https://www.icbc.com.hk\" target=\"_blank\">icbc.com.hk</a></td><td>(+852) 2189 5588</td></tr>"
    "<tr><td>🏦 交通银行（香港） BOCOM</td><td><a href=\"https://www.bankcomm.com.hk\" target=\"_blank\">bankcomm.com.hk</a></td><td>(+852) 2269 2269</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 招商银行（香港） CMB HK</td><td><a href=\"https://hk.cmbchina.com\" target=\"_blank\">hk.cmbchina.com</a></td><td>(+852) 3118 1333</td></tr>"
    "<tr><td>🏦 南洋商业银行 NCB</td><td><a href=\"https://www.ncb.com.hk\" target=\"_blank\">ncb.com.hk</a></td><td>(+852) 2629 2629</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 大新银行 Dah Sing</td><td><a href=\"https://www.dahsingbank.com\" target=\"_blank\">dahsingbank.com</a></td><td>(+852) 2507 8668</td></tr>"
    "<tr><td>🏦 农业银行（香港） ABC Bank</td><td><a href=\"https://www.abchina.com.hk\" target=\"_blank\">abchina.com.hk</a></td><td>(+852) 2819 8889</td></tr>"
    "<tr style=\"background:#f8f8f8;\"><td>🏦 创兴银行 Chong Hing</td><td><a href=\"https://www.chbank.com\" target=\"_blank\">chbank.com</a></td><td>(+852) 3768 6688</td></tr>"
    "</table></div>"
    "<h3>🔗 各银行详细入口</h3>"
    "<h4>🏦 汇丰银行 HSBC</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.hsbc.com.hk\" target=\"_blank\">https://www.hsbc.com.hk</a></li>"
    "<li>个人网上银行：<a href=\"https://www.hsbc.com.hk/logon\" target=\"_blank\">HSBC Logon</a></li>"
    "<li>保险服务：<a href=\"https://www.hsbc.com.hk/zh-cn/insurance/\" target=\"_blank\">保险频道</a></li>"
    "<li>强积金MPF：<a href=\"https://www.hsbc.com.hk/zh-cn/pensions/mpf/\" target=\"_blank\">HSBC MPF</a></li>"
    "<li>客服电话：(+852) 2233 3000</li></ul>"
    "<h4>🏦 渣打银行 Standard Chartered</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.sc.com/hk\" target=\"_blank\">https://www.sc.com/hk</a></li>"
    "<li>网上银行：<a href=\"https://www.sc.com/hk/zh/hk/\" target=\"_blank\">SC Online Banking</a></li>"
    "<li>保险服务：<a href=\"https://www.sc.com/hk/zh/hk/insurance/\" target=\"_blank\">保险服务</a></li>"
    "<li>客服电话：(+852) 2886 8868</li></ul>"
    "<h4>🏦 恒生银行 Hang Seng</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.hangseng.com\" target=\"_blank\">https://www.hangseng.com</a></li>"
    "<li>个人e-Banking：<a href=\"https://www.hangseng.com/hk/personal/e-banking\" target=\"_blank\">网上银行登录</a></li>"
    "<li>客服电话：(+852) 2822 0228</li></ul>"
    "<h4>🏦 中国银行（香港）BOCHK</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.bochk.com\" target=\"_blank\">https://www.bochk.com</a></li>"
    "<li>网上银行：<a href=\"https://www.bochk.com/digital/online-banking\" target=\"_blank\">网上银行登录</a></li>"
    "<li>客服电话：(+852) 3988 2388</li></ul>"
    "<h4>🏦 东亚银行 BEA</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.hkbea.com\" target=\"_blank\">https://www.hkbea.com</a></li>"
    "<li>网上银行：<a href=\"https://ebanking.hkbea.com\" target=\"_blank\">网上银行登录</a></li>"
    "<li>客服电话：(+852) 2211 1333</li></ul>"
    "<h4>🏦 星展银行 DBS</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.dbs.com.hk\" target=\"_blank\">https://www.dbs.com.hk</a></li>"
    "<li>网上银行：<a href=\"https://internet-banking.dbs.com.hk\" target=\"_blank\">DBS iBanking</a></li>"
    "<li>强积金：<a href=\"https://www.dbs.com.hk/zh-cn/pension/mpf\" target=\"_blank\">DBS MPF</a></li>"
    "<li>客服电话：(+852) 2290 8888</li></ul>"
    "<h4>🏦 花旗银行 Citibank</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.citibank.com.hk\" target=\"_blank\">https://www.citibank.com.hk</a></li>"
    "<li>网上银行：<a href=\"https://online.citibank.com.hk\" target=\"_blank\">Citi Online</a></li>"
    "<li>客服电话：(+852) 2860 0333</li></ul>"
    "<h4>🏦 华侨银行 OCBC</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.ocbc.com.hk\" target=\"_blank\">https://www.ocbc.com.hk</a></li>"
    "<li>网上银行：<a href=\"https://www.ocbc.com.hk/zh/personal/e-banking\" target=\"_blank\">网上银行</a></li>"
    "<li>客服电话：(+852) 2232 2333</li></ul>"
    "<h4>🏦 中国工商银行（亚洲）ICBC Asia</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://www.icbc.com.hk\" target=\"_blank\">https://www.icbc.com.hk</a></li>"
    "<li>网上银行：<a href=\"https://mybank.icbc.com.cn\" target=\"_blank\">网上银行登录</a></li>"
    "<li>客服电话：(+852) 2189 5588</li></ul>"
    "<h4>🏦 招商银行（香港）CMB HK</h4>"
    "<ul>"
    "<li>官网：<a href=\"https://hk.cmbchina.com\" target=\"_blank\">https://hk.cmbchina.com</a></li>"
    "<li>网上银行：<a href=\"https://www.cmbchina.com/cmbpb_v2/pab/\" target=\"_blank\">个人银行登录</a></li>"
    "<li>客服电话：(+852) 3118 1333</li></ul>"
    "<h3>💡 IFA银行服务提示</h3>"
    "<ul>"
    "<li><strong>FPS转数快：</strong>大部分香港银行支持FPS转数快，24小时即时转账，客户缴付保费非常便捷</li>"
    "<li><strong>网上银行缴费：</strong>大多数银行支持网上银行缴付保费，输入保险公司账户号码即可</li>"
    "<li><strong>柜台缴费：</strong>如客户不便电子转账，可前往银行柜台以现金或支票缴付</li>"
    "<li><strong>自动扣账：</strong>建议客户设置自动扣账（DDA）缴纳续期保费，避免断保</li>"
    "<li><strong>跨行转账：</strong>FPS转数快支持跨行实时转账，免手续费</li></ul>"
    "<h3>⚠️ 注意事项</h3>"
    "<ul>"
    "<li>以支票缴付保费时，抬头人应注明保险公司全称</li>"
    "<li>客户缴付后请保留转账截图或收据，作为付款凭证</li>"
    "<li>部分保险公司对现金缴付有上限规定，超出部分须以转账方式</li>"
    "<li>建议客户开通网上银行方便随时查看转账记录</li></ul>"
    "<p style=\"color:#888;font-size:12px;margin-top:30px;\">* 以上信息整理自各银行官方公开渠道，具体服务内容请以各银行官网最新公布为准。如有出入请以银行官方热线确认为准。</p>' }"
)

# Use bytes approach for precise replacement
with open('materials_content.js', 'rb') as f:
    raw = f.read()

# The exact pattern (bytes): </p>' } + newline + spaces + ] + ...
old_pattern = (
    b"</p>' }\n"
    b"      ]\n"
    b"    },\n"
    b"    {\n"
    b"      id: 'content06'"
)

new_pattern = (
    b"</p>' },\n"
    b"        " + new_entry.encode('utf-8') + b",\n"
    b"      ]\n"
    b"    },\n"
    b"    {\n"
    b"      id: 'content06'"
)

if old_pattern in raw:
    updated_raw = raw.replace(old_pattern, new_pattern, 1)
    with open('materials_content.js', 'wb') as f:
        f.write(updated_raw)
    print("SUCCESS! content05d inserted (byte approach)")
    print("New file size:", len(updated_raw))
else:
    print("ERROR: pattern not found in binary content")
    # Debug: find content05c ending
    idx = raw.find(b"Train On Top")
    if idx >= 0:
        print("Found Train On Top at", idx)
        print("Next 200 bytes:", repr(raw[idx+100:idx+200]))
