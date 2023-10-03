
const mysql = require('mysql2');
const databaseConfig = require('../config/database');
const mysqlConnection = mysql.createConnection(databaseConfig);

const projectModels=  {

 getAll: (callback) => {
    const sql = 'SELECT * FROM project';
    mysqlConnection.query(sql, callback);
 } 

}

module.exports = projectModels