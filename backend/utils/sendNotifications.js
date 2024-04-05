
const nodemailer = require('nodemailer');

// Función genérica para enviar correos electrónicos
const sendEmailNotification = async (userEmail, subject, messageText) => {
    try {
        // Configurar el transporte del correo electrónico
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.NODEMAILER_CREDS
            }
        });

        // Configurar el mensaje de correo electrónico
        const message = {
            from: process.env.EMAIL,
            to: userEmail,
            subject: subject,
            text: messageText
        };

        // Enviar el correo electrónico
        await transporter.sendMail(message);
    } catch (error) {
        console.error('Error al enviar el correo electrónico de notificación:\n', error);
    }
};

// Notificación de aparición de nombre en proyecto
const sendNameAppearanceNotification = async (userName, userEmail, projectName) => {
    const subject = 'Tu nombre ha aparecido en un proyecto publicado';
    const messageText = `Hola ${userName},\n\nTu nombre ha aparecido en el proyecto "${projectName}".\n\nSaludos.\nEsto es un mensaje sin respuesta.`;
    await sendEmailNotification(userEmail, subject, messageText);

};

// Notificación de aceptación de proyecto
const sendProjectAcceptanceNotification = async (userName, userEmail, projectName) => {
    const subject = 'Tu proyecto ha sido aceptado para ser publicado';
    const messageText = `Hola ${userName},\n\nTu proyecto "${projectName}" ha sido aceptado para ser publicado.\n\nSaludos.`;
    await sendEmailNotification(userEmail, subject, messageText);
};

module.exports = {
    sendNameAppearanceNotification,
    sendProjectAcceptanceNotification
};
