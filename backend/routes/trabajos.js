const express = require("express")
const router = express.Router()
//controller load
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/trabajos")
//validator load 
const { validatorCreateUser,validatorGetUser } = require("../validators/users")
//API CUSTOM VALIDATOR
const customHeader = require("../middleware/customHeader")

//controller links
//GET list trabajos
router.get("/", getItems)
//Get 1 solo item
router.get("/:id",validatorGetUser, getItem)
//POST Create trabajo
//validator link + customheader api validator 
router.post("/", validatorCreateUser,customHeader,createItem)

//UPDATE TRABAJO
router.put("/:id", validatorGetUser,validatorCreateUser,updateItem)

//Elimina un trabajo de registro
router.delete("/:id", validatorGetUser, deleteItem)



module.exports = router