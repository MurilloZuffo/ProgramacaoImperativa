
function acesso(senha) {

    if (senha == 1234 ) {
       
        return console.log("Acesso Permitido")
    }
    else {
        
        return console.log('Acesso negado')
    }
  

}




function comparativo(a,b) {

    if ( a == b ) {
       
        return console.log("A é igual a B")
    }
    else if ( a > b) {
        
        return console.log('A maior que o B')
    }
    else {

        return console.log("B é maior que A")

    }
  

}


function numeromes (numero) {


switch (numero) {
    case 1:
        console.log("janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Março")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("junho")
        break;
    case 7:
        console.log("julho")
        break;
    case 8:
        console.log("agosto")
        break;
    case 9:
        console.log("Setembro")
        break;
    case 10:
        console.log("Outubro")
        break;
    case 11:
        console.log("Novembro")
        break;
    case 12:
        console.log("Dezembro")
        break;

}
}



function ternario(senhat) {

    return senhat==1234 ? console.log("acesso permitido") : console.log("acesso negado");
}

function microondas (tempo, prato) {

switch (prato) {

    case "pipoca":

        if (tempo == 10 && tempo < 21)
        return console.log ("Prato pronto, bom apetite!!!")
        

        else if (tempo < 10 )
        return console.log ("Tempo insufuciente")
       

        else if (tempo > 20 && tempo < 31 )
        return console.log ("A comida queimou!")
      

        else {
        return console.log ("kabumm")
        }
    break;
    case "macarão":

        if (tempo == 8 && tempo < 17) {
        return console.log ("Prato pronto, bom apetite!!!")
        }

        else if (tempo < 8 )
        return console.log ("Tempo insufuciente")
       

        else if (tempo > 16 && tempo < 25 )
        return console.log ("A comida queimou!")
      

        else {
        return console.log ("kabumm")
        }
    break;
    case "carne":

        if (tempo == 15 && tempo < 31)
        return console.log ("Prato pronto, bom apetite!!!")
        

        else if (tempo < 15 )
        return console.log ("Tempo insufuciente")
       

        else if (tempo > 30 && tempo < 46 )
        return console.log ("A comida queimou!")
      

        else {
        return console.log ("kabumm")
        }
    break;
    case "feijão":

        if (tempo == 12 && tempo < 25)
        return console.log ("Prato pronto, bom apetite!!!")
        

        else if (tempo < 12 )
        return console.log ("Tempo insufuciente")
       

        else if (tempo > 24 && tempo < 37 )
        return console.log ("A comida queimou!")
      

        else {
        return console.log ("kabumm")
        }
    break;
    case "brigadeiro":

        if (tempo == 8 && tempo < 17)
        return console.log ("Prato pronto, bom apetite!!!")
        

        else if (tempo < 8 )
        return console.log ("Tempo insufuciente")
       

        else if (tempo > 16 && tempo < 25 )
        return console.log ("A comida queimou!")
      

        else {
        return console.log ("kabumm")
        }
    break;
    default:
    return console.log("Prato não existe")
    break;



}
}
acesso(1254) //para acesso a senha deve ser 1234
comparativo(2,2) //comparativo de a e b
numeromes (9) // converte o numero em seu mês referente de 1 a 12
ternario(1234) //para acesso a senha deve ser 1234
microondas (15, "carne" ) // escolha tempo e prato (10,"pipoca"),(8,"macarrão"),(15,"carne"),(12,"feijão"),(8,"brigadeiro")

// Feito por :
// Murillo Zuffo 
// Turma : N4