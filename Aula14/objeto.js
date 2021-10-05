
let carro = { // objeto literal
    marca: 'Toyota',
    modelo: 'Etios',
    placa: 'ADF1238',

    cor: 'preto',
    roda: 15,
    chassi: 'ABCD1234',
    anoFabricacao: 2018,

    numeroPortas: 5,

    informarCarro: function() {
        return 'Esse carro é tem a marca [' + this.marca + '], modelo [' + this.modelo + '].' 
    },

    verificarAno: function() { return this.anoFabricacao;}

 };
 
//  console.log(carro.marca) // Toyota
//  console.log(carro.modelo) // Etios
//  console.log(carro.informarCarro());
//  console.log(carro.verificarAno());

 
  

 function Carro(marca, modelo){
     this.marca = marca;
     this.modelo = modelo;

     this.informarCarro = function() {
        return 'Esse carro é tem a marca [' + this.marca + '], modelo [' + this.modelo + '].' 
    };
 }

 let meuCarro = new Carro ('Ford', 'Ka');
 let carroNovo = new Carro ('Renault', 'Oroch');

 console.log(meuCarro.informarCarro());
 console.log(carroNovo.informarCarro());