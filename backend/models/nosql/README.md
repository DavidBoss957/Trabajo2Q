# Modelo Perfil

El modelo `Perfil` representa los perfiles de los usuarios dentro de la aplicación. Este modelo se utiliza para almacenar información relacionada con las habilidades y experiencias de los usuarios.

## Estructura del Modelo

- **nombre**: `String` - El nombre del perfil.
- **experiencia**: `Array[String]` - Una lista de cadenas que describe las experiencias previas del usuario.
- **habilidades**: `Array[String]` - Una lista de habilidades del usuario.

## Características Adicionales

- Timestamps: Este modelo incluye campos automáticos para `createdAt` y `updatedAt`, permitiendo un seguimiento de la creación y la última actualización de cada perfil.



# Modelo Storage

El modelo `Storage` se utiliza para almacenar información sobre archivos almacenados, como imágenes o documentos relacionados con los usuarios o proyectos.

## Estructura del Modelo

- **url**: `String` - La URL donde se almacena el archivo.
- **filename**: `String` - El nombre del archivo almacenado.

## Características Adicionales

- Timestamps: Este modelo incluye campos automáticos para `createdAt` y `updatedAt`, facilitando el seguimiento de la carga y la última actualización de cada archivo.



# Modelo Trabajos

El modelo `Trabajos` se utiliza para gestionar la información relacionada con proyectos académicos o personales creados por los usuarios.

## Estructura del Modelo

- **titulo**: `String` - El título del proyecto.
- **titulacion**: `String` - La titulación asociada al proyecto.
- **anocreacion**: `Number` - El año de creación del proyecto.
- **autores**: `Array[ObjectId]` - Una lista de IDs de usuarios que son autores del proyecto.
- **docentesImplicados**: `String` - Nombres de los docentes implicados en el proyecto.
- **asignatura**: `String` - La asignatura relacionada con el proyecto.
- **resumen**: `String` - Un resumen o descripción del proyecto.
- **enlace**: `String` - Un enlace a recursos externos relacionados con el proyecto.
- **premios**: `String` - Premios recibidos por el proyecto.
- **palabrasClave**: `Array[String]` - Palabras clave que describen el proyecto.
- **resultadofinal**: `Object` - Información sobre el resultado final del proyecto.
- **memoria**: `Object` - Información sobre la memoria del proyecto.

## Características Adicionales

- Timestamps: Incluye campos automáticos para `createdAt` y `updatedAt`, permitiendo un seguimiento eficaz del tiempo.



# Modelo Users

El modelo `Users` almacena información sobre los usuarios de la aplicación, incluyendo datos personales, académicos y de acceso.

## Estructura del Modelo

- **name**: `String` - El nombre del usuario.
- **apellidos**: `String` - Los apellidos del usuario.
- **alias**: `String` - Un alias o nombre de usuario.
- **cargo**: `String` - El cargo o rol académico/profesional del usuario dentro de la organización.
- **promocion**: `String` - La promoción del usuario, aplicable solo para alumni.
- **departamento**: `String` - El departamento al que pertenece el usuario.
- **grado**: `String` - El grado o programa académico del usuario.
- **role**: `String` - El rol del usuario dentro de la plataforma (usuario, creador, administrador).
- **email**: `String` - El correo electrónico del usuario, único en la plataforma.
- **password**: `String` - La contraseña del usuario, almacenada de forma segura.
- **notificarAparicionDeNombre**: `Boolean` - Si el usuario desea ser notificado cuando su nombre aparece en un proyecto.
- **notificarProyectoAceptado**: `Boolean` - Si el usuario desea ser notificado cuando un proyecto es aceptado.

## Características Adicionales

- Timestamps: Incluye campos automáticos para `createdAt` y `updatedAt`, proporcionando un registro temporal de la
