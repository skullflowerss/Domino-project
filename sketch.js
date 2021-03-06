let userFile, userImage, inputImg, option, dominoSize;
let newImg;

function setup(){
  var canvas = createCanvas(100,100);
   canvas.parent('sketch');
  createElement('h3', "upload Pic");
  inputImg = createFileInput(handleNewImg);
  inputImg.elt.accept ="assets/*";

  createElement("h2","Domino piece size");
  dominoSize = createSlider(10,50,5,1);
  dominoSize.changed(handle);

  createElement("h2","invert the colors?=?");
  option = createSelect();
  option.option("white");
  option.option("black");
  option.changed(handle);

  noStroke();
  noLoop();
}

function handle(){
  if(userFile) handleNewImg(userFile);
}

function handleNewImg(file){
  userFile = file;
  userImage = loadImage(file.data, generate);
}

function generate(img){

  let w, h;
  w = img.width;
  h = img.height;

  newImg = createGraphics(w,h);
  newImg.image(img,0,0,w,h);

  var canvas = createCanvas(w,h);
  canvas.parent('sketch');


  background(255);
if(w > h){
  process(newImg,1);
}else{
  process(newImg,2);
}

  redraw();
}

function process(img, op){
  img.loadPixels();

  let size = dominoSize.value();
  if(op == 1){
  for(var x = 0; x < img.width; x+=size){
      for(var y = 0; y < img.height; y+=size){
        var index = (y*img.width+x)*4;
        var r = img.pixels[index+0];
        var g = img.pixels[index+1];
        var b = img.pixels[index+2];

        var brightness = (r+g+b)/3;
        dominoTile(x,y,size,brightness);
      }
    }
  }

  if(op == 2){
    for(var y = 0; y < img.height; y+=size){
        for(var x = 0; x < img.width; x+=size){
          var index = (x+y*img.width)*4;
          var r = img.pixels[index+0];
          var g = img.pixels[index+1];
          var b = img.pixels[index+2];

          var brightness = (r+g+b)/3;
          dominoTile(x,y,size,brightness);
        }
      }

  }


}


function dominoTile(x, y, s, c){

  var colorbg, colordot;
  if(option.value() == "white"){
    colorbg = 255;
    colordot = 0;
  }

  if(option.value() == "black"){
    colorbg = 0;
    colordot = 255;
  }
  var b = map(c,0,255,1,8);
  b = parseInt(b);
  op = b;
  var ss = int(s/10);
  stroke(colordot,100);
  strokeWeight(0.2);

  fill(colorbg);

  beginShape();
  vertex(x,y);
  vertex(x+s,y);
  vertex(x+s,y+s);
  vertex(x,y+s);
  endShape(CLOSE);
  stroke(colordot);
  fill(colordot);
  if(op == 1){

    ellipse(x+s/2,y+s/2,ss,ss);
  }
  if(op == 2){

    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
  }
  if(op == 3){

    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s/2,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
  }
  if(op == 4){
    ellipse(x+s*0.2,y+s*0.2,ss,ss);
    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
    ellipse(x+s*0.8,y+s*0.8,ss,ss);
  }
  if(op == 5){
    ellipse(x+s*0.2,y+s*0.2,ss,ss);
    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s/2,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
    ellipse(x+s*0.8,y+s*0.8,ss,ss);
  }
  if(op == 6){
    ellipse(x+s*0.2,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
    ellipse(x+s*0.8,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.8,ss,ss);
  }
  if(op == 7){
    ellipse(x+s*0.2,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s/2,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
    ellipse(x+s*0.8,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.8,ss,ss);
  }
  if(op == 8){
    ellipse(x+s*0.2,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s*0.8,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
    ellipse(x+s*0.8,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.8,ss,ss);
  }
  if(op == 9){
    ellipse(x+s*0.2,y+s*0.2,ss,ss);
    ellipse(x+s*0.2,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s*0.2,ss,ss);
    ellipse(x+s/2,y+s/2,ss,ss);
    ellipse(x+s/2,y+s*0.8,ss,ss);
    ellipse(x+s*0.2,y+s*0.8,ss,ss);
    ellipse(x+s*0.8,y+s/2,ss,ss);
    ellipse(x+s*0.8,y+s*0.8,ss,ss);
  }
}
