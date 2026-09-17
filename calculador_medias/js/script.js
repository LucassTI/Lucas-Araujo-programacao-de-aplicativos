// ==========================================
// 1. SELEÇÃO DE ELEMENTOS DO DOM
// ==========================================
const nota1 = document.querySelector('#nota1');
const nota2 = document.querySelector('#nota2');
const nota3 = document.querySelector('#nota3');
const calculo = document.querySelector('#calculo');
const resultado = document.querySelector('#resultado');
const situacao = document.querySelector('#situacao');

// ==========================================
// 2. EVENTO
// ==========================================
calculo.addEventListener('click', calcularMedia);

// ==========================================
// 3. AÇÃO / FUNÇÃO PRINCIPAL
// ==========================================
function calcularMedia() {
    // Conversão dos valores de texto para números
    const n1 = Number(nota1.value);
    const n2 = Number(nota2.value);
    const n3 = Number(nota3.value);

    // Validação de segurança: verifica se os campos não estão vazios e são números válidos
    if (nota1.value.trim() === '' || nota2.value.trim() === '' || nota3.value.trim() === '' || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.textContent = 'Por favor, preencha todas as notas corretamente!';
        situacao.textContent = '';
        return;
    }

    // Cálculo da média aritmética simples
    const media = (n1 + n2 + n3) / 3;

    // Exibição da média com 1 casa decimal (ex: 7.5)
    resultado.textContent = `A sua média é: ${media.toFixed(1)}`;

    // Validação da Situação do Aluno
    if (media >= 7) {
        situacao.textContent = 'Situação: Aprovado!';
    } else if (media >= 4) {
        situacao.textContent = 'Situação: Recuperação';
    } else {
        situacao.textContent = 'Situação: Reprovado';
    }
}