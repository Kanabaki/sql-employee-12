const Sequelize  = require("sequelize");
require("dotenv").config();



const sequelize = new Sequelize(
    // console.log(process.env.DB_NAME,process.env.DB_USER, process.env.DB_PASSWORD),
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
  
  module.exports = sequelize;