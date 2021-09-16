class Animal {

    tipo: string;
    nome: string;
    idade: number;

    constructor(tipo: string, nome: string, idade: number) {
        this.tipo = tipo;
        this.nome = nome;
        this.idade = idade;
    }

    imprime(): string {
        return `O tipo do animal é ${this.tipo} e o seu nome é ${this.nome}`
    }
}

class Carrocho extends Animal {
    tester: string;

    constructor(tipo: string, nome: string, idade: number, tester: string) {
        super(tipo, nome, idade);
        this.tester = tester;
    }

    imprime(): string {
        return `O tipo do animal é ${this.tipo} e sua raça é ${this.tester}`
    }
}

const c1 = new Carrocho('Carrocho', 'Chouchou', 4, 'Pitbull de raça')
console.log(c1)
console.log(c1.imprime())

const carrocho = new Animal('A', 'Chuchu', 2)
console.log(carrocho.nome)

const toga = new Animal('B', 'XX', 4)
console.log(toga.nome)