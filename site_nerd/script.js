document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('confetti-container');
    const resgatado = localStorage.getItem('promo_resgatada');

    if (resgatado) {
        document.body.innerHTML = `
          <img src="fundo_escuro.png" alt="logotipo da empresa" id="img_nerd">
          <h1>Você já resgatou sua promoção <i class="fa-solid fa-gift"></i></h1>
          <div id="botao-contato">
            <b>Clique no link abaixo:</b>
            <a href="/site-manutencao.html"
            target="_blank"><button type="button"><b>Visite nossa loja <i class="fa-solid fa-store"></i></b></button></a>
          </div>
        `;
        return;
    }
    
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

