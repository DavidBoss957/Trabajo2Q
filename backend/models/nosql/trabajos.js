const mongoose = require("mongoose");

const trabajoSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true
        },
        asignaturaProyecto: {
            type: String,
            required: true
        },
        cursoLetra: {
            type: String,
            required: true
        },
        estudiantesImplicados: [
            {
                nombreCompleto: {
                    type: String,
                    required: true
                }
            }
        ],
        docentesImplicados: [
            {
                nombreCompleto: {
                    type: String
                }
            }
        ],
        fichaResumen: {
            descripcionTrabajo: {
                type: String,
                required: true
            },
            factorDiferenciador: {
                type: String,
                required: true
            }
        },
        cursoAcademico: {
            type: String,
            required: true
        },
        subidaContenido: {
            trabajoProyecto: {
                type: String,
                required: true
            },
            memoria: {
                type: String
            },
            enlaceRecursosExternos: {
                type: String
            }
        },
        premios: {
            type: String
        },
        palabrasClave: {
            type: [String],
            required: true,
            validate: {
                validator: function(arr) {
                    return arr.length >= 5 && arr.length <= 10;
                },
                message: "Debe haber entre 5 y 10 palabras clave."
            }
        }
    },
    {
        timestamp: true, // TODO createdAt, updatedAt
        versionKey: false
    }
);

module.exports = mongoose.model("trabajos", trabajoSchema);
