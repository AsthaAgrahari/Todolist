// const mysql = require('mysql2');
// const { Connection } = require('mysql2/typings/mysql/lib/Connection');
module.exports={
    HOST:'localhost',
    USER:'root',
    PASSWORD:'12345@Sql',
    DB:'testschemas',
    dialect: 'mysql',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    }
}
// mysqlConnection.connect((err)=>{
//     if(err){
//         console.log('Error in DB connection detected '+JSON.stringify(err,undefined,2));
//     } else {
//         console.log('DB connected successfully')
//     }
// })
// module.exports=mysqlConnection