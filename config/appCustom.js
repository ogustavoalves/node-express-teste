const router = require("../routes/");
const connectionDB = require("../infra/connection");
const Tables = require("../infra/tables")

module.exports = (app, express) => {
    //essa ordem é importante:
    // ----
    router(app, express);
    Tables.init(connectionDB);
    // ----
}

