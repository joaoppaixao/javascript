function fatorial() {
    var num = Number(document.getElementById('fnum').value)
    var res = document.getElementById('saida')

    res.innerHTML = `<h2>Calculando ${num}!</h2>`
    var fat = 1
    for (var i = num; i > 1; i--) {
        res.innerHTML += `${i} x `
        fat *= i
    }
    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`;
}   