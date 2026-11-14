#!/usr/bin/env python3
import html

with open('referral_content.js', 'r', encoding='utf-8', errors='replace') as f:
    content = f.read()

# Find ref-4-2-3 position
idx43 = content.find("'ref-4-2-3', name:")
print('ref-4-2-3 at:', idx43)

# Decode HTML entities to find actual positions
decoded = html.unescape(content)
idx43_dec = decoded.find("'ref-4-2-3', name:")
print('ref-4-2-3 decoded at:', idx43_dec)

# Find ref-4-2-2-4 in decoded
idx424_dec = decoded.find("'ref-4-2-2-4', name:")
print('ref-4-2-2-4 decoded at:', idx424_dec)

# The closing pattern for children array should be ]},
# after the last item
# Find the last '}' before ref-4-2-3
print('Last 200 chars before ref-4-2-3:')
print(repr(decoded[idx43_dec-200:idx43_dec]))