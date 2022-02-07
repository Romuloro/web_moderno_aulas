const gerarNumerosEntre = (min, max) =>{
    if (min >= max){
        let [min, max] = [max, min]
    }

    return new Promise((resolve, reject) =>{
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min
        resolve(aleatorio)
    })
}

const gerarMaisUm = (num1) =>{
    let nNum = []
    let novo = gerarNumerosEntre(1,60)
    //novo = novo[0]
    nNum.push(num1, novo)
    return nNum
}

gerarNumerosEntre(1,60)
    //.then(console.log)
    //.then(num => gerarMaisUm(num))
    .then(num => console.log(num))

