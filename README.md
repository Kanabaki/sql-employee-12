# SQL Employees
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  ## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Description 
The motivation for building this project was to integrate inquirer and mysql to create a neat content management system.
SQL Employees was built to serve as an interface that users could navigate to interact with data in a database (in this case being SQL).
This app provides non-developers with the ability to manage an employee database. Concepts learned include creating a mysql connection for sql queries and protecting it with environment variables. Inquirer was also explored more deeply and made to be more dynamic with more options to choose from than my previous projects. Prepared statements were also learned to react to user input and then perform queries like JOIN, UPDATE, etc. 

## Installation
Make sure to have your modules and package lock setup with **npm install** if you don't have those already. Next you must verify that you have the SQL database sourced for your queries. If you would like some sample data in your database before you make your queries, you can opt to seed the database now that you are in the SQL shell. Before making queries, make sure you set up your mysql connection in the config directory and input your SQL credentials to allow for the mysql package to read the data from the sourced database. 

## Usage

Usage Image:

![alt text](path to the image)

With your terminal open, run the line **node server.js** to start SQL Employee. Using your arrow and enter keys, you can navigate the different options and then follow the prompts to interact with your database of employees that include a table of departments, roles, and employees. To exit the app just simply navigate to the exit option at the bottom or ctr+C. 

Link to Demo Video: 


## Credits
Original Starter code from: https://github.com/coding-boot-camp/fantastic-umbrella

Repo referenced for Startup: https://github.com/nramirez686/employeeNavigator

The maybeChangeToNull function was inspired by: https://stackoverflow.com/questions/54537680/how-to-insert-null-value-from-nodejs-javascript-to-mysql-using-parameterized-inp


## License
License: MIT

## Contributing 
Go to the Questions section for more info.

## Tests 
No tests at this time.

## Questions 
If you have questions regarding the app, you can reach out to my github or email.

GitHub: https://github.com/Kanabaki

Email: kagomekanabaki@gmail.com

-Note- Some code was developed under Ismeny Castro who guided main prompt setup with inquirer. Jili Jiang helped develop the exit, viewAllEmp and addRole functions. Also credits to Torrey Taylor with the updateRole function and for addition query guidance. -Note-


