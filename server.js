const express = require("express");
const inquirer = require("inquirer");
const mysql = require('mysql2');
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ===================== DEVELOP ================================================

// const db = require("./config/connection");

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: 'employee_db'
  },
  console.log(`Connected to the mysql.db`)
)

function promptCall() {
inquirer.prompt([
    {
      type:"list",
      message:"What would you like to do?",
      name:"selections",
      choices: [
      {
        name: "View all departments",
        value: "viewAllDep",
      },
      {
        name: "View all roles",
        value: "viewAllRoles",
      },
      // {
      //   name: "View all employees",
      //   value: "viewAllEmp",
      // },
        // "Add a department",
      {
        name: "Add a role",
        value: "addRole",
      },
        // "Add an employee",
        // "Update an employee role"
      {
        name: "Exit",
        value: "exit"
      }
        ]
    }
  ]
)
.then((optionData) => {
  // console.log(optionData);
  if (optionData.selections ==  "viewAllDep"){
console.log("you have selected to view all departments")
return viewAllDep()

// console.log( viewAllDep())
} else if (optionData.selections == "addRole") {
return addRole()

} else if (optionData.selections == "viewAllRoles") {
return viewAllRoles()
  } else if (optionData.selections == "exit"){
    console.log("またあとで！")
    return db.end();
  }
})
}

// db.query("SELECT * FROM department", function (err, results) {
//   console.log(results);
// })

function viewAllDep() {
db.query("SELECT * FROM department", function (err, results) {
  console.log("_________________________")
    console.table(results);
    promptCall()
  })
}

function viewAllRoles() {
  db.query("SELECT * FROM role", function (err, results) {
    console.log("_________________________")
      console.table(results);
      promptCall()
    })
  }
  

function addRole() {

  db.query("SELECT * FROM department", function (err, results) {
    const depData = results;
    const departments = results.map((d) => d.name);
      console.table(depData);
      
      const rolePrompts = [
        {
          type: "input",
          message: `Enter a Role Title: `,
          name: "title",
        },
        {
          type: "input",
          message: `Enter a Role Salary: `,
          name: "salary",
        },
        {
          type: "list",
          message: `Choose a Department `,
          name: "dep",
          choices: departments
        }];
        inquirer.prompt(rolePrompts)
        .then((roleParams) => {
          // console.log(roleParams)
          const department_id = depData.filter(department => department.name !== roleParams.dep)[0].id;
      console.log(department_id)
        const addRoleQuery = `INSERT INTO role (title, salary, department_id) 
          VALUES (?,?,?)`
       db.query(addRoleQuery, [roleParams.title,roleParams.salary, department_id], function (err, results) {
        console.log("_________________________")
          viewAllRoles()
          promptCall()
        })
        })
    })

}
  /** To add a role you need to make user type stuff
   * then you get that data and put it into a sql statement that will make a new item in the table
   then return table so user knows about the change or console log a response
   */
// const title = 
// const salary = 
// department_id =









promptCall()
/* I want to send user a SQL Table back
when a choice is selected, a function is called that makes the table show up in the console */
// return txt to terminal from the function
// switch statement, when "View all departments" is selected, call viewAllDep


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

// =======================================================================
// db.sync().then(() => {
  // app.listen(PORT, () => console.log('\n Now listening'));
// });