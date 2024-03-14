



    console.log('BEM VINDO AO BANCO DODEV')
    console.log('-------------------------')
    console.log('Aqui realizaremos uma simulação de seu aumento salarial em até 10 anos.')

    let nome =''
    let idade = parseInt
    let SalárioAtual 
    let Correto = '2'

//Informações do cliente

  do {
    
    nome = prompt('Informe o seu nome')
    idade = prompt('Insira a sua idade') 
    SalárioAtual = parseFloat (prompt('Insira seu salario Atual'))
    console.log(`Nome: ${nome} Idade: ${idade} Salario Atual: ${SalárioAtual}`)
    console.log('-------------------------------------------')
    Correto = prompt('As informações digitadas estão corretas? [1] Sim [2] Não')

} while (correto == '2'); 


//Realizando os aumento

let aumento = (0.01)
console.log('Previsão salarial para os proximos 10 anos:')
console.log('-------------------------------------------')

for (let ano = 1; ano <= 10; ano++) {
    
    SalárioAtual += SalárioAtual * (aumento)
    aumento = (aumento) * 2
    console.log((2024 + ano) + " um aumento de " + aumento + " = R$" + (SalárioAtual))
    
}


