const mongoose = require("mongoose");

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
