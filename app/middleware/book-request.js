const makeRequest = require('../../src/book/book-factory');

module.exports = function (req, res, next) {
    let factory = new makeRequest();
    factory.makeFromRequest(req.body).then((book) => {
        book.setId(req.body.id);
        req.book = book;
        next();
    });
};



