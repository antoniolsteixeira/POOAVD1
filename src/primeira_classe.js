var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    Pessoa.prototype.imprime = function () {
        return "A pessoa " + this.nome + " tem " + this.idade + " anos e sua altura \u00E9 de " + this.altura;
    };
    Pessoa.prototype.imprimeNome = function () {
        return "O seu nome \u00E9 " + this.nome + " e ele tem " + this.nome.length + " caracteres";
    };
    Pessoa.prototype.imprimeCurso = function () {
        console.log('Sistema de Informação');
    };
    return Pessoa;
}());
var p1 = new Pessoa('Joao', 20, 1.7);
console.log(p1);
console.log(p1.nome, p1.idade);
console.log(p1.imprime());
console.log(p1.imprimeNome());
console.log(p1.imprimeCurso());
var p2 = new Pessoa('Maria', 19, 1.6);
console.log(p2);
