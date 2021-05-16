var player1 = "X";
var player2 = "O";
var players = [player1, player2]
var board = [
  ["","",""],
  ["","",""],
  ["","",""]
]
var availableSpot = [];

var currentPlayer;

function setup() {
  createCanvas(650,650);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      availableSpot.push([i,j])
    }
  } 
  var num = Math.round(random(0,1))
  if (num === 0) {
    currentPlayer = player1
  }
  if (num === 1) {
    currentPlayer = player2
  }
  console.log(currentPlayer)
}

function draw() {
  background(48, 213, 172);
  let w = width
  let h =height  
  for (var i = 1; i < 3; i++) {
    stroke(116, 125, 123)
    strokeWeight(10)
    line(w/3*i,0+50 ,w/3*i,height-50)
    line(0+50,h/3*i,width-50,h/3*i)
  }

  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      //textAlign(CENTER)
      textSize(150)
      strokeWeight(0.1)
      text(board[i][j], w/3*i+50, h/3*j+h/3-50)
    }
  } 
  next();
  drawSprites();
}

function mousePressed() {
  next();
}

function next() {
  var index = floor(random(availableSpot.length))
  console.log(index); //0,8
  var spot = availableSpot.splice(index, 1)
  console.log(spot);  //[1,2]
  var i = spot[0]
  var j = spot[1]
  board[i],[j] = currentPlayer
}