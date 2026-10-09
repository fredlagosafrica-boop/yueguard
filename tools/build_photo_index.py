#!/usr/bin/env python3
"""
build_photo_index.py — 扫描 R2 photos/ 目录，聚合所有 meta.json → 生成 _index.json

用法：
    python3 build_photo_index.py            # 扫描并上传 _index.json
    python3 build_photo_index.py --dry-run  # 只生成不上传
    python3 build_photo_index.py --local    # 从本地测试（默认扫描 R2）

功能：
- 递归扫描 R2 photos/YYYY-MM/YYYY-MM-DD_类目/meta.json
- 聚合为顶层 _index.json（album 列表）
- 上传到 R2 photos/_index.json
"""

import os
import sys
import json
import argparse
import subprocess
from pathlib import Path

RCLONE = os.path.expanduser('~/bin/rclone')
R2_REMOTE = 'r2yueguard:yueguard/photos'
PUBLIC_BASE = 'https://pub-f29217f852fa48bc815f42ffe1af9244.r2.dev/photos'
LOCAL_FALLBACK = '/home/lenovo12348/.openclaw/workspace/yueguard/photos'


def list_albums_r2():
    """列出 R2 上所有 meta.json 路径"""
    # rclone lsjson 输出 JSON 数组（不是单行 JSON）
    cmd = [RCLONE, 'lsjson', '-R', '--files-only', R2_REMOTE]
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        print(f"❌ rclone lsjson 失败: {result.stderr}")
        return []
    
    albums = []
    try:
        entries = json.loads(result.stdout)
    except json.JSONDecodeError as e:
        print(f"❌ 解析 lsjson 失败: {e}")
        return []
    
    for entry in entries:
        if entry.get('Name', '').endswith('meta.json'):
            # Path 形如 "2026-10/2026-10-02_培训活动/meta.json"
            albums.append(entry['Path'])
    return sorted(albums)


def fetch_meta(album_path):
    """从 R2 拉取 meta.json 内容"""
    # R2 接受中文路径，但用 urllib 编码后会 403
    # 用 curl 直接拉（验证过 curl 原始中文 200 OK）
    import subprocess
    url = f"{PUBLIC_BASE}/{album_path}"
    try:
        result = subprocess.run(
            ['curl', '-s', '--max-time', '10', url],
            capture_output=True, text=True
        )
        if result.returncode != 0 or not result.stdout:
            print(f"⚠️ curl 拉取 {url} 失败 (rc={result.returncode})")
            return None
        return json.loads(result.stdout)
    except Exception as e:
        print(f"⚠️ 拉取 {url} 失败: {e}")
        return None


def build_index():
    print("🔍 扫描 R2 photos/ 目录...")
    album_paths = list_albums_r2()
    print(f"📦 找到 {len(album_paths)} 个相册")
    
    albums = []
    for path in album_paths:
        meta = fetch_meta(path)
        if not meta:
            continue
        
        # 构造 album 条目（精简版，省体积）
        # path 形如 "2026-10/2026-10-02_培训活动"
        parts = path.split('/')
        if len(parts) < 2:
            continue
        yyyy_mm = parts[0]
        folder = parts[1]
        
        album = {
            "id": folder,
            "title": meta.get("title", folder),
            "date": meta.get("date", ""),
            "category": meta.get("category", ""),
            "year_month": yyyy_mm,
            "count": meta.get("count", 0),
            "cover": meta.get("cover", ""),
            "description": meta.get("description", ""),
            "meta_url": f"{PUBLIC_BASE}/{path}/meta.json",
            # 缩略图列表（避免打开相册时再拉 meta）
            "photos": meta.get("photos", []),
        }
        albums.append(album)
        print(f"  ✅ {album['date']} · {album['category']} · {album['title']} ({album['count']} 张)")
    
    # 按日期倒序
    albums.sort(key=lambda a: a.get('date', ''), reverse=True)
    return albums


def upload_index(albums, dry_run=False):
    index = {
        "version": 1,
        "updated": __import__('datetime').datetime.now().isoformat(),
        "count": len(albums),
        "albums": albums,
    }
    
    # 本地临时文件
    work = Path(f"/tmp/photo_index_{__import__('datetime').datetime.now().strftime('%Y%m%d_%H%M%S')}.json")
    with open(work, 'w', encoding='utf-8') as f:
        json.dump(index, f, ensure_ascii=False, indent=2)
    
    print(f"\n📄 生成 _index.json: {work}")
    print(f"   大小: {work.stat().st_size // 1024} KB")
    print(f"   相册数: {len(albums)}")
    
    if dry_run:
        print(f"\n[DRY-RUN] 应上传到: {R2_REMOTE}/_index.json")
        return
    
    # 上传
    cmd = [RCLONE, 'copyto', str(work), f"{R2_REMOTE}/_index.json"]
    print(f"\n🚀 上传: {' '.join(cmd)}")
    result = subprocess.run(cmd)
    if result.returncode == 0:
        print(f"\n✅ 完成！公开 URL:")
        print(f"   {PUBLIC_BASE}/_index.json")
    else:
        print(f"\n❌ 上传失败")


def main():
    parser = argparse.ArgumentParser(description='构建团队照片库 _index.json')
    parser.add_argument('--dry-run', action='store_true', help='只生成不上传')
    args = parser.parse_args()
    
    albums = build_index()
    if not albums:
        print("❌ 没找到任何相册 meta.json")
        sys.exit(1)
    
    upload_index(albums, dry_run=args.dry_run)


if __name__ == '__main__':
    main()
