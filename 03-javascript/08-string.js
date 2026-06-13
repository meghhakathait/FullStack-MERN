//string properties and methods

//length -is a property used to find the number of characters in a string.

// let str = "hello world!! how are you"

// console.log(str.length)



// //methods-
// //1.toUpperCase()- convert all the chaarcters in a string to uppercase
// console.log(str.toUpperCase())


// //1.toLowerCase()- convert all the chaarcters in a string to lowercase
// console.log(str.toLowerCase())


// //3. indexof()- returns the index of first occurance of specified values
// console.log(str.indexOf("o"))
// console.log(str.indexOf("p"))
// console.log(str.indexOf("Wo"))


// //4.lastIndexOf()-returns the index of last occurance specified value
// console.log(str.lastIndexOf("o"))


// //5.includes()- checks wheater a string contains a specified value and returns true or false
// console.log(str.includes("Hii"))
// console.log(str.includes("World"))


// // 6.slice - extracts the part of a string and returns  a new string
// console.log(str.slice("3,7"))
// //it basically exclude the last index value 


// //7.replace()-replaces a specifies value with another value in a string and returns a new string
// console.log(str.replace("o","xy"))
// //it replaces only first o
// console.log(str.replaceAll("o","xy"))
// //it replaces all occurances of o


// //8.split()- splits a string into an array of substrings based on SPECIFIED SEPERATOR and returns the new array.String ko array mein convert kar deta hai.
// console.log(str.split(" "))
// //in this we give space seperator -isliye jahan bhi space mila, string wahan se split ho gayi.

// let str = "apple,mango,banana";
// console.log(str.split(","));
// ["apple", "mango", "banana"]

// 9.join()- Joins array back to string
// console.log(fruits.join()); default mai comma , lgta hai

// let str = "apple,mango,banana";

// let arr = str.split(",");
// console.log(arr);

// let newStr = arr.join("-");
// console.log(newStr);

// ["apple", "mango", "banana"]
// apple-mango-banana



// //10.trim()- removes whitespace from both ends of a string and returns a new string
// let str2= "         nnnn  "
// console(str2)
// console.log(str2.trim())


// //11. padStrart()- pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. the padding is applied from the start of the current string. it takes two arguments - target length and pad string .String ke start (aage) characters add karta hai.


// let contact = "1234567890"

// console.log(contact.padStart(14,"+91-"))


// //12. padEnd()-pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. the padding is applied from the end of the current string. it takes two arguments - target length and pad string.  
// console.log(contact.padEnd(14, "-EXT"))


//13. charAT()-is used to get the character at a specific position (index) in a string.
// console.log(structuredClone.charAt(2))

// 14. startsWith() Check karta hai string kis word se start ho rahi hai.

// console.log(str.startsWith("Hello"));
// Output:true

// 15. endsWith()Check karta hai string kis word par khatam ho rahi hai.

// console.log(str.endsWith("World"));
// Output:true


// Check karne wale methods

// includes()
// startsWith()
// endsWith()

// Case change karne wale

// toUpperCase()
// toLowerCase()

// String ka hissa nikalne wale

// slice()
// charAt()

// String modify karne wale

// replace()
// trim()

// String ↔ Array

// split() (String → Array)