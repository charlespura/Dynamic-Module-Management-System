const fs = require('fs');
const path = require('path');

// SVG template for a simple icon
function createSVG(size) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect width="${size}" height="${size}" rx="${size * 0.2}" fill="url(#grad)"/>
        <rect x="${size * 0.15}" y="${size * 0.35}" width="${size * 0.7}" height="${size * 0.5}" rx="${size * 0.05}" fill="rgba(255,255,255,0.9)"/>
        <rect x="${size * 0.35}" y="${size * 0.15}" width="${size * 0.5}" height="${size * 0.5}" rx="${size * 0.05}" fill="rgba(255,255,255,0.9)"/>
        <rect x="${size * 0.4}" y="${size * 0.4}" width="${size * 0.2}" height="${size * 0.2}" rx="${size * 0.03}" fill="rgba(255,255,255,0.5)"/>
        <text x="${size / 2}" y="${size * 0.92}" font-family="Arial" font-size="${size * 0.12}" fill="rgba(255,255,255,0.7)" text-anchor="middle">DMS</text>
    </svg>`;
}

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const outputDir = path.join(__dirname, 'public', 'icons');

// Create directory
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

sizes.forEach(size => {
    const svg = createSVG(size);
    fs.writeFileSync(path.join(outputDir, `icon-${size}x${size}.png`), svg);
    console.log(`✅ Created icon-${size}x${size}.png (SVG placeholder)`);
});

console.log('✅ All placeholder icons created!');