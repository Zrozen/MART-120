
//charicter
var xin = 50;
var yin = 150;
//mouse
var mousex = 0;
var mousey = 0;
//object 1
var x = 50;
var y = 50;
var xspeed=5;
var yspeed=5;
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
//array
var myXs = [];
var myYs = [];
var myDiameters = [];
var color =[];

var myXsSpeeds = [];
var myYsSpeeds = [];
var mysqarey = [];
var mysqarey2 =[];
var mysqarey3 = [];

function setup()
{
createCanvas(800,600);
//object 1 speed
  ob1s();
//object 2 speed
   ob2s();
//object 3 speed
    ob3s();
    aray();
    myshapes();
    myshapes2();
    myshapes3();
    myshapes4();
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
    drawaray();

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
function aray()
{
    
    myXs[0] = 50;
    myYs[0] = 50;
    myDiameters[0] = 25;

    myXs[1] = 100;
    myYs[1] = 100;
    myDiameters[1] = 35;

    myXs[2] = 150;
    myYs[2] = 150;
    myDiameters[2] = 45;

    myXs[3] = 200;
    myYs[3] = 200;
    myDiameters[3] = 55;

    myXs[4] = 250;
    myYs[4] = 250;
    myDiameters[4] = 65;

    myXs[5] = 200;
    myYs[5] = 20;
    myDiameters[5] = 45;

    myXs[6] = 300;
    myYs[6] = 20;
    myDiameters[6] = 45;

    myXs[7] = 400;
    myYs[7] = 20;
    myDiameters[7] = 45;


}

function drawaray()
{
    fill(25,55,60)
    circle(myXs[0],myYs[0], myDiameters[0]);
    fill(55,60,25)
    circle(myXs[1],myYs[1], myDiameters[1]);
    fill(60,55,25)
    circle(myXs[2],myYs[2], myDiameters[2]);
    fill(25,60,55)
    circle(myXs[3],myYs[3], myDiameters[3]);
    fill(55,25,60)
    circle(myXs[4],myYs[4], myDiameters[4]);
snake();
    fill(65,35,28)
    square(myXs[5],myYs[5], myDiameters[5])
    fill(28,35,65)
    square(myXs[6],myYs[6], myDiameters[6])
    fill(35,65,28)
    square(myXs[7],myYs[7], myDiameters[7])
    smash();
}
function myshapes()
{
    myXsSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    myYsSpeeds = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function myshapes2()
{
    mysqarey = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function myshapes3()
{
    mysqarey2 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function myshapes4()
{
    mysqarey3 = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function smash()
{
    myYs[5] += mysqarey;
    if(myYs[5] > height){myYs[5] = 0; }
    if(myYs[5] < 0){ myYs[5] = height;}

    myYs[6] += mysqarey2;
    if(myYs[6] > height){myYs[6] = 0; }
    if(myYs[6] < 0){ myYs[6] = height;}

    myYs[7] += mysqarey3;
    if(myYs[7] > height){myYs[7] = 0; }
    if(myYs[7] < 0){ myYs[7] = height;}
}
function snake()
{

    myXs[0] += myXsSpeeds;
    myYs[0] += myYsSpeeds;
    if( myXs[0] > width){  myXs[0] = 0;}
    if( myXs[0] < 0){  myXs[0] = width; }
    if(myYs[0] > height){myYs[0] = 0; }
    if(myYs[0] < 0){ myYs[0] = height;}

    myXs[1] += myXsSpeeds;
    myYs[1] += myYsSpeeds;
    if( myXs[1] > width){  myXs[1] = 0;}
    if( myXs[1] < 0){  myXs[1] = width; }
    if(myYs[1] > height){myYs[1] = 0; }
    if(myYs[1] < 0){ myYs[1] = height;}

    myXs[2] += myXsSpeeds;
    myYs[2] += myYsSpeeds;
    if( myXs[2] > width){  myXs[2] = 0;}
    if( myXs[2] < 0){  myXs[2] = width; }
    if(myYs[2] > height){myYs[2] = 0; }
    if(myYs[2] < 0){ myYs[2] = height;}

    myXs[3] += myXsSpeeds;
    myYs[3] += myYsSpeeds;
    if( myXs[3] > width){  myXs[3] = 0;}
    if( myXs[3] < 0){  myXs[3] = width; }
    if(myYs[3] > height){myYs[3] = 0; }
    if(myYs[3] < 0){ myYs[3] = height;}

    myXs[4] += myXsSpeeds;
    myYs[4] += myYsSpeeds;
    if( myXs[4] > width){  myXs[4] = 0;}
    if( myXs[4] < 0){  myXs[4] = width; }
    if(myYs[4] > height){myYs[4] = 0; }
    if(myYs[4] < 0){ myYs[4] = height;}
}