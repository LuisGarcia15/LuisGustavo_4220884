function imprimirLinea(){
    console.log("---------------");
}

function horizontal(num){
    let resultado = "";
    for (let index = 0; index < num; index++) {
        resultado += "+\n";
    }
    console.log(resultado);
}

function vertical(num){
    let resultado = "";
    for (let index = 0; index < num; index++) {
        resultado += "+ ";
    }
    console.log(resultado);
}

function tablasMultiplicar(){
    let resultado = "";
    for (let index = 1; index < 11; index++) {
        for (let index2 = 1; index2 < 11; index2++) {
            resultado += index + " x " + index2 + " = " + (index * index2) + "\n";
        }
        resultado += "\n";
    }
    console.log(resultado);
}

function frutas(){
    let resultado = "";
    const frutas = ["manzana", "plátano", "naranja", "fresa", "piña", "mango", "uva", "cereza", "kiwi", "pera"];
    frutas.forEach((fruta, indice) => {
        resultado += (indice+1) + ". " + fruta + "\n"
    });
    console.log(resultado);
}

horizontal(5);
imprimirLinea();
vertical(5);
imprimirLinea();
tablasMultiplicar();
imprimirLinea();
frutas();
imprimirLinea();
cuadrado(15);

function cuadrado(num){
    let resultado = "";
    for (let index = 0; index < num; index++) {
        for (let index2 = 0; index2 < num; index2++) {
           if(index2 === num-1){
            resultado += "+\n";
           }else{
                if(index2 === 0 || (index === 0 || index === num-1)){
                    resultado += "+ ";
                }else{
                    resultado += "  ";
                }
           }
        }
    }
    console.log(resultado);
}