const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var bg, engine, world, ball1img;
const Constraint = Matter.Constraint;

function preload(){
  bg = loadImage("pooltablebackground.png");
  ball1img = loadImage("ball6.png")
  ball2img = loadImage("ball7.png")
  ball3img = loadImage("ball8.png")
  ball4img = loadImage("ball4.png")
  ball5img = loadImage("ball5.png")
  ball6img = loadImage("ball2.png")
  ball7img = loadImage("ball3.png")
  ball8img = loadImage("ball1.png")

}

function setup() {
  createCanvas(displayWidth-500,displayHeight-350);

  engine = Engine.create()
  world = engine.world;

  ball1 = new Balls(870,290);
  ball2 = new Balls(870,350);
  ball3 = new Balls(870,410);
  ball4 = new Balls(810,320);
  ball5 = new Balls(810,380);
  ball6 = new Balls(750,320);
  ball7 = new Balls(750,380);
  ball8 = new Balls(690, 350);

  pocket1 = new Pockets(1115,65);
  pocket2 = new Pockets(1115, 635);
  pocket3 = new Pockets(580,650);
  pocket4 = new Pockets(580,50);
  pocket5 = new Pockets(55,65);
  pocket6 = new Pockets(55,635);

  whiteball = new Whiteball(400,380)
  
  stick = new Stick(100, 380)

  slingshot = new Slingshot(stick.body,{x: 100, y: 380});
  
}


function draw() {
  background(bg); 
  Engine.update(engine);
  image(ball1img,ball1.body.position.x,ball1.body.position.y, 65,60);
  image(ball2img,ball2.body.position.x,ball2.body.position.y, 65,60);
  image(ball3img,ball3.body.position.x,ball3.body.position.y, 65,60);
  image(ball4img,ball4.body.position.x,ball4.body.position.y, 65,60);
  image(ball5img,ball5.body.position.x,ball5.body.position.y, 65,60);
  image(ball6img,ball6.body.position.x,ball6.body.position.y, 65,60);
  image(ball7img,ball7.body.position.x,ball7.body.position.y, 65,60);
  image(ball8img,ball8.body.position.x,ball8.body.position.y, 65,60);

  pocket1.display(); 
  pocket2.display();
 pocket3.display();
  pocket4.display();
  pocket5.display();
  pocket6.display();

  whiteball.display();

  stick.display();
  slingshot.display();
  detectCollision(stick, whiteball)
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stick.body, {x: mouseX , y: mouseY});
}
//detecting touch between stick and whiteball
function detectCollision(lstick, lwhiteball){
  stickBodyPosition = lstick.body.position;
  whiteBallPosition = lwhiteball.body.position;
  
  var distance = dist(stickBodyPosition.x, stickBodyPosition.y, whiteBallPosition.x, whiteBallPosition.y)
  
  if(distance <= lwhiteball.r + lstick.r)
  {
  	 Matter.Body.setPosition(lwhiteball,{x:700,y:350});
      


}
}