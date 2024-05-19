

function decidir(dano, saude) {
    let acao = document.querySelector('input#ides')
    let resultado = document.querySelector('p#decisao')
    resultado.innerHTML = ''

    saude = 1
    dano = Number(acao.value)
    vida = saude - dano
    if (dano === 0) {
        resultado.innerHTML = `Você deu ${dano} de dano HP = ${vida}, tendo clemência a Hinata!`
    } else if (dano === 1) {
        resultado.innerHTML = `Você deu ${dano} de dano HP = ${vida}. Matando a sangue frio o Hinata!`
        }
}