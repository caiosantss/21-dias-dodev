let array = [];
let arrayContrario = [];

// Pedindo ao usuario para atribuir o indice da array, e em seguida seus elementos. 

let QuantidadeDeNumeros = Number(prompt('Quantos numeros voce deseja inserir na array?'))  
for (let index = 0; index < QuantidadeDeNumeros; index++) {
    let ElementosDaArray = Number(prompt(`Digite o ${index + 1} numero que deseja inserir na array.`))
     array[index] = ElementosDaArray
     console.log(`Array original ${array}`)
     
}


//Exibindo a array anterior ao contrario

let contador = QuantidadeDeNumeros -1
for (let index = 0; index < QuantidadeDeNumeros; index++) {
    arrayContrario[index] = array[contador]
    contador--
    console.log(`Array invertida ${arrayContrario}`)
    
}



