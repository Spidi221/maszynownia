const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'src', 'assets', 'gallery');
const outputDir = path.join(__dirname, '..', 'src', 'assets', 'gallery-webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
  try {
    const files = fs.readdirSync(sourceDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file)
    );

    console.log(`Found ${imageFiles.length} images to optimize...`);

    for (const file of imageFiles) {
      const inputPath = path.join(sourceDir, file);
      const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = path.join(outputDir, outputFileName);

      console.log(`Converting ${file} to WebP...`);

      await sharp(inputPath)
        .webp({ 
          quality: 85,
          effort: 6
        })
        .toFile(outputPath);

      // Get file sizes for comparison
      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);

      console.log(`✓ ${file}: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% saved)`);
    }

    console.log('\n🎉 Image optimization complete!');
    console.log(`✓ Optimized images saved to: ${outputDir}`);
    
    // Calculate total savings
    const originalTotal = getTotalSize(sourceDir);
    const optimizedTotal = getTotalSize(outputDir);
    const totalSavings = ((originalTotal - optimizedTotal) / originalTotal * 100).toFixed(1);
    
    console.log(`\n📊 Total size reduction:`);
    console.log(`   Before: ${formatBytes(originalTotal)}`);
    console.log(`   After:  ${formatBytes(optimizedTotal)}`);
    console.log(`   Saved:  ${formatBytes(originalTotal - optimizedTotal)} (${totalSavings}%)`);

  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function getTotalSize(directory) {
  let totalSize = 0;
  const files = fs.readdirSync(directory);
  
  for (const file of files) {
    const filePath = path.join(directory, file);
    const stats = fs.statSync(filePath);
    if (stats.isFile()) {
      totalSize += stats.size;
    }
  }
  
  return totalSize;
}

// Also optimize other assets (logos, trainer photos)
async function optimizeOtherAssets() {
  const assetsDir = path.join(__dirname, '..', 'src', 'assets');
  const files = [
    'logo-ems.png',
    'logo-ems-new.png', 
    'logo-strefa.png',
    'logo-strefa-new.png',
    'klaudia-kolodziejska.jpg'
  ];

  for (const file of files) {
    const inputPath = path.join(assetsDir, file);
    if (fs.existsSync(inputPath)) {
      const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = path.join(assetsDir, outputFileName);

      await sharp(inputPath)
        .webp({ quality: 90 }) // Higher quality for logos
        .toFile(outputPath);

      const originalSize = fs.statSync(inputPath).size;
      const optimizedSize = fs.statSync(outputPath).size;
      const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
      
      console.log(`✓ ${file}: ${formatBytes(originalSize)} → ${formatBytes(optimizedSize)} (${savings}% saved)`);
    }
  }
}

// Run optimization
console.log('🚀 Starting image optimization...');
optimizeImages().then(() => {
  console.log('\n📸 Optimizing other assets...');
  return optimizeOtherAssets();
}).then(() => {
  console.log('\n✅ All images optimized successfully!');
}).catch(console.error);