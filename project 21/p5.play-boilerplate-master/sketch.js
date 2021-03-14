var bullet, wall;
var thickness, speed, weight;

function setup() {
  createCanvas(2000,2000);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness, height/2);
}

function draw() {
  background(255,255,255);  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(20, 80);
  bullet.velocityX = speed;
  drawSprites();

 if (hasCollided(bullet, wall)){
   bullet.veocityX=0;
   var damage=0.5 * speed * speed/(thickness * thickness * thickness);

   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }
   if(damage<10){
     wall.shapeColor=color(0,225,0)
   }
 }
}

function hasCollided() {
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}