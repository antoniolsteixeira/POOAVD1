class Veiculos {
  constructor(
    private _modelo: string,
    private _marca: string,
    private _ano: number,
    private _valorLocacao: number,
    private _quantidadeDias: number
  ) {}

  get modelo() {
    return this._modelo;
  }

  get marca() {
    return this._marca;
  }

  get ano() {
    return this._ano;
  }

  get valorLocacao() {
    return this._valorLocacao;
  }

  get quantidadeDias() {
    return this._quantidadeDias;
  }

  set modelo(modelo: string) {
    if (modelo === '') {
      throw new Error('Modelo invalido');
    }
    this._modelo = modelo;
  }

  set marca(marca: string) {
    if (marca === '') {
      throw new Error('Marca invalida');
    }
    this._marca = marca;
  }

  set ano(ano: number) {
    if (ano < 0) {
      throw new Error('Ano invalido');
    }
    this._ano = ano;
  }

  set valorLocacao(valorLocacao: number) {
    if (valorLocacao < 0) {
      throw new Error('Valor da locação invalido');
    }
    this._valorLocacao = valorLocacao;
  }

  set quantidadeDias(quantidadeDias: number) {
    if (quantidadeDias < 0) {
      throw new Error('Quantidade de dias invalido');
    }
    this._quantidadeDias = quantidadeDias;
  }

  public passeio() {
    return this._quantidadeDias * this._valorLocacao;
  }
}

let locacao = new Veiculos('Uno', 'Fiat', 2016, 150, 10);
console.log(locacao);
console.log('Valor do aluguel: ', locacao.passeio());


try {
  locacao.modelo = '';
  console.log(locacao);
} catch (error) {
  console.log(error.message);
}

