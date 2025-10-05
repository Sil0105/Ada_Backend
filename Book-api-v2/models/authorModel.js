import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, '../data/authors.json');

export const authorModel = {
  readAuthors: () => JSON.parse(fs.readFileSync(filePath)),
  writeAuthors: (authors) => fs.writeFileSync(filePath, JSON.stringify(authors, null, 2))
};