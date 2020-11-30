const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin1;
var dustbin2;
var dustbin3;
var boxImage;
var paperImage;

function preload(){
boximage = loadImage("dustbin.png")
paperImage = loadImage("paper.png")
}

function setup() {
	 canvas = createCanvas(1200,800);

	 engine = Engine.create();
	 world = engine.world;

     paper= new Paper(50,100,45) 
  
	 ground=new Ground(300,390,1900,10)

	 dustbin1=new Bin(900,300,10,170)
	 dustbin2=new Bin(1040,300,10,170)
	 dustbin3=new Bin(970,380,130,10)

	 Engine.run(engine);
  
}


function draw() {
  
	Engine.update(engine);

  background("grey");
  
  paper.display()
ground.display()

dustbin1.display()
dustbin2.display()
dustbin3.display()
image(boximage,870,185,200,200);

 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110})
  }
}
