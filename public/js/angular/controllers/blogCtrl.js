app.controller('blogCtrl', ['$http',blogCtrl]);

function blogCtrl($http){
	var self = this;

	grabPosts();

	function grabPosts(){
		$http({
      		method: 'GET',
      		url: '/post'
    	}).then(function (res) {
    		console.log(res.data);
      		self.all = res.data;
    	}, function (err) {
      		console.log(err);
    	});
	}
}