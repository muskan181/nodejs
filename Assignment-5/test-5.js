function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){   //when number is minus
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");     //converting the number with commas
	return value;
}
function reverseNumberFormat(num){      // we have to do this to remove that commas in btw so that we can manipulate the numbers with operators
	return Number(num.replace(/,/g,''));    //the number we want to replace should be in btw / and /g and with wich we want to replace after /g 
}
var operator = document.getElementsByClassName("operator");
for(var i =0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();   //convert the number without commas and convert to string and dlete the last character.
            if(output){ //if output has a value;
                output=output.substr(0,output.length-1);
                printOutput(output)
            }
        }
        else{
            var output=getOutput();
            var history=getHistory();
            if(output=="" &&history!=""){
                if(isNaN(history[history.length-1])){   //when last element is an operator 
                    history=history.substr(0,history.length-1);
                }
            }
            if(output!=""||history!=""){
                output=output==""?
                output:reverseNumberFormat(output);
                history=history+output;
                if(this.id=="="){
                    var result=eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else{
                    history=history+this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    });
}
var number = document.getElementsByClassName("number");
for(var i =0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){ //if output is a number
			output=output+this.id;
			printOutput(output);
		}
	});
}
