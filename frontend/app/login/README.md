# Documentación de la Web App de Login

Esta aplicación de inicio de sesión está desarrollada con Next.js y utiliza Bootstrap para el estilizado. Maneja el estado de los inputs de usuario utilizando hooks de React, y facilita la elección del dominio de correo electrónico, influyendo en el proceso de autenticación.

## Funcionalidad

- **Gestión de Estados**: Emplea `useState` para manejar los estados de los campos de email y contraseña, y el tipo de dominio de email seleccionado por el usuario.
- **Validación de Formularios**: Utiliza una función `handleComprobacion` para validar el correo electrónico antes de su envío, eliminando cualquier carácter después de un `@` para evitar errores.
- **Envío de Datos**: La función `handleSubmit` gestiona el envío de los datos de inicio de sesión a una API, maneja las respuestas del servidor y gestiona los errores, asegurando una experiencia de usuario fluida.
- **Selección de dominio de email**: Ofrece a los usuarios la opción de seleccionar entre múltiples dominios de correo electrónico mediante un elemento `<select>`, lo cual puede influir en la autenticación del usuario.

## Estructura del Código

El componente `Login` es responsable de renderizar el formulario de inicio de sesión y manejar la lógica relacionada con la autenticación. Dentro del retorno del componente, se encuentran los siguientes elementos clave:

- **Imagen y título**: Incluye campos para correo electrónico y contraseña, un botón para enviar el formulario, y una selección para el dominio del correo electrónico.
- **Formulario de inicio de sesión**: Campos para el correo electrónico y la contraseña, un botón para enviar el formulario y una selección para el dominio de email.
  - **Email**: Un campo de texto que se complementa con un selector para elegir el dominio del correo electrónico.
  - **Contraseña**: Un campo de entrada para la contraseña.
  - **Botón de envío**: Un botón que activa la validación y el envío del formulario.

## Estilos

Los estilos se aplican utilizando clases de Bootstrap y personalizaciones específicas contenidas en el archivo `login_signup.css`. Destaca el uso de clases para redondear los bordes y manejar el espaciado, mejorando la estética y la experiencia del usuario.
