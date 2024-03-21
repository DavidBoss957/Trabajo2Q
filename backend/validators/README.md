# Validadores de la Aplicación

Los validadores son utilizados para asegurar que los datos recibidos a través de las solicitudes HTTP cumplan con los requisitos específicos antes de procesarlos en los controladores. A continuación, se describen los validadores definidos para las rutas de autenticación, trabajos y usuarios.



## Validadores de Autenticación (auth.js)

### validatorRegister

Valida los datos para el registro de nuevos usuarios, incluyendo:

- **name**: Debe existir, no estar vacío y tener una longitud de 3 a 99 caracteres.
- **cargo**: Debe ser una cadena que coincida con uno de los roles predefinidos y no estar vacío.
- **email**: Debe existir, no estar vacío y ser un email válido.
- **password**: Debe existir, no estar vacío y tener una longitud de 8 a 16 caracteres.

### validatorLogin

Valida los datos para el inicio de sesión de usuarios, incluyendo:

- **email**: Debe existir, no estar vacío y ser un email válido.
- **password**: Debe existir, no estar vacío y tener una longitud de 8 a 16 caracteres.




## Validadores de Trabajos (trabajos.js)

### validatorCreateItem

Valida los datos para la creación de nuevos trabajos, incluyendo campos como **titulo**, **titulacion**, **anocreacion**, **autores**, **docentesImplicados**, **asignatura**, **resumen**, **enlace**, **premios**, **palabrasClave**, **resultadofinal.url**, y **resultadofinal.filename**.

### validatorGetItem

Valida el **id** para obtener detalles de un trabajo, asegurando que exista, no esté vacío y sea un ID de MongoDB válido.



## Validadores de Usuarios (users.js)

### validatorCreateUser

Valida los datos para la creación de nuevos usuarios, incluyendo:

- **name**, **apellidos**, **alias**, **cargo**: Deben ser cadenas no vacías.
- **email**: Debe ser un email válido que coincida con dominios específicos de la institución.
- **password**: Debe ser una cadena no vacía.
- **notificarAparicionDeNombre** y **notificarProyectoAceptado**: Deben ser booleanos.

### validatorGetUser

Valida el **id** para obtener detalles de un usuario, asegurando que exista, no esté vacío y sea un ID de MongoDB válido.

Estos validadores juegan un papel crucial en mantener la integridad de los datos y prevenir errores antes de que las solicitudes lleguen a los controladores.
