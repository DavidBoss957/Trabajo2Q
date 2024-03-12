
const Project = require('../models/nosql/trabajos');
const User = require('../models/nosql/users');
const Notifications = require('./sendNotifications');

// Función genérica para enviar notificaciones
const sendNotifications = async (projectId, filterOption, notificationFunction) => {
    try {
        // Paso 1: Obtener el proyecto correspondiente al ID proporcionado
        const project = await Project.findById(projectId);

        if (!project)
            throw new Error('Proyecto no encontrado');

        // Paso 2: Extraer los IDs de los autores del proyecto
        const authorIds = project.autores;

        // Paso 3: Buscar los usuarios en la base de datos que son autores del proyecto
        const users = await User.find({ _id: { $in: authorIds } });

        // Paso 4: Filtrar los usuarios que cumplan con la opción de notificación especificada
        const usersToNotify = users.filter(user => user[filterOption]);

        // Paso 5: Enviar notificaciones a los usuarios seleccionados
        // usersToNotify.forEach(user => notificationFunction(user.email, project.titulo));

    } catch (error) {
        console.error('Error al enviar notificaciones:', error);
    }
};

// Notifica a los usuarios cuando su nombre aparece en un proyecto publicado
const notifyOnNameAppearance = async (projectId) => {
    await sendNotifications(projectId, 'notificarAparicionDeNombre', Notifications.sendNameAppearanceNotification);
};

// Notifica a los usuarios cuando sus proyectos han sido aceptados para publicar
const notifyOnProjectAcceptance = async (projectId) => {
    await sendNotifications(projectId, 'notificarProyectoAceptado', Notifications.sendProjectAcceptanceNotification);
};

module.exports = {
    notifyOnNameAppearance,
    notifyOnProjectAcceptance
};
