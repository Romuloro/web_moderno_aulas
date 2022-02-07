const fs = require('fs')
const path = require('path')

const caminho = path.join(__dirname, 'dados.txt')

const lerArquivo = (caminho) =>{
    return new Promise((resolve, reject) => {
        fs.readFile(caminho, (_, conteudo) => {
            resolve(conteudo.toString())
        })
    })
}

lerArquivo(caminho)
    .then(conteudo => console.log(conteudo))