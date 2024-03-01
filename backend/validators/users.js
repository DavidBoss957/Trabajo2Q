const { body, check } = require("express-validator");
const validateResults = require("../utils/handleValidator");
// Expresión regular para validar los correos electrónicos
const emailRegex = /@(live\.u-tad\.com|u-tad\.com|ext\.u-tad\.com)$/;
// Validador para la creación de usuarios
const validatorCreateUser = [
    body('name').isString().notEmpty(),
    body('apellido1').isString(),
    body('apellido2').isString(),
    body('alias').isString(),
    body('cargo').isString().isIn(["alumno", "alumni", "profesor", "coordinador", "departamento"]).notEmpty(),
    body('email').isEmail().matches(emailRegex).withMessage('El correo electrónico debe ser de @live.u-tad.com o @u-tad.com').notEmpty(),
    body('password').isString().notEmpty(),
];
// Validador para obtener un usuario
const validatorGetUser = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
    ]

	module.exports = { validatorCreateUser, validatorGetUser}

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