//Criando uma calculadora

// 1- pedir dois numeros ao usuario 

console.log("===========")
console.log("Calculadora")
console.log("===========")

let num1 = parseInt(prompt("Digite o primeiro numero:"))
let num2 = parseInt(prompt("Digite o segundo numero:"))

let operação = parseInt(prompt("Digite um numero para realizar a operação desejada: [1] Adição, [2] Subtração, [3] Divisão ou [4] Multiplicação."))

switch(operação){
    case 1: 
         console.log("A operação escolhida foi adição!")
         console.log(num1 + " + ", num2 + " = " + (num1 + num2))
    break;
    case 2: 
        console.log("A operação escolhida foi subtração!")
        console.log(num1 + ' - ' + num2 + " = " + (num1 - num2))
    break;
    case 3: 
        console.log("A operação escolhida foi divisão!")
        console.log(num1 + " / ", num2 + " = " + (num1 / num2))
    break;
    case 4: 
        console.log("A operação escolhida foi multiplicação!")
        console.log(num1 + " x ", num2 + " = " + (num1 * num2))    
    break; 
    default:
        console.log("Opção invalida, tente novamente.")
    break;  
}

