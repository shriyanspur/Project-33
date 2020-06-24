const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var play = 1;
var end = 0;

var balls = [];
var plinkos = [];
var divs = [];

var engine, world;
var ground, particle;
var divHeight = 200;

var gamestate = play;
var score = 0;
var count = 0;

function setup(){
    createCanvas(505, 600);
    engine = Engine.create();
    world = engine.world;

    wall1 = new Wall(2, 300, 10, 600);
    wall2 = new Wall(502, 300, 10, 600);

    
    for (var k = 12; k <= width; k = k+80) {
        divs.push(new Division(k, height - divHeight/2, 10, divHeight));
    }


    for (var j = 35; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 90, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,160, 10));
    }

    for (var j = 35; j <=width; j=j+50) {
        plinkos.push(new Plinko(j, 230, 10));
    }

    for (var j = 20; j <=width-10; j = j+50) {
        plinkos.push(new Plinko(j,300, 10));
    }
    
}

function draw(){
    background(56,44,44);
    Engine.update(engine);

    fill("white");
    textSize(25);
    text("Score : ", 10, 30);
    text(score, 100, 30);

    text("500", 30, 450);
    text("500", 110, 450);
    text("300", 190, 450);
    text("300", 270, 450);
    text("100", 350, 450);
    text("100", 430, 450);


    
    for (var k = 0; k < divs.length; k++) {
        divs[k].display();
    }

    for (var j = 0; j < plinkos.length; j++) {
        plinkos[j].display();
    }



        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 0 && particle.body.position.x < 160 && particle.body.position.y > 600){
                    score = score+500;
                    particle=null;
                    count = count+1;

                    if(count === 5) {
                        gamestate = end;
                    }

                    
                }
            }
        }

        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 160 && particle.body.position.x < 320 && particle.body.position.y > 600){
                    score = score+300;
                    particle=null;
                    count = count+1;

                    if(count === 5) {
                        gamestate = end;
                    }

                    
                }
            }
        }

        if(particle!=null) {
            particle.display();
    
            if (particle.body.position.y>400) {
    
                if (particle.body.position.x > 320 && particle.body.position.x < 480 && particle.body.position.y > 600){
                    score = score+100;
                    particle=null;
                    count = count+1;

                    if(count === 5) {
                        gamestate = end;
                    }
    
                   
                }
            }
        }

    
            
        
        if (gamestate === end) {
            
            textSize(50);
            fill("#AFFF33")
            text("GAME OVER", 90, 280);
        }


    wall1.display();
    wall2.display();
    
}

function mousePressed() {
    if (gamestate !== end) {
        //count++;
        particle = new Ball(mouseX, 10, 10, 10);
    }

    
}