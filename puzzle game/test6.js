function getNumber(){
    return document.querySelectorAll("number").innerText;
}
var number = document.getElementsByClassName("number");
console.log(number.name);
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
    var temp=document.getElementById("empty");
        if(this.id!="empty"){
            if(isSafe(this.name,temp.name)){
                temp.innerText=this.id;
                this.innerText="";
                temp.id=this.id;
                this.id="empty";
            }
        }
    });
}

function isSafe(c,d){
    a=Number(c);
    b=Number(d);
    if(a==1){
        if(b==2 || b==5) return true;
    }
    if(a==2 || a==3){
        if(b==a-1 || b==a+1 || b==a+4) return true;
    }
    if(a==4){
        if(b==3 || b==8 ) return true;
    }
    if(a==5 || a==9){
        if(b==a-4 || b==a+1 || b==a+4) return true;
    }
    if(a==6 || a==7 || a==10 || a==11){
        if(b== a+1 || b== a-1 || b== a-4 || b== a+4 ) return true;
    }
    if(a==8 || a==12){
        if(b== a-1 || b== a-4 || b== a+4) return true;
    }
    if(a==13){
        if(b==9 || b==14) return true;
    }
    if(a==14 || a==15){
        if(b==a-1 || b==a+1 || b==a-4) return true;
    }
    if(a==16){
        if(b==15 || b==12) return true;
    }
    return false;
}
