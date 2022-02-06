const http = require('http')


const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) =>{
        http.get(url, res =>{
            let resultado = ''
            res.on('data', dados =>{
                resultado += dados
            })
            res.on('end', () =>{
                try{
                    resolve(JSON.parse(resultado))
                } catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Recurso ES8 simplificar o uso de promisses...

let obterAlunos = async() =>{
    const turma = await getTurma('A')
    const turmb = await getTurma('B')
    const turmc = await getTurma('C')
    return [].concat(turma, turmb, turmc)
} // returna um objeto AsyncFunction

obterAlunos()
    .then(alunos => alunos.map(a => a.nome))
    .then(nomes => console.log(nomes))