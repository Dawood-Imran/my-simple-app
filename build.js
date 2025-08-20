import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

console.log('Build complete');
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

fs.copyFileSync('index.js', path.join(distDir, 'index.js'));
fs.copyFileSync('package.json', path.join(distDir, 'package.json'));