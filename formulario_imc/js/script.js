// DOM
const peso = document.querySelector('#peso')
const altura = document.querySelector('#altura')
const calculo = document.querySelector('#calculo')
const resultado1 = document.querySelector('#resultado1')
const resultado2 = document.querySelector('#resultado2')

// EVENTO
calculo.addEventListener('click', imc)

// AÇÃO
function imc (){
    p = Number(peso.value)
    a = Number(altura.value)
    calc = p / (a * a)

    resultado1.textContent = `O seu IMC é ${calc.toFixed(2)}`

    if (calc < 18.5) {
        resultado2.textContent = `Você é magro`
    } else if (calc >= 18.5 && calc < 25) {
        resultado2.textContent = `Você está no peso ideal`
    } else if (calc >= 25 && calc < 29.9) {
        resultado2.textContent = `Você está com sobrepeso`
    } else if (calc >= 30) {
        resultado2.textContent = `Você está com Obesidade`
    }
}
