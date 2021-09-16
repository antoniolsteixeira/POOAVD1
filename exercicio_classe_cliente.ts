/* Crie uma classe Cliente com os seguintes atributos cliente e telefone. Crie os métodos getters e setters. Crie uma validação no telefone para aceitar somente 11 caracteres. Crie uma classe chamada pedido como herança da classe Cliente com os atributos produto, quantidade, valorUnitario, crie o método valorTotal para multiplicar a quantidade pelo valorUnitario. */

class Clientes {
    private _cliente: string;
    private _telefone: string;

    constructor(cliente: string, telefone: string) {
        this._cliente = cliente;
        this._telefone = telefone;
    }

    get clientes() {
        return this._cliente;
    }

    get telefone() {
        return this._telefone;
    }

    set cliente(cliente: string) {
        this._cliente = cliente;
    }

    set telefone(telefone: string) {
        if (telefone.length != 11) {
            throw new Error("Telefone com o tamanho de 11 caracteres")
        }
        this._telefone = telefone;
    }
}

class Pedidos extends Clientes {
    private _produto: string;
    private _quantidade: number;
    private _valorUnitario: number;

    constructor(cliente: string, telefone: string, 
        produto: string, quantidade: number, valorUnitario: number) {
            super(cliente, telefone)
            this._produto = produto
            this._quantidade = quantidade
            this._valorUnitario = valorUnitario
    }

    get produto() {
        return this._produto
    }
    
    get quantidade() {
        return this._quantidade
    }
    
    get valorUnitario() {
        return this._valorUnitario
    }

    
    set produto(produto: string) {
        this._produto = produto;
    }

    set quantidade(quantidade: number) {
        this._quantidade = quantidade;
    }

    set valorUnitario(valorUnitario: number) {
        this._valorUnitario = valorUnitario;
    }
}

const clientes = new Clientes('Cliente A', '219849821')
console.log(clientes)

const pedidos = new Pedidos('Cliente A', '29149211', 'Notebook', 10, 200)
console.log(pedidos)