//Usando condicionais
// ==: Igual a, mas nao compara o tipo; ===:igual ao valor e o tipo; 
// > maior/ menor que >= maior/menor ou igual;
// !==:é diferente de (o valor e o tipo); != é diferente de (apenas o valor);

// && = E = duas verdadeiras = TRUE
// || = OU = Se uma verdadeira = TRUE

// # DESAFIO DIA 4, "1- JANTAR ESPECIAL"

let fome = prompt("Você esta com fome? (sim/nao)")
let dinheiro = prompt("Você tem dinheiro? (sim/nao)")
let restaurante = prompt("Seu restaurante preferido esta aberto? (sim/nao)")

if((fome === "nao") || (dinheiro === "nao")){
console.log("Hoje a janta sera em casa")
}
else if ((dinheiro === "sim") && (restaurante === "nao") && (fome = "sim") ){
    console.log("Peça um delivery!")
}
else{
    console.log("Hoje a janta sera no seu restaurante preferido!")
}