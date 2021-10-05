let pessoas = [
    {nome:"Diego Reis",
     altura:1.71,
     sexo:'M'},

     {nome:"Fagner Wall",
     altura:1.70,
     sexo:'M'},

     {nome:"Tereza Virginio",
     altura:1.57,
     sexo:'F'},

     {nome:"Antonio Rocha",
     altura:1.70,
     sexo:'M'},

     {nome:"Maria de Fátima",
     altura:1.02,
     sexo:'F'},


     {nome:"Emanoela Dourado",
     altura:1.65,
     sexo:'F'},

     {nome:"Luciano John Ivo",
     altura:1.72,
     sexo:'M'},


     {nome:"Ramirez Alex",
     altura:1.77,
     sexo:'M'},


     {nome:"Duda Reis",
     altura:1.06,
     sexo:'F'},


     {nome:"Jorge Alvarez",
     altura:1.84,
     sexo:'M'},


     {nome:"Carlos Alves",
     altura:1.76,
     sexo:'M'},


     {nome:"Karine Andrade",
     altura:1.60,
     sexo:'F'},

     {nome:"Aline Sanches",
     altura:1.68,
     sexo:'F'},


     {nome:"Alex Barreto",
     altura:1.65,
     sexo:'M'},

     {nome:"João Marcos",
     altura:1.98,
     sexo:'M'}

]

let maiorPessoa = undefined
let menorPessoa = undefined

function maiorMenor(listagem){
    for (let i = 0; i < listagem.length; i++){
        if (maiorPessoa == undefined) {
            maiorPessoa = listagem[i]
        } else 
                if (listagem[i].altura > maiorPessoa.altura){
                    maiorPessoa = listagem[i]
        }
        if (menorPessoa == undefined){
            menorPessoa = listagem[i]
        } else  if (listagem[i].altura < menorPessoa.altura){
            menorPessoa = listagem[i]
        }
    }
} 

let arrayFeminino = pessoas.filter(function(qlqnome){
    return qlqnome.sexo == 'F'
})

let media = 0
function mediaFem(arrayFemininoem){
    for (let i = 0; i < arrayFemininoem.length; i++){
        media += arrayFemininoem[i].altura
    }
    return A média da altura das mulheres é de ${media / arrayFemininoem.length}
}

console.log(mediaFem(arrayFeminino))

maiorMenor(pessoas);
console.log(maiorPessoa);
console.log(menorPessoa);

let arrayF = pessoas.filter(function(qlqnome){
    return qlqnome.sexo == 'F'
})
console.log(arrayF);

// let mediaF = arrayF.reduce(function(a, b){
//     return a.altura + b.altura
// })

let arrayA = Array(arrayF['altura']) 
    


console.log(arrayA)

// console.log(alturas)

// console.log(mediaF);



// usar filter e reduce