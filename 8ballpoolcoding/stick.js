class Stick {
  constructor(x,y){
    var options ={
    friction: 1,
    restitution: 0.5,
    isStatic: true
 
  }
  this.body = Bodies.circle(x,y,50,options)
  this.image = loadImage("stick.png")
  World.add(world, this.body);
 }
 display(){
     push()
     rotate(this.body.angle);
     imageMode(CENTER);     
     image(this.image, this.body.position.x, this.body.position.y, 420);
     pop()
 }
}