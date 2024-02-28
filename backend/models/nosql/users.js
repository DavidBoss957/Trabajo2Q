
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

/*const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
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
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);

*/