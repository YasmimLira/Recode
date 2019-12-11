let alunos = []
let soma = 0
let media = 0
for(let i = 1; i <= 5; i++){
    alunos[i] = Number(prompt('Digite o valor da nota:'))
    soma = soma + alunos[i]

}
media = soma / 5
document.write(`Média ${media} <br>`)

for(let i = 1; i <= 5; i++){
    if(alunos[i]>=media){
        document.write(`Aluno ${i} tirou ${alunos[i]}<br>`)
    }
}