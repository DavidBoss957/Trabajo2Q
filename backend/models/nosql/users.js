/*
const mongoose = require("mongoose")
//const mongooseDelete = require("mongoose-delete")

const UserScheme = new mongoose.Schema(
    {
        name: {
            type: String
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true
        },
        password:{
            type: String,  // TODO Guardaremos el hash
            select: false
        },
        role:{
            type: String,
            enum: ["user", "admin","creator"], // es como el enum de SQL
            default: "user"
        }
    },
    {
        timestamp: true, // TODO createdAt, updatedAt
        versionKey: false
    }
)
//UserScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("users", UserScheme) // Nombre de la colección (o de la tabla en SQL)
*/
const mongoose = require("mongoose");
//const mongooseDelete = require("mongoose-delete")

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        apellidos: {
            type: String
        },
        alias: {
            type: String
        },
        cargo: {
            type: String,
            enum: ["alumno", "alumni", "profesor", "coordinador", "departamento"],
            // required: true
        },
        promocion: {
            type: String, // Only applicable for "alumni"
            // required: function() {
            //     return this.cargo === "alumni";
            // }
        },
        departamento: {
            type: String, // Ahora con opciones seleccionables
            enum: ["profesorado", "secretaria", "sistemas"] // Opciones disponibles
        },
        grado: {
            type: String,
            enum: [
                "Grado en Dirección de Empresas de Entretenimiento Digital",
                "Grado en Efectos Visuales",
                "Grado en Animación",
                "Grado en Diseño Digital",
                "Grado en Diseño de Productos Interactivos + Título Propio en Technical Design para Unreal Engine",
                "Grado en Ingeniería del Software",
                "Doble Grado en Matemática Computacional e Ingeniería del Software",
                "Doble Grado en Física Computacional e Ingeniería del Software"
            ]
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
        },
        notificarAparicionDeNombre: {
            type: Boolean,
            default: false
        },
        notificarProyectoAceptado: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

//UserScheme.plugin(mongooseDelete, {overrideMethods: "all"})
module.exports = mongoose.model("users", userSchema);

