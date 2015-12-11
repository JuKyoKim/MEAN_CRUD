app.directive('blogs', blogView);

function blogView() {
  var directive = {};
  directive.restrict = 'A';
  directive.replace = true;
  directive.templateUrl = 'blog_view.html';
  directive.scope = {
    postTitle: '@',
    text: '@'
  };
  return directive;
}