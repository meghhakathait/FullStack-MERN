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


//reduced method is used to reduce an array to a single value by applying the provided function to each element, it takes two arguments - accumulator and current value. the accumulator i sthe value that is returned after each function ia applied

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


