import { bookModel } from '../models/bookModel.js';

export const bookController = {
  getBooks: () => {
    const books = bookModel.readBooks();
    return JSON.stringify({ status: 'ok', data: books });
  },
  addBook: (newBook) => {
    const books = bookModel.readBooks();
    const maxId = books.length > 0 ? Math.max(...books.map(b => b.id)) : 0;
    newBook.id = maxId + 1;
    books.push(newBook);
    bookModel.writeBooks(books);
    return JSON.stringify({ status: 'ok', data: newBook });
  }
};
