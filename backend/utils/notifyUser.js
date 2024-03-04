
const Project = require('../models/nosql/trabajos');
const User = require('../models/nosql/users');
const Notifications = require('./sendNotifications');

// Notifica a los usuarios cuando su nombre aparece en un proyecto publicado
const notifyOnNameAppearance = async (projectId) => {
    try {
        // Paso 1: Obtener el proyecto correspondiente al ID proporcionado
        const project = await Project.findById(projectId);

        if (!project)
            throw new Error('Proyecto no encontrado');

        // Paso 2: Extraer los nombres de los autores del proyecto
        const autores = project.autores;

        // Paso 3: Buscar los usuarios en la base de datos que son autores del proyecto
        const users = await User.find({ _id: { $in: authorIds } });

        // Paso 4: Filtrar los usuarios que tengan la opción notificarAparicionDeNombre activada
        // const usersToNotify = users.filter(user => user.notificarAparicionDeNombre);

        // Paso 5: Enviar notificaciones a los usuarios seleccionados
        usersToNotify.forEach(user => {
            Notifications.sendNameAppeareanceNotification(user.email, project.titulo);
        });

        console.log('Notificaciones enviadas con éxito a los usuarios relevantes.');
    } catch (error) {
        console.error('Error al enviar notificaciones:', error);
    }
};

// Notifica a los usuarios cuando sus proyectos han sido acceptados para publicar
const notifyOnProjectAcceptance = async (projectId) => {
    try {
        // Paso 1: Obtener el proyecto correspondiente al ID proporcionado
        const project = await Project.findById(projectId);

        if (!project)
            throw new Error('Proyecto no encontrado');

        // Paso 2: Extraer los nombres de los autores del proyecto
        const autores = project.autores;

        // Paso 3: Buscar los usuarios en la base de datos que son autores del proyecto
        const users = await User.find({ _id: { $in: authorIds } });

        // Paso 4: Filtrar los usuarios que tengan la opción notificarProyectoAceptado activada
        // const usersToNotify = users.filter(user => user.notificarProyectoAceptado);

        // Paso 5: Enviar notificaciones a los usuarios seleccionados
        usersToNotify.forEach(user => {
            Notifications.sendProjectAcceptanceNotification(user.email, project.titulo);
        });

        console.log('Notificaciones enviadas con éxito a los usuarios relevantes.');
    } catch (error) {
        console.error('Error al enviar notificaciones:', error);
    }
}

module.exports = { notifyOnNameAppearance, notifyOnProjectAcceptance }