const employee_model = require ('../models/employeemodel')


const employeeDetails = (req,res)=>{
    if (req.method === 'GET'){
        res.render('employee')
    }
    else{
        const name = req.body.name
        const email = req.body.email
        const department = req.body.department
        const gender = req.body.gender
        const address = req.body.address

        const employee_data ={name:name, email:email, department:department, gender:gender, address:address}

        employee_model.employeeDetails(employee_data,(err)=>{
            if(err){
                res.render('employee',{message:"record not inserted" +err})
            }
            else{
                res.render('employee',{message:name + " " + "record inserted successfully"})
            }
        })
    }
}

const viewemployee =(req,res)=>{
    employee_model.fetch_record((err,result)=>{
        if(err){
            res.render('viewemployee', { message: "record not found" + err })
        }
        else{
            res.render('viewemployee', { employees: result })
        }
    })
}

module.exports = {
    employeeDetails,
    viewemployee
}