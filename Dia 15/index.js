let arrayA = [13, 20, 10, 22, 24, 20, 27, 17, 19, 14]
let arrayB = [24, 22, 23, 11, 15, 17, 29, 14, 16, 21]

function NumerosIguais(arrayUM, arrayDOIS) {

    let contador = 0
    let NumerosComum = []


    //primeiro for para percorrer o arrayA
    for (let A = 0; A < arrayUM.length; A++) {

        //Segundo for para percorrer o arrayB, para cada numero do arrayUM ele percorre TODOS os numeros do arrayDOIS

        for (let B = 0; B < arrayDOIS.length; B++) {

            //Se a comparação for bem sucedida ele adiciona esse numero no array de NumerosComum e atribui o valor maximo ao contador B, evitando assim que apareçam numeros duplicados

            if (arrayUM[A] == arrayDOIS[B]) {
                NumerosComum[contador] = arrayDOIS[B] = arrayUM[A]
                contador++
                

            }

        }

    }

    return NumerosComum
}

console.log(NumerosIguais(arrayA, arrayB))