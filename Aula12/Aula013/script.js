

function carregar() {

    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    // var hora = data.getHours()
    hora = 11
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#BAD3D9'
    } else if (hora >= 12 && hora <= 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#DB8161'
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.jpg'
        document.body.style.background = '#BCD3DB'
    }
}
