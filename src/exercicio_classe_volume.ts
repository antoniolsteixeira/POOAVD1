class Volume {
    constructor(
        private _data: Date,
        private _quantidade: number,
        private _valor: number
    ) { }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    set data(data: Date) {
        this._data = data
    }

    set quantidade(quantidade: number) {
        if (quantidade <= 10) {
            throw new Error('Somente quantidades maiores que 10')
        }
        this._quantidade = quantidade
    }

    set valor(valor: number) {
        if (valor < 20 || valor > 100) {
            throw new Error('Somente valores entre 20 e 100')
        }
        this._valor = valor
    }

    public obtemVolume() {
        return this._quantidade* this._valor
    }
}

const volume = new Volume(new Date('2021-09-02'), 10, 20)
console.log(volume)
console.log(volume.data, volume.quantidade, volume. valor)
try {
    volume.quantidade = 6
} catch(error) {
    console.log(error.message)
}

try {
    volume.valor = 101
} catch(error) {
    console.log(error.message)
}

console.log(volume.data, volume.quantidade, volume.valor)