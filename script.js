// ===================================================
// MENU MOBILE
// ===================================================
const menuToggle = document.getElementById('menuToggle');
const navPrincipal = document.getElementById('navPrincipal');

menuToggle.addEventListener('click', () => {
    navPrincipal.classList.toggle('aberto');
});

// fecha o menu ao clicar num link (útil no telemóvel)
document.querySelectorAll('#navPrincipal a').forEach(link => {
    link.addEventListener('click', () => {
        navPrincipal.classList.remove('aberto');
    });
});

// ===================================================
// EFEITO DE ESCRITA (secção Home)
// Muda as frases na lista abaixo para aparecerem uma a seguir à outra.
// ===================================================
const frases = [
    'Web Developer',
    'Técnico Electricista',
    'A aprender UX/UI Design'
];

const elementoTexto = document.getElementById('textoDigitando');
let fraseAtual = 0;
let letraAtual = 0;
let apagando = false;

function escrever() {
    const texto = frases[fraseAtual];

    if (!apagando) {
        elementoTexto.textContent = texto.slice(0, letraAtual + 1);
        letraAtual++;
        if (letraAtual === texto.length) {
            apagando = true;
            setTimeout(escrever, 1500);
            return;
        }
    } else {
        elementoTexto.textContent = texto.slice(0, letraAtual - 1);
        letraAtual--;
        if (letraAtual === 0) {
            apagando = false;
            fraseAtual = (fraseAtual + 1) % frases.length;
        }
    }

    setTimeout(escrever, apagando ? 50 : 100);
}

if (elementoTexto) {
    escrever();
}

// ===================================================
// FILTRO DE PORTFOLIO
// ===================================================
const botoesFiltr = document.querySelectorAll('.botao-filtro');
const cardsProjecto = document.querySelectorAll('.card-projecto');

botoesFiltr.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove classe 'ativo' de todos os botões
        botoesFiltr.forEach(b => b.classList.remove('ativo'));
        
        // Adiciona classe 'ativo' ao botão clicado
        botao.classList.add('ativo');
        
        // Obter o filtro selecionado
        const filtro = botao.getAttribute('data-filtro');
        
        // Filtrar os cards
        cardsProjecto.forEach(card => {
            if (filtro === 'todos') {
                card.classList.remove('oculto');
            } else if (card.getAttribute('data-categoria') === filtro) {
                card.classList.remove('oculto');
            } else {
                card.classList.add('oculto');
            }
        });
    });
});

// ===================================================
// FORMULÁRIO DE CONTACTO
// Por agora só mostra uma mensagem de confirmação.
// Para receber os emails a sério, mais tarde podes ligar
// isto a um serviço como o Formspree ou EmailJS.
// ===================================================
const formContacto = document.getElementById('formContacto');
const mensagemEnviada = document.getElementById('mensagemEnviada');

formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mensagemEnviada.textContent = 'Mensagem enviada! Obrigado pelo contacto.';
    formContacto.reset();
});

// ===================================================
// ANO NO RODAPÉ
// ===================================================
document.getElementById('anoActual').textContent = new Date().getFullYear();