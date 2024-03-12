const express = require("express")
const { registerCtrl, loginCtrl, updateUser } = require("../controllers/auth")
const {validatorRegister, validatorLogin} = require("../validators/auth")
const router = express.Router()
const authMiddleware = require("../middleware/session")
const checkRol = require("../middleware/rol")

//POST http://localhost:3000/api/auth/register
router.post("/register", validatorRegister, registerCtrl)

//POST http://localhost:3000/api/auth/login
router.post("/login", validatorLogin, loginCtrl) 
//PUT  http://localhost:3000/api/auth/:id
router.put("/update/:email",authMiddleware,checkRol(["admin"]), updateUser) 
//router.put("/:id",authMiddleware,checkRol(["admin"]), updateUser) 

module.exports = router
