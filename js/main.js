//Probando asignar eventos a los botones
/*document.addEventListener('click', (e)=>{
    let pantalla = document.getElementById ('.screen2');
    if(e.target.getElementById === '.power'){
        pantalla.classList.add('.power');
    }
});
        // pantalla.style.backgroundColor = "red";
   // } else if (e.target.id === 'button2') {
        // pantalla.style.backgroundColor = "grey";
     //   pantalla.style.backgroundImage = "url('imag/animeVariosJuntos.jpg')";
    //} else if (e.target.id === 'button3'){
      //  pantalla.style.backgroundImage = "url('imag/animeUnaSola.jpg')";
     
 document.addEventListener('click', (e)=>{
    let buttonA = document.getElementById ('screenimaganimeAmigosMovimiento');
    if (e.target.getElementById === '.button2'){
        buttonA.classList.add('.button2');
    }
 });

document.addEventListener('click', (e)=> {
    let buttonB = document.getElementById ('screenimaganimeVariosJuntos');
    if (e.target.getElementById === '.button1'){
        buttonB.classList.add('.button1');
    }
});

document.addEventListener('click', (e)=>{
    let buttonSelect= document.getElementById('screenimaganimeUnaSola');
    if (e.target.getElementById === '.buttonSelect'){
        buttonSelect.classList.add('.buttonSelect');
    }
});

document.addEventListener('click', (e)=>{
    let buttonStart= document.getElementById('screenimagpokemonAnimad');
    if (e.target.getElementById === 'buttonStart'){
        buttonStart.classList.add('buttonStart');
    }
});*/

//Probando con funciones
/*function powerOn(){
    let screen = document.querySelector('.screen2');
   // let on = document.getElementById("idpowerlight");
    screen.classList.toggle('on');
    //on.classList.add("powershadow")
}

function clickbuttonA(){
    let screen = document.getElementById("screenimaganimeVariosJuntos");
    screen.classList.add(".button2");
}

function clickbuttonB(){
    let screen = document.getElementById("screenimaganimeAmigosMovimiento");
    screen.classList.add(".button1");
}

function selectA(){
    let screen = document.getElementById("screenimaganimeAmigosMovimiento");
    screen.classList.add(".buttonSelect");
}

function startA(){
    let screen = document.getElementById("screenimaganimeAmigosMovimiento");
    screen.classList.add(".buttonSelect");
}*/

//Probando con querySelector(selecciona el botón)
//classList.toggle (botón cambien de pantalla al hacer clic)


function powerOn(){
    let screen = document.querySelector('.on');
    screen.classList.toggle('.screen2');
   }

function clickbuttonB() {
    let buttonB = document.querySelector('.button1');
    buttonB.classList.toggle('screenimaganimeAmigosMovimiento');
  }
  
function clickbuttonA() {
    let buttonA = document.querySelector('.button2');
    buttonA.classList.toggle('screenimaganimeVariosJuntos');
  }

function selectA() {
    let buttonSele = document.querySelector('.buttonSelect');
    buttonSele.classList.toggle('.screenimaganimeUnaSola');
  }
  
function startA() {
    let buttonSta = document.querySelector('.buttonStart');
    buttonSta.classList.toggle('.screenimagpokemonAnimado');
  }




