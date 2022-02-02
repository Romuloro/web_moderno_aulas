const pai = { nome: 'Paulo', corPele: 'Negra', altura: 185 }

const filha1 = Object.create(pai)
filha1.nome = 'Alda'
filha1.altura = 170 
console.log(filha1.altura, filha1.nome)

const filho1 = Object.create(pai, {
    nome:{ value:'Renato', writable: false, enumerable: true}
})

console.log(`${filho1.nome} tem a cor de pele ${filho1.corPele}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filho1))

for (let key in filho1){
    filho1.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herença ${key}`)
}


