/*
=====  FUNÇÕES ARRAY  =====
let numeros = [1, 2, 3, 4]

    array.indexOf(valor do elemento) --- return index do elemento.

== exemplo: 
numeros.indexOf(2) = 1 
numeros.indexOf(5) = -1 --- Quando procuramos um elemento inexistente dentro do array a função retorna o valor -1 
==

    array.push(elemento a ser atribuido dentro do array) -- Atribui um elemento na ultima posição, que sera criada pela função.

== exemplo: 
numeros.push(5) = arraynumeros[4] = 5 = [1, 2, 3, 4, 5] 
==

    array.includes(elemento a ser buscado na array) = true or false

== exemplo: 
numeros.includes(3) = true 
numeros.includes(6) = false
==

    array.splice(x,y) - x = A PARTIR DE QUAL posiçao queremos pegar um elemento. 
    y = QUANTOS elementos serão 'pegos' a partir de X 

== exemplo:
numeros.splice(3,2) -- [4,5]  X = poição 3 (elemento 4 retirado), Y = 2 elementos a partir do X: elementos 4 e 5 retirados restando: 
numeros = [1, 2, 3]
==


    array.ForEach(elemento do array => {codigo}) -- para CADA elemento do array => executa um codigo - vai passar por todos os elementos do array. 
    Nâo usar para alterar o proprio array.



    array.filters(x => x > 2) -- Vai retornar apenas os elementos maiores que 2 em um NOVO ARRAY.

== exemplo 
let numerosPares = numeros.filters(numero => numero % 2 = 0)
numerosPares [2, 4]
==

    array.sort() - ordena o array em ordem crescente 

== exemplo
numeros.sort() - vai deixar o array em ordem crescente.

*/

let usuarioS = []
let usuario
let senhaS = []
let senha



function opcao() {

    let resposta = parseInt(prompt('Digite a opção que deseja executar: 1 Cadastro / 2 Login / 3 Excluir cadastro / 4 Encerrar Programa.'))

    return resposta;
}

let continuar = true
while (continuar) {



    let executar = opcao()


    switch (executar) {
        case 1:

            cadastro()

            break;

        case 2:

            login()

            break;

        case 3:

            excluirCadastro()

            break;


        case 4:


            continuar = false
            console.log('Programa encerrado.')

            break;

        default:

            continuar = false
            console.log('Resposta invalida.')

            break;

    }
}


function cadastro() {

    usuarioS.push(prompt('Digite o nome de usuario: '))
    senhaS.push(prompt('Digite a senha: '))


}

function login() {

    usuario = prompt('Digite o nome de usuario: ')
    let checkUsuario = usuarioS.indexOf(usuario)
    senha = prompt('Digite a senha: ')
    let checkSenha = senhaS.indexOf(senha)


    if ((checkUsuario != -1) && (checkSenha != -1)) {

        alert('Login realizado com sucesso!')

    }
    else {
        alert('Login e/ou Senha invalidos!')
    }

}

function excluirCadastro() {

    usuario = prompt('Digite o nome de usuario:')
    senha = prompt('Digite a senha: ')


    if ((usuarioS.includes(usuario)) && (senhaS.includes(senha))) {

        usuarioS.splice(usuario, 1)
        senhaS.splice(senha, 1)

        alert('Cadastro excluido com sucesso!')

    }
    else {
        alert('Login e/ou senha invalidos.')
    }
}




