var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
    commentTitle: String,
    text: String
});

module.exports = mongoose.model("Comment", CommentSchema);