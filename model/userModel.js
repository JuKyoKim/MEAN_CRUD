var mongoose = require('mongoose'),
Post 		 = require('./postModel.js');

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    blogsPosts: [{
    	type:mongoose.Schema.Types.ObjectId,
    	ref: 'Post'
    }]
});

module.exports = mongoose.model("User", UserSchema);