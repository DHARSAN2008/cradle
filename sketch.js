
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;
function preload()
{
	
}

function setup() {
	createCanvas(900, 600);


	engine = Engine.create();
	world = engine.world;
	
	roof=new Roof(450,200,250,25)

	bob1=new Bob(450,400,40)
	bob2=new Bob(490,400,40)
	bob3=new Bob(530,400,40)
	bob4=new Bob(410,400,40)
	bob5=new Bob(370,400,40)


   rope1=new Rope(bob1.body,roof.body,-bob1*2,0);
   rope2=new Rope(bob2.body,roof.body,-bob2*2,0);
   rope3=new Rope(bob3.body,roof.body,-bob3*2,0);
   rope4=new Rope(bob4.body,roof.body,-bob4*2,0);
   rope5=new Rope(bob5.body,roof.body,-bob5*2,0);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
 drawSprites()
 keyPressed()
}
function keyPressed(){

   if(keyCode === UP_ARROW){
 
     Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-50,y:-45});
   }
 }



