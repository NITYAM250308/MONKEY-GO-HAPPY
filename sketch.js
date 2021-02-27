
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground
var survivaltime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400,400);
  ground=createSprite(400,350,900,10);
  ground.velocityX=-6;
  ground.x=ground.width/2
  console.log(ground.x)
  
  monkey=createSprite(50,315,10,40)
  monkey.addAnimation("monkey",monkey_running)
  monkey.scale=0.1
  
  FoodGroup= new Group();
  obstacleGroup=new Group();

  
}


function draw() {
  background("white");
  if (FoodGroup.isTouching(monkey)){
    FoodGroup.destroyEach();
    survivaltime=survivaltime+1
  }
  
  if(obstacleGroup.isTouching(monkey)){
    obstacleGroup.destroyEach();
    survivaltime=0
    
    
  }
  
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 290) {
        monkey.velocityY = -12;
    }
    monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  bananas();
  obstacles();
  drawSprites();
  textSize(20);
  stroke("black")
  text("SURVIVAL TIME : " + survivaltime, 110,30);
}
  
function bananas(){
  if (frameCount % 150 === 0) {
    var banana = createSprite(400,200,40,10);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -6;
    FoodGroup.add(banana)
  }
}

function obstacles(){
  if(frameCount % 250 ===0){
    var obstacle=createSprite(400,327,50,20);
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacleGroup.add(obstacle)
  }
}