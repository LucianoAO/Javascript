let num = [5, 8, 2, 9 , 3]
num.push(1)
num.sort()
console.log(`Array possui: ${num}`)
console.log(`Meu Array num Possui ${num.length}`)
console.log(`Sua primeira posição é ${num[0]}`)

let pos = num.indexOf(3) 

if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor esta na posição ${pos} e na posição real ele esta em ${pos += 1}`)
}
