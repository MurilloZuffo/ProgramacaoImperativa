let dadosJson = '{"cidade":"Sao Paulo" ,"nome": "murillo", "idade": "30"}'

let dadosObjeto = JSON.parse(dadosJson);

console.log(dadosObjeto);



let newJson = '{"nome":"Christopher","profissao":"Programador","idade":25,"linguagens":["PHP","Javascript","Dart"],    "disponibilidadeParaViajar":true,    "ramoProfissional": {"anosDeExperiencia": 12,"nivel": "Senior"}}'
  
  let newObj = JSON.parse(newJson);
// objeto literal
  console.log(newJson);