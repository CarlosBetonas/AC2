


let numeros = [1.2, 3.7, 4.5, 6.1, 8.9]
let numerosAredondados = []

numeros.forEach(function (numero) {
    numerosAredondados.push(Math.ceil(numero))
})

console.log(numerosAredondados)