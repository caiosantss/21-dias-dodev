// valor da gasolina 5.00
//valor do alcool 3.00
//calibragem dos pneus: calibrado com sucesso

let opção = Number((prompt)("O que o senhor(a) deseja realizar hoje aqui no POSTO AUTOBOSS: Abastecer com [1] gasolina [2] Alcool ou [3] Calibrar os pneus. "))

switch(opção){    
    case 1:
        let Vgasolina = Number((prompt)("Qual o valor desejado?"))
        console.log("Valor da gasolina: R$5,00")
        console.log("--------------------------------") 
        console.log(Vgasolina + " reais resultou em " + Vgasolina/5 + " Litros de Gasolina.")  
    break;
    case 2:
        let Valcool = Number((prompt)("Qual o valor desejado?"))
        console.log("Valor do alcool: R$3,00")
        console.log("------------------------")
        console.log(Valcool + " reais resultou em " + Valcool/3 + " Litros de Alcool.") 
    break;
    case 3:
        console.log("--------------------------------")
        console.log("Calibragem realizada com sucesso!")
        console.log("--------------------------------")
}
  
