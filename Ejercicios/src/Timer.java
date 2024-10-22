public class Timer {
    private long startTime;
    private long endTime;
    private boolean isRunning;

    // Método para iniciar el contador
    public void start() {
        startTime = System.nanoTime();
        isRunning = true;
    }

    // Método para detener el contador
    public void stop() {
        if (isRunning) {
            endTime = System.nanoTime();
            isRunning = false;
        } else {
            System.out.println("El temporizador ya está detenido.");
        }
    }

    // Método para obtener el tiempo transcurrido en segundos
    public double getElapsedTimeInSeconds() {
        if (isRunning) {
            System.out.println("El temporizador está en ejecución. Detenlo primero.");
            return -1; // Indica que el temporizador aún está en ejecución
        }
        return (endTime - startTime) / 1_000_000_000.0; // Convertir nanosegundos a segundos
    }

    public double getElapsedTimeInMinutes() {
        if (isRunning) {
            System.out.println("El temporizador está en ejecución. Detenlo primero.");
            return -1; // Indica que el temporizador aún está en ejecución
        }
        return (endTime - startTime) / 1_000_000_000.0 / 60; // Convertir nanosegundos a minutos
    }
}