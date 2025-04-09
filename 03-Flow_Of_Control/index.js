debugger;
let num = prompt("Enter a whole number:");
// condition

if (num % 1 > 0) {
    alert("Not a whole number!");
    alert("Next time enter a whole number!");
} else if (num % 2 === 0) {
    alert("That number is even!")
} else if (num % 2 === 1) {
    alert("That number is odd!")
} else {
    alert("Not A Number!");
}

if (num % 2 == 0 && num > `0`) {
    alert("Greater than 10 AND a whole number!");
}