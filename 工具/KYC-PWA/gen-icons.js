const Jimp = require('jimp');

async function setPixel(img, x, y, color) {
  if (x >= 0 && x < img.bitmap.width && y >= 0 && y < img.bitmap.height) {
    img.setPixelColor(color, x, y);
  }
}

async function createIcon(size) {
  const img = new Jimp(size, size, 0xFF0D1117);
  const bg = 0xFF1F6FEB;
  const kColor = 0xFF58A6FF;
  const yColor = 0xFFD29922;
  const cColor = 0xFF3FB950;
  const r = Math.floor(size / 8);

  // Draw rounded rect
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let inRect = true;
      // Check corners
      const corners = [
        [r, r], [size - r - 1, r],
        [r, size - r - 1], [size - r - 1, size - r - 1]
      ];
      for (const [cx, cy] of corners) {
        const dx = x - cx, dy = y - cy;
        if (dx * dx + dy * dy > r * r) {
          if ((x < r && y < r) || (x >= size - r && y < r) ||
              (x < r && y >= size - r) || (x >= size - r && y >= size - r)) {
            inRect = false;
          }
        }
      }
      if (inRect) img.setPixelColor(bg, x, y);
    }
  }

  const margin = Math.floor(size / 5);
  const inner = size - 2 * margin;
  const part = Math.floor(inner / 3);
  const barW = Math.max(2, Math.floor(size / 16));
  const kh = inner;

  // K: vertical bar + two diagonals
  const kx = margin + Math.floor(part / 3);
  const kyStart = margin;
  const kyEnd = size - margin;
  for (let dy = 0; dy < kh; dy++) {
    for (let dw = 0; dw < barW; dw++) {
      await setPixel(img, kx + dw, kyStart + dy, kColor);
    }
  }
  for (let i = 0; i < Math.floor(kh / 2); i++) {
    await setPixel(img, kx + barW + i, kyStart + i, kColor);
    await setPixel(img, kx + barW + i, kyEnd - 1 - i, kColor);
  }

  // Y: two diagonals meeting
  const yx = margin + part + Math.floor(part / 2);
  for (let i = 0; i < Math.floor(kh / 2); i++) {
    await setPixel(img, yx - i, kyStart + i, yColor);
    await setPixel(img, yx + i, kyStart + i, yColor);
  }
  for (let i = 0; i < Math.floor(kh / 2); i++) {
    for (let dw = 0; dw < barW; dw++) {
      await setPixel(img, yx - Math.floor(barW / 2) + dw, Math.floor(kyStart + kh / 2 + i), yColor);
    }
  }

  // C: open arc
  const cx_x = margin + 2 * part + Math.floor(part / 3);
  const centerY = kyStart + Math.floor(kh / 2);
  const radius = Math.floor(kh / 2.5);
  for (let angle = -70; angle <= 70; angle++) {
    const rad = angle * Math.PI / 180;
    const px = Math.round(cx_x - radius * Math.cos(rad));
    const py = Math.round(centerY + radius * Math.sin(rad));
    for (let dw = 0; dw < barW; dw++) {
      for (let dh = 0; dh < barW; dh++) {
        await setPixel(img, px + dw - Math.floor(barW / 2), py + dh - Math.floor(barW / 2), cColor);
      }
    }
  }
  for (let angle = 110; angle <= 250; angle++) {
    const rad = angle * Math.PI / 180;
    const px = Math.round(cx_x - radius * Math.cos(rad));
    const py = Math.round(centerY + radius * Math.sin(rad));
    for (let dw = 0; dw < barW; dw++) {
      for (let dh = 0; dh < barW; dh++) {
        await setPixel(img, px + dw - Math.floor(barW / 2), py + dh - Math.floor(barW / 2), cColor);
      }
    }
  }

  return img;
}

(async () => {
  const icon192 = await createIcon(192);
  await icon192.writeAsync('/mnt/c/Users/Lenovo/Desktop/恒玥内容库/工具/KYC-PWA/icons/icon-192.png');
  console.log('Created icon-192.png');

  const icon512 = await createIcon(512);
  await icon512.writeAsync('/mnt/c/Users/Lenovo/Desktop/恒玥内容库/工具/KYC-PWA/icons/icon-512.png');
  console.log('Created icon-512.png');
})();
