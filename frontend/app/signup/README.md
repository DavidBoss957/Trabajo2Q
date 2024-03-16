# Documentación de la Página de Registro

La página de registro permite a nuevos usuarios crear una cuenta en la aplicación. Está construida usando Next.js y Bootstrap para el diseño, con un enfoque en la accesibilidad y facilidad de uso.

## Funcionalidad

- **Entradas de Usuario**: Recoge información básica del usuario como nombre, apellidos, alias, correo electrónico y contraseña.
- **Selección de Dominio de Email**: Ofrece una selección de dominios de email para que el usuario elija, impactando en el rol asignado automáticamente al usuario.
- **Asignación de Roles**: Basado en el dominio de correo electrónico seleccionado, asigna roles de 'usuario' o 'creador' a la cuenta.

### Características Principales

- **Validación del Lado del Cliente**: Antes de enviar el formulario, se realiza una comprobación para asegurar que el email no contiene '@', para prevenir errores.
- **Manejo Asíncrono de Formularios**: Utiliza `async/await` para manejar la petición POST al servidor de forma asíncrona.
- **Feedback Visual**: Aunque no se muestra en el código proporcionado, sería recomendable implementar feedback visual para indicar el estado del registro (e.g., éxito, error).

## Estructura del Componente

El componente `Signup` gestiona varios estados locales para cada entrada del formulario y un estado adicional para el tipo de email, que influye en el rol del usuario.

### Manejadores de Eventos

- `handleComprobacion`: Se ejecuta al enviar el formulario. Realiza las validaciones necesarias y llama a `handleSubmit`.
- `handleSubmit`: Envía los datos del formulario al servidor y maneja la respuesta.

## Estilos

Los estilos se aplican principalmente a través de clases de Bootstrap y un archivo CSS externo `login_signup.css` para personalizaciones adicionales. La aplicación de clases `rounded-4` y `mb-3` mejora la estética de los campos de entrada y del formulario.