document.addEventListener("DOMContentLoaded", () => {

    const sonido = new Howl({
        src: ["sonido.mp3"],
        loop: true,
        volume: 0.6
    });

    let iniciado = false;

    document.getElementById("paisaje").addEventListener("click", () => {

        if (iniciado) return;

        iniciado = true;

        sonido.play();

        // NUBE
        gsap.to("#nube", {
            x: window.innerWidth + 300,
            duration: 25,
            repeat: -1,
            ease: "none"
        });

        // BICICLETA
        gsap.to("#bici", {
            x: window.innerWidth + 300,
            duration: 15,
            repeat: -1,
            ease: "none"
        });

        // ÁRBOL
        gsap.to("#arbol", {
            rotation: 5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            transformOrigin: "bottom center",
            ease: "sine.inOut"
        });

        // SOL
        gsap.to("#sol", {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "none",
            transformOrigin: "center center"
        });

    });

});