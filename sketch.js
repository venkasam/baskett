
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine=Matter.Engine;
var link=[]
var par=[]
var b=200;

function preload(){

background1=loadImage("th.jpg")
hoop1=loadImage("hoop.png")
}


function setup() {
createCanvas(displayWidth*2,700);
engine=Engine.create()
world=engine.world;
 hoop3=createSprite(600,100,100,100)
 hoop3.addImage("change", hoop1)

box1=new Box(random(50,1150),random(50,52),50,50)


  all=new Ball(displayWidth/2,300)
  all1=new Tr({x:all.body.position.x+100,y:250},all.body)
  var ball=[all.body.position.x]
  par.push(ball)
}
function draw() {
  background(background1);  
  Engine.update(engine)
  camera.position.x=par
  hoop3.velocityX=2
hoop3.depth=0
if(hoop3.x>=displayWidth*1.5){
  hoop3.x=displayWidth/2
}
all.display()
if(frameCount%70===0){
  box1=new Box(random(50,1150),random(50,52),50,50)
  }
 if (frameCount%300==0){
   b=random(50,300)
 }
box1.display()
  
if(keyCode===32){
all1.attach()

}







  drawSprites();
}

function mouseDragged(){
  if(frameCount%100==0){
Matter.Body.setPosition(all.body,{x:hoop3.x-b,y:350})

  }else{ Matter.Body.setPosition(all.body,{x:mouseX-b*2,y:mouseY})}
  all1.attach()
}
function mouseReleased(){
  all1.fly()
  
  
}
