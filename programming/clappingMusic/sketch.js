var w = 400;
var h = 400;

var clapper = {value: 0};

var circles = [];

var circle;

function setup() {
  createCanvas(w,h);
  background(0);
}

function draw() {
  if(clapper.value == 1){
    circle = new Circle();
    circle.create("#FFFFFF");
    circles.push(circle);

  } else{
    circle = new Circle();
    circle.create("#000000");
    circles.push(circle);
  }

  circles.forEach(function(circ){
      //for each circ in circles
      circ.grow();
      circ.draw();

  });


}





function Circle(){

  this.create = function(col){
    this.rad = 1;
    this.color = col;
  }

  this.draw = function(){
    stroke(this.color);
    noFill();
    ellipse(w/2,h/2, (this.rad/2)*2, (this.rad/2)*2)
  }

  this.grow = function(){
    this.rad++;


  }


}
