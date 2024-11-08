function contar() {

    var res = document.getElementById('res')
    res.innerHTML += '<h2>Números pares de 1 a 10</h2>'
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            res.innerHTML += ` ${i} \u{1f449}`
        }
    }
    res.innerHTML += '\u{1f3c1}'
}