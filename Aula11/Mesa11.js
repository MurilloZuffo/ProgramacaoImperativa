let filmes = ['star wars', 'matrix' , 'sei la ' , 'dormindo']

function convertToUpperCase(array) {

    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()

}

console.log(filmes)
convertToUpperCase(filmes)
console.log(filmes)

for (i = 0; i < 4; i++)