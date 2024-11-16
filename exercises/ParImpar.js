function verificaParOuImpar(numero) {
    let marcella = numero % 2 

    if ( marcella == 1) {
        console.log(`O número ${numero} é impar.`)
    } else if (marcella == 0 ) {
        console.log(`O número ${numero} é par`)
    } else {
        console.log(`Este parâmetro não é valido.`)
    }
}

console.log( verificaParOuImpar())