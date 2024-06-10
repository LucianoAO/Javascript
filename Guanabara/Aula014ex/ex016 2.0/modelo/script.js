function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res =  document.getElementById('res')

    if (ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0 ) {
        // window.alert('Faltam dados')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ) {
            window.alert('Passo inválido Considerando Passo 1')
            p = 1
        }
        if (i < f) {
            for(let c = i; c <=f ; c+=p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {

            for(let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }

        }
        if (i == f) {
            window.alert('Inicio e Fim não podem ser iguais.')
            res.innerHTML = ''
            return
        }
        res.innerHTML += `\u{1F3C1}` 
    }
}