let h1 = document.getElementById('h1') // toma gap h1 da pagina
let h2 = document.getElementById('h2') // o h2 da pagina la lek
let main = document.getElementById('main') // o main ne dog
let h3 = document.createElement("h3")



function colocar() {
    h3.innerText = 'neto'
    main.insertBefore(h3, h2)  
}