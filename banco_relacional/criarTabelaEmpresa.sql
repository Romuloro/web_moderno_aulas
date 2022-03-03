create table if not exists empresas (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cnpj int unsigned,
    primary key (id),
    unique key (cnpj)
);


create table if not exists empresas_unidades (
    empresa_id int unsigned not null,
    cidade_id varchar(255) not null,
    sede tinyint(1) not null,
    primary key (empresa_id, cidade_id)
);