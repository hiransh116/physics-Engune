  const Engine=Matter.Engine;
  const World =Matter.World;
  const Bodies=Matter.Bodies;
  var  engine,world;
  var ground;
  var b;
 function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundOp={
    isStatic:true,

  }
 ground=Bodies.rectangle(200,390,400,20,groundOp);
  World.add(world,ground);
  
  var bOp={
    restitution:1,
  }
  b=Bodies.circle(200,200,4,bOp);
  World.add(world,b);

  console.log(ground.position.x);
  console.log(ground.position.y);
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(b.position.x,b.position.y,4,4);
}