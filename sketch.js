const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var base, stand1, stand2;

var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13,
    block14, block15, block16;

var block17, block18, block19, block20, block21, block22, block23, block24, block25;

var polygon, slingshot;

var back; 
var score = 0;
var live = 0;

function preload(){
//getback();
backgroungimg = loadImage("img2.jpg")
}
function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;

  base = new Ground(600,590,1200,25);
  stand1 = new Ground(500,480,310,20);
  stand2 = new Ground(900,250,250,20);

  //level one
  block1 = new Block(400,400,35,50);
  block2 = new Block(435,400,35,50);
  block3 = new Block(470,400,35,50);
  block4 = new Block(505,400,35,50);
  block5 = new Block(540,400,35,50);
  block6 = new Block(575,400,35,50);
  block7 = new Block(610,400,35,50);

  //level two 
  block8 = new Block(435,330,35,50);
  block9 = new Block(470,330,35,50);
  block10 = new Block(505,330,35,50);
  block11 = new Block(540,330,35,50);
  block12 = new Block(575,330,35,50);

  //level three
  block13 = new Block(470,260,35,50);
  block14 = new Block(505,260,35,50);
  block15 = new Block(540,260,35,50);

  //level top
  block16 = new Block(505,190,35,50);

  //level one
  block17 = new Block(830,160,35,50);
  block18 = new Block(865,160,35,50);
  block19 = new Block(900,160,35,50);
  block20 = new Block(935,160,35,50);
  block21 = new Block(970,160,35,50);

  //level two
  block22 = new Block(865,90,35,50);
  block23 = new Block(900,90,35,50);
  block24 = new Block(935,90,35,50);

  //level top
  block25 = new Block(900,20,35,50);

  polygon = new Polygon(300,190);

  slingshot = new SlingShot(polygon.body, {x: 200,y: 190});
}

function draw() {
  //if(back)
  background(backgroungimg);  
  Engine.update(engine);
  
 // if(Block.visibility<0 && Block.visiblity>=-105){
 //   score = score+10
  //    }

 // noStroke();
  fill("white");
  textSize(20);
  text("Drag the Hexagon and realease it towards the Blocks or the boxes. ",200,40)
  text("Press space to take another chance! ",200,65);
  text("Score: "+score,840,40);
  text("Lives used: "+live,950,40);

  base.display();
  stand1.display();
  stand2.display();

  fill("green");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("red")
 
 
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("blue")
  block13.display();
  block14.display();
  block15.display();

  fill("yellow")

  block16.display();
  fill("red");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("blue")
 
  block22.display();
  block23.display();
  block24.display();

  fill("yellow");
  block25.display();

    //calling the score function for boxs

   /* block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();*/


  polygon.display();

  slingshot.display();
 //score();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX, y: mouseY});
  //
}

function mouseReleased(){
  slingshot.fly();
   live = live+1;
   score =score+20;
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
      Matter.Body.setPosition(polygon.body, {x: 300, y: 190}); 
      
  }
}

/*async function getTime(){
  var response  = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON);

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,14);
 
  if(hour>=06 && hour<=19){
    img = "img1.jpg";
  }
  else{
    bg = "img2.jpg";
  }
  back = loadImage(bg);
  console.log(back);
}*/

 

  

