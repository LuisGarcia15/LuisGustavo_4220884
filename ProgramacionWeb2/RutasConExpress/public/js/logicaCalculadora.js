const input = document.getElementById("text");
const cero = document.getElementById("cero");
let numero1 = 0;
let numero2 = 0;
let simbolo = "";
let bandera = false;

function añadirNumeroCalculo(event){
    if(bandera){
        limpiarPantalla();
        bandera = false;
    }
    input.value += event.target.value;
}

function limpiarPantalla(){
    input.value = "";
}

function guardarOperacion(event){
    simbolo = event.target.value;
    numero1 += parseFloat(input.value);
    limpiarPantalla();
}

function operacion(){
    switch(simbolo){
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            return numero1/numero2;
            break;
    }
}

function resultado(event){
    numero2 += parseFloat(input.value);
    limpiarPantalla();
    input.value += operacion();
    numero1 = 0;
    numero2 = 0;
    simbolo = "";
    bandera = true;
}
