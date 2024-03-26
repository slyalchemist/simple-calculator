let input1;
let input2;
let result;
let operator;

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