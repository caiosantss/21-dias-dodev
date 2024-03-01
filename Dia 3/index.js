// Declarando variaveis
let Nome = ""
let Idade = Number
let Peso = Number
let Altura = Number
let AnoNASC = Number
let IMC = Number

//Coletando informações

 Nome = prompt("Digite o seu nome")
 Idade = parseInt(prompt("Digite sua idade"))
 Altura = parseFloat(prompt("Digite sua Altura")) 
 Peso = parseInt(prompt("Digite seu peso"))

//Calculando o IMC e o ano de nascimento

AnoNASC = (2024 - Idade)

IMC = Peso / (Altura * Altura)

//Exibindo informações

console.log("Ola",Nome, "você tem ", Idade, "anos, nasceu em ", AnoNASC, " tem", Altura, "M de altura", "pesa", Peso, "kg, e seu IMC é de", IMC,".")


