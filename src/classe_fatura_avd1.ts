class Fatura {
  constructor(
    private _numero: number,
    private _descricao: string,
    private _qntComprada: number,
    private _preco: number
  ) {}

  get numero() {
    return this._numero;
  }

  get descricao() {
    return this._descricao;
  }

  get qntComprada() {
    return this._qntComprada;
  }

  get preco() {
    return this._preco;
  }

  set numero(numero: number) {
    if (numero <= 0) {
      throw new Error('Numero invalido');
    }
    this._numero = numero;
  }

  set descricao(descricao: string) {
    if (descricao === '') {
      throw new Error('Descrição invalida');
    }
    this._descricao = descricao;
  }

  set qntComprada(qntComprada: number) {
    if (qntComprada <= 0) {
      throw new Error('Modelo invalido');
    }
    this._qntComprada = qntComprada;
  }

  set preco(preco: number) {
    if (preco <= 0) {
      throw new Error('Preço invalido');
    }
    this._preco = preco;
  }

  public valorFatura() {
    return this._qntComprada * this._preco;
  }
}

let fatura = new Fatura(5465421, 'Bala', 12, 0.75);
console.log(fatura);
console.log('Valor da Fatura: ', fatura.valorFatura());
