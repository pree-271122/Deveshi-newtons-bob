const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Roof,Bob,bob1,bob2,bob3,bob4,rope1,rope2,rope3,rope4;
var engine, world;
function setup() {
	createCanvas(500,500)


	engine = Engine.create();
	world = engine.world;

    //I JUST CHANGED THE POSITIONS OF THE BOB, BUT ITS NOT COMPULSARY
     Bob = new bob(150,350,20);
     bob1 = new bob(200,350,20);
     bob2 = new bob(250,350,20);
     bob3 = new bob(300,350,20);
     bob4 = new bob(350,350,20);

     Roof = new roof(250,100,300,40);
     /*NO NEED TO USE THESE LINE INSTEAD UE THE ROPE CLASS YOU CREATED
     var options = {
       bodyA:Bob.body,
       bodyB:Roof.body,
       stiffness:0.04,
       length:10
     }
      var rope = Constraint.create(options)
      World.add(world,rope);*/
//ATTACHING BOBS WITH ROOFS
    rope1=new Rope(Bob.body,Roof.body,-100);
    rope2=new Rope(bob1.body,Roof.body,-50);
    rope3=new Rope(bob2.body,Roof.body,0);
    rope4=new Rope(bob3.body,Roof.body,50);
    rope5=new Rope(bob4.body,Roof.body,100);

     
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("mistyrose");
  Roof.display();
  Bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  //DON'T FORGET TO DISPLAY THE ROPES
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
/* KEYPRESSED STATUS*/
function keyPressed() {
  if (keyCode === UP_ARROW) {
    //APPLY THE X AND Y ACCORDING TO THE MOVEMENT OF THE BOB
     Matter.Body.applyForce(Bob.body,Bob.body.position,{x:-30,y:-30});
      } 
    } 



