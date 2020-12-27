
var monkey , monkey_running,trex_collided;
var banana ,bananaImage
var obstacle
var oblstacleGroup;
var FoodGroup,obstacleGroup;
var survivalTime=0;
var score;
var ground
    
    
    
function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  //creating monkey    
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  //creating ground
  ground = createSprite(400,350,2000,10);
  ground.velocityX = -7
  ground.x = ground.width /2;
  console.log(ground.x)
   
survivalTime=0;
  
  
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {

  background(255);
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
   text("survivalTime: "+ survivalTime, 100,50);
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
  if(keyDown("space") && monkey.y >= 100){
    monkey.velocityY=-7
  }
  monkey.velocityY=monkey.velocityY+0.8
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  drawSprites();
  
}
function food(){

  if(frameCount % 80===0){

  banana = createSprite(600,300,20,20);
  banana.addImage(bananaImage);
  banana.scale=0.1;
    banana.y=Math.round(random(120,200));
    banana.velocityX=-8
    banana.setLifetime=50;
    
  bananaGroup.add(banana);
  
}
}

function obstacle() {

  if(frameCount % 150===0){
    
  var obstacle = createSprite(600,310,10,40);
    obstacle.addImage(obstacleImage);
   obstacle.scale=0.2;
   var rand = Math.round(random(20,50));   
    obstacle.velocityX=-8
     obstacle.setLifetime=50;
    
  obstacleGroup.add( obstacle);    
  }
}