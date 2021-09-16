class Domicilio {
    public cor: string;
    public endereco: string;

    constructor(cor: string, endereco: string) {
        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string {
        return 'Interfone tocado!'
    }
}

class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone('oi quem é?')
    }
    protected atenderInterfone(mensagem: string): string {
        return mensagem
    }
}

const casa = new Casa('Azul', '')
console.log(casa.tocarInterfone())
console.log(casa.entrarNaCasa())