
//object 1
var x = 50;
var y = 50;
var xspeed=5;
var yspeed=5;

//charicter
var xin = 50;
var yin = 150;
//mouse
var mousex = 0;
var mousey = 0;
//object 2
var ob2x =340
var ob2y =220
var ob2xspeed=2;
var ob2yspeed=3;
//object 3
var shapeX = 550;
var shapeY = 550;
var shapeXSpeed;
var shapeYSpeed;
//key codes
var w =87;
var s = 83;
var a =65;
var d = 68;

function setup()
{
createCanvas(800,600);
//object 1 speed
  ob1s();
//object 2 speed
   ob2s();
//object 3 speed
    ob3s();
}
function draw()
{
    background(50,250,150);
    stroke(0);
    fill(0);
    //call creatborder
    creatborder();
    // exit message
    leaveing();
     //player
    creatplayer();
    // objects
    makeobjects();
    //Mouse event
    mouseevent();
}
function creatplayer()
{
    circle(xin,yin,15);
    win()
}
function win()
{
    if(xin > width && yin >height-50)
    {fill(0);
    stroke(5);
    textSize(26);
    text("Winner!",width/2-50,height/2-15);}
}
function creatborder()
{
    //border
    rect(0,0,width,10);
    rect(0,0,10,height);
    rect(0, height-10,width,10);
    rect(width-10,0,10,height-50);
    fill(24,200,29);
}

function keyPressed() 
{
  if (key == 'd') { xin+=25;} 
  else if (key == 'a')  {xin-=25;}
  if (key == 's') {yin+=25; } 
  else if (key == 'w') {yin-=25; }
}
function mouseClicked() 
    {  
      mousex = mouseX;
      mousey = mouseY;
    
    }
function makeobjects()
{
//object 1
fill(24,250,229);
    circle(x,y,20);
    ob1m();
//object 2
fill(154,20,250);
rect(ob2x, ob2y, 120, 30);   
ob2m();
//object 3
fill(54,20,250);
ellipse(shapeX,shapeY,25)
ob3m();
}
function mouseevent()
{
    fill(154,20,50);
    ellipse(mousex, mousey, 15, 50);
}
function leaveing()
{
    textSize(16);
    text("EXIT", width-50,height-50)
}
function ob1s()
{
    xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 3);
    yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 3);
}
function ob2s()
{
    ob2xspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 2);
    ob2yspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 2);
}
function ob3s()
{
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function ob1m()
{
    x += xspeed;
    y += yspeed;
    if(x > width){ x = 0;}
    if(x < 0){ x = width; }
    if(y > height){y = 0; }
    if(y < 0){ y = height;}
}
function ob2m()
{
    ob2x += ob2xspeed ;
    ob2y += ob2yspeed;
    
     if (ob2y <= 600) { ob2y += 6;} 
     else if (ob2y == 450 || ob2y <= 610) { ob2y += 5;}
      else if (ob2y != 610) { ob2y = 0; }
    
    if (ob2x <= 800) {ob2x += 4;} else if (ob2x == 650 || ob2x <= 810) {
        ob2x += 6;} else if (ob2x != 810) {ob2x = 0; }
    
}
function ob3m()
{
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    if(shapeX > width)
        {
            shapeX = 0;
        }
        if(shapeX < 0)
        {
            shapeX = width;
        }
        if(shapeY > height)
        {
            shapeY = 0;
        }
        if(shapeY < 0)
        {
            shapeY = height;
        }
    
}