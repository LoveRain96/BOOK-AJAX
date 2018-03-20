const express                  = require('express');
const router                   = express.Router();
const BookController           = require('../app/controllers/api/book-controller');
const check                    = require('../app/middleware');
const IdSearchCondition        = require('../src/search-services/id-search-condition');
const UndeletedSearchCondition = require('../src/search-services/undeleted-search-condition');
const SearchAdvance            = require('../src/search-services/advance-search-condition');
const SearchBasic              = require('../src/search-services/keyword-search-condition');

let bookController = new BookController();

router.get('/books', function (req, res, next) {
    req.condition = new UndeletedSearchCondition();
    next();
}, bookController.search);

router.get('/book/:id',function (req, res, next) {
    req.condition = new IdSearchCondition(req.params.id);
    next()
}, bookController.search);

router.post('/book', check.bookRequest, check.checkNull, check.checkLength, bookController.createBook);

router.put('/book/:id', check.bookRequest, check.checkNull, check.checkLength, bookController.editBook);

router.delete('/book/:id', bookController.deleteBook);

router.get('/search-advance', function (req, res, next ) {
    req.condition = new SearchAdvance(req.query.title, req.query.author, req.query.publisher)
    next();
}, bookController.search);

router.get('/search-basic', function (req, res, next) {
    req.condition = new SearchBasic(req.query.keyword);
    next();
}, bookController.search);

module.exports = router;
