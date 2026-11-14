#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""恢复 ifa_content.js 中缺失的 c1_1 ~ c1_4"""
import re

BACKUP = '/home/lenovo12348/.openclaw/workspace/yueguard/backup/yueguard_backup_20260523_ifa_content.md'
TARGET = '/home/lenovo12348/.openclaw/workspace/yueguard/ifa_content.js'

def js_escape(text):
    return text.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n').replace('\r', '')

def main():
    with open(BACKUP, 'r', encoding='utf-8') as f:
        raw = f.read()

    # Extract the text between "children: [" and "},\n{ id: 'c1_5'"
    # The backup has entries like: "1.x.x TitleBody' },\n" or "1.x.x TitleBody' },\n{"
    
    # Find the range for c1_1 through c1_4
    c1_5_marker = "},\\n{ id: 'c1_5'"
    c1_5_pos = raw.find(c1_5_marker)
    
    # The children block starts after "children: ["
    children_start = raw.find("children: [")
    block_end = c1_5_pos
    
    children_block = raw[children_start:block_end]
    # Remove "children: [\n"
    children_block = re.sub(r"^children: \[\n?", "", children_block, count=1)
    
    # Split into individual child entries
    # Each entry ends with "' },\n" followed by either more entries or end
    # Pattern: number \s+ title_body ' },
    entries = re.split(r"',\n", children_block)
    
    print(f"Found {len(entries)} raw entries")
    
    # Now group by category
    # Pattern for entry start: "1.x.x Title" (number.space.space, space, then title chars)
    cats = {}
    for entry in entries:
        entry = entry.strip()
        if not entry:
            continue
        # Find the section number at start
        m = re.match(r"^(1\.\d+)\s+(.+)$", entry, re.DOTALL)
        if not m:
            print(f"  SKIP (no match): {entry[:50]!r}")
            continue
        sec_num = m.group(1)
        body = m.group(2)
        # Remove trailing ' }, or ' }
        body = re.sub(r"',?\s*$", "", body)
        
        cat_key = sec_num.split('.')[1]  # '1' from '1.1.1'
        cat_id = f'c1_{cat_key}'
        
        # Extract title: first line is title, rest is body
        lines = body.split('\n')
        title = lines[0]
        content_body = '\n'.join(lines[1:]) if len(lines) > 1 else ''
        
        if cat_id not in cats:
            cats[cat_id] = []
        cats[cat_id].append((sec_num, title, content_body))
    
    for cat_id, items in sorted(cats.items()):
        print(f"  {cat_id}: {len(items)} items - {[x[0] for x in items]}")
    
    # Read target
    with open(TARGET, 'r', encoding='utf-8') as f:
        target = f.read()
    
    # Find insertion point: before c1_5
    p5 = target.find("      id: 'c1_5'")
    if p5 == -1:
        print("ERROR: Cannot find c1_5!")
        return
    
    def build_cat_block(cat_id, cat_name, items):
        child_blocks = []
        for sec_num, title, body in items:
            sec_js = sec_num.replace('.', '_')
            article_id = f'ifa_{sec_js}'
            paragraphs = '<br>'.join(p.strip() for p in body.split('\n') if p.strip())
            if not paragraphs:
                paragraphs = '<br>'.join(p.strip() for p in body.split('\n') if p.strip())
            escaped_body = js_escape(paragraphs)
            escaped_title = js_escape(title)
            child_blocks.append(
                f"        {{ id: '{article_id}', title: '{escaped_title}', "
                f"content: '<h2>{escaped_title}</h2><p>{escaped_body}</p>' }}"
            )
        children_str = ',\n'.join(child_blocks)
        return f"""    {{
      id: '{cat_id}', name: '{cat_name}',
      children: [
{children_str}
      ]
    }}"""
    
    # Build category names (extracted from backup)
    cat_names = {
        'c1_1': '1.1 新手必做',
        'c1_2': '1.2 入职流程',
        'c1_3': '1.3 岗前培训（4步）',
        'c1_4': '1.4 签单指引',
    }
    
    # Insert in order c1_1, c1_2, c1_3, c1_4
    new_blocks = []
    for cat_num in ['1', '2', '3', '4']:
        cat_id = f'c1_{cat_num}'
        if cat_id in cats:
            block = build_cat_block(cat_id, cat_names[cat_id], cats[cat_id])
            new_blocks.append(block)
            print(f"Built {cat_id}: {len(cats[cat_id])} articles")
        else:
            print(f"WARNING: {cat_id} not found!")
    
    new_blocks_str = ',\n'.join(new_blocks) + ',\n'
    
    new_target = target[:p5] + new_blocks_str + target[p5:]
    
    with open(TARGET, 'w', encoding='utf-8') as f:
        f.write(new_target)
    
    print(f"\nDONE! Inserted c1_1~c1_4 before c1_5")
    
    # Verify
    with open(TARGET, 'r', encoding='utf-8') as f:
        verify = f.read()
    count = len(re.findall(r"id: 'c1_", verify))
    print(f"Total c1_X categories now: {count}")
    
    # Syntax check
    import subprocess
    result = subprocess.run(['node', '--check', TARGET], capture_output=True, text=True)
    if result.returncode == 0:
        print("✅ JavaScript syntax OK")
    else:
        print(f"❌ Syntax error: {result.stderr[:200]}")

if __name__ == '__main__':
    main()
