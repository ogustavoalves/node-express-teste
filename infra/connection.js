const mysql = require("mysql");

const connectionDB = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Wxdvhekyzl141020",
    database: "controle_atendimento",
});

module.exports = connectionDB;