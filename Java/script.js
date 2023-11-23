var num1 = parseFloat(prompt("Enter the first number:"));

var num2 = parseFloat(prompt("Enter the second number:"));


if (isNaN(num1) || isNaN(num2)) {
    alert("Invalid input. Please enter valid numbers.");
} else {
   
    var sumResult = num1 + num2;

    
    alert("The sum of " + num1 + " and " + num2 + " is: " + sumResult);
}


function readNumber() {
    while (true) {
       
        let userInput = prompt("Enter a number:");

        
        if (userInput === null) {
            return null; 
        }

        
        let number = parseFloat(userInput.trim());

        
        if (!isNaN(number)) {
            return number; 
        } else {
            alert("Invalid input. Please enter a valid number."); 
        }
    }
}


let result = readNumber();

if (result !== null) {
    alert("You entered: " + result);
} else {
    alert("null");
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


let randomNumber = randomInteger(0, 1000);
console.log(randomNumber);