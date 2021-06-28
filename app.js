var expression = ""


function addToExpression(event,value){
    expression+=value;
    document.getElementById('output').innerText = expression;
}

document.getElementById('+').addEventListener("click",(event)=>{
    addToExpression(event,'+')
})

document.getElementById('-').addEventListener("click",(event)=>{
    addToExpression(event,'-')
})

document.getElementById('/').addEventListener("click",(event)=>{
    addToExpression(event,'/')
})

document.getElementById('*').addEventListener("click",(event)=>{
    addToExpression(event,'*')
})

document.getElementById('0').addEventListener("click",(event)=>{
    addToExpression(event,0)
})

document.getElementById('1').addEventListener("click",(event)=>{
    addToExpression(event,1)
})

document.getElementById('2').addEventListener("click",(event)=>{
    addToExpression(event,2)
})

document.getElementById('3').addEventListener("click",(event)=>{
    addToExpression(event,3)
})

document.getElementById('4').addEventListener("click",(event)=>{
    addToExpression(event,4)
})

document.getElementById('5').addEventListener("click",(event)=>{
    addToExpression(event,5)
})

document.getElementById('6').addEventListener("click",(event)=>{
    addToExpression(event,6)
})

document.getElementById('7').addEventListener("click",(event)=>{
    addToExpression(event,7)
})

document.getElementById('8').addEventListener("click",(event)=>{
    addToExpression(event,8)
})

document.getElementById('9').addEventListener("click",(event)=>{
    addToExpression(event,9)
})

document.getElementById('equals').addEventListener("click",(event)=>{
    try{
        document.getElementById('output').innerText = eval(expression);
        expression = ""
    }catch(error){
        alert("please enter valid expression");
    }
    
})

document.getElementById("AC").addEventListener('click',(event)=>{
    expression="";
    document.getElementById('output').innerText = expression;
})

document.getElementById("back").addEventListener("click",(event)=>{
    expression = expression.substr(0,(expression.length)-1)
    document.getElementById('output').innerText = expression;
})

document.getElementById('mod').addEventListener("click",(event)=>{
    addToExpression(event,'%');
})

document.addEventListener("keydown",(event)=>{
    if(event.key === "0"){
        addToExpression(event,"0")
    }else if(event.key === "1"){
        addToExpression(event,"1")
    }else if(event.key === "2"){
        addToExpression(event,"2")
    }else if(event.key === "3"){
        addToExpression(event,"3")
    }else if(event.key === "4"){
        addToExpression(event,"4")
    }else if(event.key === "5"){
        addToExpression(event,"5")
    }else if(event.key === "6"){
        addToExpression(event,"6")
    }else if(event.key === "7"){
        addToExpression(event,"7")
    }else if(event.key === "8"){
        addToExpression(event,"8")
    }else if(event.key === "9"){
        addToExpression(event,"9")
    }else if(event.key === '+'){
        addToExpression(event,'+')
    }else if(event.key === '-'){
        addToExpression(event,'-')
    }else if(event.key === '*'){
        addToExpression(event,'*')
    }else if(event.key === '/'){
        addToExpression(event,'/')
    }else if(event.key === '%'){
        addToExpression(event,'%')
    }else if(event.key === 'Enter' || event.key === '='){
        try{
            document.getElementById('output').innerText = eval(expression);
            expression = ""
        }catch(error){
            alert("please enter valid expression");
        }
    }
    else if(event.key === 'Backspace'){
        expression = expression.substr(0,(expression.length)-1)
        document.getElementById('output').innerText = expression;
    }
})


addEventListener("resize",event=>document.getElementById("width").innerText = innerWidth)


document.getElementById("width").innerText = innerWidth;

document.getElementById("AC").removeEventListener("keyup",(event)=>{})
document.getElementById("AC").removeEventListener("keydown",(event)=>{})
