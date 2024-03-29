let input1;
let input2;
let result;
let operator;
let displayValue;

function add(input1, input2){
    result = input1 + input2;
    return result;
}

function subtract(input1, input2){
    result = input1 - input2;
    return result;
}

function multiply(input1, input2){
    result = input1 * input2;
    return result;
}

function divide(input1, input2){
    if(input2 == 0){
        return "error";
    }
    else{
        result = input1 / input2;
        return result;
    }
}

function operate(input1, input2, operator){
    switch(operator){
        case "add":
            add(input1, input2);
            break;
        case "subtract":
            subtract(input1, input2);
            break;
        case "multiply":
            multiply(input1, input2);
            break;
        case "divide":
            divide(input1, input2);
            break;
    }
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