var a,b
function setup() {
  createCanvas(800,400);
a=createSprite(400, 200, 40, 40);
a.shapeColor="green"
b=createSprite(300,100,10,10);
b.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  a.x=mouseX
  a.y=mouseY
 //console.log(a.y-b.y)
  if(a.x-b.x<a.width/2+b.width/2 && b.x-a.x<a.width/2+b.width/2 && a.y-b.y<a.width/2+b.width/2 && b.y-a.y<a.width/2+b.width/2){
    a.shapeColor="red"
    b.shapeColor="red"
  }
  else
  {
    a.shapeColor="green"
    b.shapeColor="green"
  }
   drawSprites();
}