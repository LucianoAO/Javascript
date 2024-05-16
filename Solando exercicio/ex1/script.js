let inputf = document.querySelector('input#ifar')

function calculo() {
    var fahrenheit = Number(inputf.value)

    if (fahrenheit == '' || fahrenheit == undefined || fahrenheit == isNaN()) {
        window.alert('Adicione um valor valido!')
    } else {
        c = ( ( fahrenheit - 32 ) * 5 ) / 9
        document.querySelector('span.resultado').innerHTML = `O valor convertido de fahrenheit: ${fahrenheit} para celsius e igual a ${c}`
    } 
}