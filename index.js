
const express = require("express");


const router = require("./routes/index");
const app = express();
const port = 3000;

const connectionDB = require("./infra/connection");
const Tables = require("./infra/tables")

//essa ordem é importante:
// ----
router(app, express);
Tables.init(connectionDB);
// ----

app.listen(port,(error) => {
    if(error) {
        console.log("Error", error);
        return;
    }
    console.log("Rodando aplicação")
});