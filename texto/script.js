document.addEventListener('DOMContentLoaded', function () {
    const entradaTexto = document.getElementById('entradaTexto');
    const contador = document.getElementById('contador');

    function actualizarContador() {
        const texto = entradaTexto.value;
        const longitud = texto.length;
        contador.textContent = `${longitud} caracter${longitud !== 1 ? 'es' : ''}`;
    }

    entradaTexto.addEventListener('input', actualizarContador);
    actualizarContador();
});