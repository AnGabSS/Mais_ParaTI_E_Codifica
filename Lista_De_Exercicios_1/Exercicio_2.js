//Escreva um algoritmo para ler o número de eleitores de um município, o número devotos brancos, nulos e válidos. 
//Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

function calcularPorcentagem(total, parteDoTotal){
    return (parteDoTotal / total) * 100
}

function percentualDeVotos(eleitores, votosEmBranco, votosNulos, votosValidos){

    console.log("Porcetagens de votos em relação ao número de eleitores: ")
    console.log("Votos brancos: " + calcularPorcentagem(eleitores, votosEmBranco))
    console.log("Votos nulos: " + calcularPorcentagem(eleitores, votosNulos))
    console.log("Votos válidos: " + calcularPorcentagem(eleitores, votosValidos))

}

percentualDeVotos(200, 10, 20, 160)

