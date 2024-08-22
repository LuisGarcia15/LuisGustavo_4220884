let numAleatorio = Math.floor(Math.random()*(11-1)+1);
let vidas = 3;

while(vidas != 0){
    let numUser = parseInt(prompt("Ingrese un posible numero entre 1 y 10: "));
    if (numUser == numAleatorio){
        alert("Ganaste, el número aleatorio fue: " + numAleatorio + " | el número ingresado fue: " + numUser);
    }else{
        vidas--;
        alert("Intenta de nuevo, te quedan: " + vidas + " vidas");
        if(vidas == 0){
            alert("Perdiste, el número aleatorio fue: " + numAleatorio + " | el número ingresado fue: " + numUser);
        }
    }
}