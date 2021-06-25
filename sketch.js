var canvas;
var music;
var disk1,disk2,disk3,disk4;
var box;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    disk1=createSprite(90,590,180,20)
    disk1.shapeColor="blue"
    disk2=createSprite(280,590,180,20)
    disk2.shapeColor="orange"
    disk3=createSprite(480,590,180,20)
    disk3.shapeColor="cyan"
    disk4=createSprite(680,590,180,20)
    disk4.shapeColor="yellow"

    box = createSprite(Math.round(random(20,780)),300,30,30);
    box.velocityX = Math.round(random(1,6));
    box.velocityY = 10


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);

   
    //add condition to check if box touching surface and make it box
    if(box.isTouching(disk1)){
        box.shapeColor="blue"
        music.play();
    } 
    if(box.isTouching(disk2)){
        box.shapeColor="orange"
        music.play();
    } 
    if(box.isTouching(disk3)){
        box.shapeColor="cyan"
        music.play();
    } 
    if(box.isTouching(disk4)){
        box.shapeColor="yellow"
        music.play();
    } 




    drawSprites();
}
