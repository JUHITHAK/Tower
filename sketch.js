const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box15,box16,box17,box18,box19,box20,box21,box22,
box23,box24,box25,ground;
var score = 0,bg;
function setup(){
    var canvas = createCanvas(1200,600);
    getbackgroundImg();
    engine = Engine.create();
    world = engine.world;
    ball = new Ball (200,300);
    slingshot = new Slingshot(ball.body,{x:200,y:300});
    stand1 = new Ground(690,500,250,10);
    stand2 = new Ground(1000,400,300,10);
    box1 = new Box(600,475);
    box2 = new Box(630,475);
    box3 = new Box(660,475);
    box4 = new Box(690,475);
    box5 = new Box(720,475);
    box6 = new Box(750,475);
    box7 = new Box(780,475);
    
    box8 = new Box(630,435);
    box9 = new Box(660,435);
    box10 = new Box(690,435);
    box11 = new Box(720,435);
    box12 = new Box(750,435);
    
    box14 = new Box(660,395);
    box15 = new Box(690,395);
    box13 = new Box(720,395);
    
    box16 = new Box(690,355);
    
    box17 = new Box(940,375);
    box18 = new Box(970,375);
    box19 = new Box(1000,375);
    box20 = new Box(1030,375);
    box21 = new Box(1060,375);
    
    box22 = new Box(970,335);
    box23 = new Box(1000,335);
    box24 = new Box(1030,335);
    
    box25 = new Box(1000,295);
    ground = new Ground(600,590,1200,20);
   
}

function draw(){
    if(bg){
        background(bg)
    }
    else{
        background(255);
    }
    stroke (255);
    textSize (30);
    fill ("red");
    text("score: " + score,width-300,50);
    Engine.update(engine);
    fill ("purple");
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    fill ("green");
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    fill ("hotpink");
    box13.display();
    box14.display();
    box15.display();
    fill ("blue");
    box16.display();
    fill ("lightgreen");
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    fill ("pink");
    box22.display();
    box23.display();
    box24.display();
    fill ("lightblue");
    box25.display();
    stand1.display();
    stand2.display();
    
    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    
    box13.score();
    box14.score();
    box15.score();
   
    box16.score();
   
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    
    box22.score();
    box23.score();
    box24.score();
    
    box25.score();
    ground.display();
    ball.display();
    slingshot.display();
   
}

function mouseDragged(){
    
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  
  
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}

async function getbackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJson = await response.json();
    var dt = responseJson.datetime;
    var r = dt.slice(11,13);
    if(r>06 && r<19){
        bg = "darkblue"
        
    }
    else{
        bg = "lightblue"
    }
    
}