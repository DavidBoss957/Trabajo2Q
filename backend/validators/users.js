const { check } = require("express-validator")
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
	check("name").exists().notEmpty(), //.isLength(min:5, max:90)	check("album").exists().notEmpty(),
	check("apellido1").exists().notEmpty(),
    check("apellido1").exists().notEmpty(),
    check("alias").exists().notEmpty(),
    check("cargo").exists().notEmpty(),
	check("role").exists().notEmpty(),
    check("email").exists().notEmpty(),
	check("password").exists().notEmpty(),	
	(req, res, next) => validateResults(req, res, next)
]
const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    ]

	module.exports = { validatorCreateItem, validatorGetItem}

	/*
	ESTRUCTURA DE USUARIOS para validar	
	 name: {
            type: String,
            required: true
        },
        apellido1: {
            type: String
        },
        apellido2: {
            type: String
        },
        alias: {
            type: String
        },
        cargo: {
            type: String,
            enum: ["alumno", "alumni", "profesor", "coordinador", "departamento"],
            required: true
        },
        promocion: {
            type: String, // Only applicable for "alumni"
            required: function() {
                return this.cargo === "alumni";
            }
        },
        departamento: {
            type: String, // Only applicable for "departamento"
            required: function() {
                return this.cargo === "departamento";
            }
        },
        grado: {
            type: String,
            required: function() {
                return ["alumno", "alumni"].includes(this.cargo);
            }
        },
        role: {
            type: String,
            enum: ["usuario", "creador", "administrador"],
            required: true,
            default: function() {
                if (["alumno", "alumni"].includes(this.cargo)) return "usuario";
                if (this.cargo === "profesor") return "creador";
                if (["coordinador", "departamento"].includes(this.cargo)) return "administrador";
            }
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            select: false
        }
	
	
	*/ 