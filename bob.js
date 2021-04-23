class Bob {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius , options);
      this.radius=radius;
      World.add(world, this.body);
    }
    display(){
      
      var pos =this.body.position;
         push();
         translate(pos.x,pos.y);
      //rectMode(CENTER);
      fill("pink");
      //rect(0, 0, this.width, this.height);
       ellipseMode(RADIUS);
       ellipse(0,0,this.radius,this.radius);
    pop();

    }
  };