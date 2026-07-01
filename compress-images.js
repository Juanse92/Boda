/**
 * compress-images.js
 * Convierte todas las imágenes del proyecto a WebP optimizado.
 * Uso: node compress-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, 'src', 'assets');

// Configuración por tipo de imagen
const CONFIGS = {
  // Fotos del carrusel preboda — se ven a ~400px alto máximo
  carousel: { width: 1400, height: 1000, quality: 78 },
  // Imágenes de fondo hero (CSS background-image) — pantalla completa
  hero: { width: 1920, height: 1280, quality: 75 },
  // Fotos de tarjetas y secciones — tamaño medio
  card: { width: 1000, height: 1000, quality: 80 },
  // Iconos PNG — mantener tamaño, solo comprimir
  icon: { width: null, height: null, quality: 85 },
};

// Mapeo de archivos a su tipo de config
const FILE_CONFIG_MAP = {
  '_A745258_Originalv3.jpg': 'hero',
  '_A745448_Originalv2.jpg': 'hero',
  '_A745266_Original.jpg':   'hero',
  'Kapikua.jpeg':             'card',
  'vetidoMujer.jpg':          'card',
  'trajeHombre.jpg':          'card',
};

const EXTENSIONS = ['.jpg', '.jpeg', '.png', '.JPEG', '.JPG'];

let processed = 0;
let skipped = 0;
let totalSavedKB = 0;

async function processFile(filePath) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath);

  if (!EXTENSIONS.includes(ext)) return;

  const webpPath = filePath.replace(/\.(jpg|jpeg|png|JPEG|JPG)$/i, '.webp');

  // No recomprimir si ya existe el WebP
  if (fs.existsSync(webpPath)) {
    skipped++;
    return;
  }

  // Determinar config
  let cfg;
  if (FILE_CONFIG_MAP[baseName]) {
    cfg = CONFIGS[FILE_CONFIG_MAP[baseName]];
  } else if (filePath.includes('Fotos Pre-Boda')) {
    cfg = CONFIGS.carousel;
  } else if (ext.toLowerCase() === '.png') {
    cfg = CONFIGS.icon;
  } else {
    cfg = CONFIGS.card;
  }

  try {
    let pipeline = sharp(filePath);

    if (cfg.width || cfg.height) {
      pipeline = pipeline.resize(cfg.width, cfg.height, {
        fit: 'inside',        // Nunca agranda, solo reduce
        withoutEnlargement: true,
      });
    }

    await pipeline.webp({ quality: cfg.quality }).toFile(webpPath);

    const originalKB = Math.round(fs.statSync(filePath).size / 1024);
    const newKB      = Math.round(fs.statSync(webpPath).size / 1024);
    const saved      = originalKB - newKB;
    totalSavedKB    += saved;
    processed++;

    const pct = Math.round((saved / originalKB) * 100);
    console.log(`✓  ${baseName.padEnd(50)} ${originalKB.toString().padStart(6)} KB → ${newKB.toString().padStart(5)} KB  (-${pct}%)`);
  } catch (err) {
    console.error(`✗  Error en ${baseName}: ${err.message}`);
  }
}

async function walkDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walkDir(fullPath);
    } else {
      await processFile(fullPath);
    }
  }
}

(async () => {
  console.log('🔧  Comprimiendo imágenes a WebP...\n');
  console.log('Archivo'.padEnd(52) + 'Original'.padStart(10) + '   Nuevo'.padStart(10) + '  Ahorro');
  console.log('-'.repeat(80));
  await walkDir(ASSETS_DIR);
  console.log('-'.repeat(80));
  console.log(`\n✅  ${processed} imágenes convertidas, ${skipped} ya existían.`);
  console.log(`💾  Espacio total ahorrado: ~${Math.round(totalSavedKB / 1024 * 10) / 10} MB\n`);
  if (processed > 0) {
    console.log('⚠️   Paso siguiente: actualizar las referencias en el código.');
    console.log('     Ejecuta: node update-image-refs.js');
  }
})();
