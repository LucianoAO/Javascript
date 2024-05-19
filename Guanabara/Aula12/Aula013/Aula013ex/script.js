

function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'bebe-m.jpg')
            } else if (idade >= 10 && idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescente-m.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-m.jpg')
                // Adulto
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
                // Idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher '
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe-f.jpg')
                // Criança
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'adolescente-f.jpg')
                // Jovem
            } else if (idade < 50) {
                img.setAttribute('src', 'adulto-f.jpg')
                // Adulto
            } else {
                img.setAttribute('src', 'idosa-f.jpg')
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}