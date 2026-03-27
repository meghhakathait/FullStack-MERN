const db = require('../config/db')

const employeeDetails=(data,callback)=>{
    const sql =`insert into employee (name,email,department,gender,address) values 
    ('${data.name}','${data.email}','${data.department}','${data.gender}','${data.address}')`

    db.query(sql,callback)
}

const fetch_record=(callback)=>{
    const sql=`select * from employee`
    db.query(sql,callback)
}
module.exports={
    employeeDetails,
    fetch_record
}