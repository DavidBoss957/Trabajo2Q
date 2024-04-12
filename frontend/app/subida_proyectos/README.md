# Documentación de la Página de Subida de Proyectos

Este componente permite a los usuarios subir información y archivos relacionados con proyectos académicos o personales. Utiliza un formulario dinámico para recoger datos específicos del proyecto, incluyendo detalles como la asignatura y etiquetas, así como archivos multimedia.

## Funcionalidad

- **Formulario Dinámico**: Captura información del proyecto como el título, titulación, año de creación, autores, docentes implicados, asignatura, resumen, enlaces externos, premios, etiquetas y archivos adjuntos.
- **Subida de Archivos**: Permite a los usuarios subir el archivo final del proyecto. Este campo es obligatorio y debe incluir una portada del proyecto.
- **Validaciones**: Asegura que ciertos campos sean llenados y que las palabras clave sean separadas por comas antes de permitir la submisión del formulario.

### Características Principales

- **Selección de Años Automatizada**: Genera una lista desplegable de años desde 2018 hasta el año actual para seleccionar el año de creación del proyecto.
- **Manejo de Estados**: Utiliza el hook `useState` para gestionar el estado de cada campo del formulario, incluidos los archivos adjuntos.
- **Envío de Datos**: Envía los datos al servidor utilizando una solicitud fetch con headers personalizados y manejo de la respuesta.

## Estructura del Componente

El componente `ProjectUpload` integra toda la lógica y presentación necesaria para la subida de proyectos. Se utiliza Bootstrap para el diseño y estilización del formulario.

### Manejadores de Eventos

- `handleChange`: Actualiza el estado del formulario cuando un usuario cambia el valor de un campo o adjunta un archivo.
- `handleSubmit`: Prepara y envía los datos del formulario al servidor, procesa la respuesta del servidor y redirecciona al usuario según el resultado de la subida.

## Estilos

Además de utilizar Bootstrap, se emplean estilos específicos definidos en `subida_proyectos.css` para personalizar aún más la apariencia y la experiencia de usuario del formulario de subida. Los estilos específicos ayudan a adaptar la interfaz para que sea más intuitiva y amigable al usuario, con campos de entrada visualmente atractivos y botones claramente diferenciados para las acciones de enviar y guardar borradores.