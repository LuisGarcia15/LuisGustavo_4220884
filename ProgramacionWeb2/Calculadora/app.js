const input = document.getElementById("text");
const cero = document.getElementById("cero");

function añadirNumeroCalculo(event){
    input.value += event.target.value;
}

