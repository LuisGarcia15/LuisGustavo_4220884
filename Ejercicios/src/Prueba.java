import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.LongStream;

public class Prueba {
    public static void main(String[] args) {
        int[] array = new int[10_000];

        // Llenar el array con números del 1 al 10,000
        for (int i = 0; i < array.length; i++) {
            array[i] = i + 1; // Almacenar números del 1 al 10,000
        }
        Timer timer = new Timer();
        timer.start();
        for(int i = 0; i < array.length; i++){
            for(int j = 0; j < array.length-1; j++){
                int aux = 0;
                if(array[j] > array[j+1]){
                    aux = array[j+1];
                    array[j+1] = array[j];
                    array[j] = aux;
                }
            }
        }
        timer.stop();
        System.out.println(Arrays.toString(array));
        double elapsedTime = timer.getElapsedTimeInMinutes();
        System.out.println("Tiempo transcurrido: " + elapsedTime + " minutos");
    }
}
