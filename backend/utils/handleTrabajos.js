const multer = require("multer")
const trabajos = multer.diskStorage({
        destination:function(req, file, callback){ //Pasan argumentos automáticamente
            const pathTrabajos = __dirname+"/../trabajos"
            callback(null, pathTrabajos) //error y destination
        },
        filename:function(req, file, callback){ //Sobreescribimos o renombramos
            //Tienen extensión jpg, pdf, mp4
            const ext = file.originalname.split(".").pop() //el último valor
            const filename = "file-"+Date.now()+"."+ext
            callback(null, filename)
        }
    })
    const uploadMiddleware = multer({trabajos}) //Middleware entre la ruta y el controlador
    module.exports = uploadMiddleware