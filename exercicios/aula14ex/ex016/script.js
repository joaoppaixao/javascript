function contar() {
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = '<h2>Contando...</h2>'
    }

    if (passo <= 0) {
        window.alert('Passo inválido! Considerando passo 1.')
        passo = 1
    }

    if (inicio < fim) {
        for (i = inicio; i <= fim; i += passo) {
            res.innerHTML += `👉🏻 ${i} `
        }
        res.innerHTML += '🏁'
    } else if (inicio > fim) {
        for (i = inicio; i >= fim; i -= passo) {
            res.innerHTML += `👉🏻 ${i} `
        }
    }
}

function limpar() {
    var res = document.getElementById('res')
    res.innerHTML = ''
}