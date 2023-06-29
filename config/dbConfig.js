// Setting connection details
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