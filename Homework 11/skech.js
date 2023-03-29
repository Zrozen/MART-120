  
  var headX = 250;
  var headY = 100;
  var headDirection = 1;
  var arcX =250;
  var arcY =120;
  var bodyX = 225;
  var bodyY = 150;
  var bodyDirection = 2;
  var x2 = 235;
  var x3 = 265;
  var y2 = 95;
  var eye2 = 95;
  var eyesdirection = 3;
  var eyedirection = 3;
  var arcDirection = 2;
  var size = 5;
var count = 0;
var sizeDirection = 2;
var nameX =390;
var nameY =570;
var nameDirection = 2;
  function setup()
     {
     createCanvas(500, 600);
     eyesdirection = floor(random() * 5) + 1;
     eyedirection = floor(random() * 7) + 1;
     headDirection = floor(random() * 4) + 1;
     arcDirection = floor(random() * 2)+ 1;
     bodyDirection= floor(random() * 6) + 1;
     }
function draw()
     {
         background(120);
         fill(253,245,226);
         strokeWeight(4);
         stroke('black');
         //head
         ellipse(headX, headY, 85, 95,);
         headX+=headDirection;
         if(headX >= 465 || headX <= 82)
         {
             headDirection *= -1;
         }

         line(235, 270, 235, 400);
         line(270, 270, 270, 400);
         fill(10,24,174);
         //body
         rect(bodyX, bodyY, 55, 155, 20);
         bodyX+=bodyDirection;
         if(bodyX >= 465 || bodyX <= 82)
         {
             bodyDirection *= -1;
         }
         //sholders Arms
         line(215, 170, 215, 270);
         line(290, 170, 290, 270);
         square(200, 150, 35, 10);
         square(270, 150, 35, 10);
         //feet
         triangle(235, 390, 245, 410, 225,420)
         triangle(270, 390, 275, 410, 265,420)
         //face
         strokeWeight(10);
         stroke(58,115,172);
         point(x2, eye2);
         eye2+= eyedirection;
         if(eye2 >= 300 || eye2 <= 2)
        {
          eyedirection *= -1;
        }
         point(x3, y2);
          y2+=eyesdirection;
          if(y2 >= 300 || y2 <= 2)
         {
          eyesdirection *= -1;
         }


         strokeWeight(4);
         stroke('black');
         noFill();
         arc(arcX, arcY, 25, 25, 0, PI );
         arcX+=arcDirection;
         if(arcX >= 465 || arcX <= 82)
         {
             arcDirection *= -1;
         }
         arcY+=arcDirection;
         if(arcY >= 465 || arcY <= 40)
         {
             arcDirection *= -1;
         }

         textSize(size);
         strokeWeight(1);
         size+= sizeDirection;
    count++;
    if(count > 25)
    {
        sizeDirection *=-1;
        count = 0;
    }
         text('Portrait', 10, 50);

         textSize(22);
         strokeWeight(1);
         text('Helen', nameX, nameY);
         
    }
