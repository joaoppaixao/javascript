function calcular() {
    var anonasc = Number(prompt('Digite o ano que você nasceu: '))
    var agora = new Date()
    var ano = agora.getFullYear()

    var idade = ano - anonasc

    var res = document.getElementById('res')
    res.innerHTML = `<p>Quem nasceu em ${anonasc} vai completar <mark>${idade}</mark> anos em ${ano}.</p>`
}