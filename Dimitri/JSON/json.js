
// Objeto
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.6", "1.4", "1.0 "]
}

// Convertido em texto
let texto = JSON.stringify(carro)

// Após isto, será possivel chamar o objeto em formato de texto.

console.log(texto)

// Caso queiramos mostrar apenas uma das propriedades de um objeto em formato de texo:

// Convertendo texto em objeto
let obj = JSON.parse(texto)

// Pegando um valor de um objeto
console.log(obj.modelo)

console.log(texto.modelo)


const ajax = XMLHttpRequest()