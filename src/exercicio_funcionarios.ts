class Funcionarios {
  static SETORES = ['ti', 'financeiro', 'rh', 'suprimentos', 'contablidade'];
  constructor(
    private _matricula: string,
    private _nome: string,
    private _setor: string,
    private _salario: number
  ) {}

  get matricula() {
    return this._matricula;
  }

  get nome() {
    return this._nome;
  }

  get setor() {
    return this._setor;
  }

  get salario() {
    return this._salario;
  }

  set matricula(matricula: string) {
    this._matricula = matricula;
  }

  set nome(nome: string) {
    this._nome = nome;
  }

  set setor(setor: string) {
    if (!Funcionarios.SETORES.includes(setor)) {
      throw new Error('Setor Inválido');
    }
    this._setor = setor;
  }

  set salario(salario: number) {
    this._salario = salario;
  }

  public inss() {
    if (this.salario < 1000) {
      return this.salario * 0.05;
    } else if (this.salario >= 1000 && this.salario <= 3000) {
      return this.salario * 0.07;
    } else if (this.salario >= 3000 && this.salario < 5000) {
      return this.salario * 0.09;
    } else {
      return this.salario * 0.11;
    }
  }

  public irf() {
    if (this.salario < 1200) {
      return 0;
    } else if (this.salario >= 1200 && this.salario < 3000) {
      return this.salario * 0.08;
    } else {
      return this.salario * 0.1;
    }
  }

  public fgts() {
    return this.salario * 0.08;
  }

  public reajuste() {
    return this.salario * 1.05;
  }

  public salarioLiquido() {
    return this.salario - this.inss() - this.irf();
  }

  public mensagem() {
    return `O funcionário ${this.nome} do setor de ${this.setor}, tem o salário de ${this.salario}`;
  }
}

class Coordenador extends Funcionarios {
  public reajuste() {
    return this.salario * 1.1;
  }
}

class Gerentes extends Funcionarios {
  public reajuste() {
    return this.salario * 1.15;
  }
}

let funcionarios = new Funcionarios('1234', 'Ana', 'ti', 4000);

const coordenador = new Coordenador('12345', 'Maria', 'ti', 5000);
console.log('Reajuste: ', coordenador.reajuste());

try {
  funcionarios.setor = 'rh';
  console.log(funcionarios);
} catch (error) {
  console.log(error.message);
}
console.log('inss: ', funcionarios.inss());
console.log('irf: ', funcionarios.irf());
console.log('salarioLiquido: ', funcionarios.salarioLiquido());
