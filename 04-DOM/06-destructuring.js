//destructing assignment = it is syntax of js that allows us to unpack values from arrays or properties from objects into distinct variables

const array = [1, 2, 3, 4, 5]

// let num1 = arr[0];
// let num2 = arr[0];
// let num3 = arr[0];
// let num4 = arr[0];
// let num5 = arr[0];

// const [num1,num2,num3,num4,num5]= array;

// console.log(num5)

// const [num1, ,num3, ,num5] =array

// const obj ={
//     id :1,
//     name :"megha",
//     age : 30,
//     city : "new york"
// }

// const {name, age} = obj;
// console.log(name,age)

//spread operator = it is syntax of js that allows us to expand an iterable (like an array or string) into individual elemnets or properties of an object.


const arr1 = [1, 2, 3, 4, 5, 6, 7]
const arr2 = [10, 20, 30, 40]

const newArr = arr1.concat(arr2, [100, 200], [100]) //in concat we cannot add more then 2 arrays nd also we cannot add more arrays in it

console.log(newArr)

// const newArr = [...arr1, ...arr2, 100, 200, 300, 400]
// console.log(newArr)


// const obj1 = {
//     id: 1,
//     name: "megha",
//     age: 30,
// }

// const obj2 = {
//     city: "new york",
//     country: "USA"
// }

// const obj3 = { ...obj1, ...obj2, profession: "developer" };

// console.log(obj3)