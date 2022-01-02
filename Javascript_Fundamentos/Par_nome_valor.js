/*
par nome/valor
*/

const saudacao = 'Opa' //contexto léxico 1

function exec(){
    const saudacao = 'Koe lek' // contexto léxico 2
    return saudacao
}

// Objeto são grupos de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 24,
    peso: 85,
    endereco: {
        logadouro: 'Avenida Presidente Paker',
        numero: 7899,
        cep: 24889750
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
