select
    e.nome as estado,
    c.nome as Cidade,
    regiao as Região
from estados e, cidades c
where e.id = c.estado_id;


select
    e.nome as estado,
    c.nome as Cidade,
    regiao as Região
from estados e
inner join cidades c on e.id = c.estado_id