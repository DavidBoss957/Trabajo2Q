# Documentación de la Web App de Login

Esta aplicación de inicio de sesión está construida con Next.js y utiliza Bootstrap para el estilizado. Maneja el estado de los inputs de usuario utilizando hooks de React, y permite a los usuarios seleccionar un dominio de correo electrónico específico.

## Funcionalidad

- **Estado de los inputs**: Utiliza `useState` para manejar el estado de los campos de email y contraseña, así como el tipo de dominio de email seleccionado por el usuario.
- **Manejo de formularios**: Implementa una función `handleComprobacion` para validar el correo electrónico antes de enviarlo, asegurándose de que no contenga un `@` para evitar errores.
- **Envío de datos**: La función `handleSubmit` se encarga de enviar los datos de inicio de sesión a una API, manejando la respuesta del servidor y posibles errores.
- **Selección de dominio de email**: Permite a los usuarios elegir entre varios dominios de correo electrónico utilizando un elemento `<select>`.

## Estructura del Código

El componente `Login` se encarga de renderizar el formulario de inicio de sesión y manejar toda la lógica asociada. Dentro del retorno del componente, se encuentran los siguientes elementos clave:

- **Imagen y título**: Un logo (imagen por defecto) y un título "Introducción" para darle una bienvenida visual al usuario.
- **Formulario de inicio de sesión**: Campos para el correo electrónico y la contraseña, un botón para enviar el formulario y una selección para el dominio de email.
  - **Email**: Un input de texto seguido de un selector para el dominio de email.
  - **Contraseña**: Un input de tipo contraseña.
  - **Botón de envío**: Un botón que dispara la validación y el envío del formulario.

## Estilos

Los estilos se aplican mediante clases de Bootstrap y un archivo CSS externo `login_signup.css` para personalizaciones específicas. Se destaca el uso de clases para redondear bordes y manejar el espaciado.
