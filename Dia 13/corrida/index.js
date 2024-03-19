class Carro{
    Nome 
    Potencia 
    VelocidadeMaxima 
    Aceleracao 

    constructor(Nome, Potencia, VelocidadeMaxima, Aceleracao){
    this.Nome = Nome
    this.Potencia = Potencia
    this.VelocidadeMaxima = VelocidadeMaxima
    this.Aceleracao = Aceleracao
    }
    TempoMedio(distancia){
        let resultado = distancia / (this.VelocidadeMaxima/ this.Aceleracao)
        return resultado
    }

}

class Corrida{
    Nome 
    Tipo 
    Distancia // total em metros da corrida 
    Participantes // um array de objetos da classe carro
    Vencedor // nome da equipe que ganhou

    constructor(Nome, Tipo, Distancia, Participantes, Vencedor ){
        this.Nome = Nome
        this.Tipo = Tipo
        this.Distancia = Distancia
        this.Participantes = []
        this.Vencedor = ""

}

AchandoVencedor(){
    let MenorTempo = this.Participantes[0].TempoMedio(this.Distancia)
    let vencedor = this.Participantes[0]

    for (let i = 1; i < this.Participantes.length; i++) {
        let tempo = this.Participantes[i].TempoMedio(this.Distancia)
        if (tempo < MenorTempo) {
            MenorTempo = tempo
            vencedor = this.Participantes[i]
        }
        
    }
    return this.Vencedor = vencedor
}

MostrarVencedor(){
    alert("O vencedor é " + this.Vencedor.Nome)
}


}


let corrida = new Corrida ("Monza", 'Formula 1', 60000)
corrida.Participantes[0] = new Carro('Porsche', 500, 350, 3)
corrida.Participantes[1] = new Carro('Ferrari,', 550, 350, 5)
corrida.Participantes[2] = new Carro('Lamborguini', 450, 350, 4)
corrida.Participantes[3] = new Carro('Corvette', 600, 320, 6)


corrida.AchandoVencedor()
corrida.MostrarVencedor()
