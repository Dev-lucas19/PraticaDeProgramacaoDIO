//Classe que representa um herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
atacar(){
    // Estrutura de decisão para definir o ataque com base no tipo
    if (this.tipo === 'guerreiro') {
        return `${this.nome} ataca com espada!`;
    } else if (this.tipo === 'mago') {
        return `${this.nome} lança um feitiço!`;
    }   else if (this.tipo === 'arqueiro') {
        return `${this.nome} atira uma flecha!`;
    } else {
        return `${this.nome} não tem um tipo de ataque definido.`;
    }
    }
}
// Lista de heróis
// Cada herói é uma instância da classe Heroi
let listaDeHerois = [
    new Heroi('Arthur', 30, 'guerreiro'),
    new Heroi('Merlin', 45, 'mago'),
    new Heroi('Legolas', 120, 'arqueiro'),
    new Heroi('Gandalf', 2019, 'mago'),
    new Heroi('Conan', 35, 'guerreiro')
]
// Iterando sobre a lista de heróis e chamando o método atacar
console.log("Lista de ataques dos heróis:");
for (let heroi of listaDeHerois) {
    console.log(heroi.atacar());
}