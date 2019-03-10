

var app = angular.module('myApp',[]);

app.controller("MenuCtrl", function($scope, $location) {
  $scope.menuClass = function(page) {
    var current = window.location.pathname.split( '/' );
    current = current[current.length-1];
    return page === current ? "active" : "";
  };
});
