//Conhecendo o usuario 
let continuar = ''
do {

let nome = prompt('Insira o seu nome')
let idade = parseInt(prompt('Insira a sua idade'))
let peso = prompt('Insira o seu peso em KG')
let altura = prompt('Insira a sua altura em m')
let profissao = prompt('Insira a sua profissão')
let DadosDoUsuario = ""
DadosDoUsuario = console.log(`Olá nome ${nome}, você tem ${idade} anos, possui ${altura}m de altura, pesa ${peso}Kg e atua como ${profissao}`)



if (idade >= 18){
    console.log("Como você é maior de idade, uma gelada para você!")
}
else{
    console.log('Infelizmente, sem gelada para você!')
}

//Exibindo a idade do usuario em meses semanas e dias 

let IdadeEmMesesDiasESemanas = prompt('Você deseja saber o equivalente a sua idade em MESES, SEMANAS e DIAS? [s/n]')
while (IdadeEmMesesDiasESemanas == 's') {
    let meses = idade * 12
    console.log(`Meses: ${meses}`)
    let semanas = idade * 52
    console.log(`Semanas: ${semanas}`)
    let dias = idade * 365
    console.log(`Dias ${dias}`)
    IdadeEmMesesDiasESemanas = 'n'
}

// informando IMC

        let CalculoIMC = peso / (altura * altura)

        console.log(`Seu IMC é de ${CalculoIMC}`)

        if (CalculoIMC < 18.5) {
            console.log('Considerado Magreza')
            
        } else if ((CalculoIMC >= 18.5 ) && (CalculoIMC <= 24.9)) {
            console.log('Considerado Normal')
            
        }
          else if ((CalculoIMC >= 25) && (CalculoIMC <= 30)){ 

            console.log('Considerado Sobrepeso')
          }
        else{
            console.log('Considerado Obesidade')
        }
        

continuar = prompt('Deseja inserir novos dados? s/n')
} while (continuar == 's');



    
