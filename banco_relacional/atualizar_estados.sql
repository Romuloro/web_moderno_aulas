/* update estados
set nome = 'Maranhão'
where sigla = 'MA' */

select nome from estados where sigla = "MA"

update estados
set nome = 'Paraná', populacao = 11.32
where sigla ='PR'

select est.nome,
    sigla,
    populacao
from estados est
where sigla = 'PR'