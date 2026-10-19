let sunOrMoonY;

//Shows morning by manipulating the rectangle in blending mode. Also manipulates sun or moon color.
function morning(position){
  sunOrMoonY = position;
  positionConstrain = constrain(position, 0, 85);
  atmosphereColor = [255, 240, 150, positionConstrain];
  sunOrMoonColor = [255, 230, 150];
}

//Shows afternoon by manipulating the rectangle in blending mode. Also manipulates sun or moon color.
function afternoon(position){
  sunOrMoonY = position;
  positionConstrain = constrain(position, 86, 170);
  atmosphereColor = [160, 120, 50, positionConstrain];
  sunOrMoonColor = [255, 200, 150];
}

//Shows nightime by manipulating the rectangle in blending mode. Also manipulates sun or moon color.
function night(position){
  sunOrMoonY = position;
  positionConstrain = constrain(position, 171, 255);
  atmosphereColor = [40, 60, 100, positionConstrain];
  sunOrMoonColor = [255, 255, 255];
}

//Makes the position of the sun or moon more accurately positioned.
function calculatePosition(){
  return mouseX*0.55;
}

function setup() {
  createCanvas(600, 400);
}

let atmosphereColor;
let sunOrMoonColor;

function draw() {
  noStroke();
  background(150, 200, 255);

  
  if(mouseX >= 0 && mouseX < 200){
    morning(calculatePosition());
  }
  else if(mouseX >= 200 && mouseX < 400){
    afternoon(calculatePosition());
  }
  else{
    night(calculatePosition());
  }

  fill(sunOrMoonColor[0], sunOrMoonColor[1], sunOrMoonColor[2]);
  circle(width/2, sunOrMoonY, 150);

  fill(70, 150, 40);
  rect(0, 350, width, 100);

  drawBuilding(10, 250, 100);
  drawBuilding(-50, 260, 90);
  drawBuilding(0, 280, 70);
  drawBuilding(70, 230, 120);
  drawBuilding(50, 260, 90);
  drawBuilding(200, 190, 160);
  drawBuilding(130, 250, 100);
  drawBuilding(160, 175+50, 125);
  drawBuilding(210, 250, 100);
  drawBuilding(280, 240, 110);
  drawBuilding(355, 220, 130);
  drawBuilding(340, 260, 90);
  drawBuilding(430, 210+50, 90);
  drawBuilding(490, 200+50, 100);
  drawBuilding(480, 230+50, 70);
  drawBuilding(525, 205+50, 95);
  noStroke();

  blendMode(MULTIPLY);
  fill(atmosphereColor[0], atmosphereColor[1], atmosphereColor[2], atmosphereColor[3]);
  rect(0, 0, width, height);
  blendMode(BLEND);
}

//Draws a building using arguments: x, y, and size
function drawBuilding(x, y, size){
  let wallHeight = size*0.5;
  let wallWidth = size*0.5;
  let windowHeight = size*0.5;
  let windowWidth = size*0.5;
  let offset = size*0.5;

  stroke(50);

  //buildingWall
  fill(150, 150, 165);
  rect(x + offset, y, 1*wallWidth, 2*wallHeight);
  rect(x + 1.15*offset, y + -0.2*offset, 0.7*wallWidth, 0.2*wallHeight);
  rect(x + 1.3*offset, y + -0.4*offset, 0.4*wallWidth, 0.2*wallHeight);

  //windows
  fill(125, 175, 230);
  rect(x + 1.1*offset, y + 0.10*offset, 0.2*windowWidth, 1.8*windowHeight);
  rect(x + 1.4*offset, y + 0.10*offset, 0.2*windowWidth, 1.8*windowHeight);
  rect(x + 1.7*offset, y + 0.10*offset, 0.2*windowWidth, 1.8*windowHeight);
}


