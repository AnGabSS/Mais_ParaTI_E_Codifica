/*  Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.    */

function fourNumbers(first, second, third, fourth){

    fourth += first + second + third
    first += 25
    second *= 3
    third *= 0.12

    console.log("First = " + first)
    console.log("Seconde = " + second)
    console.log("Third = " + third)
    console.log("Fourth = " + fourth)

}

fourNumbers(2,1,100,1)
