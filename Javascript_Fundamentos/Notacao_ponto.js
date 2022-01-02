console.log(Math.ceil(7.89))


const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)


function Obj(nome, preco){
    this.nome = nome
    let imposto = 0.55
    this.preco = preco
    this.final_preco = function(){
        result = preco + preco*imposto
        return result.toFixed(2)
    }
}

const obj2 = new Obj('Corda', 4.99)
const obj3 = new Obj('vela', 8,35)
console.log(obj2.nome)
console.log(obj2.final_preco())
console.log(obj3.nome)
console.log(obj3.final_preco())
