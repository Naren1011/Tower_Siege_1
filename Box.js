class Box {
    constructor(x,y,width,height) {
      var options={
        restitution : 1,
        friction : 0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      //this.Visibility = 255;
      World.add(world, this.body);
    }
    display(){
      //if(this.body.speed < 3){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
      //}
  }
};
