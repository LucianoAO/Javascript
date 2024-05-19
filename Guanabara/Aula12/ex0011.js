var idade = 100
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log('Não vota')
} else if(idade < 18 || idade > 65) {
    console.log('Voto opcional')
} else if (idade >= 18) {
     console.log('Voto obrigatório')
}

var sexo = 'LoL'
if (sexo == 'm' || sexo == 'M') {
    console.log('Homem!')
} else if (sexo == 'F' || sexo == 'f') {
    console.log('Mulher!')
} else {
    console.log('Não-Binário')
}