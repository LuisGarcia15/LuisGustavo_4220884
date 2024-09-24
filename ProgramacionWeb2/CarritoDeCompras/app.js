 // Lista de productos disponibles en la tienda
 var productos = [
    { nombre: 'Camisa', precio: 300 },
    { nombre: 'Pantalón', precio: 500 },
    { nombre: 'Zapatos', precio: 800 },
    { nombre: 'Sombrero', precio: 200 }
];

// Carrito de compras (arreglo vacío)
var carrito = [];


//Funcion para agregar un producto a la lista productos
function agregarProducto(){
    let nombreProducto;
    let precioProducto;

    do{
    nombreProducto = prompt("¿Cuál es el nombre del producto a agregar?");
    precioProducto = parseFloat(prompt("¿Cuál es el precio del producto a agregar?"));

    if(!nombreProducto){
        alert("El nombre del producto es vacio")
    }else if (isNaN(precioProducto)){
        alert("El precio del producto es vacio")
    }else{
        productos.push({
            nombre: nombreProducto,
            precio: precioProducto
        });
        alert("Producto añadido con exito");
    }
    }while(!nombreProducto || isNaN(precioProducto));
}

// Función para mostrar el menú de productos
function mostrarMenu() {
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Agregar producto a la lista\n";
    menu += (productos.length + 2) + ". Ver Carrito y Total\n";
    menu += (productos.length + 3) + ". Salir\n";
    return menu;
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "' + productoSeleccionado.nombre + '" agregado al carrito.');
}

// Función para mostrar el carrito y el total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        var mensajeCarrito = "Carrito de compras:\n";
        var total = 0;
        for (var i = 0; i < carrito.length; i++) {
            mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
            total += carrito[i].precio;
        }
        mensajeCarrito += "\nTotal: $" + total;
        alert(mensajeCarrito);
    }
}

// Bucle principal de la tienda
var opcion;
do {
    opcion = prompt(mostrarMenu());

    // Convertir la opción ingresada a un número
    opcion = Number(opcion);

    // Verificar si la opción es válida
    if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 3) {
        alert("Opción no válida, por favor intenta de nuevo.");
    } else if (opcion >= 1 && opcion <= productos.length) {
        // Si la opción es válida y corresponde a un producto, agregar al carrito
        agregarAlCarrito(opcion - 1);
    } else if (opcion === productos.length + 1) {
        // Si elige ver el carrito y el total
        agregarProducto();
    } else if (opcion === productos.length + 2) {
        // Si elige ver el carrito y el total
        mostrarCarritoYTotal();
    }
    
} while (opcion !== productos.length + 3); // El bucle continúa hasta que elige "Salir"

alert("Gracias por visitar la tienda.");