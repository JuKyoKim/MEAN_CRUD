var mongoose = require('mongoose');
Comments     = require('./commentModel.js');

var PostSchema = new mongoose.Schema({
    postTitle: String,
    text: String,
    commentsPosts: [{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Comments'
    }]
});

module.exports = mongoose.model("Post", PostSchema);