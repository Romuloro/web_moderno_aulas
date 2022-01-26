let dobro = function(a){
    return 2*a
}

dobro = (a)=> {
    return 2*a
}

triplo = a => 3*a  //funcao de uma linha com return implicito
console.log(triplo(6))

ola = () => `Ola`

console.log(ola())

// this na arrow function

function Pessoa(){
    this.idade = 0

    setInterval(() =>{
        this.idade++
        console.log(`Ele(a) tem ${this.idade}`)
    }, 1000)
}

let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)

const obj={}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports)


