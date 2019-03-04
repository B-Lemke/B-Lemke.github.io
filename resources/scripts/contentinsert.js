document.getElementById("navMenu").innerHTML=


'<nav class="navbar navbar-expand-lg fixed-top custom-toggler">'+
  '<p class="navbar-brand">BRODERICK LEMKE</p>'+
  '<button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">'+
    '<span class="custom-toggler navbar-toggler-icon" ng-click="isNavCollapsed = !isNavCollapsed"></span>'+
  '</button>'+
  '<div class="collapse navbar-collapse" id="navbarNav">'+
    '<ul class="navbar-nav">'+
      '<li class="nav-item active">'+
        '<a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="about.html">About</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="music.html">Music</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="art.html">Art</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="programming.html">Programming</a>'+
      '</li>'+
      '<li class="nav-item">'+
        '<a class="nav-link" href="contact.html">Contact</a>'+
      '</li>'+
    '</ul>'+
  '</div>'+
'</nav>';

document.getElementById("footerContent").innerHTML= "<p> Copyright © 2018 by Broderick Lemke, All Rights Reserved. </p>"
