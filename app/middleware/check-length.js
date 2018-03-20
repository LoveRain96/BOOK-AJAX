module.exports = function (req, res, next) {
    if (req.body.title.length > 40 || req.body.author.length > 100) {
        return res.status(400).send({message :" title must shorter than 40 character " +
            "and author must shorter than 100 character "
        })
    }
    next();
};


