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

