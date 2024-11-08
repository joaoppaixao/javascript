function tabuada() {
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número! ')
    } else {
        var n = Number(num.value)

        tab.innerHTML = ''
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            var res = (n * i)
            item.text = `${n} x ${i} = ${res}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}