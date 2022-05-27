var box1;
var box2;
function setup() {
  createCanvas(400,400);
  box1=createSprite(100, 100, 40, 50);
  box2=createSprite(200,200,40,90);
}

function draw() 
{
  background(30);
  drawSprites()
  if(keyDown(RIGHT_ARROW))
  {
      box1.x=box1.x+5;
      box2.x=box2.x+9;
  }
  if(keyDown(LEFT_ARROW))
  {
    box1.x=box1.x-5;
      box2.x=box2.x-9;
  }
  if(keyDown(DOWN_ARROW))
  {
    box1.y=box1.y+5;
      box2.y=box2.y+9;
  }
  if(keyDown(UP_ARROW))
  {
    box1.y=box1.y-5;
      box2.y=box2.y-9;
  }
}




