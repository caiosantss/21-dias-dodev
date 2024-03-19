class Computador{
    Tipo
    Processador
    Video
    Armazenamento
    MemoriaRam
    SSD
    constructor(Tipo, Processador, Video, Armazenamento, MemoriaRam, SSD){  

    this.Tipo = Tipo
    this.Processador = Processador
    this.Video = Video
    this.Armazenamento = Armazenamento
    this.MemoriaRam = MemoriaRam
    this.SSD = SSD 
}

//adicionando uma função // metodo a classe 
exibindoinformacoes(){
    console.log(`Tipo: ${this.Tipo}`)
    console.log(`Processador: ${this.Processador}`)
    console.log(`Video: ${this.Video}`)
    console.log(`Armazenamento: ${this.Armazenamento}`)
    console.log(`Memoria RAM: ${this.MemoriaRam}`)
    console.log(`SSD: ${this.SSD}`)
}
}

let MeuPC = new Computador('Desktop', 'AMD Ryzen 5 5400G', '1650TI', '1TB', '16GB', true );

MeuPC.exibindoinformacoes();