let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = []; 
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
 
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez.':'veces.'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //cuando el usuario no acierta
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','Fallaste, el numero secreto es menor.');
        } else {
            asignarTextoElemento('p','Fallaste, el numero secreto es mayor.');
        }
        intentos++;
        limpiarCaja();
    }


    return;
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {    
    //si el numero generado esta incluido en la lista 
    if (listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto.');
    asignarTextoElemento('p',`Indique un numero del 1 al ${numeroMaximo}.`);
    intentos = 1;
    numeroSecreto = generarNumeroSecreto();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
   
    
}

condicionesIniciales();

