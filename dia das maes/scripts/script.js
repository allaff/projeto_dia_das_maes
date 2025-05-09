document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('confetti-container');
    const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#00f', '#f00'];

    // Ajustar quantidade com base na largura da tela
    const screenWidth = window.innerWidth;
    const confettiCount = screenWidth < 600 ? 40 : 100;

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

    // Remover os confetes após 3 segundos
    setTimeout(() => {
        container.innerHTML = '';
    }, 3000);
});
  