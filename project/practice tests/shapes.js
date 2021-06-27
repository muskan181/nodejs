// const canvas=document.getElementById('circle');
// const cir=canvas.getContext('2d');
// canvas.width=window.innerWidth;
// canvas.height=window.innerHeight;
// // even if we resize it will be managed

// // cir.fillRect(100,50,160,150);
// // for rectangle

// let size=0;
// let positionX=500;
// let positionY=300;
// let angle =0;
// function circle(){
//     cir.fillStyle='red';
//     cir.strokeStyle='blue';
//     cir.lineWidth=5;
//     // stroke style will give color to line width i.e. border of 5 size a blue color
//     cir.beginPath();
//     cir.arc(positionX,positionY,size,0,Math.PI*2);
//     // x-cor, y-cor , rad, start angle and end angle  
//     // for circle
//     cir.closePath() ;
//     cir.fill();
//     cir.stroke();
// }

// function animate(){
//     cir.clearRect(0,0,canvas.width,canvas.height);
//     //it will clear the previous animation
//     size+=0.1;
//     // to increase the size of circle
//     positionX+=5*Math.sin(angle);
//     positionY+=5*Math.cos(angle);
//     // to make the circle move in x and y direction
//     angle+=0.1;
//     //it will make the circle move like a sine wave
//     circle();
//     requestAnimationFrame(animate);
//     // calling animation function again n again for creating a loop
// } 
// animate();

// const canvas2=document.getElementById('rose_petals');
// const cir2=canvas2.getContext('2d');
// canvas2.width=window.innerWidth;
// canvas2.height=window.innerHeight;
// // cir2.globalCompositeOperation='destination-over';
// hue=0;
// // it will draw backwards
// let number=0;
// let scale=10;

// function drawFlower(){
//     let angle =number*0.6;
//     let radius=scale*Math.sqrt(number);
//     let positionX=radius*Math.sin(angle) +canvas2.width/2;
//     let positionY=radius*Math.cos(angle)+canvas2.height/2;

//     cir2.fillStyle='hsl('+ hue +',100%,50%)';
//     // hue will give all type of colours
//     cir2.strokeStyle='black';
//     cir2.lineWidth=5;
//     cir2.beginPath();
//     cir2.arc(positionX,positionY,20,0,Math.PI*2);
//     cir2.closePath() ;
//     cir2.fill();
//     cir2.stroke();
//     number++;
//     hue++;
// }

// function animate2(){
//     drawFlower();
//     requestAnimationFrame(animate2);
// } 
// animate2();

const canvas=document.getElementById('box')
const cir4=canvas.getContext('2d');

var no1=0;


for(var i=0;i<12;i++){
    cir4.setLineDash([3, 3]);
    cir4.moveTo(no1,0);
    cir4.lineTo(no1-50,100);
    cir4.lineTo(no1+50,100);
    cir4.lineTo(no1,0);
    cir4.fillStyle="white";
    cir4.stroke();
    cir4.fill();
    cir4.beginPath();
    no1=no1+200;
}
no1=100;
for(var i=0;i<13;i++){
    cir4.setLineDash([5, 5]);
    cir4.moveTo(no1,0);
    cir4.lineTo(no1-50,100);
    cir4.lineTo(no1+50,100);
    cir4.lineTo(no1,0);
    cir4.fillStyle="#D3D3D3";
    cir4.fill();
    cir4.beginPath();
    no1=no1+200;

}
no1=100;
for(var i=0;i<12;i++){
    cir4.setLineDash([5, 5]);
    cir4.moveTo(no1-50,100);
    cir4.lineTo(no1,200);
    cir4.lineTo(no1-100,200);
    cir4.lineTo(no1-50,100);
    cir4.fillStyle="#D3D3D3";
    cir4.fill();
    cir4.beginPath();
    no1+=100;
}