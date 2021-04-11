img= "";

function preload(){
    img= loadImage("bedroom.jpg");
}

function setup(){
    canvas= createCanvas(640, 420);
    canvas.position(300, 100);
}

function draw(){
    image(img, 0, 0, 640, 420);
}

function backtohome(){
    window.location= "index.html";
}