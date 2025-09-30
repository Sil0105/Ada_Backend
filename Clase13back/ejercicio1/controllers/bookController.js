const { getBookById } = require('../../models/bookModel');
const { formatBookResponse } = require('../../views/bookView');


const handleBookRequest = (bookId) => {
    const book = getBookById(bookId);
    return formatBookResponse(book);
};

module.exports = { handleBookRequest };