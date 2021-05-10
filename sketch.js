const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polgonImg;
var score = 0;



function preload(){
  polygonImg = loadImage("polygon.png")
;}

function setup(){
    createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;

    ground = new Ground(500, 480, 1000, 10);
    
    base1 = new Ground(400, 380, 270, 10);
    base2 = new Ground(800,200, 200, 10);

    //1st Level
    box1 = new Box(320, 360, 40, 40);
    box2 = new Box(340, 360, 40, 40);
    box3 = new Box(380, 360, 40, 40);
    box4 = new Box(420, 360, 40, 40);
    box5 = new Box(460, 360, 40, 40);
    box6 = new Box(500, 360, 40, 40);
    
    //2nd Level
    box7 = new Box(320, 320, 40, 40);
    box8 = new Box(360, 320, 40, 40);
    box9 = new Box(400, 320, 40, 40);
    box10 = new Box(440, 320, 40, 40);
    box11 = new Box(480, 320, 40, 40);

    //3rd Level
    box12 = new Box(340, 280, 40, 40);
    box13 = new Box(380, 280, 40, 40);
    box14 = new Box(420, 280, 40, 40);
    box15 = new Box(460, 280, 40, 40);

    //4th Level
    box16 = new Box(360, 240, 40, 40);
    box17 = new Box(400, 240, 40, 40);
    box18 = new Box(440, 240, 40, 40);

    //5th Level
    box19 = new Box(380, 200, 40, 40);
    box20 = new Box(420, 200, 40, 40);

    //6th Level
    box21 = new Box(400, 160, 40, 40); 

    //1st Level
    box22 = new Box(740, 170, 40, 40);
    box23 = new Box(780, 170, 40, 40);
    box24 = new Box(820, 170, 40, 40);
    box25 = new Box(860, 170, 40, 40);

    //2nd Level
    box26 = new Box(760, 130, 40, 40);
    box27 = new Box(800, 130, 40, 40);
    box28 = new Box(840, 130, 40, 40);

    //3rd level
    box29 = new Box(780, 90, 40, 40);
    box30 = new Box(820, 90, 40, 40);

    //4th Level
    box31 = new Box(800, 50, 40, 40);

    polygon = Bodies.circle(50, 200, 20)
    World.add(world, polygon);

    slingShot = new Slingshot(this.polygon, {x:100, y:200});


    Engine.run(engine);

}

function draw(){
 background("black");

   ground.display();
   
   base1.display();
   base2.display();
   fill("pink");

   box1.display();
   box2.display();
   box3.display();
   box4.display();
   box5.display();
   box6.display();
   fill("blue");
   
   box7.display();
   box7.score();
   box8.display();
   box8.score();
   box9.display();
   box9.score();
   box10.display();
   box10.score();
   box11.display();
   box11.score();
   fill("purple");

   box12.display();
   box12.score();
   box13.display();
   box13.score();
   box14.display();
   box14.score();
   box15.display();
   box15.score();
   fill("yellow");

   box16.display();
   box16.score();
   box17.display();
   box17.score();
   box18.display();
   box18.score();
   fill("orange");

   box19.display();
   box19.score();
   box20.display();
   box20.score();
   fill("red");

   box21.display();
   box21.score();
   fill("green")

   box22.display();
   box22.score();
   box23.display();
   box23.score();
   box24.display();
   box24.score();
   box25.display();
   box25.score();
   fill("red");

   box26.display();
   box26.score();
   box27.display();
   box27.score();
   box28.display();
   box28.score();
   fill("orange")

   box29.display();
   box29.score();
   box30.display();
   box30.score();
   fill("yellow")

   box31.display();
   box31.score();
   fill("pink")

   imageMode(CENTER);
   image(polygonImg, polygon.position.x, polygon.position.y, 50, 50);
   slingShot.display();

   box1.score();
   box2.score();
   box3.score();
   box4.score();
   box5.score();
   box6.score();

   textSize(30);
   fill("white");
   text("SCORE:"+score, 500, 40);
   

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if (keyCode===32) {
		slingShot.attach(this.polygon);
    }
}