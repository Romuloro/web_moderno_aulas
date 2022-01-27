// Closure e o escopo criado quando uma funcao e declarada esse escopo permite a funcao acessar e manipular variaves externas a funcao

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())
