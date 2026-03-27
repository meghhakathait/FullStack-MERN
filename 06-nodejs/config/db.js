const mysql=require('mysql2')

// const db=mysql.createConnection({
//     host:'localhost',  //host means apka database kaha pr download hai -localhost means this pc
//     user:'root',  //bydefault user hota hai
//     password:'',
//     database:'school' //konsa db connect krna hai
// })

 const db=mysql.createPool({
    host:'localhost',  //host means apka database kaha pr download hai -localhost means this pc
    user:'root',  //bydefault user hota hai
    password:'root123',
    database:'school', //konsa db connect krna hai
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})
//ye code hamesha same rahega bs pass or database name .


// db.connect((err)=>{
//     if(err){
//         console.log('Error connecting to database:',err) //ye check krega ki db se connect ku nhi hua otherwise else
//     }
//     else{
//         console.log('Connected to databse')
//     }
// })

module.exports=db