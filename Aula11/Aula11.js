// tabuada

for (let i = 0; i <=10; i++) {

    console.log(i * 7)
}

// pode ser String
for (let i = 0; i <= 4; i++) {

    console.log ("ola ola")
}
// Saber o numero de looping
for(let i = 0;i <= 5; i++) {

    console.log (i)
}

// para saber se é par o resultado da divisão tem que ser % == 0

//repitindo os numeros impares apensas

for(let i = 0; i <= 10; i++) {
    
    if (i %2 != 0) {

        console.log(i)

    }
    

}

//while and do while

function volta (){
    let volta =1

    while(volta<=10){
        // atribui a logica
        console.log("volta numero "+volta)

        volta++
        // determina o aumento por volta 
    }
}
volta()

// do while

function voltadowhile (){
    let volta =1

    do{
        console.log("volta do while numero "+volta)
        volta++
         // determina o aumento por volta 
    }

    while(volta < 1){
        // atribui a logica como o do está antes ele executa o do pelo menos uma vez
        //mesmo pela logica dando false ele já executou 
       
       
    }
}
voltadowhile()

// media da turma
//dados da turma - aluno e notas
// resultado é a média

var dados= [];
var media = 0;
var mediaGeralResultado = 0;

dados [0] = [ "pedro ", 7, 8, 9, 8]
dados [1] = [ "carlos ", 4, 8, 6, 8]
dados [2] = [ "miguel ", 7, 8, 9, 2]
dados [3] = [ "murillo ", 10, 10, 10, 10]

for (let inicio = 0; inicio < dados.length; inicio++) {

    var mediaAluno = ( dados [inicio][1]+ dados[inicio][2]+ dados[inicio][3])/ (dados[inicio].length -1);
    media += mediaAluno;//acumula
    console.log(dados[inicio][0] + '- ' + mediaAluno);

}
mediaGeralResultado = media/ dados.length;
console.log(mediaGeralResultado)