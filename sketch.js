var voterCount=0;
var mamataCount=0;
var gangulyCount=0;
var owaisiCount=0;
var gandhiCount=0;
var form;
var gameState=0;
console.log(gangulyCount);

function setup() {
  createCanvas(800,400);
  form=new Form();
}

function draw() {
  background(255,255,255);  
  stroke("black");
  strokeWeight(5);
  textSize(50);
  
  form.display();
if(voterCount===5){
  gameState=1;
}
if(gameState===1){ 
  if(mamataCount>gangulyCount && mamataCount>owaisiCount && mamataCount>gandhiCount)
  {
   
    text("5 MORE YEARS",200,200);
  }

  
  else if(gangulyCount>mamataCount && gangulyCount>owaisiCount && gangulyCount>gandhiCount)
  {
  
    text("BJP WINS",200,200);
  }

  else if(owaisiCount>mamataCount && owaisiCount>gangulyCount && owaisiCount>gandhiCount)
  {
   
    text("OWAISI WINS",200,200);
  }

  else if(gandhiCount>mamataCount && gandhiCount>owaisiCount && gandhiCount>gangulyCount)
  {
 
    text("YOU JUST RUINED BENGAL",200,200);
  }

  else
  text("NO RESULT",200,200);
}
  drawSprites();
  console.log(voterCount);
} 