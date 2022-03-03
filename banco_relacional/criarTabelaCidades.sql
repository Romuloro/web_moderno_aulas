create table if not exists cidades (
    id int Unsigned not null auto_increment,
    nome Varchar(255) not null,
    estado_id int unsigned not null,
    area decimal(10,2),
    primary key (id),
    foreign key (estado_id) references estados (id)
);