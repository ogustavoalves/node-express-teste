const connection = require("../infra/connection");

class atendimentoModel {

    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
          connection.query(sql, parametros, (error, answer) => {
            if (error) {
              return reject(error);
            }
            return resolve(answer);
          });
        });
      }

    toList() {
        const sql = "SELECT * FROM atendimento;"

        return this.executaQuery(sql)
    }

    toCreate(novoAtendimento) {
        const sql = "INSERT INTO atendimento SET ?";
        
        return this.executaQuery(sql, novoAtendimento);
    }

    toUpdate(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimento SET ? WHERE id = ? ;";
        
        return this.executaQuery(sql, [atendimentoAtualizado, id]); 
    }
    
    toDelete(id) {
        const sql = "DELETE FROM atendimento WHERE id = ? ;";
        
        return this.executaQuery(sql, id);
    }
}

module.exports = new atendimentoModel; 