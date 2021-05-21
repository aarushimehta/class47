class Whiteball {
   constructor(x,y,r){
     var options = {
       restitution: 0.8,
       density: 0.5,
       isStatic: true
    }
    this.body = Bodies.circle(x,y,10,options);
    World.add(world, this.body);
  }
  display(){
    push()
    fill("white");
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    ellipseMode(RADIUS);
    ellipse(0,0,17)
    pop()

   }


}