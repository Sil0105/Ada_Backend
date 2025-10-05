import { authorModel } from '../models/authorModel.js';

export const authorController = {
  getAuthors: () => {
    const authors = authorModel.readAuthors();
    return JSON.stringify({ status: 'ok', data: authors });
  },
  findAuthors: (query) => {
    const authors = authorModel.readAuthors();
    const results = authors.filter(a =>
      (query.name && a.name.toLowerCase().includes(query.name.toLowerCase())) ||
      (query.nationality && a.nationality.toLowerCase() === query.nationality.toLowerCase())
    );
    return JSON.stringify({ status: 'ok', data: results });
  },
  addAuthor: (newAuthor) => {
    const authors = authorModel.readAuthors();
    const maxId = authors.length > 0 ? Math.max(...authors.map(a => a.id)) : 0;
    newAuthor.id = maxId + 1;
    authors.push(newAuthor);
    authorModel.writeAuthors(authors);
    return JSON.stringify({ status: 'ok', data: newAuthor });
  }
};