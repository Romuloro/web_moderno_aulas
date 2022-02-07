// promises são estruturas de ação assincronas

function falarDepoisDe(segundos, frases){
    return new Promise((resolve, reject) =>{
        if (segundos <= 1){
            setTimeout(() =>{
            reject(frases)
            }, segundos * 1000)}
        else{
        setTimeout(() =>{
            resolve(frases)
        }, segundos * 1000)}
    })
}

falarDepoisDe(4, 'Bora!!')
    .then(frases => frases.concat('Bora?!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))

