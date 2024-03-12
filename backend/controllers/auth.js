const { matchedData } = require("express-validator")
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const {handleHttpError} = require("../utils/handleError")
const {usersModel} = require("../models")

/**
 * Encargado de registrar un nuevo usuario
 * @param {*} req 
 * @param {*} res 
 */
const registerCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const password = await encrypt(req.password)
        const body = {...req, password} // Con "..." duplicamos el objeto y le añadimos o sobreescribimos una propiedad
        const dataUser = await usersModel.create(body)
        //Si no queremos que se devuelva el hash con "findOne", en el modelo de users ponemos select: false en el campo password
        //Además, en este caso con "create", debemos setear la propiedad tal que:  
        dataUser.set('password', undefined, { strict: false })

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }
        res.send(data)  
    }catch(err) {
        console.log(err)
        handleHttpError(res, "ERROR_REGISTER_USER")
    }
}


/**
 * Encargado de hacer login del usuario
 * @param {*} req 
 * @param {*} res 
 */
const loginCtrl = async (req, res) => {
    try {
        req = matchedData(req)
        const user = await usersModel.findOne({ email: req.email }).select("password name role email")

        if(!user){
            handleHttpError(res, "USER_NOT_EXISTS", 404)
            return
        }
        
        const hashPassword = user.password;
        const check = await compare(req.password, hashPassword)

        if(!check){
            handleHttpError(res, "INVALID_PASSWORD", 401)
            return
        }

        //Si no quisiera devolver el hash del password
        user.set('password', undefined, {strict: false})
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send(data)

    }catch(err){
        console.log(err)
        handleHttpError(res, "ERROR_LOGIN_USER")
    }
}

/*
const updateUser = async (req, res) => {
    try {
      const { id } = req.params; // Obtener el ID del usuario de los parámetros de la solicitud
      const { role } = req.body; // Obtener el nuevo rol del cuerpo de la solicitud
  
      // Verificar si el ID proporcionado es válido
      if (!id) {
        handleHttpError(res, "INVALID_ID", 400);
        return;
      }
  
      // Verificar si se proporcionó un nuevo rol
      if (!role) {
        handleHttpError(res, "MISSING_ROLE", 400);
        return;
      }
  
      // Actualizar el usuario por su ID y establecer el nuevo rol
      const updatedUser = await usersModel.findByIdAndUpdate(
        id,
        { role },
        { new: true }
      );
  
      // Verificar si se encontró y actualizó el usuario correctamente
      if (!updatedUser) {
        handleHttpError(res, "USER_NOT_FOUND", 404);
        return;
      }
  
      // Enviar respuesta con el usuario actualizado
      res.json({ message: "User role updated successfully", user: updatedUser });
    } catch (err) {
      handleHttpError(res, "UPDATE_FAILED", 500);
    }
  }; */
  
  const updateUser = async (req, res) => {
    try {
      const { email } = req.params; // Obtener el email del usuario de los parámetros de la solicitud
      const { role } = req.body; // Obtener el nuevo rol del cuerpo de la solicitud
  
      // Verificar si el email proporcionado es válido
      if (!email) {
        handleHttpError(res, "INVALID_EMAIL", 400);
        return;
      }
  
      // Verificar si se proporcionó un nuevo rol
      if (!role) {
        handleHttpError(res, "MISSING_ROLE", 400);
        return;
      }
  
      // Actualizar el usuario por su email y establecer el nuevo rol
      const updatedUser = await usersModel.findOneAndUpdate(
        { email },
        { role },
        { new: true }
      );
  
      // Verificar si se encontró y actualizó el usuario correctamente
      if (!updatedUser) {
        handleHttpError(res, "USER_NOT_FOUND", 404);
        return;
      }
  
      // Enviar respuesta con el usuario actualizado
      res.json({ message: "User role updated successfully", user: updatedUser });
    } catch (err) {
      handleHttpError(res, "UPDATE_FAILED", 500);
    }
  };
  
  module.exports = updateUser;
  

module.exports = { registerCtrl, loginCtrl,updateUser }