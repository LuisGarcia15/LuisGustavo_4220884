// Importamos el modulo HTTP que viene incluido en Node
//Incluye un cliente y un servidor. Permite enviar data
//a traves de HTTP y responder con el servidor web que se
//crea
const http = require('http');
//Definir un puerto en que el va a correr el servidor
const port = 3006;



// Crear un servidor y define como responder solicitudes
//Esta a la espera de que se ejecute el evento listenig
//para que se levabte el servidor en el puerto dado.
const server = http.createServer((req,res)=>{
    /*Recibe como argumento un manejador de solicitudes
    (función anonima). Inidica como se manejara las
    solicitudes. req es la petición realizada al servidor
    y res es la respuesta retornada del servidor*/
        res.writeHead(200,{'Content-Type':'text/plain'});
        /*Especifica que devolvera un código de estatus 200
        y el contenido de la respuesta es texto plano*/
        res.write('Luis Gustavo Santillan Garcia \n');
        res.end('Programacion Web 2 - 1758');
        /*Llamada para finalizar la respuesta y enviar el
        contenido al cliente. Es necesario esta instrucción
        ya que de no colcoarla, no se retorna la respuesta*/
});

/*Función que se emite cuando se ejecuta el evento listening.
Este evento tiene la particularidad de ejecutarse cuando el
serivdor se ah levantado correctamente un un puerto dado*/
server.listen(port, ()=>{
    console.log(`El servidor esta en http://localhost:${port}`);
});