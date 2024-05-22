var valor1, valor2, total;

valor1 = 5
valor2 = 2

total = ++valor1
alert(total)
alert(`O valor novo foi: ${valor1}`)

/*
valor1 = valor1 + valor2 

==

valor1 += valor2

Temos ++ e -- (incrementa +1 ou -1)

+=
-=
/=
!= E não igual. (8 e 8 são iguais neste escopo)
!= E não igual especificadamente ("8" e 8 não são iguais neste escopo)

*/

// Para Soma
function soma(y, x) {
    return x + y
}


// Para Cotação do dolar
function realParaDolar(real, cotacaoDolar) {
    return real * cotacaoDolar
}
 

console.log(soma(5,10))

const carro = {
    marca:"ford",
    modelo:"ka",
    ano:2015,
    placa:"ABC-1234",
    buzina: function() {
        alert('bii!!!!')
    },
    completo: function(){
        return `A marca é ${this.marca} e o modelo é: ${this.modelo}`
    }
}

console.log(carro.completo())


// -------------------------------------------------- Eventos --------------------------------------------


