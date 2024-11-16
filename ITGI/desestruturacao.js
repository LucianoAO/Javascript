






let [p1, p2] = primos

let {nome: nomeCurso, turma, ...rest} = curso 

function imprime({nome}) {
    console.log(nome)
}






let primos = [2,3,5,7,11,13]

let curso = {
    nome: "Bootcamp Front End",
    modulos: 4,
    presencial: false,
    turma: 1
}

let primos2 = [...primos, 17]

let curso2 = {
    ...curso2,
    descricao: "bla bla bla",
    ativo: true
}

let curso3 = {
    ...curso
 }

 let a = 2, b= 3 
 let soma = a + b
 console.log()