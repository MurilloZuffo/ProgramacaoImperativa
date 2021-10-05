const dados = require('./dados');

console.log(dados)
console.log('Total', dados.length)

const homens =dados.filter((dado) => {
    return dado.sexo === 'M'
});

console.log('Homens', homens.length)

const mulheres =dados.filter((dado) => {
    return dado.sexo === 'F'
});

console.log('Homens', homens.length)
console.log('Mulheres', mulheres.length)

const totalalturahomem = homens.reduce((grupo, homem) => {
    return grupo + homem.altura;
}, 0); 
// usamos o zero no fim para atribuir o inicio em zero!

const MediaAlturaHomens = totalalturahomem / homens.length

const totalalturaMulheres = mulheres.reduce((grupo, mulheres) => {
    return grupo + mulheres.altura;
}, 0); 

const MediaAlturaMulheres = totalalturaMulheres / mulheres.length

console.log('media das alturas das mulheres é ', MediaAlturaMulheres);
console.log('media das alturas dos homens é ', MediaAlturaHomens);


const testForEach =() =>{

    let totalhomens =[];
    let altura =0;

    dados.forEach((objeto) => {
        objeto.altura > altura
    })
    return Altura
}

// dados.filter(function(dado){


// })