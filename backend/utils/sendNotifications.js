
const nodemailer = require('nodemailer');

const sendNameAppeareanceNotification = async (userEmail, projectName) => {
    try {
        // Configurar el transporte del correo electrónico
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'foro.trabajos.utad@gmail.com',
                pass: 'pass'
            }
        });

        // Configurar el mensaje de correo electrónico
        const message = {
            from: 'foro.trabajos.utad@gmail.com',
            to: userEmail,
            subject: 'Tu nombre ha aparecido en un proyecto publicado',
            text: `Hola,\n\nTu nombre ha aparecido en el proyecto "${projectName}".\n\nSaludos.`
        };

        // Enviar el correo electrónico
        await transporter.sendMail(message);

        console.log('Correo electrónico enviado con éxito.');
    } catch (error) {
        console.error('Error al enviar el correo electrónico de notificación:', error);
    }
};

const sendProjectAcceptanceNotification = async (userEmail, projectName) => {
    try {
        // Configurar el transporte del correo electrónico
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'foro.trabajos.utad@gmail.com',
                pass: 'pass'
            }
        });

        // Configurar el mensaje de correo electrónico
        const message = {
            from: 'foro.trabajos.utad@gmail.com',
            to: userEmail,
            subject: 'Tu proyecto ha sido aceptado para ser publicado',
            text: `Hola,\n\nTu proyecto "${projectName}" ha sido aceptado para ser publicado.\n\nSaludos.`
        };

        // Enviar el correo electrónico
        await transporter.sendMail(message);

        console.log('Correo electrónico enviado con éxito.');
    } catch (error) {
        console.error('Error al enviar el correo electrónico de notificación de aceptación de proyecto:', error);
    }
};

module.exports = {
    sendNameAppeareanceNotification,
    sendProjectAcceptanceNotification
};