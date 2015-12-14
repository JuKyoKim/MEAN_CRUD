var User = require('../helpers/userHelp.js');

module.exports.controller = function(app) {

	//grab all users in the database(only for info)
	app.get('/users',function(req,res){
		User.grabAllUsers(function(user){
			res.send(user);
		});
	});

	//grab that one specific user(only for info)
	app.get('/users/:name',function(req,res){
		User.grabSpecificUser(req.params.name, function(user){
			res.send(user);
		});
	});

	//create a new user
	app.post('/users/new',function(req,res){
		var body = req.body;
		req.session.name = body.username;
		User.createNewUser(body.username, body.password, function(user){
			res.send(user);
		});
	});

	//edit the user
	app.patch('/users/:name',function(req,res){
		var newname;
		var newpass;
		!req.body.username ? newname = req.params.name : newname = req.body.username;
		!req.body.password ? newpass = null : newpass = req.body.password;
		User.editUser(req.params.name, newname, newpass, function(user){
			res.send(user);
		});
	});

	//delete the current user need adjust this for sessions
	app.delete('/users',function(req,res){
		User.deleteUser(req.body.username, req.body.password, function(stuff){
			res.send(stuff)
		});
	});

	//create a new blog entry
	app.post('/users/newBlog', function(req, res){
    	if(!req.session.name){
    		res.send({
    			logged_in:false,
    			username:null,
    			reason:"you are not logged in, cannot post new blog"
    		});
    	}

    	User.addBlogPost(req.session.name, req.body, function(user){
    		res.send(user);
    	});
	});

	//create a session by logging someone in through the helper
	app.post('/users/login', function(req,res){
		var body = req.body;
		User.verifyUser(body.username, body.password, function(user){
			req.session.name = user;
			res.send({
				logged_in:true,
				username: req.session.name,
				reason:null
			});
		});
	});

	app.delete('/users/logout', function(req,res){
		req.session.name = null;
		req.session.password = null;
		req.session.email = null;
		res.send({
			response: "logged out"
		});
	});
};