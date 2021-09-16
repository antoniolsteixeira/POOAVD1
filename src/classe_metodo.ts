/* 1) Exercício 1
a) Crie a classe Professor com os atributos nome, idade e materia.
Crie um método chamado seApresentar e ele deve retornar a seguinte mensagem
Meu nome é xxxx, tenho xxx anos e vou lecionar a disciplina de .....
Crie um objeto para instanciar a classe Professor e passe os parâmetros
Imprima a classe e o retorno do método seApresentar



b) Crie o método dizerNotas para receber uma quantidade de notas,
ele deve converter para array utilizando o rest params e deve
retornar a média. */

class Professor {

    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar a disciplina de ${this.materia}`
    }

    // notas = [4, 8]
    dizerNotas(...notas: number[]): number {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0)
        return notasTotal / notas.length
    }
}

const professor = new Professor('Pedro', 30, 'DBA')
console.log(professor)
console.log(professor.seApresentar())
console.log(professor.dizerNotas(4, 8))