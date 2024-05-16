var num = document.querySelector('input#inum')
let lista = document.querySelector('select#ilista')
let res = document.querySelector('div#res')
var numarry = []


function adicionar() {
    if (num.value > 101 || num.value <= 0) {
        window.alert("Adicione um valor entre 1 e 100!")
        return
        
    } else if (numarry.includes(num.value)) {
        window.alert("O numero já foi informado!")
        return
    }
    
    else if (num.value < 101 && num.value > 0) {
        numarry.push(num.value)
        var options = document.createElement("option")
        options.innerText = `adicionou ${num.value}`
        lista.appendChild(options)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    res.innerText = ``
    lista.innerHTML = `<option> Adicione um número </option> `
    var options = document.createElement("option")
    options.remove()
    if (numarry.length > 0) {
        numarry.sort((a, b) => a - b)
        
        var cadastro = document.createElement("p")
        res.appendChild(cadastro)
        cadastro.innerText += `Ao todo, você tem ${numarry.length} numero(s) cadastrado(s).`
        // Cadastros

        var menor = document.createElement("p")
        res.appendChild(menor)
        menor.innerText += `O menor valor informado é ${numarry[0]}`
        // Menor

        var maior = document.createElement("p")
        res.appendChild(maior)
        maior.innerText += `O maior valor informado é ${numarry[numarry.length -1]}`
        // Maior

        // Esquema para fazer uma somatória dos valores
        let somar = 0
        for (let pos in numarry) {
        somar += Number(numarry[pos])
        }   
        // Esquema para fazer uma somatória dos valores


        var soma = document.createElement("p")
        res.appendChild(soma)
        soma.innerText += `A soma dos números é ${somar}`
        // Soma dos valores


        var media = document.createElement("p")
        res.appendChild(media)
        media.innerText = `A média dos valores digitados é ${somar / numarry.length}`
        numarry = []
    }
}


// Objetivo para finalização: Limpe os números e exiba os resultados que o vídeo pede.
