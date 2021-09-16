interface IEndereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade: string;
}

const endereco: IEndereco = {
  rua: 'Antonio Braga',
  numero: 18,
  bairro: 'Areal',
  cidade: 'Barra do Pirai',
};

console.log(endereco);
