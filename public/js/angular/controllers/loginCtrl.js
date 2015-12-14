app.controller('loginCtrl', ['$http',loginCtrl]);

function loginCtrl($http){

	var self = this;

	self.signIn = signIn;

	function signIn(){
		$http({
      		method: 'POST',
      		url: "/users/login",
      		data: {username: $("#username").val(), password: $("#password").val()}
    	}).then(function(res){
    		console.log("logged in");
      		$("#username").val("");
      		$("#password").val("");
    	},function(err){
      		console.log(err);
    	});
	}

}