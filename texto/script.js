const mensaje = document.getElementById("mensaje");

const cantidad = document.getElementById("cantidad");

mensaje.addEventListener("input", () => {

    cantidad.textContent = mensaje.value.length;

});