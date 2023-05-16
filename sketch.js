  var ball,edges,paddle,brick
  var score;
  var gamestate
  var vidas
  function setup() {
  createCanvas(400, 400); 
  gameState = "serve";
   
    
 montarjogo();
}


 


function draw() {
  if(vidas<1){
   
     gameState="gameOver"
     
     
     }
 
  background('#b9bada');
  
   
   if(gameState=="gameOver"){ 
      textSize(50)
   text('gameOver',60,200)  
     }
  
  textSize(20);
  text("score:"+score,100,20);    
    text('vidas'+ vidas,200,20);
    
  if(gameState=="serve"){
  text('presione "espaço" para iniciar',60,200)
  
    if (keyDown("SPACE")) {
  gameState = "play";
  ball.velocityY = -5;  
  ball.velocityX = -6; 
  }
}
  
  
  if(gameState == "play"){
   if(!brinks[0]) {
      
   textsize(50);
   text("you re winner",55,200);   
    ball.velocityY = 0
    ball.velocityX = 0
    ball.destroy();
    paddle.destroy();
   }
    for (i = 0; i< 3; i++){
     ball.bounceOff(edges[i]); 
    
    }
    paddle.collide(edges);
    ball.bounceOff(paddle);
    ball.bounceOff(brinks,brickHIT);
    
  if(keyDown(LEFT_ARROW)){
    paddle.velocityX = -6
   } 
    if(keyDown(RIGHT_ARROW)){
    paddle.velocityX = 6
    }
    
    
    if(ball.y > 400){
      vidas-=2
       gameState="serve"
      ball.x=200
      ball.y=250
      ball.velocityX=0
      ball.velocityY=0
      
       }
    
  }
//   if (gameState =="serve") {
  
//    textSize(30)
//     text('',100,200)    
//  }    
   
 
    
    
  drawSprites()
}


  function createRow(y,color) {
   for(i = 0; i<6 ; i++) {
    brick = createSprite(65 + 54 *i,y+ 50,50,25);
    brick.shapeColor =color;
    brinks.add(brick)
   }
  }
    function brickHIT(ball,brick){
     brick.remove();
    score +=5;
    } 

 function montarjogo(){
    ball = createSprite(200,250,20,20);
    ball.shapeColor ="white";
   paddle = createSprite(200,350,120,10);
   paddle.shapeColor ="white" 
    
   edges = createEdgeSprites(); 
    
   brinks = createGroup(); 
    
   createRow(0,"red");
   createRow(29,"yellow");
   createRow(29+29,"green");
   createRow(29+29+29,"blue");
   
   score=0;
   vidas= 2
 
   

 
 
 
 }
   
   
   
   
   
   
   //ball.x=56456
//ball.y=56465
   
   
   
   
   
   