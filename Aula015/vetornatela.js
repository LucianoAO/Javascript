 let valores = [8, 1, 7, 4, 2, 9]
valores.sort()

console.log(valores)
/*

for (let pos = 0; pos < valores.length ; pos++) {
    console.log(`seu identificador é o ${pos} e seu valor é ${valores[pos]}`)
}

*/

for (pos in valores){
    console.log(`a posição ${pos} tem o valor ${valores[pos]}`)
}
