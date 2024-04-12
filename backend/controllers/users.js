//load model de user
const { usersModel } = require('../models')
//load de manejo de errores
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')


//GET USERS
const getUsers = async (req, res) => {
    try {
        const data = await usersModel.find({})
        res.send(data)
    } catch (err) {
        //Si nos sirve el de por defecto que hemos establecido, no es necesario pasar el 403
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
    }
}
//GET USER
const getUser = async (req, res) => {
    try {
        // const { id } = matchedData(req) //Me quedo solo con el id
        // const data = await usersModel.findById(id)
        const {email} = matchedData(req) //Me quedo solo con el id
        const data = await usersModel.findOne({email})
        res.send(data)
    } catch (err) {
        //console.log(err)
        handleHttpError(res, "ERROR_GET_ITEM")
    }

}
//CREATE USER
const createUser = async (req, res) => {
    try {
        //const body = matchedData(req) //El dato filtrado por el modelo (probar con body=req)
        const body = req.params
        
        console.log("Request Body:", body);
        const data = await usersModel.create(body)
        console.log("Data created:", data);
        res.send(data)
    } catch (err) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}
//UPDATE USER
const updateUser = async (req, res) => {
    try {
        const { email, ...body } = matchedData(req) //Extrae el email y el resto lo asigna a la constante body
        //console.log(req.params)
        
        const data = await usersModel.findOneAndUpdate({email:email}, body);
        //console.log(data)
        res.send(data)
    } catch (err) {
        console.log(err)
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
}

//Eliminar un usuario registro
const deleteUser = async (req, res) => {
    try {
        const { id } = matchedData(req)
        const data = await usersModel.deleteOne({ _id: id }); // "deleteOne" realiza el borrado físico en la BD
        //const data = await usersModelModel.delete({_id:id}); // "delete" realiza el borrado lógico
        res.send(data)
    } catch (err) {
        //console.log(err)
        handleHttpError(res, 'ERROR_DELETE_ITEM')
    }
}


module.exports = { getUsers, getUser, createUser, updateUser, deleteUser }; 