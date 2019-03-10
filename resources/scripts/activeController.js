

var app = angular.module('myApp',[]);

app.controller("MenuCtrl", function($scope, $location) {
  $scope.menuClass = function(page) {
    var current = window.location.pathname.split( '/' );
    return page === current ? "active" : "";
  };
});

console.log("Test");
