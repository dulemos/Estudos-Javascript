const prod1 = {};

prod1.nome = 'Celular Ultra Mega';

prod1.preco = 1998.90;

//Evitar utilizar atributos com espaço
prod1['desconto Legal'] = 0.40;

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 2,
        obj: {
            blabla: 3
        }
    }
}

console.log(prod1, prod2);