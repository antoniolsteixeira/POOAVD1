class IRFF {
  private _nome: string;
  private _rendaAnual: number;
  constructor(_nome: string, _rendaAnual: number) {
    this._nome = _nome;
    this._rendaAnual = _rendaAnual;
  }

  get nome() {
    return this._nome;
  }

  get rendaAnual() {
    return this._rendaAnual;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome invalido');
    }
    this._nome = nome;
  }

  set rendaAnual(rendaAnual: number) {
    if (rendaAnual <= 0) {
      throw new Error('Renda invalida');
    }
    this._rendaAnual = rendaAnual;
  }
}

class PessoaFisica extends IRFF {
  private _gastosSaude: number;

  constructor(nome: string, rendaAnual: number, gastosSaude: number) {
    super(nome, rendaAnual);
    this._gastosSaude = gastosSaude;
  }

  get gastosSaude() {
    return this._gastosSaude;
  }

  set gastosSaude(gastosSaude: number) {
    if (gastosSaude <= 0) {
      throw new Error('Gasto invalido');
    }
    this._gastosSaude = gastosSaude;
  }

  public IRFFPessoaFisica() {
    if (this.rendaAnual < 20000) {
      const impostoPagar = this.rendaAnual * 0.15;
      if (this.gastosSaude > 0) {
        return impostoPagar - this._gastosSaude / 2;
      } else {
        return impostoPagar;
      }
    } else if (this.rendaAnual >= 20000) {
      const impostoPagar = this.rendaAnual * 0.25;
      if (this.gastosSaude > 0) {
        return impostoPagar - this._gastosSaude / 2;
      } else {
        return impostoPagar;
      }
    }
  }
}

class PessoaJuridica extends IRFF {
  private _numFuncionarios: number;

  constructor(nome: string, rendaAnual: number, numFuncionarios: number) {
    super(nome, rendaAnual);
    this._numFuncionarios = numFuncionarios;
  }

  get numFuncionarios() {
    return this._numFuncionarios;
  }

  set numFuncionarios(numFuncionarios: number) {
    if (numFuncionarios <= 0) {
      throw new Error('Modelo invalido');
    }
    this._numFuncionarios = numFuncionarios;
  }

  public IRFFPessoaJuridica() {
    if (this.numFuncionarios > 10) {
      return this.rendaAnual * 0.14;
    } else {
      return this.rendaAnual * 0.16;
    }
  }
}

const CalculoPessoaFisica = new PessoaFisica('Antonio', 35000, 3541);
const pagamentoPessoaFisica = CalculoPessoaFisica.IRFFPessoaFisica();
console.log(`Total de imposto a ser pago: ${pagamentoPessoaFisica}`);

const CalculoPessoaJuridica = new PessoaJuridica('Antonio', 250000, 28);
const pagamentoPessoaJuridica = CalculoPessoaJuridica.IRFFPessoaJuridica();
console.log(`Total de imposto a ser pago: ${pagamentoPessoaJuridica}`);
