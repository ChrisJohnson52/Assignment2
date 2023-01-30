/* 
Christian-Thomas Douglas De Guzman Johnson
CSC 2463
Assignment 2
Paint App
*/

// Colors
var Red = '#FF0000';
var Orange = '#FF6600';
var Yellow = '#FFFF00';
var Green = '#00FF00';
var Cyan = '#00FFFF';
var Blue = '#0000FF';
var Magenta = '#FF00FF';
var Brown = '#663300';
var White = '#FFFFFF';
var Black = '#000000';
var Choice = '#FF0000';
var mouseClick = false;

// Grey background
function setup() 
{
	createCanvas(1500, 750);
  background("#edebeb")
}

// Communicates user input
function clicked()
{
	if (mouseIsPressed) mouseClick = true;
	else mouseClick = false;
  return false;
}
	
function draw() 
{
  // Creates color square pallette
  noStroke();
  fill(Red);
  rect(0, 0, 25, 25);
  fill(Orange);
  rect(0, 27, 25, 25);
  fill(Yellow);
  rect(0, 54, 25, 25);
  fill(Green);
  rect(0, 81, 25, 25);
  fill(Cyan);
  rect(0, 108, 25, 25);
  fill(Blue);
  rect(0, 135, 25, 25);
  fill(Magenta);
  rect(0, 162, 25, 25);
  fill(Brown);
  rect(0, 189, 25, 25);
  fill(White);
  rect(0, 216, 25, 25);
  fill(Black);
  rect(0, 243, 25, 25);

  // Allows them to be interactable to change the color of the brush.
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 0 && mouseY <= 25 && mouseClick == true) Choice = Red;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 27 && mouseY <= 52 && mouseClick == true) Choice = Orange;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 54 && mouseY <= 79 && mouseClick == true) Choice = Yellow;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 81 && mouseY <= 106 && mouseClick == true) Choice = Green;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 108 && mouseY <= 133 && mouseClick == true) Choice = Cyan;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 135 && mouseY <= 160 && mouseClick == true) Choice = Blue;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 162 && mouseY <= 187 && mouseClick == true) Choice = Magenta;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 189 && mouseY <= 214 && mouseClick == true) Choice = Brown;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 216 && mouseY <= 241 && mouseClick == true) Choice = White;
  if (mouseX >= 0 && mouseX <= 25 && mouseY >= 243 && mouseY <= 268 && mouseClick == true) Choice = Black;
  
  if(mouseIsPressed)
  {
    strokeWeight(10);
   	stroke(Choice);
   	line(pmouseX,pmouseY,mouseX,mouseY);
 	}  	
  clicked();
}
