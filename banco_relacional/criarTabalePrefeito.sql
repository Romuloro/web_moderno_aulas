create table if not exists prefeitos (
    id int unsigned not null auto_increment,
    nome varchar(255) not null,
    cidade_id int unsigned,
    primary Key(id),
    unique key (cidade_id),
    foreign key (cidade_id) references cidades (id)
);