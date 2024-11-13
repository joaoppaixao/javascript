let num = [5, 8, 2, 9, 3]

/*
for (var i = 0; i < num.length; i++) {
    console.log(`num[${i}] tem o valor ${num[i]} `)
}
    */

for (var i in num) {
    console.log(`num[${i}] tem o valor ${num[i]} `)
}

let pos = num.indexOf(3)
console.log(pos)