function contar() {
    var inicio = document.querySelector('input#inicio')
    var fim = document.querySelector('input#fim')
    var passo = document.querySelector('input#passo')
    var resp = document.querySelector('p.resp')
    var numinicio = Number(inicio.value)
    var numfim = Number(fim.value)
    var numpasso = Number(passo.value)

    resp.innerHTML = ''

    if ( numinicio === '' || numfim === '' || numpasso == '') {
        window.alert('Adicione um valor a todos os campos.')
        return
    }

    for (var incr = numinicio; incr <= numfim; incr += numpasso) {
        resp.innerHTML += `${incr} &#128073;`
    } 
}
