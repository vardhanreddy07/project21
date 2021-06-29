var canvas;
var music;
var block1,block2,block3,block4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     block1 = createSprite(0,580,360,30);
     block1.shapeColor = "blue"
     block2 = createSprite(295,580,200,30);
     block2.shapeColor = "orange"
     block3= createSprite(515,580,200,30);
     block3.shapeColor = "red"
     block4 = createSprite(740,580,220,30);
     block4.shapeColor = "green"

    //create box sprite and give velocity
    box = createSprite(random(20,750),100,40,40);
    box.shapeColor = "white"
    box.velocityX = 4;
    box.velocityY = 3;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
     edges = createEdgeSprites()
     box.bounceOff(edges)


    //add condition to check if box touching surface and make it 
    if (block1.isTouching(box) && box.bounceOff(block1)){
        box.shapeColor = "Blue"
    }
    if (block2.isTouching(box)) {

        box.shapeColor = "orange"
        box.velocityX = 0
        box.velocityY = 0
    }
    if (block3.isTouching(box) && box.bounceOff(block3)){
        box.shapeColor = "red"
    }
 if (block4.isTouching(box) && box.bounceOff(block4)){
    box.shapeColor = "green"
}
drawSprites()


}
