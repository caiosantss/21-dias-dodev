//Fazendo uma array de Fibonacci
let NumeroInicial = parseInt(prompt('Qual numero você deseja saber a sequencia de fibonacci'))
let ArrayFibonacci = []
ArrayFibonacci[0] = NumeroInicial - 1
ArrayFibonacci [1] = NumeroInicial



for (let index = 2; index < 10; index++) {
    
    ArrayFibonacci[index] = ArrayFibonacci [index - 1] + ArrayFibonacci [index - 2]
     
}

    console.log(`Fibonacci: ${ArrayFibonacci}`)