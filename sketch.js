
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var engine
var ground
var world
var angle = 20




function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//create a ground
//add to world

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  ground = Bodies.rectangle(200, 380, 400, 10, ground_options);
  World.add(world,ground);
 
  

 
  
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Body.rotate(ground, angle)
  push()
  translate(ground.position.x, ground.position.y)
  rotate(angle)
  rectMode(CENTER);
  rect(0, 0, 400, 10);
  pop()
  angle = angle + 0.5
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);
  //write a rectangle function to display ground.
  


  
  
}

