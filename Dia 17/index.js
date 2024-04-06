class Hotel{
    Id
    Nome
    Endereco
    Categoria 
    Telefone
    constructor(Id, Nome, Endereco, Categoria, Telefone){ 

    this.Id = Id
    this.Nome = Nome
    this.Endereco = Endereco
    this.Categoria = Categoria
    this.Telefone = Telefone
}
}

class Reserva{
    Id
    IdHotel
    Responsavel
    DiaEntrada
    DiaSaida
    constructor(Id, IdHotel, Responsavel, DiaEntrada, DiaSaida){ 

        this.Id = Id
        this.IdHotel = IdHotel
        this.Responsavel = Responsavel
        this.DiaEntrada = DiaEntrada
        this.DiaSaida = DiaSaida
    }

}

let hoteis = []
let reservas= []
let IdHotel = 1
let IdReserva = 1


function CadastrarHotel(){
    let Nome = prompt("Digite o nome do hotel: ")
    let Categoria = prompt("Digite a categoria do hotal: ")
    let Endereco = prompt("Digite o endereço do hotel: ")
    let Telefone = parseInt(prompt("Digite o telefone do hotel: "))
    let hotel = new Hotel(IdHotel, Nome, Endereco, Categoria, Telefone)
    IdHotel++
    hoteis.push(hotel)
}   

function CadastrarReserva() {
    let IdHotel
    let existe = false
    do {
        IdHotel = parseInt(prompt("Digite o ID do hotel: "))
        for (let i = 0; i < hoteis.length; i++) {
            if (IdHotel == hoteis[i].Id) {
                i = hoteis.length
                existe = true

            }else if(i == hoteis.length - 1 ){
                console.log("ID de hotel não cadastrado.")
            }
            
        }
    } while (!existe);


let nome = prompt("Informe o nome do responsável: ")
let DiaEntrada = parseInt(prompt("Informe o dia de entrada: "))
let DiaSaida
do {
    DiaSaida = parseInt(prompt("Digite o dia de saida: "))
    if (DiaEntrada > DiaSaida) {
        console.log("O dia de entrada deve ser menor que o dia de saida.")
    }
} while (DiaEntrada > DiaSaida);

let reserva = new Reserva(Id, IdHotel, Responsavel, DiaEntrada, DiaSaida )
IdReserva++
reservas.push(reserva)
}

// Procurar reserva pelo nome

function ProcurarReservaPeloNome(Nome){
    for (let i = 0; i < reservas.length; i++) {
        if (Nome == reservas[i].Responsavel) {
        console.log(`ID da reserva: ${reservas[i].Id}`)
        console.log(`Hotel: ${hoteis[(reservas[i].IdHotel) - 1].Nome}`)
        }
        
    }
}

//Procurar hoteis pela categoria

function ProcurarHoteisPelaCategoria(Categoria){
    let hoteisProcurados = []
    for (let i = 0; i < hoteis.length; i++) {
        if (Categoria == hoteis[i].Categoria) {
            hoteisProcurados.push(hoteis[i].Nome)
        }
        
    }
    return hoteisProcurados
}


// criando um fluxo de funcionamento

let continuar = true

do {
    
    let opcao = prompt(" escolha uma opção: \n1 - Cadastrar Hotel \n2 - Cadastrar reserva \n3 - Procurar reserva pelo nome \n4 - Procurar hoteis pela categoria \n5 - Encerrar programa")


    switch (opcao	) {
        case "1":
                CadastrarHotel()
            break;
    
        case "2":
                CadastrarReserva()
            break;
        case "3":
            ProcurarReservaPeloNome(prompt("Digite o nome do responsavel pela reserva"))
            break;
        case "4":
        let hoteisProcurados = ProcurarHoteisPelaCategoria(parseInt(prompt("Digite a categoria do hotel")))
        console.log(hoteisProcurados)
        break;
        case "5":
            console.log("Programa encerrado.")
            continuar = false
    }


} while (continuar);