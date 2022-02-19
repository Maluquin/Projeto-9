var caixa;
function setup() {
  createCanvas(400,400);
  caixa = createSprite(200,200,25,25);
}

function draw() {
  background(30);
  if(keyisDown("up")){
    caixa.y -= 5;
  }
  if(keyisDown("down")){
    caixa.y += 5;
  }
  drawSprites();
}




