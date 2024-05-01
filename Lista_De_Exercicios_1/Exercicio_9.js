/*Escreva um algoritmo que leia o código de origem de um produto e imprima a região
do mesmo, conforme a tabela abaixo: OBS : tabela no pdf da atividade*/

function lerCodigoDoProduto(codigoProduto){
    switch (codigoProduto){
        case 1: 
            console.log("Sul")
            break
        case 2: 
            console.log("Norte")
            break
        case 3: 
            console.log("Leste")
            break
        case 4: 
            console.log("Oeste")
            break
        case 5:
        case 6:
            console.log("Nordeste")
            break
        case 7: 
        case 8: 
        case 9:
            console.log("Sudeste")
            break
        default:
            if(codigoProduto >= 10 && codigoProduto <= 20){
                console.log("Centro-Oeste")
            } else if (codigoProduto >= 25 && codigoProduto <= 50){
                console.log("Nordeste")
            } else {
                console.log("Produto importado")
            }
            break
    }
    
}

lerCodigoDoProduto(6)