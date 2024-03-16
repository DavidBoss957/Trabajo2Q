# Documentación de la Página de Filtro

Esta sección del proyecto implementa una funcionalidad de filtrado para los resultados de búsqueda en una aplicación web desarrollada con Next.js y Bootstrap.

## Funcionalidad

La página ofrece una interfaz de usuario para filtrar los resultados de búsqueda basándose en diferentes criterios como el nombre del proyecto, el nombre del autor, la titulación, la asignatura, el curso académico y los premios.

### Características Principales

- **Búsqueda Dinámica**: Los usuarios pueden escribir términos de búsqueda que se manejan en tiempo real.
- **Filtros Modales**: Al hacer clic en "Mostrar Filtros", se presenta un modal que permite al usuario aplicar filtros más específicos a la búsqueda.
- **Interfaz Responsiva**: Gracias a Bootstrap, la interfaz es completamente responsiva y amigable en dispositivos móviles.

## Estructura del Componente

El componente `Page` gestiona el estado de la consulta de búsqueda y de la visibilidad de los filtros mediante `useState`. 

### Manejadores de Eventos

- `handleSearchChange`: Actualiza la consulta de búsqueda con cada cambio en el input de búsqueda.
- `toggleFilters`: Muestra u oculta el modal de filtros.

## Estilos

Los estilos CSS incorporados con la etiqueta `<style>` en el componente `<Head>` se utilizan para personalizar la apariencia del modal y para aplicar efectos visuales como el desenfoque de fondo cuando el modal de filtros está activo.
