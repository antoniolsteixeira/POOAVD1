class Cadastro {
    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}

class Cliente extends Cadastro {
    email: string;
    empresa: string;
    
    constructor(nome: string, nascimento: Date, email: string, empresa: string) {
        super(nome, nascimento)
        this.email = email;
        this.empresa = empresa;
    }

    imprime(): string {
        return `O cliente ${this.nome} nasceu em ${this.nascimento}. 
        O seu email é ${this.email} e trabalha na empresa ${this.empresa}.`
    }
}

const client = new Cliente('Joao', new Date('2000/08/13'), 'joao@gmail.com', 'XYZ')
console.log(client)
console.log(client.imprime())