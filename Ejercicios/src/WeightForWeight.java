import java.util.Arrays;
import java.util.Comparator;
// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/java
public class WeightForWeight {
    public static void main(String[] args) {
        String mia = "461647 462963 439068";
        String solucion = "461647 439068 462963";

        //324188 214785 17268 375327 461647 439068 462963 198148 149885 -- expected
        //324188 214785 75327 317268 461647 462963 439068 198148 149885 -- but was

        //Prueba
        // Correcto 461647 439068 462963
        // Erroneo 461647 462963 439068

        System.out.println("Correct sort");
        System.out.println(solucion);
        System.out.println("Solution");
        System.out.println(orderWeight(mia));
    }

    public static String orderWeight(String strng) {
        Comparator<String> comparator = (num1, num2) -> {
            int sumNum1 = Arrays.stream(num1.split("")).mapToInt(Integer::parseInt).sum();
            int sumNum2 = Arrays.stream(num2.split("")).mapToInt(Integer::parseInt).sum();
            return Integer.compare(sumNum1, sumNum2);
        };

        return Arrays.stream(strng.split(" "))
                .sorted(comparator.thenComparing(num -> num.charAt(0)))
                .reduce((num1, num2) -> num1 + " " + num2).orElseThrow();
    }
}
