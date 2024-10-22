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
const { getUsers, getUser, createUser, updateUser, deleteUser } = require("../controllers/users")
//validator load 
const { validatorCreateUser, validatorGetUser, validatorUpdateUser } = require("../validators/users");
const authMiddleware = require('../middleware/session');
//API CUSTOM VALIDATOR


//controller links
//GET list users
router.get("/", getUsers)

//Get 1 solo item
//router.get("/:email", validatorGetUser, getUser)
router.get("/:email", authMiddleware, validatorGetUser, getUser) //con JWT desde front

//POST Create user
//validator link + customheader api validator 

router.post("/", validatorCreateUser, async (req, res) => {

    // Check for validation errors
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json({ errors: errors.array() });
    // }


    // Continue with the request handling
    try {
        const body = matchedData(req);
        console.log("Request Body:", body);

        // Llenar automáticamente los campos según el valor de 'cargo'
        switch (body.cargo) {
            case "alumno":
                body.role = "usuario";
                break;

            case "alumni":
                body.role = "usuario";
                body.promocion = body.promocion || "2021"; // Asumimos que el valor por defecto es "2021"
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

router.post("/", validatorCreateUser, createUser)

//UPDATE USER
router.put("/:email", validatorGetUser, validatorUpdateUser, updateUser)

//Elimina un usuario de registro
router.delete("/:id", validatorGetUser, deleteUser)



module.exports = router