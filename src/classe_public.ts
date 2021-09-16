class Veiculo {

    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }
}

const veiculo = new Veiculo('Branco');
console.log(veiculo.cor)

//yarn tsc --watch