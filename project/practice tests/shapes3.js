// const canvas=document.getElementById('rotateYdIV');
// const cir4=canvas.getContext('2d');
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// console.log("1");

let angle=0;
function setup(){
    createCanvas(400,400);
    // angleMode(DEGREES);
    rectMode(CENTER);

}
function draw(){
    console.log("1");
    background(0);
    // translate(200,100);
    translate (200,200);
    rotate(angle);
    // triangleMode(CENTER);
    fill(255);
    // rect()
    // triangle(-50, 0, 50, 0, 50, 0);
    // triangle(-50, 0, -100, 50, 0, 50);

    // triangle(50, 0, 50, 50, 0, 50);

    for(var i=0;i<8;i++){

    }
    // triangle(0, 0, -50, 50, 50, 50);
    // triangle(-50, 50, -100, 100, 0, 100);

    // triangle(50, 50, 0, 100, 100, 100);
    triangle(0,0,-30,-30,30,-30);
    triangle(0,0,-30,30,30,30);
    translate(-200,-200);
    translate (300,200);
    rotate(angle);
    triangle(60,0,30,30,90,30);
    triangle(60,0,30,-30,90,-30);
    // triangle(0,0,-30,30,30,100);
    // angle+=0.01;
}