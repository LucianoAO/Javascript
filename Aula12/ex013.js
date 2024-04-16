var agora = new Date()
var diaSem = agora.getDay()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

console.log(diaSem)
switch(diaSem) {
    case 0:
        console.log('Domingo')
            break // Não esquece disso
    case 1:
        console.log('Segunda')
            break // Não esquece disso
    case 2:
        console.log('Terça')
            break // Não esquece disso
    case 3:
        console.log('Quarta')
            break // Não esquece disso
    case 4:
        console.log('Quinta')
            break // Não esquece disso
    case 5:
        console.log('Sexta')
            break // Não esquece disso
    case 6:
        console.log('Sabado')
            break // Não esquece disso
    default:
        console.log('Irmão, como teu dia da semana deu erro dog?? kkkkkkkk em q mundo tu ta vivendo')
            break // Não esquece disso
}