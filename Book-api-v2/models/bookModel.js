import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, '../data/books.json');

export const bookModel = {
  readBooks: () => JSON.parse(fs.readFileSync(filePath)),
  writeBooks: (books) => fs.writeFileSync(filePath, JSON.stringify(books, null, 2))
};