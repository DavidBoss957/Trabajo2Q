const express = require("express")
const router = express.Router()
//controller load
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/trabajos")
//validator load 
const { validatorCreateItem,validatorGetItem } = require("../validators/trabajos")
//API CUSTOM VALIDATOR
const customHeader = require("../middleware/customHeader")

//controller links
//GET list trabajos
router.get("/", getItems)
//Get 1 solo item
router.get("/:id",validatorGetItem, getItem)
//POST Create trabajo
//validator link + customheader api validator 
router.post("/", validatorCreateItem,customHeader,createItem)

//UPDATE TRABAJO
router.put("/:id", validatorGetItem,validatorCreateItem,updateItem)

//Elimina un trabajo de registro
router.delete("/:id",validatorGetItem, deleteItem)



module.exports = router