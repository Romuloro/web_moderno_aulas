const fabricante = ["Mercedes", "Audi", "BMW"]

imprimir = (nome, indice) => {
    console.log(`${indice + 1}. ${nome}`)
}

fabricante.forEach(imprimir)

// Callback VS nao callback

const notas = [ 7.7, 5.2, 8.3, 4.1, 2.3, 9.4]

let notasBaixas = []
for (let i in notas){
    if (notas[i] <= 7){
        notasBaixas.push(notas[i])
    }
}

notasBaixas2 = notas.filter(nota => nota <= 7)
console.log(notasBaixas2)

