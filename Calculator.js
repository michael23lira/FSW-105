var readlineSync = require("readline-sync");

var firstNum = readlineSync.question("Please enter your first number: ");
var secondNum = readlineSync.question("Please enter your second number: ");
var userOperation = readlineSync.question("Please enter the operation to perform (add, sub, mul, div): ");

function add(num1, num2){
    return num1 + num2;
}

function sub(num1, num2){
    return num1 - num2;
}

function mul(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    return num1 / num2;
}

    

function myCalculator (number1, number2, enteredOperation){
    switch(enteredOperation){
        case "add":{
        console.log("The result is: " + add(number1, number2));
        }   break;
        case enteredOperation = "sub":{
        console.log("The result is: " + sub(number1, number2));
        }    break;
        case enteredOperation = "mul":{
        console.log("The result is: " + mul(number1, number2));
        }    break;
        case enteredOperation = "div":{
        console.log("The result is: " + div(number1, number2));
        }    break;
        default: {
            console.log("The function " + "'" + userOperation + "'" + " is not a valid operation. Please try again.");
        }    break;

    }

}
myCalculator (firstNum, secondNum, userOperation)
