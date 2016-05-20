//var productAppHomeModule = angular.module('ProductApp',[]);

var homeController = homeModule.controller('HomeController',function($scope){
  console.log('home controller');
});

homeModule.directive('directiveCarousal',
function(){
  var obj = {
    restrict : 'AEC',
    template : 'Carousel.html'
  }
  return obj;
}
);

homeModule.directive('directiveAboutUs',
function(){
  var obj = {
    restrict : 'A',
    template : '<div>About Us To display here!</div>'
  }
  return obj;
});
