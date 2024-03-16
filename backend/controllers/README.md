# Controlador de Autenticación

El controlador `auth.js` gestiona todas las operaciones relacionadas con la autenticación de usuarios en la aplicación. Incluye funciones para el registro de nuevos usuarios y el inicio de sesión.

## Funciones

### `registerCtrl(req, res)`

- **Propósito**: Registrar un nuevo usuario en el sistema.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe contener en el cuerpo (`body`) los datos del usuario a registrar.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Valida y limpia los datos de entrada usando `matchedData`.
  - Encripta la contraseña del usuario.
  - Crea un nuevo usuario en la base de datos con los datos proporcionados.
  - Genera un token JWT para el usuario.
  - Envía al cliente el token JWT y la información del usuario registrado.

### `loginCtrl(req, res)`

- **Propósito**: Permitir a un usuario existente iniciar sesión en la aplicación.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe contener en el cuerpo (`body`) el email y la contraseña del usuario.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Valida y limpia los datos de entrada.
  - Busca al usuario por email en la base de datos.
  - Compara la contraseña proporcionada con la almacenada en la base de datos.
  - Si la autenticación es exitosa, genera un token JWT para el usuario.
  - Envía al cliente el token JWT y la información del usuario.



# Controlador de Proyectos (trabajos.js)

El controlador `trabajos.js` gestiona todas las operaciones relacionadas con los proyectos o trabajos en la aplicación. Incluye funciones para listar proyectos, obtener detalles de un proyecto específico, crear, actualizar y eliminar proyectos.

## Funciones

### `getItems(req, res)`

- **Propósito**: Listar todos los proyectos disponibles en la base de datos.
- **Parámetros**:
  - `req`: La solicitud HTTP.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Realiza una consulta a la base de datos para obtener todos los proyectos.
  - Envía una respuesta con la lista de proyectos.

### `getItem(req, res)`

- **Propósito**: Obtener los detalles de un proyecto específico por su ID.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe incluir el ID del proyecto en los parámetros de la ruta.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae el ID del proyecto de los parámetros de la solicitud.
  - Realiza una consulta a la base de datos para encontrar el proyecto por su ID.
  - Envía una respuesta con los detalles del proyecto encontrado.

### `createItem(req, res)`

- **Propósito**: Crear un nuevo proyecto en la base de datos.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe contener en el cuerpo (`body`) los datos del nuevo proyecto.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae los datos del proyecto del cuerpo de la solicitud.
  - Crea un nuevo proyecto en la base de datos con los datos proporcionados.
  - Envía una respuesta con los detalles del proyecto creado.

### `updateItem(req, res)`

- **Propósito**: Actualizar los datos de un proyecto existente identificado por su ID.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe incluir el ID del proyecto en los parámetros de la ruta y los datos actualizados en el cuerpo (`body`).
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae el ID del proyecto y los datos actualizados de la solicitud.
  - Realiza una consulta a la base de datos para actualizar el proyecto con los nuevos datos.
  - Envía una respuesta con los detalles del proyecto actualizado.

### `deleteItem(req, res)`

- **Propósito**: Eliminar un proyecto existente de la base de datos por su ID.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe incluir el ID del proyecto a eliminar en los parámetros de la ruta.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae el ID del proyecto de los parámetros de la solicitud.
  - Realiza una consulta a la base de datos para eliminar el proyecto por su ID.
  - Envía una confirmación de que el proyecto ha sido eliminado.



# Controlador de Usuarios (users.js)

El controlador `users.js` se encarga de gestionar todas las operaciones relacionadas con los usuarios en la aplicación. Incluye funcionalidades para listar usuarios, obtener detalles de un usuario específico, crear nuevos usuarios, actualizar información de usuarios existentes y eliminar usuarios.

## Funciones

### `getUsers(req, res)`

- **Propósito**: Listar todos los usuarios registrados en la base de datos.
- **Parámetros**:
  - `req`: La solicitud HTTP.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Realiza una consulta a la base de datos para obtener todos los usuarios.
  - Envía una respuesta con la lista de usuarios.

### `getUser(req, res)`

- **Propósito**: Obtener los detalles de un usuario específico por su ID.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe incluir el ID del usuario en los parámetros de la ruta.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae el ID del usuario de los parámetros de la solicitud.
  - Realiza una consulta a la base de datos para encontrar el usuario por su ID.
  - Envía una respuesta con los detalles del usuario encontrado.

### `createUser(req, res)`

- **Propósito**: Registrar un nuevo usuario en la base de datos.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe contener en el cuerpo (`body`) los datos del nuevo usuario.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae los datos del nuevo usuario del cuerpo de la solicitud.
  - Crea un nuevo usuario en la base de datos con los datos proporcionados.
  - Envía una respuesta con los detalles del usuario creado.

### `updateUser(req, res)`

- **Propósito**: Actualizar la información de un usuario existente identificado por su ID.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe incluir el ID del usuario en los parámetros de la ruta y los datos actualizados en el cuerpo (`body`).
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae el ID del usuario y los datos actualizados de la solicitud.
  - Realiza una consulta a la base de datos para actualizar el usuario con los nuevos datos.
  - Envía una respuesta con los detalles del usuario actualizado.

### `deleteUser(req, res)`

- **Propósito**: Eliminar un usuario existente de la base de datos por su ID.
- **Parámetros**:
  - `req`: La solicitud HTTP, que debe incluir el ID del usuario a eliminar en los parámetros de la ruta.
  - `res`: La respuesta HTTP a enviar al cliente.
- **Proceso**:
  - Extrae el ID del usuario de los parámetros de la solicitud.
  - Realiza una consulta a la base de datos para eliminar el usuario por su ID.
  - Envía una confirmación de que el usuario ha sido eliminado.