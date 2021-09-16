class Pessoas {
  static SEXO = ['Masculino', 'Feminino'];
  constructor(
    private _nome: string,
    private _sexo: string,
    private _idade: number
  ) {}

  get nome() {
    return this._nome;
  }

  get sexo() {
    return this._sexo;
  }

  get idade() {
    return this._idade;
  }

  set nome(nome: string) {
    if (nome === '') {
      throw new Error('Nome invalido');
    }
    this._nome = nome;
  }

  set sexo(sexo: string) {
    if (!Pessoas.SEXO.includes(sexo)) {
      throw new Error('Sexo Inválido');
    }
    this._sexo = sexo;
  }

  set idade(idade: number) {
    if (idade === 0) {
      throw new Error('Idade invalida');
    }
    this._idade = idade;
  }

  public mensagemIdade() {
    if (this._idade >= 18) {
      return `A pessoa ${this.nome} é maior de idade`;
    } else {
      return `A pessoa ${this.nome} é menor de idade`;
    }
  }
}

let pessoa = new Pessoas('Antonio', 'Masculino', 0);
console.log('Idade: ', pessoa.mensagemIdade());

 try {
   pessoa.idade = 0;
   console.log(pessoa);
 } catch (error) {
   console.log(error.message);
 }
