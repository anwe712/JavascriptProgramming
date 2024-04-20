const prompt = require("prompt-sync")();
var number;
number = parseInt(prompt("What is the number? "));//Used parseInt() to convert the input string to a number

function palindrome_check(num) {
    var rev = 0;
    var temp = num; // Store the original number
    while (num > 0) {
        var digit = num % 10;
        rev = rev * 10 + digit;
        num = Math.floor(num / 10); // Integer division
    }
    if (rev == temp) {
        return true;
    } else {
        return false;
    }
}

if (palindrome_check(number)) {
    console.log("It is a palindrome number");
} else {
    console.log("It is not a palindrome number");
}
