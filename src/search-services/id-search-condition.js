class IdSearchCondition {

    constructor(bookId) {
        this.bookId = bookId;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        let bookId = this.bookId;
        return sqlQuery.where({'books.deleted_at': null, 'books.id': bookId})
    }
}

module.exports = IdSearchCondition;
