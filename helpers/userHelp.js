var User = require('../model/userModel.js');
var Post = require('../model/postModel.js');

module.exports = {
	grabAllUsers:function(callback){
		User.find().exec(function(err,allUsers){
			err ? console.log(err) : callback(allUsers);
		});
	},/*end of the function*/

	grabSpecificUser:function(name, callback){
		/*find the user based on username*/
		User.find({username: name}).exec(function (err, user) {
			err ? console.log(err) : callback(user);
  		});
	},/*end of the function*/

	createNewUser:function(name, password, callback){
		var newUser = new User({
			username: name,
			password: password
		});

		/*save the user and set session name to current user*/
		newUser.save(function(err){
			err ? console.log(err) : callback(newUser);
		});
	},/*end of the function*/

	editUser:function(name, upName, upPass, callback){
		User.find({username: name}).exec(function(err, user){
			if(err){
				console.log(err);
			}else{
				upPass === null ? upPass = user[0].password: upPass = upPass;
				var newObj = {
					username: upName,
					password: upPass
				}

				User.update({username: name}, {$set: newObj}, function(err, user){
					err ? console.log(err) : callback(user);
				});
			}
		});
	},/*end of the function*/

	deleteUser:function(name, pass, callback){
		User.remove({username: name, password: pass}).exec(function(err){
			err ? console.log(err) : callback(name + " been deleted");
		});
	},/*end of the function*/

	addBlogPost:function(username, postData, callback){
		User.find({username: username}).populate('post').exec(function(err, returnedUser){
			var post = new Post(postData);
			console.log(postData);
			post.save(function(err){
				if(err){
					console.log(err);
				}else{
					returnedUser[0].blogsPosts.push(post._id);
					returnedUser[0].save(function(err){
						err ? console.log(err): callback(returnedUser[0]);
					});
				}
			});
		});
	},
	verifyUser:function(username, password, callback){
		User.find({username:username}).exec(function(err, user){
			if(err){
				callback(err);
			}else{
				if(user.length === 0 ){
					callback({
					logged_in: false,
					username: "null",
					reason: "user does not exist in our database!"
					});
				}else{
					if(user[0].username === username && user[0].password === password){
						callback(user[0].username);
					}else{
						callback({
						logged_in: false,
						username: "null",
						reason: "login info is incorrect!"
						})
					}
				}
			}
		});
	}/*end of the function*/



};/*end of the function*/