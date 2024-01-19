create database dani_site;

create table usuarios (
  id serial primary key,
  nome varchar (100) not null,
  email varchar (100) not null,
  senha varchar (16) not null,
  cadastro varchar (20) not null
 );

 create table processos (
  id serial primary key,
  processo_id integer not null references usuarios(id),
  autor text not null,
  reu text not null,
  numero integer not null,
  vara text not null,
  juiz text not null,
  comarca text not null,
  data_entrada text not null,
  atualizado text not null,
  infos text not null
  );

  insert into usuarios (nome, email, senha, cadastro) 
values ('Eduardo Lago Nunes', 'eduardolagonunes@gmail.com', '123456', 'cliente');
