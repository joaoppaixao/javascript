function contar() {
    var num = Number(document.getElementById('txtn').value)
    var res = document.getElementById('res')
    res.innerHTML += `<h2>Contando até ${num}</h2>`

    if (num < 0) {
        window.alert('[ERRO] Digite um número POSITIVO.')
    } else if (num => 0) {
        for (var i = 1; i <= num; i++) {
        res.innerHTML += ` ${i} \u{1f449}`
    }
    res.innerHTML += '\u{1f3c1}'
    }
}