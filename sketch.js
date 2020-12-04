
const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var land, paperBall;
var garbageBox,garbageWall1,garbageWall1;

function preload(){
	backgroundImage = loadImage("background.jpg");
}
function setup() {
	createCanvas(800, 400);

	// Create Our Engine and Our World
	myEngine = Engine.create();
	myWorld = myEngine.world;

	//Create a Ground
	land = new Ground(width/2, height,width,height/10);

	//Create a dustbin
	garbageBox = new Dustbin(width-100, height-50,100,10);

	//Create a paper ball
	paperBall = new Paper(50, height-50,20);

	//console.log(paperBall);
	var render = Render.create({
		element: document.body,
		engine: myEngine,
		options: {
		  width: 800,
		  height: 400,
		  wireframes: false
		}
	  });

	Engine.run(myEngine);

	Render.run(render);
  
}

function draw() {

  background(backgroundImage);
  paperBall.display();
  land.display();
  garbageBox.display();

 
}

function keyPressed(){
 //console.log("Inside KeyPressed Function");
	if (keyCode === UP_ARROW){
		//console.log("key: Up Arrow");
		if ( paperBall.body.position.x >= width/2)
			Matter.Body.setStatic(paperBall.body,true);
			else
				Matter.Body.applyForce(paperBall.body,{x: paperBall.body.position.x, y: paperBall.body.position.y}, {x:85, y:-60});
	}
}




