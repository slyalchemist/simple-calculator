let result;
let operator;
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
        let unrounded = input1 / input2;
        result = Math.round(unrounded * 100) / 100;
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
let inputValue;
let temporaryInput;

disp.forEach((button) => {
    button.addEventListener("click", () => {
        inputValue = button.id;
        let buttonClass = button.className;
        if(buttonClass !== "operator" && buttonClass == "number"){
            console.log(inputValue);
            temporaryNumber.push(inputValue);
            temporaryInput = temporaryNumber.join("");
            currentDisplay.textContent = temporaryInput;
        }
        else if(buttonClass == "operator"){
            compileNumbers();
            console.log(temporaryNumber, numberInput, operatorInput);
            if(typeof( numberInput[1]) !== "undefined"){
                generateResult();
            }
        }
        else if(buttonClass == "operate"){
            compileNumbers();
            if(numberInput[0] == "undefined" && numberInput[1] == "undefined"){
                currentDisplay.textContent = "Not enough info!";
                clearStorage();
            }
            else{
                generateResult();
                clearStorage();
            }
        }
        else if (buttonClass == "clear"){
            clearStorage();
            currentDisplay.textContent = " ";
        }
    })  
})

function clearStorage(){
    numberInput.splice(0, numberInput.length);
    operatorInput.splice(0, operatorInput.length);
    temporaryNumber.splice(0, temporaryNumber.length);
    console.log(numberInput, operatorInput, temporaryNumber);
}

function compileNumbers(){
    temporaryNumber.splice(0, temporaryNumber.length);
    numberInput.push(temporaryInput);
    temporaryInput = "undefined";
    operatorInput.push(inputValue);
    currentDisplay.textContent = inputValue;
}

function generateResult(){
    operate(numberInput[0], numberInput[1], operatorInput[0]);
    numberInput.splice(0, 2, result);
    operatorInput.shift();
    currentDisplay.textContent = result;
}