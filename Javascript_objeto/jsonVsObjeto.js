const obj = { a:1, b:2, c:3, d:4, soma() {return a + b+ c + d}}
console.log(JSON.stringify(obj)) // Transforma tudo que é dado em JSON

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3, "d": [[1, 2, 3], [4, 5, 6]]}'))

