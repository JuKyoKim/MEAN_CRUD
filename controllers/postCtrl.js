var Post = require('../helpers/postHelp.js');

module.exports.controller = function(app) {
	//grab all posts in the database(including info)
	app.get('/posts',function(req,res){
			console.log(arguments);
		Post.grabAllBlogs(function(posts){
			res.send(posts);

		});
	});
};