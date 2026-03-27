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
// then(()=>{b
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

//ismai humne req bheji nd promise show kr rha pending 



// function fetchData() {
//     return new Promise((resolve, reject) => {
//         console.log("data fecthing started...")
//         setTimeout(() => {
//             console.log("data fecthed successfully")
//             resolve()
//         }, 3000)
//     })
// }



// function processingData() {
//     return new Promise((resolve, reject) => {
//         console.log("display data in UI...")
//         setTimeout(() => {
//             console.log("data displayed in UI successfully")
//             resolve()
//         }, 1000)
//     })
// }



// function displayData() {
//     return new Promise((resolve, reject) => {
//         console.log("data processing started...")
//         setTimeout(() => {
//             console.log("data processing successfully")
//             resolve()
//         }, 3000)
//     })
// }

// (async function main() {
//     await fetchData()
//     await processingData()
//     await displayData()
// })();

// //in above functions all r resolve so there no prob but what if the promise is reject then how to handle that . then we use try and catch block for that

// //immeadiately invoked function expression (IIFE)- s function that is executed immedaitely after it is defined

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         console.log("data fecthing started...")
//         setTimeout(() => {
//             console.log("data fecthed successfully")
//             resolve()
//         }, 3000)
//     })
// }



// function processingData() {
//     return new Promise((resolve, reject) => {
//         console.log("display data in UI...")
//         setTimeout(() => {
//             console.log("data displayed in UI successfully")
//             reject()
//         }, 1000)
//     })
// }



// function displayData() {
//     return new Promise((resolve, reject) => {
//         console.log("data processing started...")
//         setTimeout(() => {
//             console.log("data processing successfully")
//             resolve()
//         }, 3000)
//     })
// }

// (async function main() {
//     try {
//         await fetchData()
//         await processingData()
//         await displayData()
//     }
//     catch {
//         console.log("error in processing your request")
//     }

// })();


//basically humne khudse promise banaye hai nd resolve ya reject kra 


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




// function getData() {
//     return fetch("https://dummyjson.com/products")
// }

// (async function main() {
//     try {
//         let result = await getData()
//         let data = await result.json()
//         console.log(data)
//     }
//     catch {
//         console.log("Error in fetching data")
//     }
// })()


// Yahan hum getData naam ka function bana rahe hain.
// fetch() ek API call karta hai.
// Ye dummyjson website se products ka data laane ki request bhej raha hai.
// fetch() Promise return karta hai (matlab data baad me milega).
// Yahan hum main naam ka async function bana rahe hain.
// async ka matlab hai ki hum iske andar await use kar sakte hain.
// getData() function call hua.
// Ye API request bhejta hai.
// await ka matlab: jab tak data na aaye tab tak wait karo.
// Jo response aata hai wo result variable me store ho jata hai.
// API se jo response aata hai wo JSON format me hota hai.
// .json() us response ko JavaScript object me convert karta hai.
// Fir usko data variable me store kar diya.
// Jo bhi API se data aaya hai console me print kar diya.
// Agar API fetch karte time koi error aaye (internet issue ya server problem),
// to ye message print hoga: "Error in fetching data"
// })() -Ye Immediately Invoked Function Expression (IIFE) hai.
// Matlab function bante hi turant run ho jayega.