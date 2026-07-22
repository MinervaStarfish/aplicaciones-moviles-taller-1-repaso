let password = "";

function agregar(numero) {

    if (password.length < 4) {

        password += numero;

        document.getElementById("clave").value = password;

    }

}

function borrar() {

    password = password.slice(0, -1);

    document.getElementById("clave").value = password;

}

function validar() {

    if (password === "1234") {

        alert("Bienvenido a Banco Mariana");

    } else {

        alert("Clave incorrecta");

    }

    password = "";

    document.getElementById("clave").value = "";

}