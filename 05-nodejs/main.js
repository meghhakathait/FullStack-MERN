const express = require('express')
// Here you import Express library.
// require() is used in Node.js to load a package/module.
// Now the express framework is stored in the variable express.
const app = express() //app is express obj
// express() creates an Express application object.
// app is now the main server object.
// We use app to: create routes ,run server ,set settings
const route = require('./route') //hummne route file ko require kra //route file mai sare link dalege un sare page k jo humneko run krna hai
// Here you import your route.js file.
// ./ means current folder.
// So Node loads route.js and stores it in variable route.

const bodyparser = require('body-parser') //runtime form input accept

const port = 2003 //port number used to run the server . we can give any port no. This defines the port number where the server will run.

app.set('view engine','ejs') //set view engine to ejs
// This tells Express: "Use EJS template engine to render pages."
//So Express samajh jata hai:“.ejs file hi render karni hai”
app.use('/static',express.static(__dirname + '/static')) //forward / static to static folder
// dirname - print current path

app.use('/node_modules',express.static(__dirname +"/node_modules"))
app.use(bodyparser.urlencoded({extended:false})) //ye express ko bta rha ki Body parser use kr rhe . final input settings

app.use('/',route)  //forward /means Home to page to route.js . Express will send the request to route.js to decide what to do..basicially hum isko bata rhe jo page chlana hai vo route se puchlo. ye sidha uper const route pr jayega then route vali file mai
//This connects main.js with route.js.
app.listen(port,()=>{
    console.log(`server is running on port http://localhost:${port}`) //local host means thisPC.This just prints a message in terminal so you know the server started.
})
//this starts the server.
// It tells Node: Start listening on port 2003.