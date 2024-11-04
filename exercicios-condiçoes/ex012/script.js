function calcular() {
    var num = Number(window.prompt('Digite um número: '))

    var tipo
    if (num % 2 == 0) {
        tipo = `<strong>PAR</strong>`
    } else {
        tipo = `<strong>ÍMPAR</strong>`
    }

    var res = document.getElementById('res')
    res.innerHTML = `<p>O número ${num} que foi digitado é ${tipo}!</p>`
}