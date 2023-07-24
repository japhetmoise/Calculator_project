let result_data=""
let add=(term1,term2)=>term1+term2;
let substract=(term1,term2)=>term1-term2;
let divide=(term1,term2)=>term1/term2;
let multiply=(term1,term2)=>term1*term2;
let operand1=0;
let operand2=0;
let operator="";
let result=0;
let memory=0;

function setresult(){
    result_data=document.getElementById("me").value;
    if(result_data==0 && !(result_data.includes("."))){
        result_data="";
    }

      }

function clickone(){   
    setresult();
    document.getElementById("me").value=result_data.concat(1);
}
function clicktwo(){   
    setresult();
    document.getElementById("me").value=result_data.concat(2);
}
function clickthree(){   
    setresult();
    document.getElementById("me").value=result_data.concat(3);
}
function clickfour(){   
    setresult();
    document.getElementById("me").value=result_data.concat(4);
}
function clickfive(){   
    setresult();
    document.getElementById("me").value=result_data.concat(5);
}
function clicksix(){   
    setresult();
    document.getElementById("me").value=result_data.concat(6);
}
function clickseven(){   
    setresult();
    document.getElementById("me").value=result_data.concat(7);
}
function clickeight(){   
    setresult();
    document.getElementById("me").value=result_data.concat(8);
}
function clicknine(){   
    setresult();
    document.getElementById("me").value=result_data.concat(9);
}
function clickzero(){   
    setresult();
    document.getElementById("me").value=result_data.concat(0);
}
function clickdot(){   
    result_data=document.getElementById("me").value;
     if(result_data.includes('.')){
        document.getElementById("me").value=result_data;
     }
     else{
        document.getElementById("me").value=result_data.concat(".");
   }
    
}
function cleardata(){
    result_data=""
    memory=0;
    document.getElementById("me").value=0;
}
function del(){
result_data=document.getElementById("me").value
result_data=result_data.slice(0,(result_data.length-1))
if(result_data=="")
document.getElementById("me").value=0
else
document.getElementById("me").value=result_data;
}

function clickadd(){
    operand1=Number(document.getElementById("me").value);
    document.getElementById("me").value=0;
    operator="+"
    if(operator!=""){
        operand2=Number(document.getElementById("me").value);
        operand1=add(operand1,operand2);
        operator="+"
    }
}
    function clickdivide(){
        operand1=Number(document.getElementById("me").value);
        document.getElementById("me").value=0;         
         operator="div"   ;
       
    }
        function clickmultiply(){
            operand1=Number(document.getElementById("me").value);
            document.getElementById("me").value=0;
            operator="star";
            
        }
            function clicksubstract(){
                operand1=Number(document.getElementById("me").value);
                document.getElementById("me").value=0;
                operator="-"
                if(operator!=""){
                    operand2=Number(document.getElementById("me").value);
                    operand1=substract(operand1,operand2);
                    operator="-"
                }
               
}
function clickequal(){
    switch (operator) {
        case "+":
            operand2=Number(document.getElementById("me").value);
            document.getElementById("me").value=add(operand1,operand2);
            break;
            case "div":
                operand2=Number(document.getElementById("me").value);
                let data=divide(operand1,operand2);
                if(!isNaN(data)&&(data!="Infinity")){
                document.getElementById("me").value=data;
                 }
                else{
                    document.getElementById("me").style.textAlign="right";
                    document.getElementById("me").value="E";
                }
         break;
            case "star":
                operand2=Number(document.getElementById("me").value);
                document.getElementById("me").value=multiply(operand1,operand2);
                
             break;
             case "-":
                operand2=Number(document.getElementById("me").value);
                document.getElementById("me").value=substract(operand1,operand2);
                break;
        default:

            break;
    }
    
}
function addmemory(){
    memory=Number(document.getElementById("me").value);
}
function getmemory(){
    document.getElementById("me").value=memory;
}