var res = document.getElementById('res')
var num = 0
var palpite = 0

function sortear() {
    var min = 1
    var max = 100
    var dif = max - min
    var aleatorio = Math.random()
    num = min + Math.trunc(dif * aleatorio)
}

function jogar() {
    palpite = Number(window.prompt('Qual é o seu palpite?'))
    if (palpite < num) {
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <mark>MAIOR</mark>!</p>`
    } else if (palpite > num){
        res.innerHTML += `<p>Você falou ${palpite}. Meu número é <mark>MENOR</mark>!</p>`
    } else if(palpite == num) {
        res.innerHTML += `<p><mark>PARABÉNS!</mark> Você acertou! Eu tinha sorteado o número <mark>${num}</mark></p>`
        document.getElementById('botao').style.visibility = 'hidden'
    }
}

