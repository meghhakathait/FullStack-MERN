const db = require('../config/db');

const store_employee = (data,callback) => {
    const sql = `insert into emp(name,dept,photo)values('${data.name}','${data.dept}','${data.photo}')`
    db.query(sql,callback)
}


const get_employee=(callback)=>{
    const sql = `select * from emp`
    db.query(sql,callback)
}


module.exports = {
    store_employee,
    get_employee
}