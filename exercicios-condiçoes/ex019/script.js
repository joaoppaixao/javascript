function calcular() {
    var n1 = Number(window.prompt('Primeiro valor: '))
    var n2 = Number(window.prompt('Segundo valor: '))
    var operacao = Number(window.prompt(`Valores informados: ${n1} e ${n2}. \nO que vamos fazer? \n[1] Somar \n[2] Subtrair \n[3] Multiplicar \n[4] Dividir`))

    var res = window.document.getElementById('res')
    res.innerHTML = '<h2>Calculando...</h2>'

    switch (operacao) {
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = <mark>${n1 + n2}</mark></p>`
            break;

        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = <mark>${n1 - n2}</mark></p>`
            break;

        case 3:
            res.innerHTML += `<p>${n1} x ${n2} = <mark>${n1 * n2}</mark></p>`
            break;

        case 4:
            res.innerHTML += `<p>${n1} / ${n2} = <mark>${(n1 / n2).toLocaleString('pt-BR')}</mark></p>`
            break;

        default:
            res.innerHTML += `<p>OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2} e não sei o que fazer com eles.</p>`
            break;
    }

}