/*Programa utilizado para aprender la sintaxis de una función, 
la función suma dos numeros dados y devuelve la suma*/

//Variables para almacenar dos numeros, se parsean desde que el usuario
//ingresa los numeros para que más tarde, en la función, no se haga el parseo
let numeroUno = parseInt(prompt("Ingresa un número: "));
let numeroDos = parseInt(prompt("Ingresa un segundo número: "));

//Alert para mostrar la suma de los dos números ingresados por el usuario
//La suma de numeros es proporcionado por la función
alert("La suma de números es: " + sumNumeros(numeroUno, numeroDos));

//función definida para sumar dos numeros pasados como parámetro
//y devolver la suma,
function sumNumeros(numeroUno, numeroDos){
    return numeroUno + numeroDos;
}