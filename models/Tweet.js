const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//requires mongoose and creates new Schema.

const TweetSchema = new Schema({
    tweet: {
        type: String,
        required: "You must include a tweet"
    },
    userName: {
        type: String,
        required: "You must have a username"
    },
    date: {
        type: Date,
        default: Date.now
    },


    // `date` must be of type Date. The default value is the current date
});


// saves this model in a tweet, and will run when the var tweet is called, exports to index for use.
var Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;