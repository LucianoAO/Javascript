let numeros = [51, 52]
let soma = 0

for (let i = 0; i < numeros.length; i++ ) {
    soma += numeros[i]
}

if ( soma > 100) {
    console.log(`o resultado da soma dos números é: ${soma}`)
} else {
    console.log('Somente permitido resultados acima de 100.')
}