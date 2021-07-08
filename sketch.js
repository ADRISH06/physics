
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,object2,object3,object4,object5,object6,object7;
function setup(){
  var canvas = createCanvas(1200,700);
  engine = Engine.create();
  world = engine.world;
  
  object = Bodies.rectangle(100,200,10,90)
  object2 = Bodies.rectangle(300,300,10,90)
  object4 = Bodies.rectangle(500,400,10,90)
  object5 = Bodies.rectangle(700,500,10,90)

  object3 = Bodies.circle(200,250,10)
  object6 = Bodies.circle(400,350,10)
  object7 = Bodies.circle(600,450,10)



  
  World.add(world,object)
  World.add(world,object2)
  World.add(world,object3)  
  World.add(world,object4)
  World.add(world,object5)
  World.add(world,object6)
  World.add(world,object7)

 

}
function draw()
{
  Engine.update(engine)
  background(0);
  rectMode(CENTER);
  fill("blue")
    rect(object.position.x,object.position.y,50,50);
    
  fill("red")
   rect(object2.position.x,object2.position.y,50,50);
   
   fill("pink")
    rect(object4.position.x,object.position.y,50,50);
    
    fill("cyan")
    rect(object5.position.x,object.position.y,50,50);
    


   fill("yellow")
   circle(object3.position.x,object3.position.y,50);
  
   fill("green")
   circle(object6.position.x,object6.position.y,50);
  
   fill("white")
   circle(object7.position.x,object7.position.y,50);

  
}
