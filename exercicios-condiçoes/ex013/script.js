function calcular() {
    var n1 = Number(window.prompt('Digite um número: '))
    var n2 = Number(window.prompt('Digite outro número: '))

    var res = document.getElementById('res')
    if (n1 > n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <mark>${n1}</mark>.`
    } else if(n1 < n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <mark>${n2}</mark>.`
    } else {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, ambos são <mark>IGUAIS</mark>.`
    }
}