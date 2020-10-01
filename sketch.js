var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fixedRect2 = createSprite(200, 300, 50, 80);
  fixedRect2.shapeColor = "green";
  fixedRect2.debug = true;

  movingRect.velocityY = -5;
  fixedRect2.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (istouching(movingRect , fixedRect)) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  if(bounceoff(movingRect ,fixedRect2 ))
  {

    movingRect.velocityX = movingRect.velocityX * (-2);
    fixedRect2.velocityX = fixedRect2.velocityX * (-2);
      

  }

  else
  {
    movingRect.velocityY = movingRect.velocityY * (-2);
    fixedRect2.velocityY = fixedRect2.velocityY * (-2);

  }
  drawSprites();
  
}






