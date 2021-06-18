class Block{
    constructor(x, y) {
        var options = {
                   "restitutiion":2
        }
        this.block= loadImage('block.png');
        this.visibility=255;
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        World.add(world, this.body);
      }
      display(){
       // console.log(this.body.speed);
       if(this.body.speed < 3){
        imageMode(CENTER);
        image(this.block,this.body.position.x,this.body.position.y,this.width,this.height);
       }
       else{
         World.remove(world, this.body);
          push();
          this.visibility = this.visibility - 5;
          tint(255,this.visibility);
          imageMode(CENTER);
          image(this.block,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
      }
      
       
      
}
