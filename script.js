let result;
let operator = "add";
let displayValue;

function add(input1, input2){
    result = parseInt(input1) + parseInt(input2);
}

function subtract(input1, input2){
    result = input1 - input2;
}

function multiply(input1, input2){
    result = input1 * input2;
}

function divide(input1, input2){
    if(input2 == 0){
        return "error";
    }
    else{
        result = input1 / input2;
    }
}

function operate(input1, input2, operator){
    switch(operator){
        case "+":
            add(input1, input2);
            break;
        case "-":
            subtract(input1, input2);
            break;
        case "x":
            multiply(input1, input2);
            break;
        case "/":
            divide(input1, input2);
            break;
    }
    console.log(result);
}


const disp = document.querySelectorAll("button");
const currentDisplay = document.querySelector(".display");

let numberInput = [];
let operatorInput = [];
let equation = [];

disp.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue = button.id;
        console.log(displayValue);
        currentDisplay.textContent = displayValue;
        let buttonClass = button.className;
        if(buttonClass == "number"){
            //console.log("Added to array!");
            numberInput.push(displayValue);
            if(typeof( numberInput[1]) !== "undefined"){
                operate(numberInput[0], numberInput[1], operatorInput[0]);
                numberInput.splice(0, 2, result);
                operatorInput.pop();
                currentDisplay.textContent = result;
            }
        }
        else if(buttonClass == "operator"){
            operatorInput.push(displayValue);
        }
        else if(buttonClass == "operate"){
            displayEquation(numberInput, operatorInput);
        }
    })  
})

function displayEquation(){
    console.log("Operating!");
    let length = numberInput.length;
    for(let i=0; i< length; i++){
        equation.push(numberInput[i], operatorInput[i]);
    }
    console.log(equation);
}
