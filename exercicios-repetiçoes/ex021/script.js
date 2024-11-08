function contar() {

    var res = document.getElementById('res')
    res.innerHTML += '<h2>Contando...</h2>'
    for (var i = 1; i <= 10; i++) {
        res.innerHTML += ` ${i} \u{1f449}`
    }
    res.innerHTML += '\u{1f3c1}'
}