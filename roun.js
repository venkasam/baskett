class Ball{
    constructor(x,y){
    
    this.body=Bodies.rectangle(x,y,width,height)
    this.image=loadImage("basket.png")
    this.x=x
    this.y=y
    World.add(world,this.body)
    
    
    
    }
    display(){
    var pos = this.body.position
    var angle=this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    fill("blue");
    image(this.image,0,0);
    pop();
    
    }
    }