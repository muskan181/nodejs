const canvas1=document.getElementById('triangle1')
const cir1=canvas1.getContext('2d');
canvas1.width=window.innerWidth;
canvas1.height=window.innerHeight;

const canvas2=document.getElementById('triangle2')
const cir2=canvas2.getContext('2d');
canvas2.width=window.innerWidth;
canvas2.height=window.innerHeight;

const canvas3=document.getElementById('triangle3')
const cir3=canvas3.getContext('2d');
canvas3.width=window.innerWidth;
canvas3.height=window.innerHeight;

const canvas4=document.getElementById('triangle4')
const cir4=canvas4.getContext('2d');
canvas4.width=window.innerWidth;
canvas4.height=window.innerHeight;

const canvas5=document.getElementById('triangle5')
const cir5=canvas5.getContext('2d');
canvas5.width=window.innerWidth;
canvas5.height=window.innerHeight;

const canvas6=document.getElementById('triangle6')
const cir6=canvas6.getContext('2d');
canvas6.width=window.innerWidth;
canvas6.height=window.innerHeight;
//first slide


var n1=1;
var n2=1;
var n3=1;
var n4=1;
var n5=1;
var n6=1;
var color1;
var color2;
var color3;
var color4;
var color5;
var color6;
function main1(color1){
    var no=1;
    var no1=50;
for(var i=0;i<15;i++){
    cir1.fillStyle = color1 ;

    cir1.moveTo(no1,0);
    cir1.lineTo(no1+50,100);
    cir1.lineTo(no1+100,0);
    cir1.lineTo(no1,0);
    // cir1.stroke();
    cir1.fill();
    cir1.closePath();

    if(no==2){
        no1+=400;
        no=1;
    }
    else{
        no1+=200;
        no++;
    }
}
no1=0;
no=0;
for(var i=0;i<15;i++){
    cir1.fillStyle = color1 ;
    // cir1.beginPath();
    
    cir1.moveTo(no1,100);

    cir1.lineTo(no1+50,200);
    cir1.lineTo(no1+100,100);
    cir1.lineTo(no1,100);
    
    // cir1.lineTo(no1+50,100);
    
    // cir1.stroke();
    cir1.fill();
    cir1.closePath();
    if(no==3){
        no1=no1+300;  
        no=0;
    }else{
        no1+=100; 
        no++;
    }
    // no++;
}
}
function main2(color2){

// second slide
no=0;
no1=50;
for(var i=0;i<15;i++){
    cir2.fillStyle = color2 ;
    // cir2.beginPath();
    
    cir2.moveTo(no1,300);

    cir2.lineTo(no1+50,400);
    cir2.lineTo(no1+100,300);
    cir2.lineTo(no1,300);
    
    // cir2.lineTo(no1+50,100);
    
    // cir2.stroke();
    cir2.fill();
    cir2.closePath();
    if(no==3){
        no1=no1+300;  
        no=0;
    }else{
        no1+=100; 
        no++;
    }
}
no=1;
no1=0;
for(var i=0;i<15;i++){
    cir2.fillStyle = color2 ;
    // cir2.beginPath();
    
    cir2.moveTo(no1,400);

    cir2.lineTo(no1+50,500);
    cir2.lineTo(no1+100,400);
    cir2.lineTo(no1,400);
    
    // cir2.lineTo(no1+50,100);
    
    // cir2.stroke();
    cir2.fill();
    cir2.closePath();

    // no1=no1+100;
    if(no==2){
        no1+=400;
        no=1;

    }
    else{
        no1+=200;
        no++;
    }
    
    
}
}
function main3(color3){

//third slide
no=0;
no1=50;
for(var i=0;i<15;i++){
    cir3.fillStyle = color3 ;
    // cir3.beginPath();
    
    cir3.moveTo(no1,600);

    cir3.lineTo(no1+50,700);
    cir3.lineTo(no1+100,600);
    cir3.lineTo(no1,600);
    
    // cir3.lineTo(no1+50,100);
    
    // cir3.stroke();
    cir3.fill();
    cir3.closePath();
    if(no==3){
        no1=no1+300;  
        no=0;
    }else{
        no1+=100; 
        no++;
    }
}
no=1;
no1=100;
for(var i=0;i<15;i++){
    cir3.fillStyle = color3 ;
    // cir3.beginPath();
    
    cir3.moveTo(no1,700);

    cir3.lineTo(no1+50,800);
    cir3.lineTo(no1+100,700);
    cir3.lineTo(no1,700);
    
    // cir3.lineTo(no1+50,100);
    
    // cir3.stroke();
    cir3.fill();
    cir3.closePath();

    // no1=no1+100;
    if(no==2){
        no1+=400;
        no=1;

    }
    else{
        no1+=200;
        no++;
    }
    
}
}
function main4(color4){
//fourth slide

no=0;
no1=150;
for(var i=0;i<15;i++){
    cir4.fillStyle = color4 ;
    // cir4.beginPath();
    
    cir4.moveTo(no1,900);

    cir4.lineTo(no1+50,1000);
    cir4.lineTo(no1+100,900);
    cir4.lineTo(no1,900);
    
    // cir4.lineTo(no1+50,100);
    
    // cir4.stroke();
    cir4.fill();
    cir4.closePath();
    if(no==3){
        no1=no1+300;  
        no=0;
    }else{
        no1+=100; 
        no++;
    }
}
no=1;
no1=100;
for(var i=0;i<15;i++){
    cir4.fillStyle = color4;
    cir4.moveTo(no1,1000);
    cir4.lineTo(no1+50,1100);
    cir4.lineTo(no1+100,1000);
    cir4.lineTo(no1,1000);
    // cir4.stroke();
    cir4.fill();
    cir4.closePath();
    if(no==2){
        no1+=400;
        no=1;

    }
    else{
        no1+=200;
        no++;
    }
    
    
}
}
function main5(color5){
//fifth slide
var no=1;
var no1=250;
for(var i=0;i<15;i++){
    cir5.fillStyle = color5 ;
    cir5.moveTo(no1,100);
    cir5.lineTo(no1+50,200);
    cir5.lineTo(no1+100,100);
    cir5.lineTo(no1,100);
    // cir5.stroke();
    cir5.fill();
    cir5.closePath();
    if(no==2){
        no1+=400;
        no=1;

    }
    else{
        no1+=200;
        no++;
    }
}
no1=100;
no=0;
for(var i=0;i<15;i++){
    cir5.fillStyle = color5 ;
    cir5.moveTo(no1,200);
    cir5.lineTo(no1+50,300);
    cir5.lineTo(no1+100,200);
    cir5.lineTo(no1,200);
    // cir5.stroke();
    cir5.fill();
    cir5.closePath();
    if(no==3){
        no1=no1+300;  
        no=0;
    }else{
        no1+=100; 
        no++;
    }
}
}


function main6(color6){
// sixth slide
var no=1;
var no1=250;
for(var i=0;i<15;i++){
    cir6.fillStyle = color6;
    cir6.moveTo(no1,400);
    cir6.lineTo(no1+50,500);
    cir6.lineTo(no1+100,400);
    cir6.lineTo(no1,400);
    // cir6.stroke();
    cir6.fill();
    cir6.closePath();
    if(no==2){
        no1+=400;
        no=1;
    }
    else{
        no1+=200;
        no++;
    }
}
no1=200;
no=0;
for(var i=0;i<15;i++){
    cir6.fillStyle = color6 ;
    cir6.moveTo(no1,500);
    cir6.lineTo(no1+50,600);
    cir6.lineTo(no1+100,500);
    cir6.lineTo(no1,500);
    // cir6.stroke();
    cir6.fill();
    cir6.closePath();
    if(no==3){
        no1=no1+300;  
        no=0;
    }else{
        no1+=100; 
        no++;
    }
}
}

var changeColor1 = setInterval(function() {
    // console.log(n1);
    if(n1==1){ 
        color1="grey";
        n1++;
    }
    else{
        color1="white";
        if(n1==6) n1=1;
        else n1++;
    }
    main1(color1)
    // no5+=1;
  }, 1000)

  var changeColor2 = setInterval(function() {
    // if(no6%2==0) Color2='grey';
    // else Color2='white';
    if(n2==2){ 
        color2="grey";
        n2++;
    }
    else{
        color2="white";
        if(n2==7) n2=2;
        else n2++;
    }
    main2(color2)
    // no6+=1;
  }, 1000)

  var changeColor3 = setInterval(function() {
    // if(no6%2==0) color3='grey';
    // else color3='white';
    if(n3==3){ 
        color3="grey";
        n3++;
    }
    else{
        color3="white";
        if(n3==8) n3=3;
        else n3++;
    }
    main3(color3)
    // no6+=1;
  }, 1000)
  var changeColor4 = setInterval(function() {
    // if(no6%2==0) Color2='grey';
    // else Color2='white';
    if(n4==4){ 
        color4="grey";
        n4++;
    }
    else{
        color4="white";
        if(n4==9) n4=4;
        else n4++;
    }
    main4(color4)
    // no6+=1;
  }, 1000)
  var changeColor5 = setInterval(function() {
    // if(no6%2==0) Color2='grey';
    // else Color2='white';
    if(n5==5){ 
        color5="grey";
        n5++;
    }
    else{
        color5="white";
        if(n5==10) n5=5;
        else n5++;
    }
    main5(color5)
    // no6+=1;
  }, 1000)
  var changeColor6 = setInterval(function() {
    // if(no6%2==0) Color2='grey';
    // else Color2='white';
    if(n6==6){ 
        color6="grey";
        n6++;
    }
    else{
        color6="white";
        if(n6==11) n6=6;
        else n6++;
    }
    main6(color6)
    // no6+=1;
  }, 1000)

