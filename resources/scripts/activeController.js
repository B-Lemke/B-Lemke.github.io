

var app = angular.module('myApp',[]);

app.controller("MenuCtrl", function($scope, $location) {
  $scope.menuClass = function(page) {
    var current = window.location.pathname.split( '/' );
    console.log(current);

    return page === current ? "active" : "";
  };
});
