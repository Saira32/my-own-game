// HOMEWORK: 
// add image and sound for when the balloon gets popped
// create a reset button and change gameState to 0 

var red, orange, yellow, bg, green, blue, arrowGroup, balloonChosen,start;

var lives = 3;
var score = 0;

var gameState = 0;

function preload() {
  back_img = loadImage("images/pastel.jpeg");
  red_img = loadImage("images/red.png")
  orange_img = loadImage("images/orange.png")
  yellow_img = loadImage("images/yellow.png")
  green_img = loadImage("images/green.png")
  blue_img = loadImage("images/blue.png")
  arrow_img = loadImage("images/arrow (1).png")
  start_img = loadImage("images/start button.jpeg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(windowWidth / 2, windowHeight / 2, width, height)
  bg.scale = 2
  bg.addImage(back_img)

  red = createSprite(300, 600, 10, 10)
  red.addImage(red_img)
  red.scale = 1.5

  orange = createSprite(500, 620, 10, 10)
  orange.addImage(orange_img)
  orange.scale = 1.5


  yellow = createSprite(700, 600, 10, 10)
  yellow.addImage(yellow_img)
  yellow.scale = 1.5


  green = createSprite(900, 590, 10, 10)
  green.addImage(green_img)
  green.scale = 1.5


  blue = createSprite(1100, 600, 10, 10)
  blue.addImage(blue_img)
  blue.scale = 1.5


  arrowGroup = createGroup()

  start= createSprite(680, 420)
  start.addImage(start_img)
  start.scale = .3
  start.visible=false

}

function draw() {
  //background(back_img);
  // background("black")

  if (gameState === 0) {

    if (mousePressedOver(red)) {
      orange.visible = false;
      yellow.visible = false;
      green.visible = false;
      blue.visible = false;
      balloonChosen = red
      balloonChosen1="red"
      gameState = 1
    }


    if (mousePressedOver(orange)) {
      red.visible = false;
      yellow.visible = false;
      green.visible = false;
      blue.visible = false;
      balloonChosen = orange
      balloonChosen1 = "orange"

      gameState = 1
    }

    if (mousePressedOver(yellow)) {
      red.visible = false;
      orange.visible = false;
      green.visible = false;
      blue.visible = false;
      balloonChosen = yellow
      balloonChosen1 = "yellow"

      gameState = 1
    }

    if (mousePressedOver(green)) {
      red.visible = false;
      orange.visible = false;
      yellow.visible = false;
      blue.visible = false;
      balloonChosen = green
      balloonChosen1 = "green"

      gameState = 1
    }

    if (mousePressedOver(blue)) {
      red.visible = false;
      orange.visible = false;
      yellow.visible = false;
      green.visible = false;

      balloonChosen = blue
      balloonChosen1 = "blue"

      gameState = 1

    }
  }

  drawSprites();



  if (gameState === 0) {
    fill("pink")
    textSize(40)
    text("Pop the balloon to choose!", 470, 300)
  }

  if (gameState === 1) {
    //background("cyan")
    message(balloonChosen1);
    start.visible=true;

    if (mousePressedOver(start)) {
      console.log("inside start");
      gameState = 2;
  
    }
  }
  


  if (gameState === 2) {
    bg.visible = true
    start.visible = false;
    balloonChosen.visible = true


    textSize(20)
    text("Lives: "+ lives, windowWidth-300, 30);
    //balloonChosen.debug = true;
    balloonChosen.setCollider("circle", 0,0, 40)

    if (keyIsDown(RIGHT_ARROW)) {
      balloonChosen.x = balloonChosen.x + 10
    }
    if (keyIsDown(LEFT_ARROW)) {
      balloonChosen.x = balloonChosen.x - 10
    }

    
  
    arrow();

    

    if(arrowGroup.isTouching(balloonChosen)){
      lives = lives - 1;
      balloonChosen.visible = false;
      arrowGroup.destroyEach();

      if(lives == 0){
        gameState = 3
      }
      else{
        gameState = 1;
      }
    }



    
  }

  if(gameState === 3){
    balloonChosen.destroy();
    arrowGroup.destroyEach();
    background("black")
    textSize(200)
    fill("white")
    text("GAME OVER", 130, 450)
  }

}

  function message(balloon) {

    fill(balloon)
    textSize(50);
    text("You chose the color " + balloon + "!", 400, 200)
    fill(229, 67, 187)
    textSize(40);
    text("Save your balloon from getting popped...", 365, 300)

  }

  function arrow(){
    if(frameCount %20==0){
      var arrow = createSprite(random(20, windowWidth), 10);
      arrow.addImage(arrow_img);
      arrow.scale = 1.5;
      arrow.velocityY = 12;
      arrow.lifetime = windowHeight/arrow.velocityY;
      arrowGroup.add(arrow); 
    }
  }
