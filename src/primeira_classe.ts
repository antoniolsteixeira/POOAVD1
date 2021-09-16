class Pessoa {
    nome: string;
    idade: number;
    altura: number;

    constructor(nome: string, idade: number, altura: number) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }

    imprime(): string {
        return `A pessoa ${this.nome} tem ${this.idade} anos e sua altura é de ${this.altura}`
    }

    imprimeNome(): string {
        return `O seu nome é ${this.nome} e ele tem ${this.nome.length} caracteres`
    }

    imprimeCurso(): void {
        console.log('Sistema de Informação')
    }
}

const p1 = new Pessoa('Joao', 20, 1.7)
console.log(p1)
console.log(p1.nome, p1.idade)
console.log(p1.imprime())
console.log(p1.imprimeNome())
console.log(p1.imprimeCurso())

const p2 = new Pessoa('Maria', 19, 1.6)
console.log(p2)
