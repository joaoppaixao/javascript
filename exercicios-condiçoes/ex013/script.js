function calcular() {
    var n1 = Number(window.prompt('Digite um número: '))
    var n2 = Number(window.prompt('Digite outro número: '))

    var maior
    if (n1 > n2) {
        maior = `${n1}`
    } else {
        maior = `${n2}`
    }

    var res = document.getElementById('res')
    msg.innerHTML = `<p>Analisando os valores ${n1} e ${n2}, o maior valor é ${maior}.</p>`
}