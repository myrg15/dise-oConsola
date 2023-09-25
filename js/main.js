function powerOn() {
    let screen = document.getElementById("screenInter");
    screen.classList.add("power");
}

function clickbuttonB() {
    let screen = document.getElementById("screenInter");
    screen.classList.add("animeAmigosMovimiento");
}

function clickbuttonA() {
    let screen = document.getElementById("screenInter");
    screen.classList.add("animeVariosJuntos");
}

function selectA() {
    let screen = document.getElementById("screenInter");
    screen.classList.add("animeUnaSola");
}

function startA() {
    let screen = document.getElementById("screenInter");
    screen.classList.add("pokemonAnimado");
}



//Probando asignar eventos a los botones
/*let on = document.getElementById ('on');
    on.addEventListener('click', (e)=>{
    if(e.target.getElementById === 'on'){
        on.innerText= ('scree2');//deberia hacerle document... a screen2 para poder traerlo aqui
        }else{
            on.innerText = ""
        }

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


/*function powerOn(){
    let screen = document.querySelector('.screen2');
    screen.classList.toggle('.screen2');
   }

function clickbuttonB() {
    let screen = document.querySelector('.screen2');
    screen.classList.toggle.url('/imag/animeAmigosMovimiento.gif');//debo asignar la imagen 
  }
  
function clickbuttonA() {
    let buttonA = document.querySelector('.screen2');
    buttonA.classList.toggle('.screenimaganimeVariosJuntos');
  }

function selectA() {
    let buttonSele = document.querySelector('.screen2');
    buttonSele.classList.toggle('.screenimaganimeUnaSola');
  }
  
function startA() {
    let buttonSta = document.querySelector('.screen2');
    buttonSta.classList.toggle('.screenimagpokemonAnimado');
  }


  /*const heart = document.getElementById('heart');//este corazon dentro del parentesis esta en una etiqueta en html
    heart.addEventListener('click', funtion(){
        console.log(heart);
        if (heart === 'corazon') {
            heart.innerText= "corazon"

        }else{
            heart.innerText = "corazon"
        }

    });*/
