// função para informações do usuario
let nome
let salario


function infoColaborador() {    
    
    nome = prompt('Informe o seu nome:')
    salario = parseFloat(prompt('Informe seu salario atual: '))

    aumentoSalario()

}

function aumentoSalario() {
    let aumento
    let porcentAumento
    console.log('=========AUMENTO DE SLARIO========')

    console.log(`NOME: ${nome} SALARIO: ${salario}`)

    if (salario < 1500) {
        porcentAumento = 1.20
       aumento =  salario * porcentAumento
       console.log(`Salario atual: ${aumento} Aumento: ${porcentAumento}`)
    }
    else if((salario >= 1500) && (salario < 2000)){
        porcentAumento = 1.15
       aumento =  salario * porcentAumento
      console.log(`Salario atual: ${aumento} Aumento: ${porcentAumento}`)
        
    }
    else if((salario >= 2000) && (salario < 3000)){
        porcentAumento = 1.10
       aumento =  salario * porcentAumento  
        console.log(`Salario atual: ${aumento} Aumento: ${porcentAumento}`)
        
    }
    else{
        porcentAumento = 1.05
       aumento =  salario * porcentAumento
        console.log(`Salario atual: ${aumento} Aumento: ${porcentAumento}`)

    }

        DesejaContinuar()
}


    function DesejaContinuar() {
        let resposta = parseInt(prompt('Deseja inserir novas informações: [1] Sim ou [2]Nao'))
        if (resposta == 1) {

            infoColaborador()
        }
        else{
            console.log('Programa encerrado.')
        }
    }

