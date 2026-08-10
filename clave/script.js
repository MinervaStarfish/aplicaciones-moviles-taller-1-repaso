// Contraseña de prueba
const CONTRASENA_CORRECTA = "1234";
let claveIngresada = "";
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// Referencias a los elementos del DOM
const inputPassword = document.getElementById('password-input');
const keypad = document.getElementById('keypad');
const teclasNumericas = document.querySelectorAll('.num-key');
const btnBorrar = document.getElementById('btn-borrar');
const btnConfirmar = document.getElementById('btn-confirmar');
const mensaje = document.getElementById('message');

// Función para mezclar aleatoriamente el array de números
function mezclarNumeros(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Función para asignar los números mezclados a los botones
function actualizarTeclado() {
    mezclarNumeros(numeros);
    teclasNumericas.forEach((boton, index) => {
        boton.textContent = numeros[index];
        // Guardamos el valor real en un atributo oculto (dataset)
        boton.dataset.valor = numeros[index];
    });
}

// 1. Inicializamos el teclado con los números mezclados la primera vez
actualizarTeclado();

// 2. Cuando el mouse ENTRA al área del teclado, todo se vuelve asteriscos
keypad.addEventListener('mouseenter', () => {
    teclasNumericas.forEach(boton => {
        boton.textContent = '*';
    });
});

// 3. Cuando el mouse SALE del área del teclado, los números se mezclan y reaparecen
keypad.addEventListener('mouseleave', () => {
    actualizarTeclado();
});

// 4. Lógica al hacer clic en un número
teclasNumericas.forEach(boton => {
    boton.addEventListener('click', (e) => {
        // Evitamos que la clave sea infinita (máximo 4 caracteres)
        if (claveIngresada.length < 4) {
            // Leemos el valor real del dataset, no el texto del botón (que podría ser '*')
            claveIngresada += e.target.dataset.valor;
            inputPassword.value = '*'.repeat(claveIngresada.length);
            mensaje.textContent = ""; // Limpiamos mensajes anteriores
        }
    });
});

// 5. Lógica del botón Borrar
btnBorrar.addEventListener('click', () => {
    claveIngresada = claveIngresada.slice(0, -1);
    inputPassword.value = '*'.repeat(claveIngresada.length);
    mensaje.textContent = ""; 
});

// 6. Lógica del botón Confirmar
btnConfirmar.addEventListener('click', () => {
    if (claveIngresada === "") {
        mensaje.textContent = "Por favor, ingresa tu clave.";
        mensaje.style.color = "#d81b60";
        return;
    }

    if (claveIngresada === CONTRASENA_CORRECTA) {
        mensaje.textContent = "¡Bienvenida! Contraseña correcta 🎀";
        mensaje.style.color = "#388e3c"; // Verde bonito
    } else {
        mensaje.textContent = "Contraseña incorrecta. Intenta de nuevo ❌";
        mensaje.style.color = "#d32f2f"; // Rojo
        // Reiniciamos el campo al fallar
        claveIngresada = "";
        inputPassword.value = "";
    }
});