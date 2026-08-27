//DOM
const mudanca = document.querySelector('#mudanca')
const btyamal= document.querySelector('#bt1')
const btcr7= document.querySelector('#bt2')
const btmessi= document.querySelector('#bt3')

// EVENTOS
btyamal.addEventListener('click',yamal)
btcr7.addEventListener('click',cr7)
btmessi.addEventListener('click',messi)

// AÇÃO

function yamal() {
    mudanca.src = 'images/yamal.jpg'
}

function cr7() {
    mudanca.src = 'images/cr7.jpg'
}
function messi() {
    mudanca.src = 'images/Lionel-Messi-Argentina-2022-FIFA-World-Cup_sharpness.jpg'
}

