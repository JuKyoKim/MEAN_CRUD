var Post = require('../model/postModel.js');
var Comments = require('../model/commentModel.js');

module.exports = {
	grabAllBlogs:function(callback){
		Post.find().exec(function(err,post){
			if(err){
				console.log(err);
			}else{
				callback(post);
			}
		});
	},/*end of the function*/

	grabSpecificPost:function(id, callback){
		Post.find({_id: id}).exec(function(err, post){
			callback(post);
		});
	},/*end of the function*/

	updateSpecificPost:function(id, title, inputText, callback){
		Post.find({_id: id}).exec(function(err, returned){
			if(err){
				console.log(err);
			}else{
				title === "" ? title = returned[0].postTitle: title = title;
				inputText === "" ? inputText = returned[0].text: inputText;
				Post.update({_id: id}, { $set: { postTitle:title, text:inputText }},function(err,post){
					if(err){
						console.log(err);
					}else{
						callback(post);
					}
				});
			}
		});
	},/*end of the function*/

	deletePost:function(id, callback){
		Post.remove({_id: id}).exec(function(err){
			err ? console.log(err) : callback("post has been deleted");
		});
	},/*end of the function*/

	addComment:function(id, commentObj, callback){
		Post.find({_id: id}).populate('comment').exec(function(err, returnedBlog){
			var comment = new Comments(commentObj);
			comment.save(function(err){
				if(err){
					console.log(err);
				}else{
					returnedBlog[0].commentsPosts.push(comment._id);
					returnedBlog[0].save(function(err){
						err ? console.log(err): callback(returnedBlog[0]);
					});
				}
			});
		});
	},/*end of the function*/

	grabBlogComments:function(){
		Post.find({_id: id}).exec(function(err, returnedPost){
			returnedPost[0]
		});
	}


};