class Box {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 30, 40, options);
    this.width = 30;
    this.height = 40 ;
    this.Visiblity = 100;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push ();
      translate(pos.x,pos.y);
      rotate (angle);
      rectMode(CENTER);
     
      rect(0, 0, this.width, this.height);
      pop();
    }else{
      World.remove(world,this.body);
      this.Visiblity -=5;
    }
  
  }
  score(){
    if(this.Visiblity<0 && this.Visiblity > -10){
      score++;
    }
  }
};
