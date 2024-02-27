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
        role: {
            type: String,
            enum: ["alumno", "alumni", "profesor", "coordinador", "departamento"],
            required: true
        },
        promocion: {
            type: String, // Only applicable for "alumni"
            required: function() {
                return this.role === "alumni";
            }
        },
        departamento: {
            type: String, // Only applicable for "departamento"
            required: function() {
                return this.role === "departamento";
            }
        },
        grado: {
            type: String,
            required: function() {
                return ["alumno", "alumni"].includes(this.role);
            }
        },
        categoria: {
            type: String,
            enum: ["usuario", "creador", "administrador"],
            required: true,
            default: function() {
                if (["alumno", "alumni"].includes(this.role)) return "usuario";
                if (this.role === "profesor") return "creador";
                if (["coordinador", "departamento"].includes(this.role)) return "administrador";
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
