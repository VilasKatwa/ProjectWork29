const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var box1, pig1;
var imgPoly;
var slingshot;
var gc,gc1,gc2,gc3;
var boxset= [];

function preload(){
  imgPoly = loadImage("poly.png"); 
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  gc = color  (206,175,175);
  gc1 = color (145,135,135);
  gc2 = color (175,235,175);
  gc3 = color (155,255,255);
  createCanvas(1000,400);
  
  ground1 = new Ground(500,height,width,40);
  ground2 = new Ground(390,300,200,10);
  ground3 = new Ground(700,200,200,10);


  //Level1 Bottom blocks
   box1 = new Box(315,280,25,25);
   box2 = new Box(340,280,25,25);
   box3 = new Box(365,280,25,25);
   box4 = new Box(390,280,25,25);
   box5 = new Box(415,280,25,25);
   box6 = new Box(440,280,25,25);
   box7 = new Box(465,280,25,25);
  
   // level2 blocks
   
   box8 = new Box(340,255,25,25);
   box9 = new Box(365,255,25,25);
   box10= new Box(390,255,25,25);
   box11 = new Box(415,255,25,25);
   box12 = new Box(440,255,25,25);

  // level 3 blocls
   box13 = new Box(365,230,25,25);
   box14= new Box(390,230,25,25);
   box15 = new Box(415,230,25,25);
  

  // level 4 blocks

   box16 = new Box(390,205,25,25);
  
// set2Level1 Boxes

  box21 = new Box(650,180,25,25);
  box22 = new Box(675,180,25,25);
  box23= new Box(700,180,25,25);
  box24 = new Box(725,180,25,25);
  box25 = new Box(750,180,25,25);

  // set2Level2 Boxes
  box26 = new Box(675,155,25,25);
  box27 = new Box(700,155,25,25);
  box28 = new Box(725,155,25,25);


  // set2Level3 Boxes

  box29 = new Box(700,130,25,25);

  // add polygon
  var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
     }
  polygon = Bodies.rectangle(150,230, 30, 30, options);
  World.add(world, polygon)
 
  launcher = new SlingShot(polygon, {x:150, y:200});
  }







function draw() {
  Engine.update(engine);
  background(255,255,255);  
  drawSprites();
  ground1.display("brown");
  ground2.display("blue");
  ground3.display("blue");
  

//Bottom Boxes
  box1.display(gc);
  box2.display(gc);
  box3.display(gc);
  box4.display(gc);
  box5.display(gc);
  box6.display(gc);
  box7.display(gc);

 // level1 boxes

 box8.display(gc1);
 box9.display(gc1);
 box10.display(gc1);
 box11.display(gc1);
 box12.display(gc1);

// level 3
box13.display(gc2);
box14.display(gc2);
box15.display(gc2);

// level4
box16.display(gc3);


// set2Level1 Boxes
 box21.display(gc1);
 box22.display(gc1);
 box23.display(gc1);
 box24.display(gc1);
 box25.display(gc1);

// set2Level2 Boxes

box26.display(gc2);
box27.display(gc2); 
box28.display(gc2);

// set2Level3 Boxes
box29.display(gc3);

push();
imageMode(CENTER);
image(imgPoly, polygon.position.x, polygon.position.y,30,30);
pop();
launcher.display();



}

function mouseDragged (){
  Matter.Body.setPosition (polygon, {x: mouseX, y: mouseY});
  
}

/*
function mousePressed() {
  consol.log("vilas")
  launcher.fly()
}
*/



function mouseReleased(){
launcher.fly()
}