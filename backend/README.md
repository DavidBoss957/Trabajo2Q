# Apartado de Back-End 🌍🔧

Este es el apartado de **Back-End** de nuestro proyecto. Aquí encontrarás todos los recursos, componentes y documentación necesarios para entender y trabajar en la lógica de negocio, la gestión de bases de datos, autenticación de usuarios, manejo de solicitudes y respuestas del servidor, y mucho más.

## Estructura de la Carpeta

- `config/`: Contiene archivos de configuración global, como conexiones a bases de datos.
  - `mongo.js`: Configuración para la conexión con MongoDB.

- `controllers/`: Contiene la lógica de negocio para manejar las peticiones entrantes.
  - `auth.js`: Controlador para la autenticación de usuarios.
  - `trabajos.js`: Controlador para la gestión de proyectos o trabajos.
  - `users.js`: Controlador para la gestión de usuarios.

- `middleware/`: Funciones que se ejecutan entre las peticiones entrantes y los controladores.
  - `customHeader.js`: Middleware para manejar cabeceras personalizadas.
  - `rol.js`: Middleware para la verificación de roles de usuarios.
  - `session.js`: Middleware para el manejo de sesiones de usuario.

- `models/`: Define la estructura de los datos a almacenar en la base de datos.
  - `nosql/`: Carpeta específica para modelos NoSQL.
    - `perfil.js`: Modelo para perfiles de usuario.
    - `storage.js`: Modelo para el almacenamiento de archivos.
    - `trabajos.js`: Modelo para proyectos o trabajos.
    - `users.js`: Modelo para usuarios.

- `routes/`: Define las rutas del servidor y las asocia con sus respectivos controladores.
  - `auth.js`: Rutas para autenticación de usuarios.
  - `index.js`: Archivo principal de rutas.
  - `trabajos.js`: Rutas para la gestión de proyectos o trabajos.
  - `users.js`: Rutas para la gestión de usuarios.

- `utils/`: Funciones de utilidad para manejar tareas comunes.
  - `handleError.js`: Función para manejar errores.
  - `handleJwt.js`: Funciones para manejar tokens JWT.
  - `handlePassword.js`: Funciones para el manejo de contraseñas.
  - `handleStorage.js`: Funciones para el manejo de almacenamiento de archivos.
  - `handleValidator.js`: Funciones para validar datos de entrada.
  - `notifyUser.js`: Función para notificar a los usuarios.
  - `sendNotifications.js`: Función para enviar notificaciones.

- `validators/`: Contiene funciones para validar la entrada de datos en las rutas.
  - `auth.js`: Validadores para la autenticación.
  - `trabajos.js`: Validadores para proyectos o trabajos.
  - `users.js`: Validadores para la gestión de usuarios.

## Empezando

Para comenzar a trabajar en el back-end, asegúrate de tener instaladas las dependencias necesarias ejecutando:

```bash
npm install
