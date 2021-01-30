var birdImage
var bird
var ground
var backgroundImg
var gameState = 0;
var startButton
var playButtonImg
var startGroup
var gameState="play"

function preload() {

    birdImage = loadImage("BirdFlyingImg.png");
    backgroundImg = loadImage("birdFlyingBackgrround.jpg");
    playButtonImg = loadImage("play.jpg");
}

function setup() {
createCanvas(1200, 600);

   
  
 



    

startButton = createSprite(650, 220, 120, 50);
startButton.addImage(playButtonImg)
startButton.scale = 0.2
    
ground= createSprite(600, 580, 1200, 20);

   bird= createSprite(400,550,20,20)
   bird.visible = false

    
}

function draw() {
   
       
    background(backgroundImg)
    if(keyDown(UP_ARROW)){
        bird.velocityY -= 2;
      }
      bird.velocityY +=0.5
      
     
      if(keyWentDown(LEFT_ARROW)){
        bird.velocityX -= 2;
      }
      
      if(keyWentDown(RIGHT_ARROW)){
        bird.velocityX += 2;
      }
    
      if(keyWentUp(LEFT_ARROW)){
        bird.velocityX =0;
      }
      
      if(keyWentUp(RIGHT_ARROW)){
        bird.velocityX =0;
      }
    
    
    fill("black");
    textSize(30);
    text("! ᖴᒪYIᑎG ᗷIᖇᗪ GᗩᗰE !", 540, 50);
    textSize(25);
    text("ᵐᵃᵏᵉ ᵗʰᵉ ᵇⁱʳᵈ ʲᵘᵐᵖ ᶠʳᵒᵐ ᵒᵇˢᵗᵃᶜˡᵉ ᵗᵒ ᵒᵇˢᵗᵃᶜˡᵉ", 540, 90);
    text("ᵖʳᵉˢˢ ˢᵖᵃᶜᵉ ᵗᵒ ʲᵘᵐᵖ, ᵃⁿᵈ ᵗʰᵉ ᵃʳʳᵒʷ ᵏᵉʸˢ ᵗᵒ ᵐᵒᵛᵉ", 540, 120);
    text("ᴳᵉᵗ ᵗᵒ ᵗʰᵉ ᵗᵒᵖ ᵗᵒ ʷⁱⁿ, ˢᵒ ᵍᵒᵒᵈ ˡᵘᶜᵏ!!", 540, 150);

    
   if(mousePressedOver(startButton)){
     birdsprite();
   }
      bird.collide(ground)

    drawSprites();
}
function birdsprite(){
  
    bird.visible=true
    bird.addImage(birdImage);
    bird.x = 400;
    bird.y = 530;
    bird.scale=0.1
    
    startButton.visible=false
}