package tareaUno.baseDeDatos;

import java.sql.*;

public class BaseDeDatosTarea1 {
    private String url = "jdbc:mariadb://localhost:3306/sitarea1";
    private String username = "root";
    private String password = "1234";
    private Connection connection;

    public BaseDeDatosTarea1() {
        try {
            //Busqueda de driver de JDBC
            Class.forName("org.mariadb.jdbc.Driver");
            //Conexión a la base de datos
            this.connection = DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException | SQLException e) {
            throw new RuntimeException(e);
        }
    }

    /*Método para insertar un nombre en la base de datos*/
    public void guardarNombre(String nombre){
        //Query para insertar el nombre en la BD
        String query =  "INSERT INTO nombres (nombre_nbs) VALUES (?)";
        try {
            //Prepara la sentencia para ejecutar el query
            PreparedStatement statement = connection.prepareStatement(query);
            //Agrega el nombre pasado como parámetro al query para insertarlo
            statement.setString(1, nombre);
            statement.execute();
            //Ejecuta el query
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }

    public int numeroNombresRepetidos(String nombre){
        int numeroDeNombresEncontrados = 0;
        String query = "SELECT COUNT(nombre_nbs) FROM sitarea1.nombres WHERE nombre_nbs = \"" + nombre + "\"";
        try {
            Statement statement = connection.createStatement();
            ResultSet resultSet = statement.executeQuery(query);
            while(resultSet.next()){
                numeroDeNombresEncontrados = resultSet.getInt(1);
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        return numeroDeNombresEncontrados;
    }

    //Método para cerrar la conexión a la BD
    public void cerrarConexion(){
        try {
            this.connection.close();
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
