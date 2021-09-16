/* Crie um novo para representar os funcionarios do banco com os atributos nome e salario como privados. 
Crie métodos públicos para alterar e acessar os atributos privados. 
Crie um objeto para esta classe passando os valores do nome e salario e imprima o objeto. 
Altere os valores do nome e salario e imprima-o */

class Funcionario {
    private nome: string;
    private salario: number;

    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }

    public getNome() {
        return this.nome
    }

    public getSalario() {
        return this.salario
    }

    public setNome(nome: string) {
        this.nome = nome;
    }

    public setSalario(salario: number) {
        this.salario = salario;
    }

    public bonificacao(taxa: number) {
        return this.salario * taxa / 100
    }
}

class Gerente extends Funcionario {
    private nomeUsuario: string;
    private senha: string;

    constructor(nome: string, salario: number, nomeUsuario: string, senha: string) {
        super(nome, salario);
        this.nomeUsuario = nomeUsuario;
        this.senha = senha;
    }

    getNomeUsuario(nomeUsuario: string) {
        return this.nomeUsuario
    }

    setNomeUsuario(nomeUsuario: string) {
        this.nomeUsuario = nomeUsuario
    }

    public Bonificacao() {
        return this.getSalario() * 10 /100
    }
}

const funcionario = new Funcionario('Joao', 1000)
console.log(funcionario)
funcionario.setNome('Paulo Brificado')
console.log(funcionario.getNome())

const gerente = new Gerente('Pedro', 2000, 'pedro.santos', '1234')
console.log(gerente.bonificacao(5))
