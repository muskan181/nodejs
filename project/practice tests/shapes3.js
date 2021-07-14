// const canvas=document.getElementById('rotateYdIV');
// const cir4=canvas.getContext('2d');
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// console.log("1");

let angle=0;
function setup(){
    createCanvas(800,800);
    angleMode(DEGREES);
    // rectMode(CENTER);

}
function draw(){
    console.log("1");
    background(0);
    translate(200,200)
    rotate(angle);
    fill(255);
    triangle(0,0,-50,-100,50,-100);
    triangle(0,0,-100,0,-50,100);
    triangle(0,0,100,0,50,100);
    // translate(-200,-200);
    
    translate(100,0)
    rotate(angle);
    fill(255);
    triangle(0,0,-50,-100,50,-100);
    triangle(0,0,-100,0,-50,100);
    triangle(0,0,100,0,50,100);

    angle+=1;
    
}