// tagged templates - procesa o template dentro de um função
function tag(partes, ...valores){
    console.log(partes)
    console.log(valores)
    return 'Outra siring'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag`${aluno} está ${situacao}`)


// criar uma máscara com tagged templates
function real(partes, ...valores){
    const result = []
    valores.forEach((valor, indice) =>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        result.push(partes[indice], valor)
    })
    return result.join('')
}

const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)