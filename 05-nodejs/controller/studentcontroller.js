const stu_model = require('../models/studentmodel');
//model k pass jayega
const createstudent = (req, res) => {
    if (req.method === 'GET') {
        res.render('student')
    }
    else {
        const nm = req.body.name
        const rll = req.body.roll
        const brn = req.body.branch
        const student_data = { name: nm, roll: rll, branch: brn }
        //json bna diya
        //above part for data k liye jo humne studentmodel mai diya hai
        stu_model.createstudent(student_data, (err) => {
            if (err) {
                res.render('student', { message: "record not inserted" + err }) //error display kra skte ki exact error kya aya
            }
            else {
                res.render('student', { message: nm + " " + "record inserted successfully" })
            }
        })
        //ye uper ka sara part call back ka hai
    }
}

const viewstudent = (req, res) => {
    stu_model.fetch_record((err, result) => {
        if (err) {
            res.render('viewstudent', { message: "record not found" + err })
        }
        else {
            res.render('viewstudent', { students: result })
        }
    })
}

const deletestudent = (req, res) => {
    student_id = req.params.id
    stu_model.delete_record(student_id, (err) => {
        if (err) {
            res.render('viewstudent', { message: "record not deleted" + err })
        }
        else {
            stu_model.fetch_record((err, result) => {
                if (err) {
                    res.render('viewstudent', { message: "record not found" + err })
                }
                else {
                    res.render('viewstudent', { students: result, message: "record deleted successfully" })
                }
            })
        }
    })
}

const updatestudent = (req, res) => {
    stu_id = req.body.id
    const stu_name = req.body.name
    const stu_roll = req.body.roll
    const stu_branch = req.body.branch
    const data = {id:stu_id,name:stu_name,roll:stu_roll,branch:stu_branch }
    stu_model.update_record(data,(err)=>{
     if (err) {
                res.render('viewstudent', { message: "record not updated" + err }) //error display kra skte ki exact error kya aya
            }
            else {
                stu_model.fetch_record((err, result) => {
                if (err) {
                    res.render('viewstudent', { message: "record not found" + err })
                }
                else {
                    res.render('viewstudent', {students: result, message:"Student Id no "+stu_id+ " record updated successfully" })
                }
            })
            }
    })
}

module.exports = {
    createstudent,
    viewstudent,
    deletestudent,
    updatestudent
}