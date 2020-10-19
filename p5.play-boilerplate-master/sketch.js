var bullet1,bullet2,bullet3;
var wall1,wall2,wall3,wall4;
var border1,border2,border3;
var Boundary;
var thickness;
var speed;
var weight;



function setup() {
  createCanvas(1600,400);

  speed = random(-223,-321);
  weight = random(30,52);

  thickness = random(22,83);

  bullet1 =  createSprite(750, 200, 30, 20);
  bullet2 = createSprite(750,100,30,20);
  bullet3 = createSprite(750,300,30,20);

  wall1 = createSprite(770,200,20,50);
  wall2 = createSprite(770,100,20,50);
  wall3 = createSprite(770,300,20,50);

  border1 = createSprite(400,250,width,10);
  border2 = createSprite(400,150,width,10);
  border3 = createSprite(400,50,width,10);
  border4 = createSprite(400,350,width,10);

 Boundary = createSprite(10,200,thickness,height);

}

function draw() {
  background(0); 
  
  bullet1.velocityX = speed;
  bullet2.velocityX = speed;
  bullet3.velocityX = speed;

  if(hasCollided(bullet1,Boundary)){
    bullet1.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      Boundary.shapeColor = color(255,0,0);
    }

    if(damage<10){
      Boundary.shapeColor = color(0,255,0);
    }
  }
  if(hasCollided(bullet2,Boundary)){
    bullet2.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      Boundary.shapeColor = color(255,0,0);
    }

    if(damage<10){
      Boundary.shapeColor = color(0,255,0);
    }
  }
if(hasCollided(bullet3,Boundary)){
    bullet3.velocityX = 0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness)

    if(damage>10){
      Boundary.shapeColor = color(255,0,0);
    }

    if(damage<10){
      Boundary.shapeColor = color(0,255,0);
    }
  }

  function hasCollided(bullet1,Boundary){
    bullet1RightEdge = bullet1.x + bullet1.width;
    BoundaryLeftEdge = Boundary.x;
    if(bullet1RightEdge >= BoundaryLeftEdge){
      return true;
    }
    return false;
  }
  function hasCollided(bullet2,Boundary){
    bullet2RightEdge = bullet2.x + bullet2.width;
    BoundaryLeftEdge = Boundary.x;
    if(bullet2RightEdge >= BoundaryLeftEdge){
      return true;
    }
    return false;
  }
  function hasCollided(bullet3,Boundary){
    bullet3RightEdge = bullet3.x + bullet3.width;
    BoundaryLeftEdge = Boundary.x;
    if(bullet3RightEdge >= BoundaryLeftEdge){
      return true;
    }
    return false;
  }


  drawSprites();
}