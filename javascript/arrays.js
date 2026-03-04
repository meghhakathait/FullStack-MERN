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




//  array methods 

//  1. push() - this method is used to add one or more elements to the end of an array



// let names = ["Palak", "Anita", "Priya", "Himanshu"]

// console.log(names)


// names.push("Sehaj", "Rohit", "Amit", "Suman", "Pooja")

// console.log(names)


// 2. pop()- is a method that removes the elemets from the end of array. it can only remove one element at a time 

// names.pop();
// names.pop();    
// console.log(names)

//  3. shift() - this method removes the first element from the array.

// names.shift();
// console.log(names)


//  4. unshift()- it adds element in the beginning of the array 
// names.unshift("ABC", "XYZ", "QWERTY");
// console.log(names)


//  5. indexOf() - this returns the first index of the specified element in the array and -1 if not found 

// console.log(names.indexOf("hii"))


//  6. includes() - it checks whether a given element is present in array and return true or false 

// console.log(names.includes("hii"));

//  7. slice() - it is used to get a portion of array without modifying the original array. it takes two arguments - start index and end index 

// let slicedArray = names.slice(2,5);

//     console.log(slicedArray);


//  8. splice - is used to add or remove elements from an array , it modifies original array. it takes three arguments - start index, number of elements to be removed and the elements to be added 


// let numbers = [10,20,30,40,100,90,70,80,90,100]

// numbers.splice(4,2, 50,60);
// console.log(numbers)



// let numbers= [10,20,30,40,80,90]
// numbers.splice(4,0,50,60,70)
// console.log(numbers)


//  9. forEach() - it iterates over each element of the array and executes  provided function for each element of an array 





// let numArray = [1,2,3,4,5];


// let newArray = [];


// for(let i=0; i<numArray.length; i++){
//    newArray.push(numArray[i] *2); 
// }


// console.log(newArray)


// let array = [1,211,3,4,5,6,7,8,9,10]


// let evenNums = [];




// for(let i=0; i< array.length; i++){
//     if(array[i] %2 === 0){
//         evenNums.push(array[i])
//     }
// }

// console.log(evenNums)


//  map - it creates a new array by applying a provided function to each element of original array 


// let num = [1,2,3,4,5]

// let newArry = num.map((el)=>{
//     return el/2
// })

// console.log(newArry)







// let fruits = ['apple','mango','bananan']

// fruits.map((fruit)=>{
//     console.log(fruit)
// })

// fruits.forEach((fruit)=>{
//     console.log(fruit)
// })

// forEach method is used to excute a provided fun once for each element but it doesnt return anythng whereas map method is used to create a new array by applying a provided fun to each element of original array and it returns the new array



//filter method is used to create a new array with all the elements that pass the test implemented in the provided function

// let numArray= [1,2,3,4,5,6,8,10]

// let evenNum = numArray.filter((num)=>{
//     return num %2 ===0
// })

// console.log(evenNum)
//filter- only return specific array jo bhi humne condition lagayi hogi


// reduce method is used to reduce an array to a single value by applying the provided function to each element, it takes two arguments - accumulator and current value. the accumulator is value that is returned after each function is applied 

// let numsArray= [1,2,3,4,5]

// let result = numsArray.reduce((sum,num)=>{
//     return sum+num;
// },0);
// //ye humne accumkutor ki value initialed kerai hai 0
// console.log(result)

//hrr element mai jakr vo nam kya dega that is num


//find method is used to find the first elemjent in an array that satisfies the provided condition and return it

// let products = ["laptop",'mobile','tablet','monitor']

// let foundProduct = products.find((product)=>{
//     return products.length>6
// })
// console.log(foundProduct)
//it will return only one item in case we have multiple elemets meets the condition -the first ele it will return 
//method only applied on specific data , but function we can create acc to our requirement



//some method is used to check if atleast one element in the array satisfies the provided condition and it return true or false

// let ages= [12,23,54,23];

// let isAdult = ages.some((age)=>{
//     return age>=18
// })
// console.log(isAdult)


//every method is used to check if all the elements in the array satisfy the provided condition nd it returns true or false

// let ages= [18,23,54,23];

// let isAllAdult = ages.every((age)=>{
//     return age>=18
// })
// console.log(isAllAdult)


