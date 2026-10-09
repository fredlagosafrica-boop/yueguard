#!/usr/bin/env python3
"""
upload_photos.py — 团队照片库批量上传工具

用法：
    python3 upload_photos.py <source_dir> --date 2026-10-08 --category "培训活动" [--title "..."] [--desc "..."]

功能：
- 自动移除所有 EXIF（隐私保护）
- 生成 400×400 jpg 缩略图（~50KB）
- 按目录规则上传到 R2：yueguard:photos/YYYY-MM/YYYY-MM-DD_类目/
- 生成 meta.json（标题/日期/描述/数量/封面）

参数：
    source_dir              源文件夹（必需）
    --date YYYY-MM-DD       活动日期（必需）
    --category 名称          10 个类目之一（必需）
    --title "..."           相册标题（可选，默认"YYYY-MM-DD 类目"）
    --desc "..."            描述（可选）

示例：
    python3 upload_photos.py /mnt/c/Users/Lenovo/Pictures/2026-10-08-tuanpei \\
        --date 2026-10-08 --category "培训活动" \\
        --title "AI 大模型应用培训" --desc "2026 内部培训第三期"
"""

import os
import sys
import json
import argparse
import subprocess
import shutil
from pathlib import Path
from PIL import Image
from datetime import datetime


# === 配置 ===
THUMB_SIZE = 400  # 缩略图边长
THUMB_QUALITY = 80  # jpg 质量
R2_REMOTE = "r2yueguard:yueguard/photos"  # R2 远程路径
SUPPORTED_EXT = {'.jpg', '.jpeg', '.png', '.webp', '.heic', '.tiff'}

CATEGORIES = [
    "培训活动", "团队月会", "客户答谢宴", "产品发布", "公司年会",
    "新人入职", "业务拓展", "荣誉资质", "公益活动", "客户签约"
]


def is_valid_date(s):
    try:
        datetime.strptime(s, "%Y-%m-%d")
        return True
    except ValueError:
        return False


def get_image_files(source_dir):
    """获取源文件夹所有图片（按文件名排序）"""
    files = []
    for root, _, filenames in os.walk(source_dir):
        for f in filenames:
            if Path(f).suffix.lower() in SUPPORTED_EXT:
                files.append(os.path.join(root, f))
    files.sort()
    return files


def remove_exif(image_path):
    """移除 EXIF 信息：保存为新 jpg（无 EXIF）"""
    img = Image.open(image_path)
    # 转 RGB（PNG/RGBA 也兼容）
    if img.mode in ('RGBA', 'P', 'LA'):
        background = Image.new('RGB', img.size, (255, 255, 255))
        if img.mode == 'P':
            img = img.convert('RGBA')
        background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
        img = background
    elif img.mode != 'RGB':
        img = img.convert('RGB')
    # 不带 EXIF 输出
    img.save(image_path, 'JPEG', quality=92, optimize=True)


def make_thumb(image_path, thumb_path, size=THUMB_SIZE):
    """生成 400×400 缩略图（中心裁剪）"""
    img = Image.open(image_path)
    # 转 RGB
    if img.mode != 'RGB':
        img = img.convert('RGB')

    w, h = img.size
    # 中心裁剪到正方形
    min_dim = min(w, h)
    left = (w - min_dim) // 2
    top = (h - min_dim) // 2
    img_cropped = img.crop((left, top, left + min_dim, top + min_dim))
    img_cropped = img_cropped.resize((size, size), Image.LANCZOS)
    img_cropped.save(thumb_path, 'JPEG', quality=THUMB_QUALITY, optimize=True)


def rclone_sync(local_dir, remote_dir, dry_run=False):
    """rclone 同步本地到 R2"""
    cmd = [
        os.path.expanduser('~/bin/rclone'), 'sync',
        local_dir, remote_dir,
        '--progress',
        '-v',
    ]
    if dry_run:
        cmd.append('--dry-run')

    print(f"\n{'[DRY-RUN] ' if dry_run else ''}执行: {' '.join(cmd)}")
    result = subprocess.run(cmd, shell=False)
    return result.returncode == 0


def main():
    parser = argparse.ArgumentParser(
        description='上传团队照片到 R2',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=__doc__,
    )
    parser.add_argument('source_dir', help='源文件夹路径')
    parser.add_argument('--date', required=True, help='活动日期 YYYY-MM-DD')
    parser.add_argument('--category', required=True, choices=CATEGORIES, help='类目')
    parser.add_argument('--title', help='相册标题（默认：日期+类目）')
    parser.add_argument('--desc', default='', help='描述')
    parser.add_argument('--dry-run', action='store_true', help='只生成不上传')
    parser.add_argument('--skip-exif-remove', action='store_true', help='跳过 EXIF 移除')
    parser.add_argument('--skip-thumb', action='store_true', help='跳过缩略图生成')

    args = parser.parse_args()

    # 校验
    if not is_valid_date(args.date):
        print(f"❌ 日期格式错误: {args.date}（应为 YYYY-MM-DD）")
        sys.exit(1)

    if not os.path.isdir(args.source_dir):
        print(f"❌ 源文件夹不存在: {args.source_dir}")
        sys.exit(1)

    # 计算路径
    yyyy_mm = args.date[:7]  # 2026-10
    folder_name = f"{args.date}_{args.category}"
    r2_remote_base = f"{R2_REMOTE}/{yyyy_mm}/{folder_name}"

    title = args.title or f"{args.date} {args.category}"

    print(f"\n{'='*60}")
    print(f"📷 团队照片库上传")
    print(f"{'='*60}")
    print(f"  源文件夹: {args.source_dir}")
    print(f"  活动日期: {args.date}")
    print(f"  类目:     {args.category}")
    print(f"  标题:     {title}")
    print(f"  描述:     {args.desc or '(无)'}")
    print(f"  目标:     {r2_remote_base}")
    print(f"  模式:     {'DRY-RUN' if args.dry_run else '正式上传'}")
    print()

    # 获取图片文件
    image_files = get_image_files(args.source_dir)
    if not image_files:
        print("❌ 未找到任何支持的图片（jpg/png/webp/heic/tiff）")
        sys.exit(1)

    print(f"📸 找到 {len(image_files)} 张图片")

    # 创建临时工作目录
    work_dir = Path(f"/tmp/photo_upload_{datetime.now().strftime('%Y%m%d_%H%M%S')}")
    work_dir.mkdir(parents=True)
    full_dir = work_dir / 'full'
    thumb_dir = work_dir / 'thumb'
    full_dir.mkdir()
    thumb_dir.mkdir()

    # 处理每张图
    print(f"\n🔧 处理中...")
    manifest = []
    for idx, src_path in enumerate(image_files, 1):
        filename = f"{idx:03d}.jpg"
        full_dest = full_dir / filename
        thumb_dest = thumb_dir / filename

        # EXIF 移除（除非跳过 / dry-run）
        if args.dry_run:
            shutil.copy2(src_path, full_dest)
        elif args.skip_exif_remove:
            shutil.copy2(src_path, full_dest)
        else:
            remove_exif(src_path)
            shutil.move(src_path, full_dest)

        # 缩略图
        if not args.skip_thumb:
            make_thumb(str(full_dest), str(thumb_dest))

        size_full = full_dest.stat().st_size
        size_thumb = thumb_dest.stat().st_size if thumb_dest.exists() else 0
        manifest.append({
            "id": filename.replace('.jpg', ''),
            "name": Path(src_path).stem,
            "full_url": f"https://pub-f29217f852fa48bc815f42ffe1af9244.r2.dev/photos/{yyyy_mm}/{folder_name}/full/{filename}",
            "thumb_url": f"https://pub-f29217f852fa48bc815f42ffe1af9244.r2.dev/photos/{yyyy_mm}/{folder_name}/thumb/{filename}",
            "size_full": size_full,
            "size_thumb": size_thumb,
        })

        if idx % 10 == 0 or idx == len(image_files):
            print(f"  [{idx}/{len(image_files)}] {filename} (full={size_full//1024}KB, thumb={size_thumb//1024}KB)")

    # 生成 meta.json
    meta = {
        "title": title,
        "description": args.desc,
        "date": args.date,
        "category": args.category,
        "year_month": yyyy_mm,
        "count": len(image_files),
        "cover": manifest[0]['thumb_url'] if manifest else None,
        "photos": manifest,
        "upload_time": datetime.now().isoformat(),
    }
    meta_path = work_dir / 'meta.json'
    with open(meta_path, 'w', encoding='utf-8') as f:
        json.dump(meta, f, ensure_ascii=False, indent=2)

    # 计算总大小
    total_full = sum(m['size_full'] for m in manifest)
    total_thumb = sum(m['size_thumb'] for m in manifest)
    print(f"\n📊 统计:")
    print(f"  原图:   {total_full//1024//1024} MB ({len(manifest)} 张)")
    print(f"  缩略图: {total_thumb//1024} KB")

    # 上传 R2
    print(f"\n{'🚀' if not args.dry_run else '🧪'} {'上传' if not args.dry_run else '模拟'} R2: {r2_remote_base}")
    rclone_sync(str(full_dir), f"{r2_remote_base}/full", dry_run=args.dry_run)
    rclone_sync(str(thumb_dir), f"{r2_remote_base}/thumb", dry_run=args.dry_run)
    if not args.dry_run:
        # 上传 meta.json
        cmd_meta = [
            os.path.expanduser('~/bin/rclone'), 'copyto',
            str(meta_path), f"{r2_remote_base}/meta.json",
        ]
        print(f"\n📋 上传 meta.json")
        subprocess.run(cmd_meta, shell=False)

    print(f"\n✅ 完成！")
    print(f"  工作目录（待清理）: {work_dir}")
    print(f"  R2 路径: {r2_remote_base}")
    print(f"  公开 URL: https://pub-f29217f852fa48bc815f42ffe1af9244.r2.dev/photos/{yyyy_mm}/{folder_name}/")


if __name__ == '__main__':
    main()
