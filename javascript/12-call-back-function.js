// callback function - a function that is passed as an argument to another function is called callback function,it is executed after the completion of the function to which it is passed as an argument. it is used to handle asynchorounous operations in js.

// setTimeout - buit-in functions that is used to execute a function after a specified delay in milliseconds. it takes two arguments - the function to be executed and the dealy in milliseconds. practically it is used to perform some action after some time such as showing a message after a certain time.


// setInterval - buit-in functions that is used to execute a function repeatdealy at specific intervals in milliseconds, it takes two arguments - the functions to be executed and the interval in milliseconds. practically it is used to perform some action repeatedly at regular intervals such as updating a clock every second



// // function greet(){
//       console.log("welcome to asynchronous programming in javascript!!")
//     }
// setTimeout(greet, 3000)

//OR

// setTimeout(()=>{
//     console.log("this message is displayed after 3 seconmds")
// },3000)

// there r 2 methods to perform setTime function first is to give fun name nd then for how many millisec later it will display another is to put function inside the setTimeout.


// setInterval((=>){
//     console.log("this message is displayed every 3 seconds")
// },3000)


// function fectData(cb){
//     console.log("data fecthing started")
//     setTimeout(()=>{
//         console.log("data fetched from database")
//         cb();
//     },3000)
// }

// function processingData(){
//     console.log("data processing started")
//     setTimeout(()=>{
//         console.log("data processed successfully")
//     },2000)
// }

// fectData(processingData)

//this is ex of callfun - agr hum fetchdata fun mai var pass na kre tb kya hoga console chlega then processingdata vala fun chl jayega kiuki 1st vale fun k 2nd part ko jyda time lagega sbse isliye vo usko end mai print krega but ye prob hai to humne ek var pass kera diya jismai 2nd fun store krdiya ab 2nd fun 1st mai dependent hai


//when we hve multiple fun then how we will call it
// function fectData(cb){
//     console.log("data fecthing started")
//     setTimeout(()=>{
//         console.log("data fetched from database")
//         cb();
//     },3000)
// }

// function processingData(cb){
//     console.log("data processing started")
//     setTimeout(()=>{
//         console.log("data processed successfully")
//         cb()
//     },2000)
// }

// function displayData(){
//     console.log("displaying data in UI")
//     setTimeout(()=>{
//         console.log("data displayed in UI successfully")
//     },1000)
// }
// fectData(()=>{
//     processingData(()=>{
//         displayData()
//     })
// })


// callback hell- when we have multiple nested callbacks in our code, it is called callback hell. it makes the code difficult to read and maintain.


//  promise - promise is an object that reprsent the eventual completion or failure of asynchronous operations. it has three states - pending, fulfilled, rejected. it provided methods like then and catch to handle success and failure of those operations.


// resolve and reject are internal functions that are used to chnge the state of promise, resolve is used to chnge state of promise from pending to fullfilled and reject is used to chnge state of promise from pending to rejected.


// let mypromise = new Promise((resolve,reject)=>{
//     let success = true ;
//     if(success == true){
//         resolve();
//     }
//     else{
//         reject()
//     }
// });
//// console.log(mypromise) - ye hume show krega promise pending ya reject
// the above part we dont to write it comes from the sys ..hum req bhejte hai then jo promise ata hai usko handle krte
// the below part we need to write that ki promise agr reject ya pending fr humko usko kese handle krna hai from then and catch method  

// mypromise.
// then(()=>{
//     console.log("promise resolved successfully")
// })
// .catch(()=>{
//     console.log("promise rejected")
// })


//fetch method in js when we want to fect data from APi - is inbuilt function that is used to make network requests and handle responses.

// const url = 'https://dummyjson.com/products'

// const result = fetch(url)

// result.then((response)=>{
//     console.log("data fecthed succesfully")
//     console.log(response)
// })
// .catch(()=>{
//     console.log("error in fecthing data")
// })

//ismai humne req bheji nd promise shoe kr rha pending 


function fetchData({
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve()
        })
    })
})



funtion processingData(){
    return new Promise((resolve, reject)=>{
        console.log("data processing started")
    })
}








// function fetchData(){
//     return new Promise((resolve, reject)=>{
//         console.log("Data fetching started...")
//         setTimeout(()=>{
//             console.log("Data fetched successfully")
//             resolve()
//         }, 3000)
//     }) 
// }


// function processData(){
//     return new Promise((resolve, reject)=>{
//         console.log("Data processing started...")
//         setTimeout(()=>{
//             console.log("Data processed successfully")
//             reject()
//         }, 3000)
//     })
// }

// function displayData(){
//     return new Promise((resolve, reject)=>{
//         console.log("Displaying data in UI...")
//         setTimeout(()=>{
//             console.log("Data displayed in UI successfully")
//             resolve()

//         }, 1000)
//     })
// }

// ab hamare pass 3 fun promise return kr rhe hai to ye ek promise chaining ban gyi humko ab br br then catch block krna padega nd its diff also so hum await fun ka use krte hai

// async function main(){
//     try{
//         await fetchData()
//         await processData()
//         await displayData()
//     }
//     catch{
//         console.log("Error in processing your request")
//     }
// }
    // main()


// await fun unhi func k sath use hota jo promise return krte hai nd await fun hamesha async fun k sth use hota hai 
//async fun ko call bhi krna imp hai



function getData(){
    return  fetch("https://dummyjson.com/products")
}

(async function main(){
    try{
       let result =  await getData()
       let data = await result.json()
       console.log(data)
    }
    catch{
        console.log("Error in fetching data")
    }
})()