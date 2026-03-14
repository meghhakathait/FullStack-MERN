// This file handles all routes (URLs).

const express = require('express') 
const router = express.Router() //create a router object.Router is used to define routes separately.
// /
//  /about
//  /contact
//  /products

//define a route for the home page
router.get('/',(req,res)=>{   //we give 2 variable req and res
    res.render('home') //render the home.ejs file
})

router.use('/chandigarh',(req,res)=>{   //we give 2 variable req and res
    res.render('about') //render the about.ejs file
})

router.use('/mohali',(req,res)=>{   //we give 2 variable req and res
    res.render('contact') //render the contact.ejs file
})
module.exports = router //export the router object to be used in main.js
