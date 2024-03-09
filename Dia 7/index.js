
// Caixa eletronico 

let saldo = 1000  // saldo inicial
let MaiorValorInserido = 0
let TotalValoresInseridos = 0
let SomaDosValores = 0
let continuar = false

    let nome = prompt('Insira seu nome:')
    let cpf = Number(prompt('Insira seu CPF: '))

do { 
    
    let valor = Number(prompt('Digite o valor da operação: '))
    let operacao = Number(prompt('Digite [1] SACAR ou [2] DEPOSITAR '))
    if ((operacao === 1) && (valor > saldo)) {
        console.log('Saldo insuficiente para realizar esta operação.')
    }
    else if (valor < 0){
        ('Não foi possivel realizar esta operação.')
    }
else if (operacao === 1){
         console.log(`Olá nome: ${nome} CPF: ${cpf} o seu saldo é de: ${saldo}`)  //Template Strings <> concatenar
        saldo -= valor // saldo = saldo - valor
        TotalValoresInseridos++ // TotalValoresInseridos = TotalValoresInseridos + 1
        SomaDosValores += valor // SomaDosValores = SomaDosValores(0) + valor 
       
         if (valor > MaiorValorInserido) {
        MaiorValorInserido = valor    
        }
        console.log(`Operação realizada com sucesso, seu saldo atual é de  ${saldo}`)

}
else if (operacao === 2){
     console.log(`Olá nome: ${nome} CPF: ${cpf} o seu saldo é de: ${saldo}`)
        saldo += valor // saldo = saldo + valor 
        TotalValoresInseridos++ 
        SomaDosValores += valor       
        
        if (valor > MaiorValorInserido) {
            MaiorValorInserido = valor    
        }
        console.log(`Operação realizada com sucesso, seu saldo atual é de ${saldo}`)
 }

        let opcao = Number(prompt('Deseja realizar outra operação; [1] Sim [2] Não'))
        switch (opcao) {
            case 1 : 
                continuar = true
                break;        
            case 2: 
            continuar = false
                break;
            default:
                console.log('Opção Invalida, encerrando programa.')
        }

} while (continuar);

console.log(`Seu saldo final: $${saldo}`)
console.log(`O maior valor inserido: RS$${MaiorValorInserido}`)
console.log(`A media dos valores inseridos foi: ${SomaDosValores/TotalValoresInseridos}`)
