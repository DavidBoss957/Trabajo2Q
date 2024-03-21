# Middleware CustomHeader

El middleware `customHeader` se encarga de validar que las solicitudes a la API contengan una clave API válida en los encabezados de la solicitud.

## Funcionalidad

- **Propósito**: Asegurar que todas las solicitudes entrantes a la API estén autorizadas mediante una clave API específica.
- **Cómo funciona**: Comprueba si el encabezado de la solicitud contiene una clave API válida (`Api-publica-123`). Si la clave es correcta, permite que la solicitud continúe; de lo contrario, responde con un estado HTTP 403 indicando que la clave API no es correcta.



# Middleware CheckRol

El middleware `checkRol` proporciona una capa adicional de autorización basada en roles, permitiendo restringir el acceso a ciertas rutas según el rol del usuario.

## Funcionalidad

- **Propósito**: Restringir el acceso a ciertas rutas de la aplicación basándose en el rol del usuario.
- **Cómo funciona**: Recibe un arreglo de roles permitidos y verifica si el rol del usuario en la solicitud coincide con alguno de estos roles. Si no coincide, responde con un estado HTTP 403 indicando que el acceso no está permitido.



# Middleware AuthMiddleware

El middleware `authMiddleware` se encarga de validar la autenticación de los usuarios mediante tokens JWT en las solicitudes a la API.

## Funcionalidad

- **Propósito**: Verificar la existencia y validez de un token JWT en las solicitudes para autorizar el acceso a recursos protegidos.
- **Cómo funciona**: Extrae el token JWT del encabezado de autorización de la solicitud, verifica el token y, si es válido, busca al usuario asociado en la base de datos. El usuario se adjunta a la solicitud, permitiendo que las rutas accedan a la información del usuario autenticado.