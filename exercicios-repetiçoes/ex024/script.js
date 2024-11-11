function contar() {
    var res = document.getElementById('res')
    res.innerHTML += '<h2>Contagem regressiva de 10 a 1</h2>'

    for (var i = 10; i >= 1; i--) {
        res.innerHTML += ` ${i} \u{1f449}`
    }
    res.innerHTML += '\u{1f3c1}'
}