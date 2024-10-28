


let numeros = [2, 5, 8, 13, 16, 21]
let novoArray = []

numeros.forEach(function (numero) {
    if (numero % 2 !== 0) {
        let numeroAleatorios = Math.floor(Math.random() * 10) + 1
        novoArray.push(numero * numeroAleatorios)
    } else {
        novoArray.push(numero)
    }
})

console.log(novoArray)
