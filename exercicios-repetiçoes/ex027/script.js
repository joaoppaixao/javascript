function tabuada() {
    var num = Number(document.getElementById('txtn').value)
    var res = document.getElementById('saida')

    res.innerHTML = `<h2>Tabuada do ${num}</h2>`
    for (var i = 1; i <= 10; i++) {
        res.innerHTML += `${num} x ${i} = <strong>${num * i}</strong><br>`
    }
}