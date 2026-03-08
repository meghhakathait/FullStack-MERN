
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
//    so we can redecalred var but it creates prob

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

// string is a sequence of characters and it is defined using single or double quotes.

// const result = true;

// console.log(typeof(result))

// boolean data types can have only two  values- true or false, and is used to represent wheather a condition is true or false

// const emptyVal = null;


// console.log(typeof(null))

// null is special data type that represents the absence of any value . it is often used to indicate that a varibale has no value or that an object property s empty . the typeof null returns "objec"which is a quirk in javascript and it is not a Bug. it is a result of the way javascript was designed and it has been kept for backword compatibility


// let username;
// we can intialse nd assgin value later while using let but not with const


// console.log(typeof(username))

// undefined specifies the absence of value for a variable
