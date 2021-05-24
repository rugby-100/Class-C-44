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
var otherPlayer;

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
    otherPlayer=player2
  }
  if (num === 1) {
    currentPlayer = player2
    otherPlayer=player1
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
  //next();
  drawSprites();
}

function mouseClicked() {
  console.log(mouseX, mouseY)
  //217,212
  //430,215
  //220,432
  //432,432

  if(mouseX>0 && mouseX<215 && mouseY<215 && mouseY>0){
    board[0][0]=currentPlayer
    availableSpot.splice(0, 1)[0]
  }
  if(mouseX<430 && mouseX>215 && mouseY<215 && mouseY>0){
    board[1][0]=currentPlayer
    availableSpot.splice(3, 1)[0]
  }
  if(mouseX>430 && mouseX<650 && mouseY<215 && mouseY>0){
    board[2][0]=currentPlayer
    availableSpot.splice(6, 1)[0]
  }  
  
  
  if(mouseX>0 && mouseX<215 && mouseY>215 && mouseY<430){
    board[0][1]=currentPlayer
    availableSpot.splice(1, 1)[0]
  }
  if(mouseX<430 && mouseX>215 && mouseY>215 && mouseY<430){
    board[1][1]=currentPlayer
    availableSpot.splice(4, 1)[0]
  }
  if(mouseX>430 && mouseX<650 && mouseY>215 && mouseY<430){
    board[2][1]=currentPlayer
    availableSpot.splice(7, 1)[0]
  }

  
  if(mouseX>0 && mouseX<215 && mouseY<650 && mouseY>430){
    board[0][2]=currentPlayer
    availableSpot.splice(2, 1)[0]
  }
  if(mouseX<430 && mouseX>215 && mouseY<650 && mouseY>430){
    board[1][2]=currentPlayer
    availableSpot.splice(5, 1)[0]
  }
  if(mouseX>430 && mouseX<650 && mouseY<650 && mouseY>430){
    board[2][2]=currentPlayer
    availableSpot.splice(8, 1)[0]
  }

  
  next();
}

function next(){
  //if(frameCount%20===0){
    var index = floor(random(availableSpot.length))
    var spot = availableSpot.splice(index, 1)[0]

    var i = spot[0]
    var j = spot[1]
   
    board[i][j] =otherPlayer
  //}
}