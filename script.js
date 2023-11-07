alert ("Iremos digitar dois números")
let numberOne = prompt ("Digite o primeiro número: ")
let numberTwo = prompt ("Digite o segundo número: ")
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('A soma dos dois números são: ' + sum)
alert('A subtração dos dois números são: ' + sub)
alert('A multiplicação dos dois números são: ' + multi)
alert('A divisão dos dois número são: ' + div)
alert('O resto da divisão é: ' + restDiv)

if(sum%2==0) {
    alert("O número é par")
} 
else {
    alert("O número é impar")
}

if(numberOne == numberTwo) {
    alert("O número é igual")
} 
else {
    alert("O número é diferente")
}
