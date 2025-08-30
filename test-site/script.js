document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos principais da página
    const secaoPromocao = document.getElementById('secao-promocao');
    const secaoResgatado = document.getElementById('secao-resgatado');
    const confettiContainer = document.getElementById('confetti-container');
    const frasePromocionalEl = document.getElementById('frase-promocional');

    const promoJaResgatada = localStorage.getItem('promo_resgatada');

    // VERIFICA SE A PROMOÇÃO JÁ FOI RESGATADA
    if (promoJaResgatada) {
        // Se sim, apenas alterna a visibilidade das seções
        secaoPromocao.classList.add('hidden');
        secaoResgatado.classList.remove('hidden');
    } else {
        // Se não, mostra a promoção normalmente
        secaoPromocao.classList.remove('hidden');
        secaoResgatado.classList.add('hidden');
        executarPromocao();
    }

    function executarPromocao() {
        // Lógica para sortear e exibir a frase
        const frases = ["uma higienização gratuita!"];
        const index = Math.floor(Math.random() * frases.length);
        frasePromocionalEl.innerHTML = `<b>Você ganhou ${frases[index]}</b>`;

        // Ativa os confetes
        criarConfetes();

        // Após 3 segundos, marca a promoção como resgatada no localStorage
        setTimeout(() => {
            if (confettiContainer) confettiContainer.innerHTML = '';
            localStorage.setItem('promo_resgatada', 'true');
        }, 3000);
    }

    function criarConfetes() {
        if (!confettiContainer) return;

        const confettiCount = window.innerWidth < 600 ? 40 : 100;
        const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#00f', '#f00'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

            const size = Math.random() * 8 + 5;
            confetti.style.width = `${size}px`;
            confetti.style.height = `${size}px`;

            confetti.style.setProperty('--x', (Math.random() - 0.5) * 200 + 'vw');
            confetti.style.setProperty('--y', -(Math.random() * 100 + 50) + 'vh');

            confettiContainer.appendChild(confetti);
        }
    }
});