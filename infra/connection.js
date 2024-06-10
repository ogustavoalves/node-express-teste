const mysql = require("mysql");


const connectionDB = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "",
});

module.exports = connectionDB;