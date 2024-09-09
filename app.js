//iniciamos un arreglo para poder almacenar las tareas
let tareas =[];

//Funcion para mostrar opciones
function mostrarMenu(){
    /*Retorna un string para ver las opciones que puedes selccionar*/
    return parseInt(prompt(`
        "Opciones diponibles"
        1.- Agregar tarea
        2.- Ver todas las tareas
        3.- Marcar mis tareas como completadas
        4.- Salir  

    `));
}
//Funcion para agregar tarea
function agregarTarea(){
    //Variable para almacenar el nombre de una tarea
    let nombre = prompt("Ingresa el nombre de la tarea");
    //Si se ingreso algún caracter
    if(nombre){
        //Se crea un objeto JSON con la información de la tarea
        let tarea={
            nombre: nombre,
            completada: false
        };
        //Añade el objeto JSON de la tarea al Arrya que almacena
        //la tarea
        tareas.push(tarea);
        //Muestra un mensaje satisfactorio de guardado
        alert("Tarea agregada con exito");
    }else{
        //Si no se ingreo algún caracter, muestra un mensaje
        //insatisfactorio
        alert("El nombre de la tarea no puede estar vacio");
    }
}

//Funcion para ver las tareas
function verTarea(){
    //Si el tamaño del Array es cero
    if(tareas.length === 0){
        //Muestra un mensaje indicando que no hay tareas registradas
        alert("No hay tareas en la lista");
        //Si el tamaño es diferente de cero
    }else{
        //Declara una variable para almacenar las tareas
        let mensaje = "Listas de tareas: \n";
        /*Por cada tarea, se llama a la función forEach para iterar cada
        elemento del array gracias a la lógica de una funcón flecha
        
        La función flecha define dos parámetros, uno es el elemento que
        se esta iterando y el otro el indice que tiene ese elemento actual.
        Su lógica es concatenar el nombre de la tarea junto a un string
        completado o pendiente dependiendo de un operador terneario*/
        tareas.forEach((tarea,index)=>{
            mensaje+= `${index+1}.- ${tarea.nombre} [${tarea.completada ? "Completada":"Pendiente"} ]\n`;

        });
        //Muestra sl string junto a todas las tareas iteradas y concatenadas
        alert (mensaje);
    }
}

//Funcion para agregar tarea como completada.
function marcarTareaCompletada(){
    //Declara una variable que almacena el número de la tarea que se
    //marcará como completada
    let numero = parseInt(prompt("Introduce el  numero para marcar la tarea como completada"));
    //Si el numero es mayor a 0 pero menor a la longitud del Array tareas,
    //se completa la tarea
    if( numero > 0 && numero <= tareas.length ){
        /*a la variable numero se le disminuye la unidad y con ese valor
        ingresa a la tarea en el array tareas. solicitamos la propiedad
        completada del objeto JSON y cambiamos su valor a true*/
        tareas[numero-1].completada=true;
        //Muestra un mensaje (junto al nombre de la tarea) indicando
        //que se completo la tarea
        alert(`La tarea ${tareas[numero-1].nombre} ha sido completada`);

    }else{
        //Si el numero es menor a 0 pero mayor a la longitud del Array tareas,
        //Muestra un mensaje indicando que no es valido el número de tarea
        alert("Numero de tarea no valido (Fuera de rango....)");
    }
}

//Funcion principal para poder manejar nuestro programa
function iniciarPrograma(){
    //Declaramos una variable que sera una bandera para
    //la entrada o salida de un ciclo, llamada continuar
    let continuar = true;
    //Si la variable continual es true, ingresa a un ciclo
    //para ejecutar el programa
    while(continuar){
        /*Se declara una variable para almacenar el numero de
        la opción de un menú a partir de la función mostrarMenu()*/
        let opcion = mostrarMenu();
        //Dependiendo de la opción ingresada, se evalua en una
        //estructura de control switch
        switch(opcion){
            case 1:
                //Si la opción ingresada es 1, se llama a la
                //función agregarTarea()
                agregarTarea();
                break;
            case 2:
                //Si la opción ingresada es 2, se llama a la
                //función verTarea()
                verTarea();
                break;
            case 3:
                //Si la opción ingresada es 3, se llama a la
                //función marcarTareaCompletada()
                marcarTareaCompletada();
                break;
            case 4:
                //Si la opción ingresada es 4, se muestra un
                //mensaje indicando que se termina el programa
                //además de colocar el valor de la variable bandera
                //continuar en false
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                //Si la opción ingresada no es cualquiera de las anteriores,
                //se muestra un mensaje para indicar que la opción ingresada
                //no es valida
                alert("Opcion no valida. Intentar nuevamente");
        }
    }
    /*Si la variable bandera llamada continuar es falso, el ciclo termina y
    se muestra un mensaje indicando que el programa ha finalizado*/
    alert("Programa Finalizado");
}

//Se llama la función principal para ejecutar el programa
iniciarPrograma();