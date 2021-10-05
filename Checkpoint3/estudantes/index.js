let Aluno ={
    
        nome:"murillo",
        Falta: 0,
        notas: [10,9,10,9,],
    }
    


    function Alunos(nome,falta,notas,){
    this.nome = nome;
    this.falta = falta;
    this.notas = notas;
    this.media = media;
    this.adicFalta=faltou;
    
    
    function media () {
        let NumeroNotas= this.notas.length;
        let MediaSoma=this.notas.reduce(function(MediaSoma,notas){

        return MediaSoma + notas;
        },0);

        return media = (MediaSoma/NumeroNotas);
    }

    function faltou (){

        return this.falta++;

    }

}

  
module.exports = Alunos;
