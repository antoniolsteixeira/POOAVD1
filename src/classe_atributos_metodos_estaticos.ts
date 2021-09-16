interface IBancoDeDados {
    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

class BancoDeDados {

    static LOCAL = '127.0.0.1'
    constructor(
        private ip: string,
        private usuario: string,
        private senha: string,
        private tipoBanco: string
    ) { }

    static factory({ip, usuario, senha, tipoBanco}: IBancoDeDados) {
        return new BancoDeDados(ip, usuario, senha, tipoBanco);
    }
}

const bancoDeDados = BancoDeDados.factory({
    ip: BancoDeDados.LOCAL,
    usuario: 'Admininastro',
    senha: '12345',
    tipoBanco: 'My SQL'
})
console.log(bancoDeDados)