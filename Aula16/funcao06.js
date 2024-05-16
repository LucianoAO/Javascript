// O objetivo é fazer uma função soma() que some quaisquer numeros nela.

arraynum = []

function soma(...arraynum) {
    let res = 0
    for (let i in arraynum) {
        res += Number(arraynum[i])
    }
    return res
}

console.log(soma(42, 2041))


const multi = (numero1,numero2) => {
    const multiplicacao = numero2 * numero2

    return multiplicacao
}

const multiplicacao = multi(2,5)
console.log(multiplicacao)