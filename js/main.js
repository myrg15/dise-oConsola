
/*let pantalla = document.getElementById ("screen2");
let buttonA = document.getElementsByClassName ("screenimaganimeAmigosMovimiento");

let buttonB = document.getElementsByClassName ("screenimaganimeVariosJuntos");
let buttonSelect= document.getElementsByClassName("screenimaganimeUnaSola");
let buttonStart= document.getElementsByClassName("screenimagpokemonAnimado");



document.addEventListener("click", (e)=>{
    if(e.target.getElementById === 'power'){

        // pantalla.style.backgroundColor = "red";
        

   // } else if (e.target.id === 'button2') {

        // pantalla.style.backgroundColor = "grey";
     //   pantalla.style.backgroundImage = "url('imag/animeVariosJuntos.jpg')";

    //} else if (e.target.id === 'button3'){

      //  pantalla.style.backgroundImage = "url('imag/animeUnaSola.jpg')";
    } else pantalla.getElementById("screen2") 

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
});*/

function selectA(){
    let screen = document.getElementsByClassName("screenimaganimeAmigosMovimiento");
    screen.classList.add("buttonSelect");
}

function clickbuttonA(){
    let screen = document.getElementsByClassName("screenimaganimeVariosJuntos");
    screen.classList.add("button2");
}

function clickbuttonB(){
    let screen = document.getElementsByClassName("screenimaganimeAmigosMovimiento");
    screen.classList.add("button1");
}


function powerOn(){
    let screen = document.getElementsByClassName("screen2");
   // let on = document.getElementById("idpowerlight");
    screen.classList.add("on");
    //on.classList.add("powershadow")
}