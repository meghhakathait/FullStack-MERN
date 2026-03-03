//procedural paradigm - a way of writing codehere we write the code in a sequence of steps or procedures to solve a problem.

//functional paradigm - a way writing code where we break down a problem into smaller functions that perform specific tasks and then we combine  those functions to solve the overall problem.

//object oriented paradigm - a way of writing code where we create objects that have properties and the methods to represent real world entities and their behaviour.



// object is non-primitive data type that is used to store data in form of key -value pairs. it combines the properties and methods related to a single thing in one place.
// it uses curly brackets nd include all datatypes

// let  name="megha"
// let age = 30;
// let marks = 83;

// function greet(name){
//     console.log(`hello my name is ${name}`)
// }



// let student={
//     name:"megha",
//     age: 22,
//     marks: 85,
//     // greet: function(){
//     //     console.log(`hello my name is megha`)
//     // }
//      //yha sirf functions expression use ho skta not fun decalaration because key ka name dena hota ..for ex jo humne name age marks greet


//     // OR
//     // greet: function(){
//     //     console.log(`hello my name is ${this.name}`)
//         //this  used to access key's values from the object in the func which return in obj 
// // this keyword - it refers to the current obj that is executing the code. it is used to access the properties and methods of the current obj within its own methods.
//     }
// // }


// // console.log(student)

// //dot notation / bracket notation - used to access properties and methods of objects

// console.log(student.name)
// console.log(student["age"])


// student.greet()
//agr object k ander vale fun ko call lagani hai



// let student = {
//     name: "megha",
//     age: 22,
//     marks: [76, 84, 34, 56, 68],
//     address: {
//         zipcode: 12456,
//         city: "new york",
//         country: "USA"
//     },
//     greet: function () {
//         console.log(`hello my name is ${this.name}`)
//     }
// }


// console.log(student.marks[2]);
//when we want to access single single ele from array we hve to give idex
// console.log(student.address.city)
//when we want to access object k andr object ki valye then dot dot lagakr use kr lege


// Object.keys()- returns an array of given object's property values
// console.log(Object.keys(student))

//Object.values- returns an arrat of given object's property values
// console.log(Object.values(student))

//Object.enteries- 
// console.log(Object.entries(student))


// for in loop - used to iterate over the properties of an object
// for(let key in student){
//     console.log(key, student[key])
    // ismai hum square bracket hi use krte bcoz .key se usko lagega ki key naam ki koi key hai but its not so undefined
// }


//add new property to object
// student.email ="megha@gamil.com";

// console.log(student)

//delete a property from an object
// delete student.email;
// console.log(student)

// Object.freeze() -it is used to freeze an object whixh means we cannot add, update or delete any pproperty from the obj after freezing it.

// Object.freeze(student)

// student.email ="megha@ex.com"
// delete student.age

// console.log(student)

