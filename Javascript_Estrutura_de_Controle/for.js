function parcelamento(value){
    for (let i = 1; i<=10; i++){
        let parcelas = value/i
        console.log(`Seu pagamento é de R$ ${parcelas} em ${i}X sem juros`)
    }
}

parcelamento(500.50)

const palestrantes = {
    nome: 'Marcelo',
    sobrenome: 'Oliva Calvacante',
    idade: 45,
    cargo: 'Gerente de análise de dados da IBM'
}

for (let informacao in palestrantes){
    console.log(`${informacao} = ${palestrantes[informacao]}`)
}
