const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const pickChines = f => f.pais ==='China'
const pickWomen = f => f.genero === 'F'
const pickMenorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}

axios.get(url).then(response =>{
    const funcionarios = response.data
    //console.log(funcionarios)
    
    // desafio
    const desafioFunc = funcionarios.filter(pickChines).filter(pickWomen).reduce(pickMenorSalario)

    console.log(desafioFunc)
})
