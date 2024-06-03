const connection = require("../infra/connection");

class atendimentoModel {

    executaQuery(sql, parametros = "") {
        return new Promise((resolve, reject) => {
          connection.query(sql, parametros, (error, resposta) => {
            if (error) {
              return reject(error);
            }
            return resolve(resposta);
          });
        });
      }

    toList() {
        const sql = "SELECT * FROM atendimento;"

        return new Promise((resolve, reject) => {
            connection.query(sql, {}, (error, answer) => {
                if (error) {
                    console.log('Houve um erro no toList (AtendimentoModel)' + error.stack);
                    reject(error);
                }
                console.log('toList funcionando perfeitamente (AtendimentoModel)');
                resolve(answer);
            });
        });
    }

    toCreate(novoAtendimento) {
        const sql = "INSERT INTO atendimento SET ?";
        
        return new Promise((resolve, reject) => {
            connection.query(sql, novoAtendimento, (error, resp) => {
                if(error) {
                    console.log("Erro ao criar" + error.stack);
                    reject(error)
                }
                console.log("Criado com sucesso")
                resolve(resp)
            });
        }); 
    }

    toUpdate(atendimentoAtualizado, id) {
        const sql = "UPDATE atendimento SET ? WHERE id = ? ;";
        
        return new Promise((resolve, reject) => {
            connection.query(sql, [atendimentoAtualizado, id], (error, resp) => {
                if(error) {
                    console.log("Erro ao atualizar" + error.stack);
                    reject(error)
                }
                console.log("Atualizado com sucesso")
                resolve(resp)
            });
        }); 
    }
    
    toDelete(id) {
        const sql = "DELETE FROM atendimento WHERE id = ? ;";
        
        return new Promise((resolve, reject) => {
            connection.query(sql, id, (error, resp) => {
                if(error) {
                    console.log("Erro ao deletar" + error.stack);
                    reject(error)
                    return
                }
                console.log("Deletado com sucesso")
                resolve(resp)
            });
        }); 
    }
}

module.exports = new atendimentoModel; 