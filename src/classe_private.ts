class Banco {
    private cofreQtd: number = 10000; 

    private debitarCofre(valor: number): number | string {
        if (this.cofreQtd >= valor) {
            this.cofreQtd -= valor;
            return this.cofreQtd
        } else {
            return 'O cofre não possui o valor desejado!'
        }
    }

    protected sacarDoCaixa(quantidade: number) {
        return this.debitarCofre(quantidade)
    }

    sacarDoCaixaEletronico(quantidade: number) {
        return this.debitarCofre(quantidade)
    }
}

class Banco24Horas extends Banco {
    sacar(quantidade: number) {
        return this.sacarDoCaixa(quantidade)
    }
}

const banco = new Banco();
banco.sacarDoCaixaEletronico(100)

const banco24Horas = new Banco24Horas();
banco24Horas.sacar(50)