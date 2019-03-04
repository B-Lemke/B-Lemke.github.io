

var app = angular.module('myApp',[]);

app.controller("MenuCtrl", function($scope, $location) {
  $scope.menuClass = function(page) {
    var current = window.location.pathname.split( '/' );
    current = current[current.length-1];
    console.log(page + ":");
    page === current ? console.log("active") : console.log("");
    return page === current ? "active" : "";
  };
});

console.log("Test");
