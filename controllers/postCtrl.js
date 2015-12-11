var Post = require('../helpers/postHelp.js');

module.exports.controller = function(app) {
	
	//grab all blog posts
	app.get('/post',function(req, res){
		Post.grabAllBlogs(function(posts){
			res.send(posts)
		});
	});
	
	//grab single blog post
	app.get('/post/:id',function(req,res){
		Post.grabSpecificPost(req.params.id, function(post){
			res.send(post);
		});
	});

	//update specifc post
	app.patch('/post/:id',function(req,res){
		Post.updateSpecificPost(req.params.id, req.body.title, req.body.text, function(post){
			res.send(post);
		});
	});

	//delete that post
	app.delete('/post/:id',function(req,res){
		Post.deletePost(req.params.id, function(message){
			res.send(message);
		});
	});

	//add comments
	app.post('/post/:id/commentEntry',function(req,res){
		Post.addComment(req.params.id, req.body, function(returned){
			res.send(returned)
		});
	});

}/* end of the function */