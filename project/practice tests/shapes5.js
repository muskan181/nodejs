var slider = document.getElementById("myRange");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value;

        slider.oninput = function() {
            output.innerHTML = this.value;
        }

        var slider2 = document.getElementById("myRange2");
        var output2 = document.getElementById("demo2");
        output2.innerHTML = slider2.value;

        slider2.oninput = function() {
            output2.innerHTML = this.value;
        }


        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        //to keep the animation inside the window
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

       
        var angle=0;
        var x=100;
        var z;
        var no=1;
        var y=0;
        var o=0;
        var m=0;
        var n=0;
        var vari=0;
        var a=0;
        var b=0;
        
function triangle(x,no){
    z=-10000;
    ctx.save();

    // changing origin in x coordinate to move the triangles in forward direction
    ctx.translate(x,0);

    //loop to create 1000 number of triangles
    for(var i=0;i<1000;i++){
        
        ctx.save();
        ctx.beginPath();
        ctx.setLineDash([5, 5]);
        ctx.fillStyle="grey"

        //changing the x coordinate to create loop of series of traiangles in a line
        ctx.translate(z,300);

        //changing the angle in evry function to rorate the triangles
        ctx.rotate(angle);

        if(no==1){
            //bigger traingles
            
            //upper triangle
            ctx.moveTo(0,0);
            ctx.lineTo(-50+m/2,-100+1.4*m);
            ctx.lineTo(50-m/2,-100+1.4*m);
            ctx.lineTo(0,0);

            //lower triangles
            ctx.moveTo(0,0);
            ctx.lineTo(-100+y,0);
            ctx.lineTo(-50+y/2,100-y);
            ctx.lineTo(0,0);


            ctx.moveTo(0,0);
            ctx.lineTo(100-y,0);
            ctx.lineTo(50-y/2,100-y);
            ctx.lineTo(0,0);
            no=2;
            // console.log(no);
            z+=200;
        }
        else if(no==2){
            // smaller triangles
            ctx.moveTo(0,0);
            ctx.lineTo(-31-n,-60-n*1.5);
            ctx.lineTo(31+n,-60-n*1.5);
            ctx.lineTo(0,0);
            
            //lower triangles
            ctx.moveTo(0,0);
            ctx.lineTo(-60-o,0);
            ctx.lineTo(-31-o/2,60+o);
            ctx.lineTo(0,0);

            ctx.moveTo(0,0);
            ctx.lineTo(60+o,0);
            ctx.lineTo(31+o/2,60+o);
            ctx.lineTo(0,0);

            // ctx.moveTo(0,0);
            // ctx.lineTo(-50+o/2,-100+1.4*o);
            // ctx.lineTo(50-o/2,-100+1.4*o);
            // ctx.lineTo(0,0);

            //lower triangles
            // ctx.moveTo(0,0);
            // ctx.lineTo(-100+n,0);
            // ctx.lineTo(-50+n/2,100-n);
            // ctx.lineTo(0,0);


            // ctx.moveTo(0,0);
            // ctx.lineTo(100-n,0);
            // ctx.lineTo(50-n/2,100-n);
            // ctx.lineTo(0,0);

            // ctx.moveTo(0,0);
            // ctx.lineTo(-50+m/2,-100+1.4*m);
            // ctx.lineTo(50-m/2,-100+1.4*m);
            // ctx.lineTo(0,0);

            // //lower triangles
            // ctx.moveTo(0,0);
            // ctx.lineTo(-100+y,0);
            // ctx.lineTo(-50+y/2,100-y);
            // ctx.lineTo(0,0);


            // ctx.moveTo(0,0);
            // ctx.lineTo(100-y,0);
            // ctx.lineTo(50-y/2,100-y);
            // ctx.lineTo(0,0);
            no=3;
            z+=150;
            // console.log(no);

        }
        else if(no==3){

            ctx.moveTo(0,0);
            ctx.lineTo(-18-a/2.5,-35-a*1.2);
            ctx.lineTo(18+a/2.5,-35-a*1.2);
            ctx.lineTo(0,0);
            
            //lower triangles
            ctx.moveTo(0,0);
            ctx.lineTo(-35-b/2,0);
            ctx.lineTo(-18-b/2,35+b);
            ctx.lineTo(0,0);

            ctx.moveTo(0,0);
            ctx.lineTo(35+b/2,0);
            ctx.lineTo(18+b/2,35+b);
            ctx.lineTo(0,0);

            // ctx.moveTo(0,0);
            // ctx.lineTo(-50+m/2,-100+1.4*m);
            // ctx.lineTo(50-m/2,-100+1.4*m);
            // ctx.lineTo(0,0);

            // //lower triangles
            // ctx.moveTo(0,0);
            // ctx.lineTo(-100+y,0);
            // ctx.lineTo(-50+y/2,100-y);
            // ctx.lineTo(0,0);


            // ctx.moveTo(0,0);
            // ctx.lineTo(100-y,0);
            // ctx.lineTo(50-y/2,100-y);
            // ctx.lineTo(0,0);

            no=1;
            z+=200;
            // console.log(no);

        }
        ctx.fill();
        // ctx.stroke();
        ctx.restore();
        
        // no++;
        
        
    }
    ctx.restore();   
        
}
function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    angle+=0.01*output.innerHTML;
    //for decreasing the size
    if(vari<100){
        if(vari==100){
            vari=101;
        }
        else{
            y+=0.5;
            m+=0.35;
            o-=0.2;
            n-=0.1;
            a-=0.1;
            b-=0.1;
        }
    }
    //for increasing the size
    else{
        if(vari==200){
            vari=0;
            y=0;
            o=0;
            m=0;
            n=0;
            a=0;
            b=0;
        }
        else{
            // y-=0.9;
            // m-=0.6;
            y-=0.5;
            m-=0.35;
            o+=0.2;
            n+=0.1;

            // o+=0.2;
            // n+=0.2;

            // n+=0.9;
            // o+=0.6;
            a+=0.1;
            b+=0.1;
        }
    }
    vari+=1;
    x+=output2.innerHTML;
    triangle(x,no);
    requestAnimationFrame(animate);
}
animate();