
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree, ground;
var mango1, mango2, mango3, mango4, mango5;
function preload() {

}

function setup() {
  createCanvas(1300, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.


  Engine.run(engine);
  ground = new Ground(width / 2, height - 10, 1500);
  tree = loadImage("tree.png");
  boy = loadImage("boy.png");
  stone = new Stone(200, 520);
  mango1 = new Mango(900, 160);
  mango2 = new Mango(970, 200);
  mango3 = new Mango(840, 220);
  mango4 = new Mango(770, 260);
  mango5 = new Mango(940, 290);
  stoneShot = new LaunchStone(stone.body, { x: 195, y: 550 })
}



function draw() {
  rectMode(CENTER);
  background("light blue");

  ground.display();
  image(tree, 700, height - 600, 400, 600);
  imageMode(CENTER);
  image(boy, 280, 630, 280, 300);
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone.display();
  stoneShot.display();
  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: mouseX, y: mouseY })

}
function mouseReleased() {
  stoneShot.fly();
}

function detectCollision(stoneObj, mangoObj) {
  var mangoObjPos = mangoObj.body.position;
  var stoneObjPos = stoneObj.body.position;
  var distance = dist(mangoObjPos.x, mangoObjPos.y, stoneObjPos.x, stoneObjPos.y);
  if (distance <= 2 * (stoneObj.body.circleRadius + mangoObj.body.circleRadius)) {
    console.log(distance);
    Matter.Body.setStatic(mangoObj.body, false);
  }
}
