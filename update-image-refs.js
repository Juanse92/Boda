/**
 * update-image-refs.js
 * Reemplaza todas las referencias a .jpg/.jpeg/.png por .webp
 * en los archivos del proyecto Angular.
 */

const fs = require('fs');
const path = require('path');

const FILES_TO_UPDATE = [
  'src/app/wedding/wedding.component.html',
  'src/app/wedding/wedding.component.scss',
  'src/app/landing/landing.component.html',
  'src/app/landing/landing.component.scss',
  'src/styles.scss',
  'src/assets/Fotos Pre-Boda/fotosPreboda.json',
];

// Regex que captura extensiones de imagen dentro de strings/urls
const IMG_REGEX = /\.(jpg|jpeg|png|JPEG|JPG)(\b|"|'|%22|\))/g;

let totalReplacements = 0;

for (const relPath of FILES_TO_UPDATE) {
  const fullPath = path.join(__dirname, relPath);
  if (!fs.existsSync(fullPath)) continue;

  const original = fs.readFileSync(fullPath, 'utf8');
  let count = 0;
  const updated = original.replace(IMG_REGEX, (match, ext, suffix) => {
    count++;
    return '.webp' + suffix;
  });

  if (count > 0) {
    fs.writeFileSync(fullPath, updated, 'utf8');
    console.log(`✓  ${relPath.padEnd(60)} ${count} reemplazos`);
    totalReplacements += count;
  } else {
    console.log(`—  ${relPath.padEnd(60)} sin cambios`);
  }
}

console.log(`\n✅  Total: ${totalReplacements} referencias actualizadas a .webp`);
