
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var PLAY=1;
var END=0;
var gameState=PLAY
var player,playerImg,ground,groundImg;
var invisibleGround1,invisibleGround2;
var score=0;
//var coin,coinImg,coinGroup;


function preload()
{
	groundImg=loadImage("road3.png");
	playerImg=loadImage("car1.png");
    //coinImg=loadImage("coin.gif")
}

function setup() {
	createCanvas(1180,200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	player = createSprite(100,100,30,30);
	player.addImage(playerImg);
	player.scale=0.3;
	ground = createSprite(700,100,40,40);
	ground.addImage(groundImg);
    ground.scale=3;
    invisibleGround1 = createSprite(500,210,1000,20);
	invisibleGround1.visible=false;
	invisibleGround2 = createSprite(100,1,1000,3);
	invisibleGround2.visible=false;
	
	//coinGroup = createGroup();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(gameState===PLAY){
	  ground.velocity.x=-6;

	  coin();

	 if(ground.x < 600){
		  ground.x = ground.width/0.7;
	  }
	  if(keyDown("down_arrow")){
		  player.y=player.y + 4;
	  }
	  if(keyDown("up_arrow")){
		  player.y=player.y - 4;
	  }
	  player.collide(invisibleGround1);
	  player.collide(invisibleGround2);
	  console.log(player.position.y);

	 // coin();
	 
 }
  
  drawSprites();

  
  
 ground.display();
 player.display();
 invisibleGround1.display();
 invisibleGround2.display();
 stroke("white");
  fill("white");
  textSize(30);
  text("Score:"+ score, 1000,32.2)

}





