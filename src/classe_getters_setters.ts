class Permissao {
    constructor(
        private _nome: string,
        private _nivel: number
    ) {}

    get nome() {
        return this._nome.toUpperCase();
    }
    /* 
    getNome() {
        return this.nome
    } */

    /*     
    setNome (nome:string) {
        this.nome = nome;
    } */

    set nome(nome: string) {
        if (nome.length < 5) {
            throw new Error('o nome da permissao deve ter no minimo 5 caracteres')
        }
        this._nome = nome
    }
}

const permissao = new Permissao('admininastro', 1)
console.log(permissao.nome)
try {
    permissao.nome = 'Joaooooo'
    console.log(permissao.nome)
} catch(err) {
    console.log(err.message)

}