function contar() {
    var n1 = Number(document.getElementById('fn1').value)
    var n2 = Number(document.getElementById('fn2').value)

    var res = document.getElementById('saida')
    res.innerHTML = `<h2>Contando de ${n1} a ${n2}</h2>`

    if (n1 < n2) {
        for (var i = n1; i <= n2; i++) {
            res.innerHTML += ` ${i} \u{1f449}`
        }
    } else if (n1 > n2) {
        for (var i = n1; i >= n2; i--) {
            res.innerHTML += ` ${i} \u{1f449}`
        }
    } else {
        res.innerHTML = 'Não é possível contar, pois os números são IGUAIS!'
    }
    res.innerHTML += '\u{1f3c1}'
}

function limpar() {
    document.getElementById('fn1').value = ''
    document.getElementById('fn2').value = ''

    var res = document.getElementById('saida')
    res.innerHTML = '<p>Preencha os dados acima e aperte o botão. </p>'
}