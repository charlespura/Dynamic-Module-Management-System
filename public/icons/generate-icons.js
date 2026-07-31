const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// If canvas is not installed, install it:
// npm install canvas

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const colors = ['#667eea', '#764ba2'];
const outputDir = path.join(__dirname, 'public', 'icons');

// Create directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

function generateIcon(size) {
    const canvas = createCanvas(size, size);
    const ctx = canvas.getContext('2d');

    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, size, size);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // Rounded corners
    const radius = size * 0.2;
    ctx.beginPath();
    ctx.moveTo(radius, 0);
    ctx.lineTo(size - radius, 0);
    ctx.quadraticCurveTo(size, 0, size, radius);
    ctx.lineTo(size, size - radius);
    ctx.quadraticCurveTo(size, size, size - radius, size);
    ctx.lineTo(radius, size);
    ctx.quadraticCurveTo(0, size, 0, size - radius);
    ctx.lineTo(0, radius);
    ctx.quadraticCurveTo(0, 0, radius, 0);
    ctx.closePath();
    ctx.clip();

    // Draw icon (cube)
    const iconSize = size * 0.5;
    const x = (size - iconSize) / 2;
    const y = (size - iconSize) / 2;

    // White cube
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    ctx.shadowBlur = 10;

    // Draw a simple cube/box icon
    ctx.fillRect(x, y + iconSize * 0.2, iconSize, iconSize * 0.6);
    ctx.fillRect(x + iconSize * 0.2, y, iconSize * 0.6, iconSize * 0.6);

    // Small square inside
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(x + iconSize * 0.35, y + iconSize * 0.35, iconSize * 0.3, iconSize * 0.3);

    // Text "DMS" at bottom
    ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.font = `${size * 0.12}px Arial`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText('DMS', size / 2, size - size * 0.08);

    // Save to file
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(outputDir, `icon-${size}x${size}.png`), buffer);
    console.log(`✅ Generated icon-${size}x${size}.png`);
}

console.log('🎨 Generating PWA icons...');
sizes.forEach(generateIcon);
console.log('✅ All icons generated successfully!');