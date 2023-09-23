
let pantalla = document.getElementsByClassName ("screen2");

document.addEventListener("click", (e)=>{


    if(e.target.getElementsByClassName === 'power'){

        // pantalla.style.backgroundColor = "red";
        pantalla.getElementsByClassName("screen2");

    } else if (e.target.id === 'button2') {

        // pantalla.style.backgroundColor = "grey";
        pantalla.style.backgroundImage = "url('imag/animeVariosJuntos.jpg')";

    } else if (e.target.id === 'button3'){

        pantalla.style.backgroundImage = "url('imag/animeUnaSola.jpg')";
    }

 });
 