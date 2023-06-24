const mysql = require('mysql2');
// const { Connection } = require('mysql2/typings/mysql/lib/Connection');
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345@Sql',
    database:'testschemas'
})
mysqlConnection.connect((err)=>{
    if(err){
        console.log('Error in DB connection detected '+JSON.stringify(err,undefined,2));
    } else {
        console.log('DB connected successfully')
    }
})
module.exports=mysqlConnection