class Vendedores {
  constructor(
    private _nome: string,
    private _salario: number,
    private _valorVenda: number
  ) {}

  get nome() {
    return this._nome;
  }

  get salario() {
    return this._salario;
  }

  get valorVenda() {
    return this._valorVenda;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome invalido');
    }
    this._nome = nome;
  }

  set salario(salario: number) {
    if (salario < 0) {
      throw new Error('salario invalida');
    }
    this._salario = salario;
  }

  set valorVenda(valorVenda: number) {
    if (valorVenda < 0) {
      throw new Error('Valor da venda invalido');
    }
    this._valorVenda = valorVenda;
  }

  public Desconto() {
    return this._salario * 0.08;
  }
}

class VendedorPessoaFisica extends Vendedores {
  static REGIAO = ['Sul', 'Sudeste', 'Centro-oeste', 'Norte', 'Nordeste'];
  private _regiaoFunc: string;

  constructor(
    nome: string,
    salario: number,
    valorVenda: number,
    regiaoFunc: string
  ) {
    super(nome, salario, valorVenda);
    this._regiaoFunc = regiaoFunc;
  }

  get regiaoFunc() {
    return this._regiaoFunc;
  }

  set regiaoFunc(regiaoFunc: string) {
    if (!VendedorPessoaFisica.REGIAO.includes(regiaoFunc)) {
      throw new Error('Região Inválida');
    }
    this._regiaoFunc = regiaoFunc;
  }

  public ComissaoFisica() {
    if (this.regiaoFunc === 'Sul') {
      return this.valorVenda * 0.1;
    } else if (this.regiaoFunc === 'Sudeste') {
      return this.valorVenda * 0.12;
    } else if (this.regiaoFunc === 'Centro-oeste') {
      return this.valorVenda * 0.14;
    } else if (this.regiaoFunc === 'Norte') {
      return this.valorVenda * 0.15;
    } else {
      return this.valorVenda * 0.17;
    }
  }

  public calcularSalarioTotal() {
    return this.salario + this.ComissaoFisica();
  }
}

class VendedorPessoaJuridica extends Vendedores {
  private _nomeEmpresa: string;
  private _totalFunc: number;

  constructor(
    nome: string,
    salario: number,
    valorVenda: number,
    nomeEmpresa: string,
    totalFunc: number
  ) {
    super(nome, salario, valorVenda);
    this._nomeEmpresa = nomeEmpresa;
    this._totalFunc = totalFunc;
  }

  get nomeEmpresa() {
    return this._nomeEmpresa;
  }

  get totalFunc() {
    return this._totalFunc;
  }

  set nomeEmpresa(nomeEmpresa: string) {
    if (nomeEmpresa === '') {
      throw new Error('Nome de empresa invalido');
    }
    this._nomeEmpresa = nomeEmpresa;
  }

  set totalEmpresa(totalFunc: number) {
    if (totalFunc < 0) {
      throw new Error('Numero de funcionarios invalido');
    }
    this._totalFunc = totalFunc;
  }

  public ComissaoJuridica() {
    if (this.valorVenda < 5000) {
      return this.valorVenda * 0.02;
    } else if (this.valorVenda >= 5000 && this.valorVenda < 10000) {
      return this.valorVenda * 0.04;
    } else {
      return this.valorVenda * 0.06;
    }
  }

  public SalarioTotal() {
    if (this._totalFunc < 100) {
      return this.salario + this.ComissaoJuridica() + 200;
    } else {
      return this.salario + this.ComissaoJuridica() + 300;
    }
  }
}

const desconto = new Vendedores('', 4529, 150);
console.log('Valor do desconto: ', desconto.Desconto());

const vendedorFisica = new VendedorPessoaFisica('Marcos', 4000, 8, 'Norte');

let comissaoFisica = vendedorFisica.ComissaoFisica();
let salarioFisica = vendedorFisica.calcularSalarioTotal();

console.log(
  `${vendedorFisica.nome} recebera ${salarioFisica} com uma comissao de ${comissaoFisica}`
);

const vendedorJuridica = new VendedorPessoaJuridica(
  'Robert',
  8000,
  380,
  'Guarilha Leilões',
  49
);

let comissaoJuridica = vendedorJuridica.ComissaoJuridica();
let salarioJuridica = vendedorJuridica.SalarioTotal();

console.log(
  `${vendedorJuridica.nome} recebera ${salarioJuridica} com uma comissao de ${comissaoJuridica}`
);
