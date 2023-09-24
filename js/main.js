
let pantalla = document.getElementsByClassName ("screen2");
let buttonA = document.getElementsByClassName ("screenimaganimeAmigosMovimiento");

let buttonB = document.getElementsByClassName ("screenimaganimeVariosJuntos");
let buttonSelect= document.getElementsByClassName("screenimaganimeUnaSola");
let buttonStart= document.getElementsByClassName("screenimagpokemonAnimado");



document.addEventListener("click", (e)=>{
    if(e.target.getElementsByClassName === 'power'){

        // pantalla.style.backgroundColor = "red";
        pantalla.getElementsByClassName("screen2");

   // } else if (e.target.id === 'button2') {

        // pantalla.style.backgroundColor = "grey";
     //   pantalla.style.backgroundImage = "url('imag/animeVariosJuntos.jpg')";

    //} else if (e.target.id === 'button3'){

      //  pantalla.style.backgroundImage = "url('imag/animeUnaSola.jpg')";
    }

 });

 document.addEventListener("click", (e)=>{
    if (e.target.getElementsByClassName === 'button2'){
        buttonA.getElementsByClassName("screenimaganimeAmigosMovimiento");
    }
 });

document.addEventListener("click", (e)=> {
    if (e.target.getElementsByClassName === 'button1'){
        buttonB.getElementsByClassName("screenimaganimeVariosJuntos");
    }
});

document.addEventListener("click", (e)=>{
    if (e.target.getElementsByClassName === 'buttonSelect'){
        buttonSelect.getElementsByClassName("screenimaganimeUnaSola");
        
    }

});

document.addEventListener("click", (e)=>{
    if (e.target.getElementsByClassName === 'buttonStart'){
        buttonStart.getElementsByClassName("screenimagpokemonAnimado");
    }
});
