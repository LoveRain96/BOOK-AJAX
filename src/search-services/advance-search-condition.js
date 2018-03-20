class AdvancedSearchCondition {

    /**
     *
     * @param {string} title
     * @param {string} author
     * @param {int} publisher
     */
    constructor (title, author, publisher){
        this.title = title;
        this.author = author;
        this.publisher = publisher;
    }

    /**
     *
     * @param sqlQuery
     * @return {Book[]}
     */
    describe(sqlQuery) {
        return sqlQuery
            .where('title', 'like', '%' + this.title + '%')
            .where('author', 'like', '%' + this.author + '%')
            .where('publishers.name', 'like', '%' + this.publisher + '%')
            .where({'books.deleted_at': null})
    }
}

module.exports = AdvancedSearchCondition;
