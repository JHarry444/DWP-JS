debugger;
// prompt() returns a string parseInt() converts a string into a number 
let num = parseInt(prompt("Enter a whole number:"));
// conditionals

// if (num === "" || num === 0 || num === null || num === undefined || num === NaN)

if (!num) {
    alert("Invalid number: " + num)
} else if (num % 1 > 0) {
    alert("Not a whole number!");
    alert("Next time enter a whole number!");
} else if (num % 2 === 0) {
    alert("That number is even!")
} else if (num % 2 === 1) {
    alert("That number is odd!")
}

// if(variable) {
//     do thing
// }

// if (num % 2 == 0 && num > `0`) {
//     alert("Greater than 10 AND a whole number!");
// }

alert(num % 2 === 0 ? "Is even" : "Is odd");

// loops