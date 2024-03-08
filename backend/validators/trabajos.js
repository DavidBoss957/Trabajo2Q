const validateResults = require("../utils/handleValidator");
const { body, check } = require("express-validator");

//VALIDAR TRABAJOS
const validatorCreateItem = [
    check("titulo").exists().notEmpty(), //.isLength(min:5, max:90)	check("album").exists().notEmpty(),
	check("titulacion").exists().notEmpty(),
	check("anocreacion").exists().notEmpty().isInt(),
	check("autores").exists().notEmpty(),
	check("docentesImplicados").exists().notEmpty(),
	check("asignatura").exists().notEmpty(),
	check("resumen").exists().notEmpty(),
	check("enlace").exists().notEmpty(),
	check("premios").exists().notEmpty(),
	check("palabrasClave").exists().notEmpty(),
	check("resultadofinal.url").exists().notEmpty(),
    check("resultadofinal.filename").exists().notEmpty(),
	(req, res, next) => validateResults(req, res, next)
];
// Validador para obtener un usuario
const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
]

	module.exports = { validatorCreateItem, validatorGetItem}



/*
    ESTRUCTURA DE UN TRABAJO A VALIDAR
{
  "titulo": "proyecto1",
  "titulacion": "inso",
  "anocreacion": "2024",
  "autores": "larys,wokis,telkis",
  "docentesImplicados": "profesor,dumbeldore,voldemort",
  "asignatura": "hacking",
  "resumen": "es una proyecto que se basa en lorem ipsum",
  "enlace": "www.loreloremacumacu.com",
  "premios": "premios2024",
  "palabrasClave": "antia,lorem,ipsum,proyecto,2024,premios,asignatura,hacking",
  "resultadofinal": {
        "url": "asdfasdfasdf",
        "filename": "parecetrue"
    },
}

*/