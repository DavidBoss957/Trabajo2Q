

// const Project = require('../models/nosql/trabajos');
// const User = require('../models/user');
const { sendAppearanceNotification } = require('../utils/sendNotifications');

// Función para notificar a los usuarios cuando su nombre aparece en un proyecto publicado
const notifyUsersOnNameAppearance = async (projectId) => {
    try {
        // TODO Obtener el proyecto publicado
        const project = null;

        // if (!project)
        //     throw new Error('Proyecto no encontrado');

        // TODO Obtener los nombres de todos los usuarios relacionados con el proyecto

        // TODO Buscar usuarios que tengan la opción notifyOnNameAppearance activada

        // TODO Enviar notificaciones a los usuarios
        // array.forEach(element => { sendAppearanceNotification() });

        console.log('Notificaciones enviadas con éxito a los usuarios relevantes.');
    } catch (error) {
        console.error('Error al enviar notificaciones:', error);
    }
}
