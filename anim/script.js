const sonido = new Howl({

    src: ["sonido.mp3"]

});

document.getElementById("animar").addEventListener("click", () => {

    sonido.play();

    gsap.fromTo(

        "#tarjeta",

        {

            scale: 0.5,

            rotation: -20,

            opacity: 0

        },

        {

            scale: 1,

            rotation: 360,

            opacity: 1,

            duration: 2,

            ease: "bounce.out"

        }

    );

});