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

disp.forEach((button) => {
    button.addEventListener("click", () => {
        displayValue = button.id;
        console.log(displayValue);
        currentDisplay.textContent = displayValue;
    })  
})