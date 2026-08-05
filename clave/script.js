window.onload = function () {
    const passwordInput = document.querySelector('.clave');
    const teclado = document.getElementById('teclado');
    const correctPassword = "1234";

    // Obtén los valores numéricos
    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

    // Función para mezclar el array de números al azar
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Función que mezcla los números y reconstruye los botones en el HTML
    function renderTeclado() {
        // Guarda el botón de borrar para saber dónde insertar los números
        const borrarBtn = teclado.querySelector('.borrar');

        // Elimina todos los botones numéricos actuales
        teclado.querySelectorAll('.tecla:not(.borrar):not(.confirmar)').forEach(btn => btn.remove());

        // Mezcla y crea nuevos botones numéricos
        shuffle(numeros).forEach(num => {
            const btn = document.createElement('input');
            btn.type = 'button';
            btn.value = num;
            btn.className = 'tecla';

            // Evento para escribir el número en el campo de contraseña
            btn.addEventListener('click', function () {
                passwordInput.value += this.value.trim();
            });

            // Inserta el botón antes del botón "Borrar"
            teclado.insertBefore(btn, borrarBtn);
        });
    }

    // Inicializar el teclado al cargar
    renderTeclado();

    // Configurar botón Borrar (elimina el último carácter)
    teclado.querySelector('.borrar').addEventListener('click', function () {
        passwordInput.value = passwordInput.value.slice(0, -1);
    });

    // Configurar botón Confirmar (valida la contraseña)
    teclado.querySelector('.confirmar').addEventListener('click', function () {
        if (passwordInput.value === correctPassword) {
            alert("¡Acceso concedido! Ha ingresado correctamente.");
            passwordInput.value = "";
            renderTeclado(); // Vuelve a mezclar por seguridad
        } else {
            alert("Contraseña incorrecta. Inténtelo de nuevo.");
            passwordInput.value = "";
            renderTeclado(); // Vuelve a mezclar por seguridad
        }
    });
};