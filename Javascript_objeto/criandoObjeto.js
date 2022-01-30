const obj1 = {} //Notação literal

const obj2 = new Object // Object no Javascript

// Função construtora
function Prodruto(nome, preco, desc){
    this.nome = nome

    this.getPrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Prodruto('Caneta', 7.50, 0.13)


// Função Factory

function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase/30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Amanda', 5000, 2)
console.log(f1.getSalario())


// Object.create

const filha = Object.create(null)
filha.nome = 'Laura'
console.log(filha)

