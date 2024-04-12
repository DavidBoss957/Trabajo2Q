# Documentación de la Visualización de Proyectos

Esta página permite a los usuarios ver detalles de proyectos almacenados en una base de datos. Está construida con Next.js y utiliza Bootstrap para el diseño, con un enfoque en la accesibilidad y la facilidad de uso. La aplicación maneja la carga y visualización de datos de proyectos utilizando hooks de React.

## Funcionalidad

- **Carga de Proyectos**: Utiliza el hook `useState` para mantener el estado de los proyectos y `useState` para gestionar el estado de carga.
- **Recuperación de Datos Asíncrona**: Implementa llamadas asíncronas a la API para recuperar información de proyectos mediante una función `loadData` dentro de `useEffect`.
- **Gestión de Estado de Carga**: Proporciona feedback visual durante la carga de datos y en caso de errores en la carga.

## Estructura del Código

El componente `ViewProjects` gestiona la visualización de los proyectos recuperados desde el servidor. Dentro del componente, los elementos clave incluyen:

- **Indicadores de Carga y Error**: Mensajes que informan al usuario sobre el estado actual de la carga o si hubo un error al cargar los datos.
- **Visualización de Detalles del Proyecto**: Una vez cargados, los proyectos se muestran con todos sus detalles, como título, autores, año de creación, y más.
- **Navegación a Detalles Específicos**: Botones que redirigen a una página detallada para cada proyecto individual.

## Estilos

Los estilos se aplican principalmente a través de clases de Bootstrap y estilos específicos definidos en `subida_proyectos.css`. Estos estilos personalizan aún más la apariencia y la experiencia de usuario de la página de visualización.