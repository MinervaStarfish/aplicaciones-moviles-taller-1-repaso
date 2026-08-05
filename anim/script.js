document.addEventListener('DOMContentLoaded', function () {
    const botonSonido = document.getElementById('botonSonido');
    const sonidoAmbiente = document.getElementById('sonidoAmbiente');

    let sonidoActivo = false;

    botonSonido.addEventListener('click', function () {
        if (sonidoActivo) {
            sonidoAmbiente.pause();
            botonSonido.textContent = 'Activar Sonidos de Ambiente';
        } else {
            sonidoAmbiente.volume = 1.0;
            sonidoAmbiente.play().catch(err => console.error("Error al reproducir:", err));
            botonSonido.textContent = 'Desactivar Sonidos de Ambiente';
        }
        sonidoActivo = !sonidoActivo;
    });
});