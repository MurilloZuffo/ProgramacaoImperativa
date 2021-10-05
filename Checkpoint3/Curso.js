const listadeAlunos = require("./principal");

let curso = {

    NomeCurso : 'desenvolvedor',
    MediaAprova: 7,
    faltaReprova:20,
    Alunos : [listadeAlunos],


    
      

    }

    let AlunosMatriculados = listadeAlunos
    
    const busca = {
        Alunos: listadeAlunos,
        consultaAlunos(nome){
            return this.Alunos.find(e => e.nome === nome )
        } 
    }


let result = busca.consultaAlunos("alberto")

console.log(result)
console.log(curso)