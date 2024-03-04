// Desafio Motorista 

// Fazer perguntas ao usuario e atribuir as variaveis 

let nome = prompt("Olá, informe o seu nome:")
let idade = parseInt (prompt("Informe a sua idade:")) 
// Função parseInt : conversão para um numero inteiro 
let carta = prompt ("Você possui CNH? responda (sim/nao)")
let carro = prompt("Você possui um veiculo? responda (sim/nao)")

// Se o usuário não for maior de idade ou não tiver carta exiba no console: "Nome, você não pode dirigir"
if((idade < 18 ) || ((carta === "nao") || (carta === "não"))){ 
console.log(nome, "pela lei você NÃO esta apto a dirigir.")
}
// usuario maior de idade, tem CNH mas NAO possui CARRO
else if((idade >= 18) && (carta === "sim") && ((carro === "nao") || (carro === "não") ))  {
 console.log(nome, "pela lei você está apto a dirigir, mas ainda não possui um carro.")
}
// usuario possui todos os requisitos para dirigir, Logicamente só vai para este ultimo else se o ultimo requisito (carta for === "sim")
else{
    console.log("-------------------------------------------")
    console.log("PARABÉNS! Você está apto a ser o motorista!")
    console.log("-------------------------------------------")

} 



