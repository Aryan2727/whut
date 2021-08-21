var square1,square1IMG
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,groundIMG
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle9,obstacle10,obstacle11,obstacle12,obstacle13,obstacle14,pbstacle15,obstacle16,obstacle17,obstacle18,obstacle19,obstacle20,obstacle21,obstacle22,obstacle23,obstacle24,obstacle25,obstacle26,obstacle27,obstacle28,obstacle29,obstacle31,obstacle32,obstacle33,obstacle34,obstacle35,obstacle36,obstacle37,obstacle38,obstacle39,obstacle40,obstacle41,obstacle42,obstacle43,obstacle44,obstacle45,obstacle46,obstacle47,obstacle48,obstacle49,obstacle50,obstacleIMG,obstacleIMG2,obstacle3IMG,obstacle4IMG
var flag1
var deathCount = 0
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var restartIMG,gameOverIMG,restart1,gameOver,whitebox,whiteboxIMG;


function preload(){
  square1IMG = loadImage("images/square.png")
  groundIMG = loadImage("images/ground.png")
  obstacleIMG = loadImage("images/obstacle.png")
  obstacleIMG2 = loadImage("images/obstacle2.png")
  obstacleIMG3 = loadImage("images/obstacle3.png")
  obstacleIMG4 = loadImage("images/obstacle4.png")
  restartIMG = loadImage("images/restart.png")
  gameOverIMG = loadImage("images/gameOver.png")
  whiteboxIMG = loadImage("images/box.png")
}
function setup() {
  createCanvas(1200, 600);
 
  

//pc
  square1 = createSprite(60,30,30,30)
  square1.addImage(square1IMG)
  square1.scale = 0.3

  obstaclesGroup = new Group()
  obstacles()

//grounds
  ground1 = createSprite(0,120,300,20)
  ground1.addImage(groundIMG)
  ground1.shapeColor = "brown"
  ground1.scale = 0.3

  ground2 = createSprite(300,120,300,20)
  ground2.addImage(groundIMG)
  ground2.shapeColor = "brown"
  ground2.scale = 0.3

  ground3 = createSprite(600,120,300,20)
  ground3.addImage(groundIMG)
  ground3.shapeColor = "brown"
  ground3.scale = 0.3

  ground4 = createSprite(900,120,300,20)
  ground4.addImage(groundIMG)
  ground4.shapeColor = "brown"
  ground4.scale = 0.3

  ground5 = createSprite(1200,250,300,20)
  ground5.addImage(groundIMG)
  ground5.shapeColor = "brown"
  ground5.scale = 0.3

  ground6 = createSprite(900,250,300,20)
  ground6.addImage(groundIMG)
  ground6.shapeColor = "brown"
  ground6.scale = 0.3

  ground7 = createSprite(600,250,300,20)
  ground7.addImage(groundIMG)
  ground7.shapeColor = "brown"
  ground7.scale = 0.3

  ground8 = createSprite(300,250,300,20)
  ground8.addImage(groundIMG)
  ground8.shapeColor = "brown"
  ground8.scale = 0.3
  
  ground9 = createSprite(0,400,300,20)
  ground9.addImage(groundIMG)
  ground9.shapeColor = "brown"
  ground9.scale = 0.3

  ground10 = createSprite(300,400,300,20)
  ground10.addImage(groundIMG)
  ground10.shapeColor = "brown"
  ground10.scale = 0.3

  ground11 = createSprite(600,400,300,20)
  ground11.addImage(groundIMG)
  ground11.shapeColor = "brown"
  ground11.scale = 0.3

  ground12 = createSprite(900,400,300,20)
  ground12.addImage(groundIMG)
  ground12.shapeColor = "brown"
  ground12.scale = 0.3

  ground13 = createSprite(1200,550,300,20)
  ground13.addImage(groundIMG)
  ground13.shapeColor = "brown"
  ground13.scale = 0.3

  ground14 = createSprite(900,550,300,20)
  ground14.addImage(groundIMG)
  ground14.shapeColor = "brown"
  ground14.scale = 0.3

  ground15 = createSprite(600,550,300,20)
  ground15.addImage(groundIMG)
  ground15.shapeColor = "brown"
  ground15.scale = 0.3

  ground16 = createSprite(300,550,300,20)
  ground16.addImage(groundIMG)
  ground16.shapeColor = "brown"
  ground16.scale = 0.3

  ground17 = createSprite(0,20,300,20)
  ground17.addImage(groundIMG)
  ground17.shapeColor = "brown"
  ground17.scale = 0.3

  ground18 = createSprite(300,20,300,20)
  ground18.addImage(groundIMG)
  ground18.shapeColor = "brown"
  ground18.scale = 0.3

  ground19 = createSprite(600,20,300,20)
  ground19.addImage(groundIMG)
  ground19.shapeColor = "brown"
  ground19.scale = 0.3

  ground20 = createSprite(900,20,300,20)
  ground20.addImage(groundIMG)
  ground20.shapeColor = "brown"
  ground20.scale = 0.3

  ground21 = createSprite(1200,20,300,20)
  ground21.addImage(groundIMG)
  ground21.shapeColor = "brown"
  ground21.scale = 0.3

  ground22 = createSprite(0,600,300,20)
  ground22.addImage(groundIMG)
  ground22.shapeColor = "brown"
  ground22.scale = 0.3

  //setting collider for all sprites
  square1.setCollider("rectangle",-50,-30,80,80)
  //square1.debug = true
  ground1.setCollider("rectangle",230,-60,500,40)
  //ground1.debug = true
  ground2.setCollider("rectangle",0,-60,1000,40)
  //ground2.debug = true
  ground3.setCollider("rectangle",0,-60,1000,40)
  //ground3.debug = true
  ground4.setCollider("rectangle",0,-60,1000,40)
  //ground4.debug = true
  ground5.setCollider("rectangle",0,-60,1000,40)
  //ground5.debug = true
  ground6.setCollider("rectangle",0,-60,1000,40)
  //ground6.debug = true
  ground7.setCollider("rectangle",0,-60,1000,40)
  //ground7.debug = true
  ground8.setCollider("rectangle",0,-60,1000,40)
  //ground8.debug = true
  ground9.setCollider("rectangle",0,-60,1000,40)
  //ground9.debug = true
  ground10.setCollider("rectangle",0,-60,1000,40)
  //ground10.debug = true
  ground11.setCollider("rectangle",0,-60,1000,40)
  //ground11.debug = true
  ground12.setCollider("rectangle",0,-60,1000,40)
  //ground12.debug = true
  ground13.setCollider("rectangle",0,-60,1000,40)
  //ground13.debug = true
  ground14.setCollider("rectangle",0,-60,1000,40)
  //ground14.debug = true
  ground15.setCollider("rectangle",0,-60,1000,40)
  //ground15.debug = true
  ground16.setCollider("rectangle",0,-60,1000,40)
  //ground16.debug = true
  ground17.setCollider("rectangle",0,-60,1000,40)
  //ground17.debug = true
  ground18.setCollider("rectangle",0,-60,1000,40)
  //ground18.debug = true
  ground19.setCollider("rectangle",0,-60,1000,40)
  //ground19.debug = true
  ground20.setCollider("rectangle",0,-60,1000,40)
  //ground20.debug = true
  ground21.setCollider("rectangle",0,-60,1000,40)
  //ground21.debug = true
  ground22.setCollider("rectangle",0,-60,1000,40)
  //ground22.debug = true

  //obstacles
  obstacle1.setCollider("circle",-40,-60,40)
  //obstacle1.debug = true
  obstacle2.setCollider("circle",-40,-60,40)
  //obstacle2.debug = true
  obstacle3.setCollider("circle",140,-60,40)
  //obstacle3.debug = true
  obstacle4.setCollider("circle",-40,-60,40)
  //obstacle4.debug = true
  obstacle5.setCollider("circle",-40,-60,40)
  //obstacle5.debug = true
  obstacle6.setCollider("circle",-40,-60,40)
  //obstacle6.debug = true
  obstacle7.setCollider("circle",140,-70,40)
  //obstacle7.debug = true
  obstacle8.setCollider("circle",140,-70,40)
  //obstacle8.debug = true
  obstacle9.setCollider("circle",140,-70,40)
  //obstacle9.debug = true
  obstacle10.setCollider("rectangle",-40,-30,100,100)
  //obstacle10.debug = true
  obstacle11.setCollider("rectangle",-40,-15,100,100)
  //obstacle11.debug = true
  obstacle12.setCollider("circle",-40,-40,40)
  //obstacle12.debug = true
  obstacle13.setCollider("circle",-40,-40,40)
  //obstacle13.debug = true
  obstacle14.setCollider("circle",-40,-40,40)
  //obstacle14.debug = true
  obstacle15.setCollider("circle",140,-70,40)
  //obstacle15.debug = true
  obstacle16.setCollider("circle",-40,-40,40)
  //obstacle16.debug = true
  obstacle17.setCollider("circle",-40,-40,40)
  //obstacle17.debug = true
  obstacle18.setCollider("circle",-40,-40,40)
  //obstacle18.debug = true
  obstacle19.setCollider("circle",-190,-70,40)
  //obstacle19.debug = true
  obstacle20.setCollider("circle",-190,-70,40)
  //obstacle20.debug = true
  obstacle21.setCollider("circle",810,-70,40)
  //obstacle21.debug = true
  obstacle22.setCollider("rectangle",-40,-20,100,100)
  //obstacle22.debug = true
  obstacle23.setCollider("circle",-40,-40,40)
  //obstacle23.debug = true
  obstacle24.setCollider("circle",-40,-40,40)
  //obstacle24.debug = true
  obstacle25.setCollider("circle",-40,-40,40)
  //obstacle25.debug = true
  obstacle26.setCollider("circle",-40,-40,40)
  //obstacle26.debug = true
  obstacle27.setCollider("circle",140,-70,40)
  //obstacle27.debug = true
  obstacle28.setCollider("circle",-40,-40,40)
  //obstacle28.debug = true
  obstacle29.setCollider("circle",-40,-40,40)
  //obstacle29.debug = true
  obstacle30.setCollider("circle",-40,-40,40)
  //obstacle30.debug = true
  obstacle31.setCollider("circle",140,-70,40)
  //obstacle31.debug = true
  obstacle32.setCollider("circle",140,-70,40)
  //obstacle32.debug = true
  obstacle33.setCollider("circle",140,-70,40)
  //obstacle33.debug = true
  obstacle34.setCollider("rectangle",-40,-25,100,100)
  //obstacle34.debug = true
  obstacle35.setCollider("rectangle",-40,-25,100,100)
  //obstacle35.debug = true
  obstacle36.setCollider("circle",-40,-70,40)
  //obstacle36.debug = true
  obstacle37.setCollider("circle",-40,-70,40)
  //obstacle37.debug = true
  obstacle38.setCollider("circle",-40,-60,40)
  //obstacle38.debug = true
  obstacle39.setCollider("circle",140,-70,40)
  //obstacle39.debug = true
  obstacle40.setCollider("circle",-40,-70,40)
  //obstacle40.debug = true
  obstacle41.setCollider("circle",-40,-70,40)
  //obstacle41.debug = true
  obstacle42.setCollider("circle",-40,-70,40)
  //obstacle42.debug = true
  obstacle43.setCollider("circle",-40,-70,40)
  //obstacle43.debug = true
  obstacle44.setCollider("circle",-40,-70,40)
  //obstacle44.debug = true
  obstacle45.setCollider("circle",140,-70,40)
  //obstacle45.debug = true
  obstacle46.setCollider("circle",140,-70,40)
  //obstacle46.debug = true
  obstacle47.setCollider("circle",140,-70,40)
  //obstacle47.debug = true
  obstacle48.setCollider("circle",140,-70,40)
  //obstacle48.debug = true
  obstacle49.setCollider("rectangle",-40,-85,40,150)
  //obstacle49.debug = true
  obstacle50.setCollider("rectangle",-380,-85,40,350)
  //obstacle50.debug = true
 
}
function draw() {
 
background("black")

if(gameState === PLAY){

if(keyDown("space")) {
  square1.velocityY = -12;
}
square1.velocityY += 1                

colliding()

keys()

if(square1.isTouching(obstaclesGroup) && square1.y > 373){
  deathCount++
  square1.x = 1050
  square1.y = 450
 }
if(square1.isTouching(obstaclesGroup) && square1.y > 223){
  deathCount++
  square1.x = 210
  square1.y = 315
 }
if(square1.isTouching(obstaclesGroup) &&square1.y > 95){
  deathCount++
  square1.x = 1100
  square1.y = 170
 }
if(square1.isTouching(obstaclesGroup)){
 deathCount++
 square1.x = 60
 square1.y = 30

 }
 
 if(square1.isTouching(ground22)){
   gameState = END
   
 }
textSize(15) 
fill("white") 
text("Checkpoint 1",1050,175)
text("Checkpoint 2",160,320)
text("Checkpoint 3",1000,475)

textSize(23)
fill("white")
text("death count :" + deathCount,30,40)




drawSprites(); 
   }
function keys(){
  if(keyDown(RIGHT_ARROW)){
  square1.x += 6
  }
  if(keyDown(LEFT_ARROW)){
    square1.x -= 6
    }
}
if(gameState === END){
  textSize(70)
  background("red")
  fill("white")
  text("ENDED",500,500)
  restart()
  reset1();
  drawSprites();
}
}


function colliding(){
  square1.collide(ground1)
  square1.collide(ground2)
  square1.collide(ground3)
  square1.collide(ground4)
  square1.collide(ground5)
  square1.collide(ground6)
  square1.collide(ground7)
  square1.collide(ground8)
  square1.collide(ground9)
  square1.collide(ground10)
  square1.collide(ground11)
  square1.collide(ground12)
  square1.collide(ground13)
  square1.collide(ground14)
  square1.collide(ground15)
  square1.collide(ground16)
  square1.collide(ground17)
  square1.collide(ground18)
  square1.collide(ground19)
  square1.collide(ground20)
  square1.collide(ground21)

  //obstacles
   obstacle2.bounceOff(ground18)
   obstacle2.bounceOff(ground2)
   obstacle3.bounceOff(ground18)
   obstacle3.bounceOff(ground2)
   obstacle12.bounceOff(ground4)
   obstacle12.bounceOff(ground6)
   obstacle15.bounceOff(ground4)
   obstacle15.bounceOff(ground6)
   obstacle22.bounceOff(ground8)
   obstacle22.bounceOff(ground2)
   obstacle26.bounceOff(ground8)
   obstacle26.bounceOff(ground10)
   obstacle27.bounceOff(ground8)
   obstacle27.bounceOff(ground10)
   obstacle34.bounceOff(ground12)
   obstacle34.bounceOff(ground6)
   obstacle35.bounceOff(ground12)
   obstacle35.bounceOff(ground6)
   obstacle38.bounceOff(ground12)
   obstacle38.bounceOff(ground14)
   obstacle39.bounceOff(ground12)
   obstacle39.bounceOff(ground14)
   obstacle49.bounceOff(ground10)
   obstacle49.bounceOff(ground16)
   obstacle49.bounceOff(ground9)
   

}
function obstacles(){
  obstacle1 = createSprite(120,95,30,30)
  obstacle1.addImage(obstacleIMG)
  obstacle1.scale = 0.3

  obstacle4 = createSprite(700,95,30,30)
  obstacle4.addImage(obstacleIMG)
  obstacle4.scale = 0.3

  obstacle5 = createSprite(670,95,30,30)
  obstacle5.addImage(obstacleIMG)
  obstacle5.scale = 0.3

  obstacle6 = createSprite(640,95,30,30)
  obstacle6.addImage(obstacleIMG)
  obstacle6.scale = 0.3

  obstacle7 = createSprite(750,50,30,30)
  obstacle7.addImage(obstacleIMG2)
  obstacle7.scale = 0.3

  obstacle8 = createSprite(780,50,30,30)
  obstacle8.addImage(obstacleIMG2)
  obstacle8.scale = 0.3

  obstacle9 = createSprite(810,50,30,30)
  obstacle9.addImage(obstacleIMG2)
  obstacle9.scale = 0.3

  obstacle10 = createSprite(1000,45,30,30)
  obstacle10.addImage(obstacleIMG3)
  obstacle10.scale = 0.5

  obstacle11 = createSprite(1100,90,30,30)
  obstacle11.addImage(obstacleIMG3)
  obstacle11.scale = 0.5

  obstacle13 = createSprite(1150,225,30,30)
  obstacle13.addImage(obstacleIMG)
  obstacle13.scale = 0.3

  obstacle14 = createSprite(1180,225,30,30)
  obstacle14.addImage(obstacleIMG)
  obstacle14.scale = 0.3

  obstacle16 = createSprite(650,225,30,30)
  obstacle16.addImage(obstacleIMG)
  obstacle16.scale = 0.3

  obstacle17 = createSprite(550,225,30,30)
  obstacle17.addImage(obstacleIMG)
  obstacle17.scale = 0.3

  obstacle18 = createSprite(450,225,30,30)
  obstacle18.addImage(obstacleIMG)
  obstacle18.scale = 0.3

  obstacle19 = createSprite(550,145,30,30)
  obstacle19.addImage(obstacleIMG2)
  obstacle19.scale = 0.3

  obstacle20 = createSprite(450,145,30,30)
  obstacle20.addImage(obstacleIMG2)
  obstacle20.scale = 0.3

  obstacle21 = createSprite(350,145,30,30)
  obstacle21.addImage(obstacleIMG2)
  obstacle21.scale = 0.3

  obstacle23 = createSprite(100,375,30,30)
  obstacle23.addImage(obstacleIMG)
  obstacle23.scale = 0.3
  
  obstacle24 = createSprite(50,375,30,30)
  obstacle24.addImage(obstacleIMG)
  obstacle24.scale = 0.3
 
  obstacle25 = createSprite(150,375,30,30)
  obstacle25.addImage(obstacleIMG)
  obstacle25.scale = 0.3

  obstacle28 = createSprite(550,375,30,30)
  obstacle28.addImage(obstacleIMG)
  obstacle28.scale = 0.3

  obstacle29 = createSprite(670,375,30,30)
  obstacle29.addImage(obstacleIMG)
  obstacle29.scale = 0.3

  obstacle30 = createSprite(790,375,30,30)
  obstacle30.addImage(obstacleIMG)
  obstacle30.scale = 0.3

  obstacle31 = createSprite(550,275,30,30)
  obstacle31.addImage(obstacleIMG2)
  obstacle31.scale = 0.3

  obstacle32 = createSprite(670,275,30,30)
  obstacle32.addImage(obstacleIMG2)
  obstacle32.scale = 0.3

  obstacle33 = createSprite(790,275,30,30)
  obstacle33.addImage(obstacleIMG2)
  obstacle33.scale = 0.3

  obstacle36 = createSprite(1100,525,30,30)
  obstacle36.addImage(obstacleIMG)
  obstacle36.scale = 0.3

  obstacle37 = createSprite(1130,525,30,30)
  obstacle37.addImage(obstacleIMG)
  obstacle37.scale = 0.3

  obstacle40 = createSprite(250,525,30,30)
  obstacle40.addImage(obstacleIMG)
  obstacle40.scale = 0.3

  obstacle41 = createSprite(370,525,30,30)
  obstacle41.addImage(obstacleIMG)
  obstacle41.scale = 0.3

  obstacle42 = createSprite(490,525,30,30)
  obstacle42.addImage(obstacleIMG)
  obstacle42.scale = 0.3

  obstacle43 = createSprite(610,525,30,30)
  obstacle43.addImage(obstacleIMG)
  obstacle43.scale = 0.3

  obstacle44 = createSprite(730,525,30,30)
  obstacle44.addImage(obstacleIMG)
  obstacle44.scale = 0.3

  obstacle45 = createSprite(250,425,30,30)
  obstacle45.addImage(obstacleIMG2)
  obstacle45.scale = 0.3

  obstacle46 = createSprite(370,425,30,30)
  obstacle46.addImage(obstacleIMG2)
  obstacle46.scale = 0.3

  obstacle47 = createSprite(490,425,30,30)
  obstacle47.addImage(obstacleIMG2)
  obstacle47.scale = 0.3

  obstacle48 = createSprite(610,425,30,30)
  obstacle48.addImage(obstacleIMG2)
  obstacle48.scale = 0.3

  obstacle50 = createSprite(120,95,30,30)
  obstacle50.scale = 0.3


  //moving obstacles
  obstacle2 = createSprite(300,100,30,30)
  obstacle2.addImage(obstacleIMG)
  obstacle2.scale = 0.3
  obstacle2.velocityY = -4

  obstacle3 = createSprite(400,50,30,30)
  obstacle3.addImage(obstacleIMG2)
  obstacle3.scale = 0.3
  obstacle3.velocityY = -4

  obstacle12 = createSprite(810,225,30,30)
  obstacle12.addImage(obstacleIMG)
  obstacle12.scale = 0.3
  obstacle12.velocityY = -4

  obstacle15 = createSprite(900,145,30,30)
  obstacle15.addImage(obstacleIMG2)
  obstacle15.scale = 0.3
  obstacle15.velocityY = -4

  obstacle22 = createSprite(250,215,60,60)
  obstacle22.addImage(obstacleIMG3)
  obstacle22.scale = 0.5
  obstacle22.velocityY = -3

  obstacle26 = createSprite(250,375,30,30)
  obstacle26.addImage(obstacleIMG)
  obstacle26.scale = 0.3
  obstacle26.velocityY = -4

  obstacle27 = createSprite(350,275,30,30)
  obstacle27.addImage(obstacleIMG2)
  obstacle27.scale = 0.3
  obstacle27.velocityY = -4

  obstacle34 = createSprite(950,365,60,60)
  obstacle34.addImage(obstacleIMG3)
  obstacle34.scale = 0.5
  obstacle34.velocityY = -4

  obstacle35 = createSprite(1050,275,60,60)
  obstacle35.addImage(obstacleIMG3)
  obstacle35.scale = 0.5
  obstacle35.velocityY = 4

  obstacle38 = createSprite(970,525,30,30)
  obstacle38.addImage(obstacleIMG)
  obstacle38.scale = 0.3
  obstacle38.velocityY = -4

  obstacle39 = createSprite(770,425,30,30)
  obstacle39.addImage(obstacleIMG2)
  obstacle39.scale = 0.3
  obstacle39.velocityY = -4

  obstacle49 = createSprite(165,530,30,30)
  obstacle49.addImage(obstacleIMG4)
  obstacle49.scale = 0.4
  obstacle49.velocityY = -6


  obstaclesGroup.add(obstacle1)
  obstaclesGroup.add(obstacle2)
  obstaclesGroup.add(obstacle3)
  obstaclesGroup.add(obstacle4)
  obstaclesGroup.add(obstacle5)
  obstaclesGroup.add(obstacle6)
  obstaclesGroup.add(obstacle7)
  obstaclesGroup.add(obstacle8)
  obstaclesGroup.add(obstacle9)
  obstaclesGroup.add(obstacle10)
  obstaclesGroup.add(obstacle11)
  obstaclesGroup.add(obstacle12)
  obstaclesGroup.add(obstacle13)
  obstaclesGroup.add(obstacle14)
  obstaclesGroup.add(obstacle15)
  obstaclesGroup.add(obstacle16)
  obstaclesGroup.add(obstacle17)
  obstaclesGroup.add(obstacle18)
  obstaclesGroup.add(obstacle19)
  obstaclesGroup.add(obstacle20)
  obstaclesGroup.add(obstacle21)
  obstaclesGroup.add(obstacle22)
  obstaclesGroup.add(obstacle23)
  obstaclesGroup.add(obstacle24)
  obstaclesGroup.add(obstacle25)
  obstaclesGroup.add(obstacle26)
  obstaclesGroup.add(obstacle27)
  obstaclesGroup.add(obstacle28)
  obstaclesGroup.add(obstacle29)
  obstaclesGroup.add(obstacle30)
  obstaclesGroup.add(obstacle31)
  obstaclesGroup.add(obstacle32)
  obstaclesGroup.add(obstacle33)
  obstaclesGroup.add(obstacle34)
  obstaclesGroup.add(obstacle35)
  obstaclesGroup.add(obstacle36)
  obstaclesGroup.add(obstacle37)
  obstaclesGroup.add(obstacle38)
  obstaclesGroup.add(obstacle39)
  obstaclesGroup.add(obstacle40)
  obstaclesGroup.add(obstacle41)
  obstaclesGroup.add(obstacle42)
  obstaclesGroup.add(obstacle43)
  obstaclesGroup.add(obstacle44)
  obstaclesGroup.add(obstacle45)
  obstaclesGroup.add(obstacle46)
  obstaclesGroup.add(obstacle47)
  obstaclesGroup.add(obstacle48)
  obstaclesGroup.add(obstacle49)
  obstaclesGroup.add(obstacle50)
 
}
function restart(){
  whitebox = createSprite(displayWidth/2,displayHeight/2-50,400,400)
  whitebox.addImage(whiteboxIMG)
  restart1 = createSprite(displayWidth/2,displayHeight/2,100,100)
  restart1.addImage(restartIMG)
  gameOver = createSprite(displayWidth/2,displayHeight/2-100)
  gameOver.addImage(gameOverIMG)
  
}
function reset1(){
 if(mousePressedOver(restart1)){
   gameState = PLAY
   gameOver.visible = false
   restart1.visible = false
  // whitebox.visible = false
 }
}