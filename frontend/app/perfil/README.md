# Documentación de la Página de Registro

Este componente es una parte crucial de la aplicación, permitiendo a los usuarios ver y editar su perfil. Utiliza tecnologías como Next.js y Bootstrap para garantizar una interfaz limpia y accesible, y emplea React Hooks para manejar estados y efectos.

## Funcionalidad

- **Visualización de Información del Usuario**: Muestra información detallada del usuario, como nombre, apellidos, email, y rol, así como preferencias personales y notificaciones.
- **Edición de Información**: Los usuarios pueden actualizar su alias y configurar sus preferencias de notificaciones directamente desde esta página.
- **Asistencia de Cierre de Sesión y Actualización de Datos**: Incluye botones para cerrar sesión y actualizar la información de perfil, interactuando con la API del servidor para realizar estas acciones.

### Características Principales

- **Manejo de Autenticación y Autorización**: Utiliza tokens JWT para autenticar las solicitudes al servidor y asegurar que sólo los usuarios adecuados puedan acceder y modificar su información.
- **Feedback Visual y Accesibilidad**: Emplea un diseño consciente de la accesibilidad, con etiquetas claras y feedback visual para las interacciones del usuario, como la activación de notificaciones y la actualización de datos.

## Estructura del Componente

El componente `Perfil` maneja varios estados locales, como la información del usuario y los estados de las notificaciones. Además, realiza peticiones asincrónicas al servidor para obtener y actualizar datos.

### Manejadores de Eventos

- `handleCerrarSesion`: Elimina el token de autenticación del almacenamiento local y redirige al usuario a la página principal.
- `handleUpdateUser`: Envía una solicitud de actualización de perfil al servidor y procesa la respuesta para reflejar los cambios o manejar errores.

## Estilos

Los estilos son aplicados utilizando Bootstrap para la estructura básica y clases específicas definidas en `perfil.css` para personalizaciones más detalladas, como el redondeado de botones y la organización de los elementos del perfil.