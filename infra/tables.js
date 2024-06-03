class Tables {
    init(connection) {
        this.connection = connection;
        this.createTableAtendimento();
    }

    createTableAtendimento() {
        const sql = `
            create table if not exists atendimento (
                id int primary key not null auto_increment,
                data_atendimento date,
                servico varchar(100),
                cliente varchar(30),
                status_cliente enum("ativo", "cancelado", "realizado") default "ativo"
            );
        `
        this.connection.query(sql, (error) => {
            if(error){
                console.log('erro na conexão' + error)
                return;
            }
            console.log('conexão bem sucedida');
        });
    }
}

module.exports = new Tables();