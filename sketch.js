var player1 = "X";
var player2 = "O";


function setup() {
  createCanvas(600,600);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(48, 213, 172);  
  for (var i = 0; i < 4; i++) {
    stroke(116, 125, 123)
    strokeWeight(5)
    line()
  }
  drawSprites();
}