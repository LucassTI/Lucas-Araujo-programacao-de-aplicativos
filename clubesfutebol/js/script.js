// DOM
const mudanca = document.querySelector('#alvo')
const bahia = document.querySelector('#bahia')
const vitoria = document.querySelector('#vitoria')
const vasco = document.querySelector('#vasco')
const palmeiras = document.querySelector('#palmeiras')
const gremio = document.querySelector('#gremio')

// EVENTOS
bahia.addEventListener('click', fotobahia)
vitoria.addEventListener('click', fotovitoria)
vasco.addEventListener('click', fotovasco)
palmeiras.addEventListener('click', fotopalmeiras)
gremio.addEventListener('click', fotogremio)

// FUNÇÕES
function fotobahia() {
    mudanca.src = 'images/Bahia.jpg'
    document.body.className = 'bg-bahia'
}

function fotovitoria() {
    mudanca.src = 'images/Vitoria.jpg'
    document.body.className = 'bg-vitoria'
}

function fotovasco() {
    mudanca.src = 'images/Vasco.jpg'
    document.body.className = 'bg-vasco'
}

function fotopalmeiras() {
    mudanca.src = 'images/Palmeiras.jpg'
    document.body.className = 'bg-palmeiras'
}

function fotogremio() {
    mudanca.src = 'images/Gremio.jpg'
    document.body.className = 'bg-gremio'
}
