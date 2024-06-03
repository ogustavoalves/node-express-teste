const routerAtendimento = require("./atendimentoRoute")

module.exports = (app, express) => {
    //essa ordem é importante
    app.use(express.json());
    app.use(express.urlencoded({ extended:true }))
    app.use(routerAtendimento);
    
}