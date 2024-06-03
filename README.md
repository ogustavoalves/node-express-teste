# Node.js + Express

Repositório para teste de um back-end com node e express conectando a um banco mysql

### Script banco:

```sql 
  create table atendimento (
  	id int primary key not null auto_increment,
      data_atendimento date,
      servico varchar(100),
      cliente varchar(30),
      status_cliente enum("ativo", "cancelado", "realizado") default "ativo"
  );
  
  insert into atendimento (data_atendimento, servico, cliente, status_cliente) values ('2024-05-31', "corte cabelo", "Gustavo", "ativo");
  insert into atendimento (data_atendimento, servico, cliente, status_cliente) values ('2024-06-01', "barba", "Fulano", "cancelado");
  insert into atendimento (data_atendimento, servico, cliente, status_cliente) values ('2022-12-25', "lavar carro", "Alves", "realizado");
```
