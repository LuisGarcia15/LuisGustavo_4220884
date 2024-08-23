//Variable que almacena un número aleatorio
let numAleatorio = Math.floor(Math.random()*(11-1)+1);
console.log(numAleatorio);
//Variable para almacenar el número de vidas del juego
let vidas = 3;

//Ciclo WHILE que itera mientras las vidas sean distintas de cero
while(vidas != 0){
    //Variable para almacenar un número suministrado por el usuario cada iteración
    let numUser = parseInt(prompt("Ingrese un posible numero entre 1 y 10: "));
    //estructura IF que verifica si el número aleatorio es igual al número suministrado por el usuario
    if (numUser == numAleatorio){
        //Si el número es el mismo, se muestra un mensaje indicando el ganador
        alert("Ganaste, el número aleatorio fue: " + numAleatorio + " | el número ingresado fue: " + numUser);
    }else{
        //Si el numero suministrado por el usuario no es el mismo
        //Resta un valor a las vidas
        vidas--;
        //Informa que se ha fallado un intento y muestra las vidas que quedan
        alert("Intenta de nuevo, te quedan: " + vidas + " vidas");
        //Si las vidas son igual a cero
        if(vidas == 0){
            //Informa con un mensaje que se ha falldo el juego
            alert("Perdiste, el número aleatorio fue: " + numAleatorio + " | el número ingresado fue: " + numUser);
        }
        //El juego vuelve a iniciar
    }
}