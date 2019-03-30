
class Stack {

  constructor(){
    this.storage = {};
    this._position = -1;
  }

  push(value){
    this._position++;
    this.storage[this._position] = value;
  }

  pop(){
    if(this._position > -1){
      let val = this.storage[this._position];
      delete this.storage[this._position];
      this._position--;
      return val;
    }
  }
  top(){
    return this._position;
  }

  checkQueens(newQueen){
      var validSpot = true;

      for(var k = 0; k <= this._position; k++){
        var thisQueenValid =  checkValidSpot(newQueen.row, newQueen.col, this.storage[k].row, this.storage[k].col )
        if(!thisQueenValid){
          validSpot = false;
        }
    }
    return validSpot;
  }

  printStack(){
    console.log("PRINTING FINAL PLACEMENTS")
    for(var k = 0; k<= this._position; k++){
    console.log(this.storage[k]);
    }
  }
}

class Queen {
  constructor(){
    this.row = 0;
    this.col = 0;
    this.image = null;
  }
}

async function placeQueens(numQueens){
  queenStack = new Stack();
  for(var giveMeAQueen = 0; giveMeAQueen < numQueens; giveMeAQueen++){
    var queen = new Queen();
    queen.row = giveMeAQueen;
    queen.image = "images/queen" + (giveMeAQueen + 1) + ".png";
    for(var j = 0; j < numQueens; j++){
      queen.col = j;
      //Update the screen, place the queen in here
      var queenImage = document.createElement('img');
      queenImage.src = queen.image;
      $('#chessBoard tr:nth-child(' + (queen.row+1) + ') td:nth-child('+ (queen.col+1)+ ')').html(queenImage);
      //Check agains the other queens
      var canQueenGoHere = true;
      if(queenStack.checkQueens(queen)){
          //Queen can go here, push it to the stack
          queenStack.push(queen);
          break;
      }
      //Animation pause
      await timer(50);
      if(j == numQueens - 1){
        //It doesn't fit here, pop off the last queen and scoot it over
        //Update the screen, remove queenImage in the last row
        $('#chessBoard tr:nth-child(' + (queen.row+1) + ') td:nth-child('+ (queen.col+1)+ ')').html("");
        var returnedQueen = queenStack.pop();
        //Edgecase fix to pop off another if the last one was at the last column
        if(returnedQueen.col == numQueens -1){
          $('#chessBoard tr:nth-child(' + (returnedQueen.row+1) + ') td:nth-child('+ (returnedQueen.col+1)+ ')').html("");
          returnedQueen = queenStack.pop();
        }
        queen = returnedQueen;
        giveMeAQueen = returnedQueen.row;
        j = returnedQueen.col;
        $('#chessBoard tr:nth-child(' + (queen.row+1) + ') td:nth-child('+ (queen.col+1)+ ')').html("");
      }
      //Update the screen, remove queenImage
      $('#chessBoard tr:nth-child(' + (queen.row+1) + ') td:nth-child('+ (queen.col+1)+ ')').html("");

    }

  }

  var victorySound = new Audio('sounds/theme.mp3');
  victorySound.play();
  queenStack.printStack();
}

function drawBoard(numQueens){
  //Create the chessBoard
  var board = document.getElementById('chessBoard');
  for(var i = 0; i < numQueens; i++){
    var newRow = document.createElement('tr');
    for(var j = 0; j < numQueens; j++){
      var newCol = document.createElement('td');
      newRow.appendChild(newCol);
    }
    board.appendChild(newRow);
  }
}

function timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}

function checkValidSpot(queen1x, queen1y, queen2x, queen2y){
  var valid = true;
  //Check row
  if(queen1x === queen2x)
    valid = false;
  //Check column
  if(queen1y === queen2y)
    valid = false
  //Check diagonal /
  if(queen1x- queen2x === queen2y - queen1y)
    valid = false
  //Check diagonol \
  if(queen1x - queen2x === queen1y - queen2y)
    valid = false

  return valid
}


var startSound = new Audio('sounds/alright.mp3');
startSound.play();
var numQueens = 8;
drawBoard(numQueens)
placeQueens(numQueens);
