var car, wall;
var speed, weight;


function setup() {
  createCanvas(1400,400);

  speed = random(55,90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  car.shapeColor = "white";
  car.scale = 0.6;
  
  wall = createSprite(1340, 200, 40, height/2);
  wall.shapeColor = "pink";
}

function draw() {
  background(0,0,0); 


  car.velocityX = speed;

  if(wall.x - car.x < (car.width + wall.width)/2)
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22509;

    if(deformation > 180)
    {
       car.shapeColor = "red";
    }

    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "yellow";
    }

    if(deformation < 100)
    {
      car.shapeColor = "limegreen";
    }
  }

   
  drawSprites();
}