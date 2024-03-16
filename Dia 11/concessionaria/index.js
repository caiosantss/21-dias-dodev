/* 1 - Crie três arrays, um para guardar  os modelos, um para guardar os anos e um para uardar os valores do carro


2 - Utilizando o WHILE, peça para o usuário cadastrar novos carros(modelo, ano e valor), popule os 3 arrays nas mesmas posições.


3 - Seu usuário deve definir quando parar de inserir informações.*/

let modelos = []
let anos = []
let valores = []
let contador = 0 
let condicao = true
while (condicao) {
    let modelo = prompt("insira o modelo do carro: ")
    modelos[contador] = modelo
    let ano = parseInt(prompt('Insira o ano do veiculo: '))
    anos[contador] = ano
    let valor = parseFloat(prompt('Insira o valor do veiculo: '))
    valores[contador] = valor
    contador++


    let resposta = prompt('Deseja continuar inserindo veiculos? [1] SIM [2] NAO')
    if (resposta != '1') {
        condicao = false
    }
}

    console.log('Carros cadastrados')
for (let i = 0; i < modelos.length; i++) {
    
    console.log(`${modelos[i]} -- ${anos[i]} -- ${valores[i]}`)
}
