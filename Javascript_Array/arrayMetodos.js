const times = ['Flamengo', 'Fluminense', 'Vasco', 'Atlético']
times.pop() //Retirar o último da array
console.log(times)

times.push('Botafogo') //inclue no final da array
console.log(times)

times.shift() //remove o primeiro
console.log(times)

times.unshift('Corinthians') // inclue no começo
console.log(times)

const outrostimes = times.slice(1) // Pegar do indicie escolhido fazendo um novo array
console.log(outrostimes)
