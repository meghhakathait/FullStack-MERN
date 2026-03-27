const emp_model = require('../models/empmodel')

const createemployee = (req, res) => {
    if (req.method === "GET") {
        res.render('emp')
    }
    else {
        const emp_name = req.body.name
        const emp_dept = req.body.dept
        const photo = req.file.filename
        const data = { name: emp_name, dept: emp_dept, photo: photo }

        emp_model.store_employee(data, (err) => {
            if (err) {
                res.render('emp', { message: err });
            }

            else {
                res.render('emp', { message: emp_name + " " + 'added successfully' })
            }
        });
    }

}


const viewemployee = (req, res) => {
    emp_model.get_employee((err, result) => {
        if (err) {
            res.render('viewemp', { message: err })
        }
        else {
            res.render('viewemp', { employee: result }) 
        }
    })
}




module.exports = {
    createemployee,
    viewemployee
}