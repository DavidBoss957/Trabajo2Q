const { usersModel } = require('../models')
//load de manejo de errores
const { matchedData } = require('express-validator')
const { handleHttpError } = require('../utils/handleError')

const getItems = async (req, res) => {
    try{
        const data = await usersModel.find({})
        res.send(data)
    }catch(err){
        //Si nos sirve el de por defecto que hemos establecido, no es necesario pasar el 403
        handleHttpError(res, 'ERROR_GET_ITEMS', 403)
    }
}

/*const getItem = async (req, res) => {
    const {id}=req.params
    const data= await usersModel.find({name:id})
    res.send(data)
} */
const getItem = async (req, res) => {
    try{
        const {id} = matchedData(req) //Me quedo solo con el id
        const data = await usersModel.findById(id)
        res.send(data)
    } catch(err){
        //console.log(err)
        handleHttpError(res, "ERROR_GET_ITEM")
    }
}


//primer createitem
const createItem = async (req, res) => {
    const { body } = req
    console.log(body)
    const data = await usersModel.create(body)
    res.send(data)}   
    /*const createItem = async (req, res) => {
        try {
            const body = matchedData(req) //El dato filtrado por el modelo (probar con body=req)
            console.log("Request Body:", body);
            const data = await usersModel.create(body)
            console.log("Data created:", data);
            res.send(data)
        }catch(err){
            console.error(err);
            handleHttpError(res, 'ERROR_CREATE_ITEMS')
        }
    }*/


    ///update item
    const updateItem = async (req, res) => {
        try {
            const {id, ...body} = matchedData(req) //Extrae el id y el resto lo asigna a la constante body
            const data = await usersModel.findOneAndUpdate(id, body);
            console.log(data)
            res.send(data)    
        }catch(err){
            console.log(err) 
            handleHttpError(res, 'ERROR_UPDATE_ITEMS')
        }
    }
    
    //Eliminar un registro
    const deleteItem = async (req, res) => {
        try {
            const {id} = matchedData(req)
            const data = await usersModel.deleteOne({_id:id}); // "deleteOne" realiza el borrado físico en la BD
            //const data = await usersModelModel.delete({_id:id}); // "delete" realiza el borrado lógico
            res.send(data)    
        }catch(err){
            //console.log(err)
            handleHttpError(res, 'ERROR_DELETE_ITEM')
        }
    }
    

    module.exports = { getItems, getItem, createItem, updateItem,deleteItem }; 