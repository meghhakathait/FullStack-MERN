//functions is a block of code 

// function addition(){
//     let num1 = Number(prompt("enter 1st num"));
//     let num2 = Number(prompt("enter 2nd num"));
//     let sum = num1+num2;
//     console.log(`the sum of ${num1} and ${num2} is: ${sum} `)

// }

// addition();


// paramitarised function / argument

// function addition(num1, num2){
// // paramters
//     let sum = num1 +num2;
//     console.log(`the sum of ${num1} and ${num2} is; ${sum}`)
// }

// addition(1,2)
// addition(3,4)  
//arguments


// function addition(num1, num2) {
//     let sum = num1 + num2;
//     //ab hum iss sum fun ko kahi scope k bahar use ni kr skte kiuki iska scope sirf fun k ander tk hai
//     return sum; 
//     // hum sirf ekhi value to return kra skte hai
// }

// let result = addition(10,10)
// //return value ko scope se bahaar use krne k liye function ko call krna padhta hai nd usko ek var mai store kr dete hai
// console.log(result);

// return is used to send a value back from a function to the place where the function was called.
// Function sum is called with 10 and 10.
// return a + b sends the value 20 back.
// result gets the value 20.
// console.log(result) prints 20.

// function subtract(num1, num2){
//     let sub = num1 - num2;
    //    console.log(sub)
// }

// subtract(result, 15)




// let number = number(prompt("enter a number"))

// function factorial(num) {
//     let result = 1;
//     for (let i = 1; i <= num; i++) {
//         result *= i;

//     }
//     console.log(`the factorial of ${num} is: ${result}`);
// }


// factorial(number);


//function expression- function expression is a way of writing a funtion by assigning an anonynous function (means function banana without fun name- let greet = function(){})to a variable to which it is assigned.(basically  ek fun bna k ek var k ander store kr dena.)
// let addition = function(num1, num2){
//     let sum = num1 +num2;
//     console.log(sum);
//     return sum;
// }

// // let number1 = Number(prompt("enter first number"));
// // let number2 = Number(prompt("enter first number"));
// // //agr user se input leni
// // addition(number1,number2);
// // OR 
// addition(10,20);


// function hoisting- moves function declarations to the top of their scope before the code runs.
// Because of this, you can call a function before it is written in the code.(hum fun ko declare krne se phle bhi call kr skte hai)
// Function Expression (Not Hoisted)Because let variables are not accessible before declaration.,Arrow Function (Also Not Hoisted)
// greet ()
// let greet = function(){
//     console.log("hello world!!")
// }


//function declaration is a way of writing a function using a function keyword followed by the name of the function that we want to create and then a pair of parantheses that can contain parametrs if needed nd then a block of code that defined the body of function.

//the main difference between function declaration and function expression is that function declaration is hoisted to the top of scope which means we can call the function before it is defined in the code, whereas function expression is not hoisted and we cannot call the function before it is defined in the code.


//differnce in parameters and arguments- parameters are variables passed in the function declaration whereas arguments are the actual values passed in funbction call.


//arrow functions- a shorter syntax for writinmg function expressions

// let greet = (name)=>{
//     // console.log("hello world!!")
// }

// greet("megha")


// const add = (a, b) => {
//     return a + b;
// }
// let re= add (5,1)
// console.log(re)