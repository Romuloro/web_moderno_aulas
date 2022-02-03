const escola = [{
    turma: 'Turma M1',
    alunos: [{
        nome:'Alex',
        nota: 6
    }, {
        nome:'Ronald',
        nota: 9
    }]
}, {
    turma: 'Turma M2',
    alunos: [{
        nome: 'Anderson',
        nota: 8
    }, {
        nome: 'Vânia',
        nota: 7.5
    
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

Array.prototype.flatMap = function (callback) {
    return Array.prototype.concat.apply([], this.map(callback))}

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

const notas4 = escola.flatMap(getNotasDaTurma)
console.log(notas4)