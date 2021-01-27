
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	stoneObj=loadImage("images/stone.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1190,190,30);
	mango3=new mango(1100,200,30);
	mango4=new mango(1000,210,30);
	mango5=new mango(1140,150,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	stoneObj=new stone(1200,300);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
/*detectcollision(stoneObj,mango1);
detectcollision(stoneObj,mango2);
detectcollision(stoneObj,mango3);
detectcollision(stoneObj,mango4);
detectcollision(stoneObj,mango5);*/
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  groundObject.display();

  stoneObj.display();
}
function keyPressed(UP_ARROW){
	if(keyCode===32){
		Matter.Body.setPosition(stoneObj.body,{x:235,y:420});
		launcherObject.attach(stoneObj.body);
	}
}