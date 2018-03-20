const Book              = require('./book');
const PublisherProvider = require('../publisher/publisher-provider');
const connection        = require('../../database/connection');
const Publisher         = require('../../src/publisher/publisher');

let publisherProvider = new PublisherProvider(connection);
class BookFactory{

    /**
     *
     * @param {Object} bookRaw
     * @return {Book}
     */
    makeFromDB(bookRaw) {
        let book  = new Book(bookRaw.title, bookRaw.author);
        book.setPrice(bookRaw.price);
        book.setId(bookRaw.id);
        let publisher = new Publisher (bookRaw.name);
        publisher.setAddress(bookRaw.address);
        publisher.setId(bookRaw.publisher_id);
        publisher.setPhone(bookRaw.phone);
        book.setPublisher(publisher);
        return book;
    }

    /**
     *
     * @param {Object}bookRaw
     * @return {Book}
     */
    makeFromRequest(bookRaw) {
        let book = new Book(bookRaw.title, bookRaw.author);
        book.setPrice(bookRaw.price);
        return publisherProvider.search(bookRaw.publisher_id)
            .then(result => {
                book.setPublisher(result);
                return book;
            })
    }
}

module.exports = BookFactory;

