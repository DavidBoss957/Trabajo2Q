# Documentación de la Página de Registro

Este componente permite a los nuevos usuarios crear una cuenta en la aplicación. Está diseñado usando Next.js y Bootstrap para facilitar la accesibilidad y la experiencia del usuario, con un enfoque especial en la asignación de roles y la selección del dominio del correo electrónico.

## Funcionalidad

- **Entradas de Usuario**: Recoge información básica del usuario como nombre, apellidos, alias, correo electrónico y contraseña.
- **Selección de Dominio de Email**: Permite al usuario elegir entre varios dominios de correo electrónico, lo cual determina automáticamente el rol asignado (usuario o creador).
- **Asignación de Roles**: Basado en el dominio de correo electrónico seleccionado, asigna roles automáticamente.

### Características Principales

- **Validación del Lado del Cliente**: Asegura que la dirección de correo electrónico esté correctamente formateada antes de enviar el formulario.
- **Manejo Asíncrono de Formularios**: Utiliza `async/await` para gestionar las peticiones POST al servidor de forma asíncrona.
- **Feedback Visual**: Implementa feedback visual para indicar el estado del registro, como éxito o error, aunque estos detalles no se muestran en el código proporcionado.

## Estructura del Componente

El componente `Signup` maneja el estado local para cada entrada del formulario y un estado adicional para el tipo de correo electrónico, que influye directamente en el rol asignado al usuario.

### Manejadores de Eventos

- `handleComprobacion`: Se ejecuta al enviar el formulario. Verifica que el correo electrónico esté formateado correctamente, asigna roles basados en el dominio del correo electrónico y procede a enviar el formulario si todo es correcto.
- `handleSubmit`: Envía los datos del formulario al servidor, maneja la respuesta del servidor y redirige al usuario a la página de inicio de sesión si el registro es exitoso.

## Estilos

Los estilos se implementan utilizando clases de Bootstrap y personalizaciones adicionales en el archivo `login_signup.css`. Se emplean clases como rounded-4 para redondear los campos de entrada y mb-3 para mantener un espaciado adecuado, mejorando así la experiencia visual del usuario.