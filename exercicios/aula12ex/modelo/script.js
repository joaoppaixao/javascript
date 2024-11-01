function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente! ')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-menino.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovemH.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto.png')
            } else {
                //velho
                img.setAttribute('src', 'foto-velho.png')
            }
        } else if (fsex[1].checked) {
            var genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'foto-menina.png')
            } else if(idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovemM.png')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', 'foto-adulta.png')
            } else {
                //velha
                img.setAttribute('src', 'foto-velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você tem ${idade} anos e é ${genero}. `
        res.appendChild(img)
    }
}
