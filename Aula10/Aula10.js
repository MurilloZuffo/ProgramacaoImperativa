let meuArray = ['Star wars', 'wars ', true, 23];
//no Arrays podemos definir posições para a mesma variavel


const fruits = ["banana", "Orange", "Apple", "manga"];
console.log(fruits.join(" + ")) // junta com o que voce colocar

//push - incluir um elemento 

fruits.push("abacate")
console.log(fruits)

fruits.unshift("pesego")
console.log(fruits)
// unshift coloca na frente
fruits.pop()
console.log(fruits)
// pop - retira ao final lista


let Array = [1,2,3,4]


function matrizinvertida () {

    let Saida = []

    Saida = Array.pop();
    Array.unshift(Saida)
    Saida.pop();
    Saida = Array.pop();
    Array.unshift(Saida)
    Saida.pop();
    Saida = Array.pop();
    Array.unshift(Saida)
    Saida.pop();
    // Saida = Array.pop();
    // Array.unshift(Saida)
    // Saida.pop();

    // Saida = Array.pop();
    // Array.unshift(Saida)
    // Saida = Array.pop();
    // Array.unshift(Saida)
    // Saida.push();
    // Saida = Array.pop();
       // // let ArrayTemporario = ArrayTemporario.push(Saida)
    // Array.push(Saida);
    // Saida = Array.pop();
    // Array.push(Saida);
    // Saida = Array.pop();
    // Array.push(Saida);
   
    console.log(Saida)
    console.log(Array)
}
// // console.log(Fruits.join((4)))
matrizinvertida(Array)