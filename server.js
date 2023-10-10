const express = require("express");
const mysql = require('mysql2');
const sequelize = require("./config/connection");


const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});