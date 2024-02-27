/*const express = require("express")
const router = express.Router()
router.get("/", (req, res) => {const data = ["hola", "mundo", "users"]
res.send({data})})
module.exports = router*/
const express = require("express")
const router = express.Router()
//controller load
const { getItems, getItem, createItem, updateItem, deleteItem} = require("../controllers/users")
//validator load 
const { validatorCreateItem,validatorGetItem } = require("../validators/tracks")
//API CUSTOM VALIDATOR
const customHeader = require("../middleware/customHeader")

//controller links
router.get("/", getItems)
//para un solo item
router.get("/:id", getItem)
//validator link + customheader api validator 
router.post("/", validatorCreateItem,customHeader,createItem)

//UPDATE ITEM
router.put("/:id", updateItem)

//Elimina un registro
router.delete("/:id", deleteItem)



module.exports = router