


function doAjax() {
    const xhttp = new XMLHttpRequest()

    const code_ready = 4
    xhttp.onreadystatechange = function() {
        if (this.readyState === code_ready) {
            console.log('this.readyState', this.responseText)
        }
    }

    xhttp.open("GET", '')
}
setTimeout(doAjax, 5000)