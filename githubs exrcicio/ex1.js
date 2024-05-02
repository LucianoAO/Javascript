// https://github.com/tiagovignatti/exercicios-javascript


let arryn = [20, 5, 10]
let somaarry = 0

for(let i = 0; i < arryn.length;i++) {
    somaarry += arryn[i] 
}

/*

i = contador de conteúdos (AINDA não a nada somado)
i < arryn.length = repetir o código enquanto i for menor que array length (3)
Ou seja, essa repetição acontecera 3 vezes.
somaarry = 0
somarry += arryn[i]
Ou seja, a cada repetição ele somara o valor atual, com o novo valor que vier do array arryn[]
i = contador de counteúdos, ao dizer arryn[i] Basicamente esta dizendo para pegar arryn[0] arryn[1] arryn[2]... Até i ser maior ou igual a arryn length para a conta acabar.

*/

console.log(somaarry)

let divisor = Number(arryn.length)

let media = Number(somaarry) / Number(divisor)

console.log(`A soma dos numeros é ${somaarry} logo dividindo por ${divisor} media = ${media}`)

