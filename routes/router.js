const express                  = require('express');
const router                   = express.Router();
const BookController           = require('../app/controllers/book/book-controller');
const check                    = require('../app/middleware');
const IdSearchCondition        = require('../src/search-services/id-search-condition');
const UndeletedSearchCondition = require('../src/search-services/undeleted-search-condition');
const SearchAdvance            = require('../src/search-services/advance-search-condition');
const SearchBasic              = require('../src/search-services/keyword-search-condition');
const TitleSearchCondition     = require('../src/search-services/title-search-condition');

let bookController = new BookController();

router.get('/',function (req, res, next) {
    req.condition = new UndeletedSearchCondition();
    next();
},bookController.renderHome);

router.get('/test', function (req, res, next) {
        res.render('test.njk');
        next()
    }
    ,bookController.searchBook);

router.get('/books',function (req, res, next) {
    req.condition = new UndeletedSearchCondition();
    next();
}, bookController.searchBook);

router.get('/detail/:id',function (req, res, next) {
    req.condition = new IdSearchCondition(req.params.id);
    next();
},bookController.renderBookEdit);

router.get('/search-title', function (req, res, next) {
    req.condition = new TitleSearchCondition(req.query.title);
    next();
},bookController.searchBook);

router.get('/delete/:id', bookController.deleteBook);

router.get('/add', bookController.renderBook);

router.post('/book', check.bookRequest, bookController.createBook);

router.post('/update/:id', check.bookRequest, bookController.updateBook);

router.get('/search-advance',function (req, res, next) {
    req.condition = new SearchAdvance(req.query.title, req.query.author ,req.query.publisher );
    next();
}, bookController.search);

router.get('/api/books', function (req, res, next) {
    req.condition = new SearchBasic(req.query.keyword);
    next();
}, bookController.search);

module.exports = router;
