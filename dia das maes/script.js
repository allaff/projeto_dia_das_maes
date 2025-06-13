document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('confetti-container');
    // const resgatado = localStorage.getItem('promo_resgatada');

    // if (resgatado) {
    //     document.body.innerHTML = `
    //       <img src="img_nerd.png" alt="logotipo da empresa" id="img_nerd">
    //       <h1>Você já resgatou sua promoção 🎁</h1>
    //     `;
    //     return;
    // }
    
    function sortearFrase(frasesArray) {
        const index = Math.floor(Math.random() * frasesArray.length);
        return frasesArray[index];
    }
      
    const frases = [
        "uma higienização gratuita!",
        ];

    const fraseSorteada = sortearFrase(frases);
    document.getElementById('frase-promocional').innerHTML = `<b>Você ganhou ${fraseSorteada}</b>`;
      
    // Mostra promoção normalmente
    const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#00f', '#f00'];
    const confettiCount = window.innerWidth < 600 ? 40 : 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        const size = Math.random() * 8 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        const x = (Math.random() - 0.5) * 200 + 'vw';
        const y = -(Math.random() * 100 + 50) + 'vh';
        confetti.style.setProperty('--x', x);
        confetti.style.setProperty('--y', y);

        container.appendChild(confetti);
    }

    // Marca como resgatado após 3s
    setTimeout(() => {
        container.innerHTML = '';
        localStorage.setItem('promo_resgatada', 'true');
    }, 3000);
});
  

// theme.js (versão atualizada para trocar a imagem)

// --- Seleção de Elementos ---
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const logoImage = document.getElementById('img_nerd'); // NOVO: Seleciona a imagem pelo ID

// --- Caminho das Imagens ---
const logoDark = 'fundo_escuro.png';   // NOVO: Caminho da imagem para o tema escuro
const logoLight = 'fundo_claro.png'; // NOVO: Caminho da imagem para o tema claro (substitua se necessário)

// --- Funções ---

// MODIFICADO: A função applyTheme agora também troca a imagem
function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
        themeToggleBtn.innerHTML = '☀️';
        logoImage.src = logoDark; // NOVO: Define a imagem escura
    } else {
        themeToggleBtn.innerHTML = '🌙';
        logoImage.src = logoLight; // NOVO: Define a imagem clara
    }
}

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme); // Reutilizamos a função applyTheme que já faz tudo
}

// --- Inicialização ---
// Adiciona o evento de clique ao botão
themeToggleBtn.addEventListener('click', toggleTheme);

// Inicializa o ícone do botão e a imagem na primeira carga da página.
// O tema já foi definido pelo script no <head>, então só precisamos ler o estado atual.
const initialTheme = htmlElement.getAttribute('data-theme') || 'light';
applyTheme(initialTheme);

(function () {
    // Apenas define o data-theme. Deixaremos a troca da imagem para o script principal,
    // mas garantimos que a cor de fundo esteja correta para minimizar o impacto visual.
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
})();