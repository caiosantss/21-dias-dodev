/* 1 - Crie um array para receber os nomes dos alunos e outro para receber as notas;


2 - Para cada aluno inserido pergunte o nome e a nota da prova;


3 - Seu usuário deve ter a opção de parar de inserir informações quando desejar;


4 - No final exiba a nota de cada aluno, a soma das notas e a média geral da turma. Para calcular a média deve dividir a soma das notas pelo total de alunos.
*/

let NomeAluno = []
let Notas = []
let contador = 0
let NumDeAlunos = parseInt(prompt('Quantos alunos serão cadastrados? '))
for (let i = 0; i < NumDeAlunos; i++) {
    
    let nomes = prompt(`Digite o nome do ${contador + 1}  aluno: `)
    let notas = parseInt(prompt(`Digite a nota do ${contador + 1} alunos:`))
    contador ++
    
    NomeAluno[i] = nomes
    Notas [i] = notas
    
}

console.log (`Nome dos alunos: ${NomeAluno} - Notas: ${Notas}`)

let SomaDasNotas = 0
for (let i = 0; i < NumDeAlunos; i++) {
    SomaDasNotas += Notas[i] 
}

let MediaDasNotas = SomaDasNotas / NumDeAlunos
console.log(`A soma das notas foi ${SomaDasNotas}`)
console.log(`A media das notas foi ${MediaDasNotas}`)