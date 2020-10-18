var car1,car2,car3;
var wall1,wall2,wall3,wall4;
var border1,border2,border3;
var Boundary;
var speed;
var weight;



function setup() {
  createCanvas(800,400);

  speed = random(-55,-90);
  weight = random(400,1500);

  car1 =  createSprite(750, 200, 30, 20);
  car2 = createSprite(750,100,30,20);
  car3 = createSprite(750,300,30,20);

  wall1 = createSprite(770,200,20,50);
  wall2 = createSprite(770,100,20,50);
  wall3 = createSprite(770,300,20,50);

  border1 = createSprite(400,250,width,10);
  border2 = createSprite(400,150,width,10);
  border3 = createSprite(400,50,width,10);
  border4 = createSprite(400,350,width,10);

 Boundary = createSprite(10,200,30,height);

}

function draw() {
  background(0); 
  
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;

  if(Boundary.x - car1.x < (car1.width + Boundary.width)/2){
    car1.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed /22500;
    if(deformation > 180){
      car1.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car1.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car1.shapeColor = color(0,255,0);
    }
  }
  if(Boundary.x - car3.x < (car3.width + Boundary.width)/2){
    car3.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed /22500;
    if(deformation > 180){
      car3.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car3.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car3.shapeColor = color(0,255,0);
    }

  }if(Boundary.x - car2.x < (car2.width + Boundary.width)/2){
    car2.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed /22500;
    if(deformation > 180){
      car2.shapeColor = color(255,0,0);
    }
    if(deformation < 180 && deformation > 100){
      car2.shapeColor = color(230,230,0);
    }
    if(deformation < 100){
      car2.shapeColor = color(0,255,0);
    }
  }
  
  drawSprites();
}