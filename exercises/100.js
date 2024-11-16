

function soma(n1,n2) {

    let somar = n1 + n2

    if (somar >= 100) {
        console.log(`A soma dos números exibidos é ${somar}`)
    } else {
        console.log(`O valor da soma dos números não é maior ou igual a 100.`)
    }
}

console.log(soma(50,60))