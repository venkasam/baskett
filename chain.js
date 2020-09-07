class Tr{
    constructor(pointA,bodyB){
    var options = {
        bodyB: bodyB,
        pointA: pointA,
        stiffness:3,
        length:700
        }
        this.pointA = pointA
        this.sling =Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
    this.sling.bodyB=null;
    }
   attach(bodyB){
   this.sling.bodyB=bodyB;
}
    display(){
       var pointB = this.sling.bodyB.position;
       var pointA = this.pointA;
      

            push()
            strokeWeight()
            stroke("purple")
            line(pointB.x,pointB.y,pointA.x,pointA.y)
            pop()
       
    }
    
}