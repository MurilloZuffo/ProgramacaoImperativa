var altura = 1.11
var acompanhado = true

function podesubir(altura, acompanhado) {

    if (altura > 1.40 && altura < 2.00 ) {
       resulte = 1 
        return console.log("podesubir")
    }
    else if (altura < 1.40 && altura > 1.20 && acompanhado == true) {
        
        return console.log('pode subir acompanhado')
    }
    else {
       
        return console.log('não pode subir')
    }

}

podesubir()
