function setup() {
  createCanvas(4000, 1000);//telinha
  background('green');//muda co da telinha
  
}



function draw() {
  stroke('grenn')
  fill('purple');//muda cor do retangulo 
  
  if(mouseIsPressed){
  rect(mouseX,mouseY, 80, 50)//cria um retagulo (posicaoX, poicaoY, largura, altura)
  
