class Pedido {
    constructor(
        private produto: string, 
        protected valorTotal: number, 
        public previsaoEntrega: Date
    ) { }
}

const pedido = new Pedido('Notebook', 4000, new Date('2020-05-10'));
console.log(pedido)