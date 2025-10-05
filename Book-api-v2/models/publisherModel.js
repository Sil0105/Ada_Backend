import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.join(__dirname, '../data/publishers.json');

export const publisherModel = {
  readPublishers: () => JSON.parse(fs.readFileSync(filePath)),
  writePublishers: (publishers) => fs.writeFileSync(filePath, JSON.stringify(publishers, null, 2))
};