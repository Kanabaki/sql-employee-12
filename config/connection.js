const mysql = require('mysql2');
require("dotenv").config();


const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
  },
  console.log(`Connected to the mysql.db`)
)
  
// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: process.env.DB_USER,
//     // TODO: Add MySQL password
//     password: process.env.DB_PASSWORD,
//     database: 'employee_db'
//   },
//   console.log(`Connected to the mysql.db`)
// )

  // module.exports = sequelize;
  module.exports = db;