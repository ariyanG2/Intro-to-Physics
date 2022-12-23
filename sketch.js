//Renaming
var Engine = Matter.Engine
var World = Matter.World 
var Bodies = Matter.Bodies

function setup(){
  createCanvas(400,400);
  //creating our own engine
  engine = Engine.create();
  //creating our world inside engine
  world = engine.world
  //creating bodies
  box = Bodies.rectangle(200, 200, 50, 50,prop)
  //add bodies to world
  World.add(world,box)
  var asd = {
    isStatic: true
  }
  ground = Bodies.rectangle(200, 380, 400, 20, asd)
  World.add(world,ground)
  var ads = {
    restitution: 1
  }
  ball = Bodies.circle(300, 150, 50, ads)
  World.add(world,ball);
}

function draw() {
  background(51);
  Engine.update(engine)
  //displaying objects
  rectMode(CENTER)
  rect(box.position.x, box.position.y,50,50)
  rect(ground.position.x, ground.position.y, 400, 20)
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 50)
}