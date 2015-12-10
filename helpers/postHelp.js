var Post = require('../model/postModel.js');

module.exports = {
	grabAllBlogs:function(callback){
		Post.find().exec(function(err,post){
			if(err){
				console.log(err);
			}else{
				callback(post);
			}
		});
	}/*end of the function*/

};