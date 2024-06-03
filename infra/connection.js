const mysql = require("mysql");

const connectionDB = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password_here",
    database: "database_name_here",
});

module.exports = connectionDB;