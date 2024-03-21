# Rutas de Autenticación

Las rutas definidas en `auth.js` manejan la autenticación de usuarios, incluyendo el registro, el inicio de sesión y la actualización de usuarios. Se utilizan validadores específicos para asegurar que los datos proporcionados sean correctos antes de procesar las solicitudes.

## Rutas Disponibles

### Registro de Usuarios

- **Endpoint**: `/api/auth/register`
- **Método**: POST
- **Validación**: `validatorRegister`
- **Controlador**: `registerCtrl`
- **Descripción**: Registra un nuevo usuario en el sistema.

### Inicio de Sesión

- **Endpoint**: `/api/auth/login`
- **Método**: POST
- **Validación**: `validatorLogin`
- **Controlador**: `loginCtrl`
- **Descripción**: Permite a un usuario iniciar sesión en la aplicación.

### Actualización de Usuarios

- **Endpoint**: `/api/auth/update/:email`
- **Método**: PUT
- **Middleware**: `authMiddleware`, `checkRol(["admin"])`
- **Controlador**: `updateUser`
- **Descripción**: Permite actualizar la información de un usuario. Solo disponible para administradores.



# Rutas Principales

El archivo `index.js` configura y exporta las rutas principales de la aplicación. Utiliza la lectura dinámica del directorio para cargar y configurar las rutas definidas en otros archivos automáticamente.

## Funcionamiento

- Lee todos los archivos en el directorio actual.
- Excluye el archivo `index.js` para evitar referencias circulares.
- Configura cada archivo de ruta encontrado como un enrutador Express en su propio espacio de nombres, basado en el nombre del archivo.



# Rutas de Trabajos

Las rutas definidas en `trabajos.js` gestionan las operaciones CRUD relacionadas con proyectos o trabajos académicos. Incluyen validación de datos y un middleware personalizado para verificar la API key.

## Rutas Disponibles

### Listar Trabajos

- **Endpoint**: `/`
- **Método**: GET
- **Controlador**: `getItems`
- **Descripción**: Devuelve una lista de todos los trabajos.

### Obtener Detalle de Trabajo

- **Endpoint**: `/:id`
- **Método**: GET
- **Validación**: `validatorGetItem`
- **Controlador**: `getItem`
- **Descripción**: Devuelve los detalles de un trabajo específico.

### Crear Trabajo

- **Endpoint**: `/`
- **Método**: POST
- **Validación**: `validatorCreateItem`
- **Middleware**: `customHeader`
- **Controlador**: `createItem`
- **Descripción**: Crea un nuevo trabajo.

### Actualizar Trabajo

- **Endpoint**: `/:id`
- **Método**: PUT
- **Validación**: `validatorGetItem`, `validatorCreateItem`
- **Controlador**: `updateItem`
- **Descripción**: Actualiza un trabajo existente.

### Eliminar Trabajo

- **Endpoint**: `/:id`
- **Método**: DELETE
- **Validación**: `validatorGetItem`
- **Controlador**: `deleteItem`
- **Descripción**: Elimina un trabajo.



# Rutas de Usuarios

Las rutas definidas en `users.js` gestionan las operaciones relacionadas con los usuarios, como listar usuarios, obtener detalles de usuario, crear, actualizar y eliminar usuarios.

## Rutas Disponibles

### Listar Usuarios

- **Endpoint**: `/`
- **Método**: GET
- **Controlador**: `getUsers`
- **Descripción**: Devuelve una lista de todos los usuarios.

### Detalle de Usuario

- **Endpoint**: `/:id`
- **Método**: GET
- **Validación**: `validatorGetUser`
- **Controlador**: `getUser`
- **Descripción**: Devuelve los detalles de un usuario específico.

### Crear Usuario

- **Endpoint**: `/`
- **Método**: POST
- **Validación**: `validatorCreateUser`
- **Descripción**: Crea un nuevo usuario. Implementa lógica