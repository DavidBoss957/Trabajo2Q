# Documentación de la Visualización de Proyectos en detalle

Esta página está diseñada para mostrar los detalles de un proyecto individual en la aplicación. Construida con Next.js y utilizando Bootstrap para el diseño, esta página maneja la recuperación y visualización de datos específicos de un proyecto usando React hooks.

## Funcionalidad

- **Recuperación de Datos Asíncrona**: Realiza llamadas asíncronas a la API para obtener los datos detallados de un proyecto específico mediante su identificador.
- **Gestión de Estado de Carga**: Utiliza el estado `isLoading` para controlar la visualización de mensajes de carga y manejar el flujo de UI durante la recuperación de datos.
- **Visualización Dinámica de Datos**: Muestra información detallada del proyecto, como el título, año de creación, autores, docentes implicados, y más.

## Estructura del Código

El componente `ProjectDetail` se encarga de la lógica para recuperar y mostrar los detalles de un proyecto individual. Elementos clave dentro del componente incluyen:

- **Indicadores de Carga y Error**: Mensajes que informan al usuario sobre el estado de la carga o posibles errores al intentar recuperar los datos.
- **Detalles del Proyecto**: Muestra información completa del proyecto, incluyendo enlaces externos, resumen y, si está disponible, el archivo del resultado final.

## Estilos

Los estilos se implementan usando Bootstrap junto con personalizaciones específicas contenidas en un archivo CSS externo para asegurar que la página sea visualmente atractiva y accesible en diferentes dispositivos.