app.controller('blogCtrl', ['$http',blogCtrl]);

function blogCtrl($http){
	var self = this;

	grabPosts();

  self.CommentForm = function(id){
    $("#commentForm_"+id).toggle();
  }

  self.updateForm = function(id){
    $("#updateForm_"+id).toggle();
  }

  self.addPost = function(){
    $http({
      method: 'POST',
      url: "/users/newBlog",
      data: {postTitle: $("#postTitle").val(), text: $("#postText").val()}
    }).then(function(res){
      console.log("post has been made");
      console.log(res);
    },function(err){
      console.log(err);
    });
  }

  self.addCom = function(id){
    $http({
      method: 'POST',
      url: "/post/"+id+"/new/comments",
      data: {commentTitle: $("#comTitle_"+id).val(), text: $("#comText_"+id).val()}
    }).then(function(res){
      console.log("comment posted");
      console.log(res);
      $("#comTitle_"+id).val("");
      $("#comText_"+id).val("");
    },function(err){
      console.log(err);
    });
  }

  self.updatePost = function(id){
    $http({
      method: 'PATCH',
      url: "/post/"+id,
      data: {title: $("#updateTitle_"+id).val(), text: $("#updateText_"+id).val()}
    }).then(function(res){
      console.log("updated post");
      console.log(res);
      $("#updateTitle_"+id).val("");
      $("#updateText_"+id).val("");
    },function(err){
      console.log(err);
    });
  }

  self.deletePost = function(id){
    $http({
      method: 'DELETE',
      url: "/post/"+id
    }).then(function(res){
      console.log(res);
    },function(err){
      console.log(err);
    });
  }


  self.showComments = function(id){
    $http({
          method: 'GET',
          url: "/post/"+id+"/comments"
      }).then(function (res) {
        var arrData = res.data;
      
        for(var i = 0; i < arrData.length; i++){
          var newDiv = $("<div>");

          var newH3 = $("<h3>");
          var newP = $("<p>");

          newDiv.append(newH3);
          newDiv.append(newP);

          newH3.text(arrData[i].commentTitle);
          newP.text(arrData[i].text);

          $("#"+id+"_comments").append(newDiv) 
        }

      }, function (err) {
          console.log(err);
      });
  };

	function grabPosts(){
		$http({
          method: 'GET',
          url: '/post'
      }).then(function (res) {
        self.all = res.data;
      }, function (err) {
          console.log(err);
      });
	}

}