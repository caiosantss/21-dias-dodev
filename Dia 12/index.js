/*
1 - Crie 2 arrays: um para nomes e um para senhas


2- Solicite ao seu usuário o que ele deseja fazer: cadastrar, fazer login, excluir um cadastro ou encerrar o programa.


3 - Faça o fluxo de funcionamento do código, considere que o usuário pode escolher quando encerrar o programa conforme as opções.


4 - Se a opção escolhida for cadastro, solicite dois valores ao usuário, um nome e uma senha e guarde cada um no seu respectivo array.

5 - Se a opção escolhida for login solicite ao usuário um nome e uma senha, depois procure o nome recebido no array de nomes e em caso positivo compare a senha no array de senhas. Se as duas comparações forem válidas exiba uma mensagem de sucesso


6 - Se a opção escolhida for excluir um cadastro solicite um nome ao usuário, então procure pelo nome no array de nomes e exclua ele e a senha correspondente do outro array, por fim organize o array para eliminar os espaços vazios.
 
*/

let logins = []
let login
let senhas = []
let senha
let continuar = true

while (continuar) {
    



let executar = parseInt(prompt('Selecione a operação que deseja realizar: [1] Cadastro; [2] Login; [3] Excluir um cadastro; [4] Encerrar o Programa'))

let contador = 0
switch (executar) {
    case 1:
        logins[contador] = prompt('Digite o nome de usuario: ')
        senhas[contador] = prompt('Digite a senha: ')
        contador++

        break;

        case 2:
            //Login de usuario 

            login = prompt('Digite o nome de usuario: ')
            senha = prompt('Digite a senha: ')

            let LoginValido = false

            for (let i = 0; i < logins.length; i++) {
                
                if ((login == logins[i]) && (senha == senhas[i])) {

                    LoginValido = true
                
            }

            if (LoginValido) {

                alert("Login realizado com sucesso!")
                
            }
            else{
                alert("Login invalido! Tente novamente.")
            }
        }    

            break;

            case 3:
                // Excluir um cadastro 

                let loginExcluir = prompt("Digite o usuario: ")
                let loginsAux = []
                let senhasAux = []
                let ContadorAux = 0

            for (let i = 0; i < contador; i++) {
                if (loginExcluir == logins) {

                    alert('Login excluido com sucesso!')
                }

                else{
                    loginsAux[ContadorAux] = logins[i]
                    senhasAux[ContadorAux] = senhas [i]
                    ContadorAux++
                }
            }

            login = loginsAux
            senhas = senhasAux
            contador--
                
        break;

        case 4:
            continuar = false
        break;


        default:
            console.log('Opção invalida.')
            break;

        
}

}