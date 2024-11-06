function informar() {
    var mes = window.prompt('Digite o mês em extenso (ex: Abril)')

    var estacao
    switch (mes.toUpperCase()) {
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            break;
        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            break;
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            break;
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            break;
        default:
            estacao = 'INFEFINIDA'
            break;
    }

    var res = document.getElementById('res')
    res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos da estação <mark>${estacao}</mark>.</p>`
}