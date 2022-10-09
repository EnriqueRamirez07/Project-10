var sea,ship,boat_moving;
var seaImg,shipImg;


function preload(){
  //descomentar el código para agregar la animación del barco 
  boat_running = loadAnimation("ship-1.png","ship-2.png",);

  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  //shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Mover el fondo
  sea=createSprite(400,200);
  sea.addImage(ship-1);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("boat_moving", boat_moving);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  //descomentar el código para reiniciar el fondo
  if(sea.x < 0){
    sea.x = 0;
    sea.x = sea.width;
    sea.x = sea.width/8;
    //sea.y = height;
  }
  boat_moving;

 
  drawSprites();
}
