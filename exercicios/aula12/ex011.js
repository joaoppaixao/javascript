var names = window.prompt('Digite seu nome: ')
var age = window.prompt('Digite sua idade: ')

if (age < 16) {
    window.alert(`${names} tem ${age} anos, então você NÃO vota!`)
} else if (age < 18 || age >= 65) {
    window.alert(`${names} tem ${age} anos, então seu voto é OPCIONAL!`)
} else {
    window.alert(`${names} tem ${age} anos, então você é OBRIGADO a votar!`)
}