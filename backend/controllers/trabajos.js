//notificador
const notificador = require('../utils/notifyUser')
//modelo de trabajos
const { trabajosModel } = require('../models')
const userModel = require('../models/nosql/users')
//load de manejo de errores
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

// GET ITEMS
const getItems = async (req, res) => {
    try {
        const data = await trabajosModel.find({})
        res.send(data)
    } catch (err) {
        //Si nos sirve el de por defecto que hemos establecido, no es necesario pasar el 403
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
    }

}
// GET ITEM
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req) //Me quedo solo con el id
        const data = await trabajosModel.findById(id)

        if (!data)
            throw new Error('Trabajo no encontrado');

        // Cambia los ids de los autores por sus emails
        data.autores = await Promise.all(data.autores.map(async (authorId) => {
            const user = await userModel.findById(authorId);
            return user ? user.email : authorId;
        }));


        res.send(data)
    } catch (err) {
        //console.log(err)
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}

//CREATE ITEM
const createItem = async (req, res) => {
    try {
        const { body } = req

        const authorEmails = body.autores;
        const authorIds = await Promise.all(authorEmails.map(async (email) => {
            const user = await userModel.findOne({ email });
            return user ? user._id : email; // Si no encuentra el usuario mantiene el email
        }));

        body.autores = authorIds;
        const data = await trabajosModel.create(body)

        // Notificar a los usuarios relacionados con el trabajo
        await notificador.notifyOnNameAppearance(data._id);

        res.send(data)
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEM")
    }
}

//UPDATE ITEM
const updateItem = async (req, res) => {

    try {
        const { id, ...body } = matchedData(req) //Extrae el id y el resto lo asigna a la constante body
        const data = await trabajosModel.findOneAndUpdate(id, body);
        console.log(data)
        res.send(data)
    } catch (err) {
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}
//DELETE ITEM
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await trabajosModel.deleteOne({ _id: id }); // "deleteOne" realiza el borrado físico en la BD
        //const data = await usersModelModel.delete({_id:id}); // "delete" realiza el borrado lógico
        res.send(data)
    } catch (err) {
        //console.log(err)
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}



module.exports = { getItems, getItem, createItem, updateItem, deleteItem }; 