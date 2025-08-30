// A "Trava de Segurança" garante que este código só rode na página correta.
const containerContador = document.getElementById('contador');

if (containerContador) {

    const elementoNumero = containerContador.querySelector('b');
    let tempoRestante = 15;
    const paginaDeDestino = 'index.html';

    // Garante que o número inicial esteja correto.
    elementoNumero.textContent = tempoRestante;

    const intervalo = setInterval(function () {
        tempoRestante--;
        elementoNumero.textContent = tempoRestante;

        elementoNumero.classList.add('pulse-animation');
        elementoNumero.addEventListener('animationend', function () {
            elementoNumero.classList.remove('pulse-animation');
        }, { once: true });

        if (tempoRestante <= 0) {
            clearInterval(intervalo);
            window.location.replace(paginaDeDestino);
        }
    }, 1000);
}