function encontraMaiorNumero(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log(`O ${num1} é o maior dentre o conjunto: {${num1},${num2},${num3}}`)
    } else if (num2 > num1 && num2 >  num3) {
        console.log(`O ${num2} é o maior dentre o conjunto: {${num1},${num2},${num3}}`)
    } else if (num3 > num1 && num3 > num2) {
        console.log(`O ${num3} é o maior dentre o conjunto: {${num1},${num2},${num3}}`)        
    }
}

console.log(encontraMaiorNumero(1,2,3))