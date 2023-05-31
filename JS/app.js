var number = 4
var number2 = 5
console.log("The value of this number is " + number);

var stringName = "Ahmad"
console.log("My name is " + stringName);


console.log("The sum ", number + number2);

var result = number + number2
console.log("The sum" + result);

number = 90
console.log(number);
console.log(number2 - 4);

// data types

var bool = false
var Y
var nullVa1ue = null

console.log("Data type of number", typeof number);


// Math operation
var rand = Math.random()
console.log("Random number", rand);

console.log("Power of number", Math.pow(number, 2));


// Comparison operation
// <, >, <=, >=, ==, ===, !=

var stringName2 = "2"
console.log(number > number2);
console.log(number <= number2);
console.log(stringName2 == number);

var newVar = 2
console.log(stringName2 == newVar);
console.log(stringName2 === newVar);


// Logical operation
// &&, ||, !

console.log(!bool);
console.log(!bool || (number > number2));
console.log(!bool || number > number2);
console.log((!bool || true) && false); // T || T => T&& F => False


// priority 
// (), ^, !, &&, ||

console.log(Math.pow(2, 2) >= 5);

// Between logical and comparison operation the priority goes to compurisons


// string with let

let firstLet = 5; // 1- the first problem is redeclaring varibles
console.log(firstLet);

// let firstLet = 8;
// console.log(firstLet);

var firstVar = 7;
console.log(firstVar);
var firstVar = "Ahmad";
console.log(firstVar);

firstVar = 89
console.log(firstVar);

// 2- undefiend values
var txt = "this is var text"
let txt1 = "this is let text"

console.log(this.txt);
console.log(this.txt1);



let newLet = 15

if (newLet % 2 == 0) {
    console.log("This is even number");
} else if (newLet % 3 == 0) {
    console.log("This is odd number");
} else if(newLet < 2){
    console.log(newLet);
}else console.log("Nothing else");



switch (newLet % 2) {
    case 0:
        console.log("This is even number");
        break;
    case 1:
        console.log("This is odd number");
        break;
    default:
        console.log("Nothing else");
        break;
}


// prompt box
let age = prompt("Please enter your age here:", 21)
console.log(age);
console.log(typeof age);


//confirm box
// output is boolean also depends on the input(clicking)
let conf = confirm("is this the right information ?")
console.log(conf);
console.log(typeof conf);

// Alert box
let name = prompt("Please enter your name:")
alert("Welcome here: " + name)

// 3- Scoping
// Global, Local

var test = 25

if(test < 45){
    console.log("You can enter");
    var test2 = 90
    console.log(test2);

    let test3 = "hi"
    console.log(test3);
} else {
    console.log("You cann't enter");
}
console.log(test2);
console.log(test3);

