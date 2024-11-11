palindromo('')
palindromo('aba')
palindromo('bola')

function palindromo(s) {
    for (var i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s.charAt(i) != s.charAt(j)) {
            console.log(`${s} Não é um palindromo`)
            return
        }
    }
    console.log(`${s} é um palíndromo`)
}