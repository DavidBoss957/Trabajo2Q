const mongoose = require("mongoose");
//const mongooseDelete = require("mongoose-delete")

const trabajoSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        titulacion: {
            type: String,
            required: true
        },
        anocreacion: {
            type: Number,
            required: true
        },
        autores:{
            type: String,
            required: true
        },
        docentesImplicados: {
            type: String,
            required: true   
        },
        asignatura:{
            type: String,
            required: true
        },
        resumen: {
            type: String,
            required: true
            
        },
        enlace: {
            type: String,
            required: true
        },
        premios: {
            type: String
        },
        palabrasClave: {
            type: [String],
            //lo pongo false para hacer los test de post
            required: true,
            validate: {
                validator: function(arr) {
                    return arr.length >= 5 && arr.length <= 10;
                },
                message: "Debe haber entre 5 y 10 palabras clave."
            }
        },
        resultadofinal: {
            url: {
                type: String,
                required: true
            },
            filename: {
                type: String,
                required: true
            }
        },
        memoria: {
            url: {
                type: String
            },
            filename: {
                type: String
            }      
        }
    },
       
    {
        timestamp: true, // TODO createdAt, updatedAt
        versionKey: false
    }
);
//StorageScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("trabajos", trabajoSchema);
