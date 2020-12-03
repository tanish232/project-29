class Box{
    constructor(x, y, width, height) {
        var options = {
          isStatic:false, 
          'restitution':0.8,
            'friction':1,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y,this.width, this.height);
      }
}