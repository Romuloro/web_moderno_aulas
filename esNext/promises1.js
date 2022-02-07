let p = new Promise((cumprirPromessa) =>{
    cumprirPromessa({
        nome: 'Rômulo',
        nota: 8.4
    })
})

//console.log(p)

const aprovacaoConselho = (pedido) => pedido.nota >= 6 ? console.log(`Sr(a). ${pedido.nome} o seu pedido foi Aceito pelo conselho.`) : console.log(`Sr(a). ${pedido.nome} o seu pedido foi Rejeitado pelo conselho.`)


p
    .then(aprovacaoConselho)

