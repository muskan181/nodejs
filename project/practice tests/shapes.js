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

const canvas=document.getElementById('triangle1')
const cir4=canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
// var no1=0;

// let positionX=200;
let positionX1=100;
// let positionX2=100;
let positionY=100;
// let positionY2=100;
// // let positionY3=100;
// function triangle(){
//     // for(var i=0;i<12;i++){
            // console.log("jsndk");
            // cir4.setLineDash([3, 3]);
            // cir4.moveTo(positionX,positionY-100);
            // cir4.lineTo(positionX-50,positionY);
            // cir4.lineTo(positionX+50,positionY);
//             cir4.lineTo(positionX,positionY-100);
//             cir4.fillStyle="white";
//             cir4.stroke();  
//             cir4.fill();
//             cir4.beginPath();
//             // positionX+=200;
     
//     // }

// }
//     // for(var i=0;i<13;i++){
//         // cir4.setLineDash([5, 5]);
function triangle1(){
        cir4.moveTo(positionX1,positionY-100);
        cir4.lineTo(positionX1-50,positionY);
        cir4.lineTo(positionX1+50,positionY);
        cir4.lineTo(positionX1,positionY-100);
        cir4.fillStyle="#D3D3D3";
        cir4.fill();
        // triangle2();

        // positionX1+=200;
}
//     // }
//     // positionX=100;
//     // for(var i=0;i<12;i++){
//         // cir4.setLineDash([5, 5]);
// function triangle2(){
//         cir4.moveTo(positionX2-50,positionY2);
//         cir4.lineTo(positionX2,positionY2+100);
//         cir4.lineTo(positionX2-100,positionY2+100);
//         cir4.lineTo(positionX2-50,positionY);
//         cir4.fillStyle="#D3D3D3";
//         cir4.fill();
        // positionX2+=100;
    // }
        // triangle1();

// }

// // for(var i=0;i<12;i++){
// //     cir4.setLineDash([3, 3]);
// //     cir4.moveTo(no1,0);
// //     cir4.lineTo(no1-50,100);
// //     cir4.lineTo(no1+50,100);
// //     cir4.lineTo(no1,0);
// //     cir4.fillStyle="white";
// //     cir4.stroke();
// //     cir4.fill();
// //     cir4.beginPath();
// //     no1=no1+200;
// // }
// // no1=100;
// // for(var i=0;i<13;i++){
// //     cir4.setLineDash([5, 5]);
// //     cir4.moveTo(no1,0);
// //     cir4.lineTo(no1-50,100);
// //     cir4.lineTo(no1+50,100);
// //     cir4.lineTo(no1,0);
// //     cir4.fillStyle="#D3D3D3";
// //     cir4.fill();
// //     cir4.beginPath();
// //     no1=no1+200;

// // }
// // no1=100;
// // for(var i=0;i<12;i++){
// //     cir4.setLineDash([5, 5]);
// //     cir4.moveTo(no1-50,100);
// //     cir4.lineTo(no1,200);
// //     cir4.lineTo(no1-100,200);
// //     cir4.lineTo(no1-50,100);
// //     cir4.fillStyle="#D3D3D3";
// //     cir4.fill();
// //     cir4.beginPath();
// //     no1+=100;
// // }
// let count=0;
angle=0;
function animate(){
    cir4.clearRect=(0,0,canvas.width,canvas.height);
    // positionX+=Math.sin(angle);
    // positionX1+=Math.sin(angle);
    // positionX2+=Math.sin(angle);
    // positionY+=Math.sin(angle);
    // positionY2+=Math.sin(angle);
    // positionY3+=Math.sin(angle);
    // angle+=0.1;
//     const width = 150,
//     height = 20;

// // canvas center X and Y
//     const centerX = canvas.width / 2,
//         centerY = canvas.height / 2;
//     cir4.translate(centerX, centerY);
//     cir4.rotate(45 * Math.PI / 180);

    // triangle();
    triangle1();
    // triangle2();
    requestAnimationFrame(animate);
} 
animate();
// // function animate2(){
// //     cir4.clearRect=(0,0,canvas.width,canvas.height);
// //     // positionX+=100*Math.sin(angle);
// //     // positionX1+=1*Math.sin(angle);
// //     // positionX2+=50*Math.sin(angle);
// //     angle+=1;
// //     // triangle();
// //     triangle1();
// //     requestAnimationFrame(animate3);
// // } 
// // animate2();
// // function animate3(){
// //     cir4.clearRect=(0,0,canvas.width,canvas.height);
// //     // positionX+=100*Math.sin(angle);
// //     // positionX1+=1*Math.sin(angle);
// //     // positionX2+=50*Math.sin(angle);
// //     angle+=1;
// //     triangle2();
// //     requestAnimationFrame(animate3);
// // } 
// // animate3();
