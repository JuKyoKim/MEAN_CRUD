var Post = require('../helpers/postHelp.js');

module.exports.controller = function(app) {
	//grab all posts in the database(including info)
	app.get('/posts',function(){

	});

	//grab user related posts
	app.get('/posts/:name/:title',function(){

	});

	//create a new post
	app.post('/posts/new',function(){

	});

	//edit the post
	app.patch('/posts/:title',function(){

	});

	//delete the current post
	app.delete('posts/:title',function(){

	});
};