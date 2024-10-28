

let nomeCompleto = "Molezinha Nheeeee"
let totalLetras = 0

nomeCompleto.split('').forEach(function (caractere) {
    if (caractere !== ' ') {
        totalLetras++;
    }
})

console.log(totalLetras)