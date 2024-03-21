# Documentación de la Página de Subida de Proyectos

Esta página permite a los usuarios subir información y archivos relacionados con proyectos académicos o personales. Utiliza un formulario para recoger datos específicos del proyecto, incluyendo archivos multimedia como resultado final o memorias del proyecto.

## Funcionalidad

- **Formulario Dinámico**: Captura información del proyecto como el nombre, titulación, año de creación, autores, docentes implicados, resumen, enlaces externos, premios, etiquetas y archivos adjuntos.
- **Subida de Archivos**: Permite a los usuarios subir el resultado final del proyecto y una memoria del mismo, siendo este último opcional.
- **Validaciones**: Asegura que ciertos campos sean llenados antes de permitir la submisión del formulario.

### Características Principales

- **Selección de Años Automatizada**: Genera dinámicamente una lista desplegable de años desde 2018 hasta el año actual para seleccionar el año de creación del proyecto.
- **Manejo de Estados**: Usa el hook `useState` para gestionar el estado de cada campo del formulario, incluidos los archivos adjuntos.
- **Envío de Datos**: Aunque el código para enviar los datos al servidor está comentado, se muestra cómo se podría realizar el envío utilizando FormData y una petición fetch.

## Estructura del Componente

El componente `ProjectUpload` contiene toda la lógica y la presentación necesaria para la subida de proyectos. Utiliza Bootstrap para el diseño y estilización del formulario.

### Manejadores de Eventos

- `handleChange`: Actualiza el estado del formulario cuando un usuario cambia el valor de un campo o adjunta un archivo.
- `handleSubmit`: Prepara los datos del formulario para su envío y realiza la petición al servidor.

## Estilos

Además de utilizar Bootstrap, se emplean estilos específicos definidos en `subida_proyectos.css` para personalizar aún más la apariencia y la experiencia de usuario del formulario de subida.