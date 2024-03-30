let result;
let operator = "add";
let displayValue;
const currentDisplay = document.querySelector(".display");

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
    if(input2 == "0" ){
        result = "You cannot divide by 0!" ;
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


let temporaryNumber = [];
let numberInput = [];
let operatorInput = [];
let equation = [];
let inputValue;
let temporaryInput;

disp.forEach((button) => {
    button.addEventListener("click", () => {
        inputValue = button.id;
        //currentDisplay.textContent = displayValue;
        let buttonClass = button.className;
        if(buttonClass !== "operator" && buttonClass == "number"){
            console.log(inputValue);
            temporaryNumber.push(inputValue);
            temporaryInput = temporaryNumber.join("");
            currentDisplay.textContent = temporaryInput;
        }
        else if(buttonClass == "operator"){
            temporaryNumber.splice(0, temporaryNumber.length);
            numberInput.push(temporaryInput);
            operatorInput.push(inputValue);
            currentDisplay.textContent = inputValue;
            console.log(temporaryNumber);
            console.log(numberInput);
            console.log(operatorInput);
            if(typeof( numberInput[1]) !== "undefined"){
                operate(numberInput[0], numberInput[1], operatorInput[0]);
                numberInput.splice(0, 2, result);
                operatorInput.shift();
                currentDisplay.textContent = result;

            }
        }
        else if(buttonClass == "operate"){
            temporaryNumber.splice(0, temporaryNumber.length);
            numberInput.push(temporaryInput);
            operatorInput.push(inputValue);
            currentDisplay.textContent = inputValue;
            operate(numberInput[0], numberInput[1], operatorInput[0]);
            numberInput.splice(0, 2, result);
            operatorInput.shift();
            currentDisplay.textContent = result;
            numberInput.splice(0, numberInput.length);
            operatorInput.splice(0, operatorInput.length);
        }
        
        /* if(buttonClass == "number"){
            //console.log("Added to array!");
            numberInput.push(displayValue);
            
        }
        else if(buttonClass == "operator"){
            operatorInput.push(displayValue);
        }
        else if(buttonClass == "operate"){
            displayEquation(numberInput, operatorInput);
        }

        */
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
