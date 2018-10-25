const db = require('../models');
//requires models folder

//creates get route, that finds tweets in database, and returns them as json data, or an error
module.exports = function (app) {
    app.get('/api/tweet', function (req, res) {
        db.Tweet.find({})
            .then(function (tweets) {
                res.json(tweets);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //creates post route, that displays tweets in body, and shows them as json data, or an error
    app.post('/api/tweet', function (req, res) {
        db.Tweet.create(req.body)
            .then(function (tweets) {
                res.json(tweets);
            })
            .catch(function (err) {
                res.json(err);
            });
    });

    //creates delete route, that displays targets the ID of each tweet, and removes them from database, and sends a message that indicates success.
    app.delete('/api/tweet/:id', function (req, res, next) {
        db.Tweet.findByIdAndRemove({
                _id: req.params.id
            })
            .then(function () {
                res.send('deleted')
            })

    });
};