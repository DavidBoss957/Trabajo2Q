/*const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {const data = ["hola", "mundo", "users"]
res.send({data})})
module.exports = router*/
const { validationResult } = require('express-validator');
const { matchedData } = require('express-validator');
const usersModel = require('../models/nosql/users'); // Adjust the path accordingly
const { handleHttpError } = require('../utils/handleError');




const express = require("express")
const router = express.Router()
//controller load
const { getUsers, getUser, createUser, updateUser,deleteUser} = require("../controllers/users")
//validator load 
const { validatorCreateUser,validatorGetUser } = require("../validators/users")
//API CUSTOM VALIDATOR
const customHeader = require("../middleware/customHeader")

//controller links
//GET list users
router.get("/", getUsers)
//Get 1 solo item
router.get("/:id",validatorGetUser, getUser)
//POST Create user
//validator link + customheader api validator 
router.post("/", validatorCreateUser, customHeader, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Continue with the request handling
    try {
        const body = matchedData(req);
        console.log("Request Body:", body);
    
        // Llenar automáticamente los campos según el valor de 'cargo'
        switch (body.cargo) {
            case "alumno":
            case "alumni":
                body.role = "usuario";
                break;
            case "profesor":
                body.role = "creador";
                break;
            case "coordinador":
            case "departamento":
                body.role = "administrador";
                break;
            // Agrega casos adicionales según sea necesario
    
            default:
                break;
        }
    
        // Ahora 'body' tiene el campo 'role' actualizado
        const data = await usersModel.create(body);
        console.log("Data created:", data);
        res.send(data);
    } catch (err) {
        console.error(err);
        handleHttpError(res, 'ERROR_CREATE_ITEMS');
    }
});

//UPDATE USER
router.put("/:id", validatorGetUser,validatorCreateUser,updateUser)

//Elimina un usuario de registro
router.delete("/:id", validatorGetUser, deleteUser)



module.exports = router