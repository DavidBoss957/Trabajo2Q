# Configuración de Conexión a la Base de Datos

Este módulo `dbConnect` se encarga de establecer la conexión entre nuestra aplicación y la base de datos MongoDB. Utiliza Mongoose para facilitar la conexión y la interacción con MongoDB de manera sencilla y eficiente.

## Funcionalidad

La función `dbConnect` intenta establecer una conexión a la base de datos MongoDB utilizando la URI de conexión almacenada en la variable de entorno `DB_URI`. Configura Mongoose para desactivar la opción `strictQuery`, permitiendo una mayor flexibilidad en las consultas a la base de datos.

### Manejo de Errores

En caso de que la conexión falle, se captura el error y se muestra un mensaje en la consola para facilitar la depuración.

### Eventos de Conexión

Una vez establecida la conexión, se escucha el evento `connected` de Mongoose, y se muestra un mensaje en la consola confirmando que la conexión con la base de datos ha sido exitosa.

### Ejemplo de Uso

```javascript
const dbConnect = require('./config/dbConnect');

// Iniciar conexión a la base de datos
dbConnect();
