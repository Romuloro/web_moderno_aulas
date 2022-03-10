alter table empresas modify cnpj varchar(15);

insert into empresas (nome, cnpj)
values
    ('Bradesco', 78945612378945),
    ('Vale', 12345678903214),
    ('Magalu', 07894561230741);


desc empresas;



insert into empresas_unidades (empresa_id, cidade_id, sede)
values
/*     (1,1,1),
    (1,2,0),
    (2,3,0), */
    (2,4,1);

select * from empresas_unidades