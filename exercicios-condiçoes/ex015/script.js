function analisar() {
    var agora = new Date()

    var meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    var semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')

    var res = document.getElementById('res')
    var dia = agora.getDate()
    var mes = agora.getMonth()
    var ano = agora.getFullYear()
    var sem = agora.getDay()
    var hora = agora.getHours()
    var minutos = agora.getMinutes()
    var segundos = agora.getSeconds()

    res.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
    res.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
    res.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
    res.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
    res.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
    res.innerHTML += `<p>Minutos: <mark>${minutos}</mark></p>`
    res.innerHTML += `<p>Segundos: <mark>${segundos}</mark></p>`
}