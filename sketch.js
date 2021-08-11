var pathImg,path;
var Runner_running,Runner;
var Lboundary,Rboundary;


function preload(){
  //pre-load images

  pathImg = loadImage("path.png");
  Runner_running = loadAnimation("Runner-1.png" , "Runner-2.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocity.y = 4;

Lboundary = createSprite(0,0,10,800)
Rboundary = createSprite(400,0,10,800)
Lboundary.visible = false;
Rboundary.visible = false;

  Runner = createSprite(200,300);
  Runner.addAnimation("Runner running",Runner_running);
  Runner.scale = 0.1;

 
}

function draw() {
  background(0);

  Runner.x = mouseX;
  if (path.y > 400) {
    path.y = height/2
  }

Runner.collide(Lboundary);
Runner.collide(Rboundary);

  drawSprites();
}
