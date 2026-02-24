
// console.log("hello world");
// inside console.log whatever we write it prints


// variable declare
// let res= 10+12;
// console.log('res');

// with quotes it print the same exact that thing without it prints the value of the var

// var, constant,let

// var has global scope and it can be reassigned and redeclared

// {
//    var num=10;
//    var num=20
//    so we can recalred var but it creates prob

//    console.log(num);

// }

// {
//    console.log(num);
// }


// let has block scope and it can be reassigned but not redeclared in the same scope

// {
//     let num=10;
//     num = 30;
//     console.log(num);
// }

// {
//     let num=20;

//     console.log(num);
// }


// const is block scoped and it cannot be redeclared or reassigned in the same scope

// {
//     const num =10;
//     // num=20;
//     console.log(num);
// }

// {
//     // const num=30;
//     console.log(num)
// }

// javascript is synchronous nd asynchronous - it run prob linewise but also handles asynchronous task

// primitive datatypes- Number, string, boolean, null, undefined, symbol, bigint

// let val=194567728888888888922222756238993032803802803289222220809380283938n;

// typeof(val_name)- return the data type of the variable

// console.log(val);

// console.log(typeof(val))

// the range of num is (2^53-1) to -(2^53-1) and the range of the bigint is more than that. to make the data type of a number to bigint we can add n at the end og the number

// const name = "megha k"

// console.log(typeof(name))

// string i sa sequence of characters and it is defined using single or double quotes.

// const result = true;

// console.log(typeof(result))

// boolean data types can have only two  values- true or false, and is used to represent wheather a condition is true or false

// const emptyVal = null;


// console.log(typeof(null))

// null is special data type that represents the absence of any value . it is often used to indicate that a varibale has no value or that an object property s empty . the typeof null returns "objec"which is a quirk in javascript and it is not a Bug. it is a result of the way javascript was designed and it has been kept for backword compatibility


// let username;
// we can intialse nd assgin vale later while using let but not with const


// console.log(typeof(username))

// undefined specifies the absence of value for a variable




// Operators- in JS operators are used to perferm operations on values and variable. there are different types of operators in javascripts
// 1. Arithmetic operators- used to perfomnr mathematical operations on numbers.
// 2. Assignment Operators - used to assign values to variables.
// 3. Comparison operators - used to compare two values or variables. the result of comparison ope3rators is always a boolean value (true or false).
// 4. Logical operators - used to perform logical operations on boolean values. the result of logical operators is also boolean value. in logical operators we combine multiple conditions and it return a single value based on the result of those conditions.
// 5. Increment and Decrement operators - used to increase or decrease the value of a varibale by 1.


//arithematic operator + - * / % **

// let num1 =10;
// let num2 =3;

// let output = num1 + num2;
// output = num1 - num2;
// output = num1 / num2;
// output = num1 * num2;
// output = num1 % num2;
// output = num1 ** num2;
// console.log(output);


// Assignment operators = += -= *= /= %= **=

// let num = 10;

//num = num +5;
// num += 5;
// num -= 3;
// num *= 2;
// num /= 4;
// num %= 2;
// num **= 2;

// console.log(num)


// comparison operators == === != !== > < >= <=

// let num1 = 10;
// let num2 = "10";

// console.log(num1 == num2)

//double equals checks only the values of the variables but the triple equals checks both the valus and the data type of the varibale. in this case num1 is  anumber and num2 is a string, so they are not strictly equal


// console.log(num1 !== num2);


//logical operators - && || !

// let num1 = 10;
// let num2 =20;

// console.log((num1 < num2) && (num2 >  num1));
// console.log((num1 > num2) || (num2 >  num1));
// console.log(!(num1 > num2));



//increment and decrement operators - ++ --

// let num = 10;

// console.log(++num)

// pre increment/decrement means the value of the variable is increased or decreased before it is used in the expression . if we use post increment (num++) then the value of num will be printed first and then it will be increased by 1 but if we use pre increment (++num) then the value of num will be increased by 1 first and then it will be PictureInPictureWindow. in this case the output will be 11 because we are using opre increement. if we use post increment (num++) the the output will be 10 because the value of num will be printed forest and then it will be increased by 1.





// let val1 = 10;
// let val2 = "20";

// let result = val1 + val2;

// console.log(result);
// console.log(typeof(result))

//type coercion - when we perform the operation on two diff data types , js automatically converts one data type to another and it is called type coercion.
// with + only it concatenate with rest of the operators it do the same calculations


// let userInput1 = Number(prompt('enter first number'));
// // we store promt value in variable so that use it later 
// let userInput2 = Number(prompt('enter second number'));


// let result = userInput1 + userInput2;
// // with userInput we also use Number() - Number(userInput1...)
// console.log(result);

//type conversion - we can manually convert one data type to another using built-in functions like Number(), String(), Boolean() EventCounts. in the above example we are converting the user input which is a string to a number using the Number() function before performing the addition operation.

// let num1 = Number(prompt('enter a num');
// let num2 = Number(prompt('enter a num');

// let result= num1+num2;

// console.log(result)


// let num1 = Number (prompt('enter  a num'));
// let num2 = Number (prompt('enter  a num'));

// let result = num1 +num2;

// console.log("the addition of 10 and 20 :" + result);
// console.log("the addition of 10 and 20 :" , result);
// console.log("the addition of " + num1 + "and" + num2+ "is:"+result);

//template literals - way to embed variables and expression inside a string. it is denoted by beckticks

// console.log(`the addition of ${num1} and ${num2} is: ${result}` )



// decision making  statements - if , if else, elseif , switch case , ternary operator

// if statement is used to execute a block of code if specified conditon is true, and if condition is false then the block of code will be skipped


// syntax -
// if (condition){
//     //block of code
// }

// console.log( start)

// let num = 10;
// if (num>5){
//     console.log('number is greater than 5')

// }

// console.log("end")


// if else statement is used to execute a block of code if specifies condition is true and another block of code if specified condtion is false

// syntax -
// if (condition){
//     //block of code if con is true
// }
// else{
//     //block of code will run if con is false
// }



// let num =10;

// if (num>15){
//     console.log('number is greater than 15')
// }
// else{
//     console.log('number is less than 15')
// }




// let num =10;

// if ( num== 15 ){
//     console.log('number is equal to 15')
// }

// else if(num>15){
//     console.log('number is greater than 15')
// }

// else{
//     console.log('number is less than 15')
// }

// in both if and elseif block we have to give condition . else dont need any condition


// let day = Number(prompt('enter day of week(1-7'))


// if(day === 1){
//     console.log("monday")
// }

// else if(day === 2){
//     console.log('tuesday')
// }
// else if(day === 3){
//     console.log('wednesday')
// }
// else if(day === 4){
//     console.log('thrusday')
// }
// else if(day === 5){
//     console.log('friday')
// }
// else if(day === 6){
//     console.log('saturday')
// }
// else if(day === 7){
//     console.log('sunday')
// }

// else{
//     console.log('Invalid data')
// }



//switch statement - used to perform different actions based on different conditions. it is an alternative to if else statement when we have multiple diff conditions to check based on strict equality.
// use only when strict equality not with > < etc only in case of equality


// let day = Number(prompt("enter day of week(1-7)"));

// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//         //we use break bcz without it all case will start running
//     case 2:
//         console.log("tueday");
//         break;
//     case 3:
//         console.log("wednesday");
//         break;
//     case 4:
//         console.log("thrusday");
//         break;
//     case 5:
//         console.log("friday");
//         break;
//     case 6:
//         console.log("saturday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
//     default:
//         console.log("invalid input");
// }



// ternary operator -shorthand fo if else statement.

// let num = 10;

// if (num > 0){
//     console.log("number is positive")
// }
// else {
//     console.log("number is negative")
// }


// (num > 0)?console.log("number is positive"):console.log("number is negative")


//loops  in javascript - used  to execute a block of code repeatdly

// for, while, do while , for of , for in

// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")
// console.log(" hello world")


//while (condition){
// block of code
//}

// let count = 1;

// while(count <= 10){
//     console.log("hello world");
//     console.log(`this is iteration number ${count}`);
//     count++;
// }



// let count = 1;

// while(count <= 10){
//     console.log(count);
//     count++;
// }


// let correctPassword = "QWERTY123";

// let userPassword = prompt("enter password")

// let attempt = 1;

// while(userPassword != correctPassword && attempt < 3){
//     userPassword = prompt("incorrect password. please try again")
//     attempt++ ;
// }

// if (userPassword == correctPassword){
//     console.log("login successful")
// }
// else if (attempt >=3){
//     console.log("too many failed attempts. account locked")
// }


// n natural numbers

// let num = 1;
// let number = Number (prompt("enter number"))

// while (num <= number){
//     console.log(num);
//     num++;
// }



// let num = 1;
// let sum = 0;

// while(num<=5){
//     sum += num;
//     num++;
// }
// console.log(`the sum of first 5 num is : ${sum}`)


// let i=0;
// do {
//     console.log("hello world");
//     i++;
// }
// while(i<10);



// while(i<10){
//     console.log("hello world");
//     i++;
// }

// the difference between while and do while loop is that while loop checks the conditoon first and then executes the block of code, whereas do while loop executes the block of code first and then checks the condition . this means that do while loop will always execute the block of code at least once, even if the conditon is false.


//the difference in for and while is that for loop is used when we knbow the number of iterations beforehand whereas while is used when we dont know the number of iterations beforehand, in other words for loop is used when task is num oriented and while is used when task is condition oriented.



//functions is a block of code 

// function addition(){
//     let num1 = Number(prompt("enter 1st num"));
//     let num2 = Number(prompt("enter 2nd num"));
//     let sum = num1+num2;
//     console.log(`the sum of ${num1} and ${num2} is: ${sum} `)

// }

// addition();

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


// function subtract(num1, num2){
//     let sub = num1 - num2;

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


//function expression- basically  ek fun bna k ek var k ander store kr dena.
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


// function hoisting- hum fun ko declare krne se phle bhi call kr skte hai

// greet ()
// let greet = function(){
//     console.log("hello world!!")
// }


//function declaration is a way of writing a function using a function keyword followed by the name of the function that we want to create and then a pair of parantheses that can contain parametrs if needed nd then a block of code that defined the body of function.

//function expression is a way of writing a funtion by assigning an anonynous function (means function banana without fun name- let greet = function(){})to a variable to which it is assigned.

//the main difference between function declaration and function expression is that function declaration is hoisted to the top of scope which means we can call the function before it is defined in the code, whereas function expression is not hoisted and we cannot call the function before it is defined in the code.


//differnce in parameters and arguments- parameters are variables passed in the function declaration whereas arguments are the actual values passed in funbction call.


//arrow functions- a shorter syntax for writinmg function expressions

// let greet = (name)=>{
//     console.log(`hello world!!`)
// }

// greet("megha")



// let marks = [20,30,48,43]
// // console.log(marks[3])

// //console.log(marks[0])
// //console.log(marks[1])
// //console.log(marks[2])
// //console.log(marks[3])

// console.log(marks.length)
// // agr array mai bht jyda elements hoge to hum count ni kr skte isliye marks.length use kr skte loop mai
// // for (let i=0;i<4;i++){
// //     console.log(marks[i]);
// // }

// // OR
// for (let i=0; i<marks.length;i++){
//     console.log(marks[i]);
// }
