app.directive('blogs', blogView);

function blogView(){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = 'js/angular/views/blog_view.html';
  directive.scope = {
    post: '@'
  };
  return directive;
}