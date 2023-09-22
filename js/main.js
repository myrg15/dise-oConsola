
let pantalla = document.getElementById("screen");

document.addEventListener("click", (e)=>{


    if(e.target.id === 'button1'){

        // pantalla.style.backgroundColor = "red";
        pantalla.style.backgroundImage = "url('imag/animeDosJuntos.jpg')";

    } else if (e.target.id === 'button2') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('imag/animeVariosJuntos.jpg')";

    } else if (e.target.id === 'button3'){

        pantalla.style.backgroundImage = "url('imag/animeUnaSola.jpg')";
    }

 });