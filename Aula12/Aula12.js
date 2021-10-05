let playlist = ["heavy metal", "pisadinha", "funk brega", "mpb", "pop", "sertanejo"]
console.log(playlist.length)

// for (InputDeviceInfo, condição de parada, mudança = (incremento/decremento))
// condição de parada - evitar Loop infinito
for (let i = 0; i< playlist.length; i++) {
  
    console.log("posição " + i + " estilo " + playlist[i]);


}

let index = 0;
while (index < playlist.length) {
    console.log("posição "+ index + "estilo " + playlist[index]);
    index++;
}

do {

    console.log("posção " + index + " estilo " + playlist[index]);
    index++;
}
    while(index < playlist.length);
