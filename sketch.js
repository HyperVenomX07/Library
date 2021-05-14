var fixedRect, movingRect;
var shape1,shape2;
var variable1,variable2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  shape1=createSprite(200,200,50,50);
  shape2=createSprite(200,400,50,50);

}

function draw() {
  background(0,0,0);  
  shape1.x = World.mouseX;
  shape1.y = World.mouseY;

  if(isTouching(shape1,shape2)){
  variable1.shapeColor = "red";
  variable2.shapeColor = "red";
  }
  else{
  variable1.shapeColor = "green";
  variable2.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(variable1,variable2){
  if (variable1.x - variable2.x < variable2.width/2 + variable1.width/2
    && variable2.x - variable1.x < variable2.width/2 + variable1.width/2
    && variable1.y - variable2.y < variable2.height/2 + variable1.height/2
    && variable2.y - variable1.y < variable2.height/2 + variable1.height/2) {
 return true;
}
else {
  return false;
}
}