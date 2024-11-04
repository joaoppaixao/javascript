function media() {
    var nome = window.prompt('Digite seu nome: ')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}? `))
    var n2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}? `))
    var media = (n1 + n2) / 2 

    var msg
    if (media >= 7) {
        msg = 'Você ficou acima da média :) Meus parabéns!'
    } else {
        msg = 'Você ficou abaixo da média :( Estude um pouco mais!'
    }

    var res = window.document.getElementById('res')
    res.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark>.</p>`
    res.innerHTML += `<p>As notas obtidas foram <mark>${n1} e ${n2}</mark>.</p>`
    res.innerHTML += `<p>A média final de ${nome} será de <mark>${media}</mark>.</p>`
    res.innerHTML += `<p>A mensagem que temos é: <mark>${msg}</mark>.</p>`
}
