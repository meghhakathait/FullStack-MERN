const db = require('../config/db')
const { deletestudent } = require('../controller/studentcontroller')

const createstudent=(data,callback)=>{
     const sql= `insert into student(name,roll,branch)values('${data.name}','${data.roll}','${data.branch}')` 
     //ye data.laga kr vo likhna hai jo humne name diya hoga
     db.query(sql,callback)

}

const fetch_record=(callback)=>
{
    const sql=`select *from student`
    db.query(sql,callback)
}

const delete_record = (id, callback)=>
{
    const sql= `delete from student where id=${id}`
    db.query(sql,callback)
}

const update_record =(data,callback)=>{
 const sql= `update student set name='${data.name}',roll='${data.roll}',branch='${data.branch}' where id='${data.id}'`
  db.query(sql,callback)
}

module.exports={
    createstudent,
    fetch_record,
    delete_record,
    update_record
}