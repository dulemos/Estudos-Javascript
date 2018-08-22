//let e const
//var não tem escopo de bloco enquanto let tem.
{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

//template string
const produto = 'ipad'
console.log(`${produto} 
é 
caro!`)

//operador destructuring
const [l, e, ... tras] = "coder"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x,y)

const {idade: i, nome} = {nome: 'ana', idade: 9}
console.log(i, nome)
