/*
Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).

Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
*/

function verificarAprovacaoAluno(nota1, nota2){

    let media = (nota1 + nota2) / 2

    if(media >= 6.0){
        console.log("PARABÉNS! Você foi aprovado")
    } else {
        console.log("Você foi REPROVADO! Estude mais")
    }

}

verificarAprovacaoAluno(6, 5)

