package tareaUno.programa;

import tareaUno.baseDeDatos.BaseDeDatosTarea1;

import javax.swing.*;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class TareaUno {
    public static void main(String[] args) {
        //Variable para insertar un nombre en la BD
        String nombre;
        //Variable para guardar el nombre del archivo que se crea para escribir el nombre
        String nombreArchivo;
        //Ruta donde se guardaran los archivos creados
        System.out.println(System.getProperty("user.dir"));
        String path = System.getProperty("user.dir")+"/src/tareaUno/archivos/";
        //Contador para guardar archivos en caso se repitan
        int contador = 1;
        //Objeto que guarda y enlaza la BD
        BaseDeDatosTarea1 bd = new BaseDeDatosTarea1();
            //Ventana donde se ingresa el nombre a guardar en la BD
            nombre = ventanaDialogo();
        //Ciclo que se itera siempre que nombre no sea null
        while(nombre != null){
            //Define un archivo .txt con el nombre que ingreso el usuario
            File archivo = new File(path + nombre +".txt");
            //Guarda el nombre del archivo en la variable nombreArchivo
            nombreArchivo = nombre +".txt";
            try {
                //Verifica si existe un archivo con el nombre dado, en caso de que se haya
                //ingresado un nombre otra vez
                if(archivo.exists()){
                    //Obtiene en número de nombres repetidos con la variable nombre para
                    //obtener un número y con ese numero obtenido más el nombre, guardar el .txt
                    contador = bd.numeroNombresRepetidos(nombre);
                    //Si existe, renombra el archivo, colocando un numero gracias al contador
                    archivo.renameTo(new File(path + nombre + "_" + contador +".txt"));
                    //Almacena el nuevo nombre del archivo en la variable nombreArchivo
                    nombreArchivo = nombre + "_" + contador +".txt";
                    //Aumenta el contador para otro archivo, en caso de que se repita-------------
                    //Crea el archivo definido con el nombre correcto
                    archivo.createNewFile();
                }else{
                    //Sino existe un archivo con nombre repetido, se crea el archivo definido
                    //Con el nombre definido en un inicio
                    archivo.createNewFile();
                }
                //Guarda el nombre en la BD
                bd.guardarNombre(nombre);
                //Crea un objeto FileWritter para escribir en un archivo definido, el
                //archivo en donde escribira sera el archivo que se creo anteriormente
                FileWriter fileWriter = new FileWriter(archivo);
                /*Crea un objeto bufferWritter para escribir en el archivo, este es un
                * objeto que mejora la escritura en comparación del objeto FileWritter,
                * se le pasa como parámetro el objeto FileWritter*/
                BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
                //Escribe el nombre en el archivo pasado como parámetro, este archivo es
                //el archivo txt pasado como parametro al objeto FileWritter
                bufferedWriter.write(nombre);
                //Cierra el flujo del objeto de BufferWritter
                bufferedWriter.close();
                //Muestra un JOptionPane con la información de la ruta donde se guardo el
                //archivo creado junto con el nombre con el que se creo.
                JOptionPane.showMessageDialog(null,
                        String.format("Guardado en %s \n%-80s  Con nombre %s", path, "", nombreArchivo) ,
                        "Tarea Uno",
                        JOptionPane.QUESTION_MESSAGE);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
            //Muestra otro JOptionPane en el cual el usuario puede volver a ingresar un nombre
            //y volver a persisitir un dato en la BD asi como crear un archivo con el nombre
            //ingresado como parámetro
            nombre = ventanaDialogo();
        }
        //Si el ciclo termina, cierra la conección con la BD
        bd.cerrarConexion();
    }

    /*Método que muestra un JOptionPane para que el usuario ingrese el nombre que se
    * persistira en la BD*/
    public static String ventanaDialogo(){
        return JOptionPane.showInputDialog(null,
                "Ingresa tu nombre: ",
                "Tarea Uno",
                JOptionPane.QUESTION_MESSAGE);
    }
}

