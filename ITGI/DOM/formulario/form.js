var fslist = document.querySelectorAll(".multiple-field")

for ( var i = 0; i < fslist.length; i++) {
    initMultipleFieldset(fslist[i])
}

function initMultipleFieldset(fs) {
    var addButton = document.createElement("button")
    addButton.textContent = "Adicionar"
    addButton.type = "button"
    fs.appendChild(addButton)

    var firstInput = fs.querySelectorAll("input")

    addButton.addEventListener("click", function() {
        var newInput = document.createElement("input")
        var div = document.createElement("input")
        newInput.name = firstInput.name
        newInput.type = firstInput.type

        var deleteButton = document.createElement("button")
        deleteButton.textContent = "Excluir"
        deleteButton.type = "button"

        div.appendChild(newInput)
        div.appendChild(deleteButton)

        deleteButton.addEventListener("click", function() {
            div.remove()
        })

        fs.insertBefore(div, addButton)
    })
}