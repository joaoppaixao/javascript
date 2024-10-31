var agora = new Date()
var horas = agora.getHours()

horas = Number(horas)

if (horas < 0 || horas > 24) {
    window.alert('Hora inválida! Você precisa digitar um valor entre 0 e 24.')
} else if (horas < 6) {
    window.alert(`Boa madrugada! Agora é exatamente ${horas}AM!`)

} else if (horas < 12) {
    window.alert(`Bom dia! Agora é extamente ${horas}AM`)
} else if (horas == 12 || horas <= 18) {
    window.alert(`Boa tarde! Agora é exatamente ${horas}PM`)
} else {
    window.alert(`Boa noite! Agora é exatamente ${horas}PM`)
}