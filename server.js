const express = require("express");
const mysql = require('mysql2');
// const sequelize = require("./config/connection");
// const db = require(db);


const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ===================== DEVELOP ================================================
const inquirer = require("inquirer");
const db = require("./config/connection");

// const db = mysql.createConnection(
//   {
//     host: 'localhost',
//     // MySQL username,
//     user: 'root',
//     // TODO: Add MySQL password
//     password: process.env.DB_PASSWORD,
//     database: 'employee_db'
//   },
//   console.log(`Connected to the books_db database.`)
// );

const promptOpt = [
    {
        type:"list",
        message:"What would you like to do?",
        name:"selections",
        choices: [
        {name: "View all departments",
        value: "viewAllDep"},
        {name: "View all roles",
        value: "viewAllRoles"},
        {name: "View all employees",
        value: "viewAllEmp"},
        // "Add a department",
        // "Add a role",
        {type: "input",
        name: "Add a role",
        message: "Type in a new role"},
        // "Add an employee",
        // "Update an employee role"
        ]
    }
  
]

function viewAllDep() {
  return db.query("SELECT * FROM department", function (err, results) {
    console.log(results);

    // results.forEach((department) => {
    //   console.log(`${department.id}`);
    //   console.log(`${department.name}`);
    // });
    // results come back as arrays
    // should return as sql tables, should SHOW Tables;
    // after the function is called, then I should be done and go to my menu probably
  })
  

}

function addRole() {
  /** To add a role you need to make user type stuff
   * then you get that data and put it into a sql statement that will make a new item in the table
   then return table so user knows about the change or console log a response
   */
// const title = 
// const salary = 
// department_id =
 addRoleParams = `INSERT INTO role (title, salary, department_id)
  VALUES (?,?,?)`

  // return this.connection.promise().query("INSERT INTO role ")

}


function init() {
    inquirer
    .prompt(promptOpt)
    .then( (optionData) => {
        // console.log(optionData);
        if (optionData.selections ==  "viewAllDep"){
console.log("you have selected to view all departments")
console.log( viewAllDep())

}else if (optionData == "Add a role") {
  console.log( addRole())
}





})
}
/* I want to send user a SQL Table back
when a choice is selected, a function is called that makes the table show up in the console */
// return txt to terminal from the function
// switch statement, when "View all departments" is selected, call viewAllDep

init ()
// UPDATE


// role
// INSERT INTO role 



// see all employees
// sequelize.query("SELECT * FROM employee", function (err, results) {
//   console.log(results);
// })

// // see all roles
// sequelize.query("SELECT * FROM role", function (err, results) {
//   console.log(results);
// })

// // see all departments
// sequelize.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
// })

// =======================================================================
// db.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
// });