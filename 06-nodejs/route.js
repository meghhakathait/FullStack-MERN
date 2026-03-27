// This file handles all routes (URLs).

const express = require('express')
const router = express.Router() //create a router object.Router is used to define routes separately.
// /
//  /about
//  /contact
//  /products
const studentcontroller = require('./controller/studentcontroller')
// studentcontroller var declare kra

const employeecontroller = require('./controller/employeecontroller')

const empcontroller = require('./controller/empcontroller')
const multer=require('multer')
// multer ek library hai jo image se related koi bhi kam krna usmai help krti hai iske ander -
// disk naame ka fun hota hai jo file rename krega then upload krna

const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'static/Employee_photos'); //uplaad file to static/uploads folder
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+'-'+file.originalname);//renamne the file with current timestamp and originals
    }
})

const upload=multer({storage:storage})

//define a route for the home page
router.get('/', (req, res) => {   //we give 2 variable req and res
    res.render('home') //render the home.ejs file
})

router.use('/chandigarh', (req, res) => {   //we give 2 variable req and res
    res.render('about') //render the about.ejs file
})

router.use('/mohali', (req, res) => {   //we give 2 variable req and res
    res.render('contact') //render the contact.ejs file
})
router.get('/sum', (req, res) => {
    res.render('sum')
})
router.post('/find_sum', (req, res) => { //req input ki value ko get krne k liye. res pages ko display krne k liye
    let ist = req.body.a
    let iind = req.body.b //input form ki value ko get krna
    let ans = parseInt(ist) + parseInt(iind)
    res.render('sum', { result: "Your sum is" + " " + ans }) //res page ko display karane ek liye
    //    OR  res.render('sum', { ans:result })
})

router.use("/find_multi", (req, res) => {
    if (req.method === 'GET') {
        res.render('multiply')
    }
    else {
        let a = req.body.a
        let b = req.body.b
        let result = parseInt(a) * parseInt(b)
        res.render('multiply', { ans: result }) 
        //Because res.render() expects an OBJECT (key-value pair).Not a direct variable. Because EJS ko samajhna hota hai:“Kaunsa data kis naam se use karna hai?”
    }
})
// Socho tum kisi ko data bhej rahe ho:20 . Samne wala bolega:“Ye kya hai? marks? age? price?”. marks: 20 .Ab clear hai. isliye direct result nhi bhej skte - ans:result

//humne ismai use isliye use kra instead of get and post bcoz use k ander ander dono methods hote hai get as wellas post

router.use('/add_student', (req, res) => {
    // if (req.method === 'GET')
    // {
    //     res.render('student')
    // }
    // else{
    // }
    //humko ye uper vala part krne ki zarut nhi hai ab

    studentcontroller.createstudent(req, res)
})

// or 
// router.use('/add_student',studentcontroller.createstudent) 
// //ab ye forward hokr studentcontroller vali file k ander create student mai

router.use('/registration_form',(req, res)=> {

    employeecontroller.employeeDetails(req, res)
})

router.use('/view_student',studentcontroller.viewstudent)

router.use('/view_employee',employeecontroller.viewemployee)

router.use('/delete_Student/:id',studentcontroller.deletestudent)

router.use('/update_student',studentcontroller.updatestudent)

router.use('/emp',upload.single('photo'),empcontroller.createemployee) //upload mai vhi naam likhna hai jo form mai diya hai. type file mai
// ye jayega controller k pass vha dstudentcontroller.eletestudent find karega
router.use('/employee_list',empcontroller.viewemployee)


module.exports = router //export the router object to be used in main.js


//nodejs with mvcr architechture

