function interagir() {
    var agora = new Date()

    var res = document.getElementById('res')
    res.innerHTML = `<p>O que eu recebi do sistema foi <mark>${agora}</mark>.</p>`
}