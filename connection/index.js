const mysql = require('mysql2');
require('dotenv').config();

const connect = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD
});

module.exports = { connect };