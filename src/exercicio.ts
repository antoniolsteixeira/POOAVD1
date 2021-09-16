/*
Criar uma função para receber dois numeros como parametros
 e deve retornar a soma deles.
 */

function soma(num1: number, num2: number) {
    return num1 + num2
}

soma(20, 40)

/*
Criar uma função para receber dois numeros como objeto (criar uma interface para definir o tipo do objeto)
 e deve retornar a soma deles.
 */

interface ISomarData {
    num1: number;
    num2: number;
}

function somar({num1, num2}: ISomarData) {
    return num1 + num2
}

somar({
    num1: 10,
    num2: 20
})