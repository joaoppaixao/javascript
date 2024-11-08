function contar() {
    var res = document.getElementById('res')
    res.innerHTML += '<h2>Contando...</h2>'
    for (var i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            res.innerHTML += ` <mark>${i}</mark> \u{1f449}`
        } else {
            res.innerHTML += ` ${i} \u{1f449}`
        }
    }
    res.innerHTML += '\u{1f3c1}'
}