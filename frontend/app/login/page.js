"use client";
import Head from 'next/head';
import { useState } from 'react';

export default function Login() {
    
    let [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailType, setEmailType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        
        //comprobaciones
        if(email.includes("@")){
            //si el input del email contiene @, se elimina todo el contenido despues del @
            email = email.substring(0, email.indexOf("@"))
        }
        // if(emailType==""){
        //     //TODO sacarlo del handlesubmit para que no se envien con errores
        //     alert("Selecciona un tipo de email")
        // }

        //añadir comprobaciones de contraseñas


        const login = {
            email: email+emailType,
            password: password
        }

        //alert("Email: " + email + emailType + "\nContraseña: " + password);
        
        //TODO añadir llamada fetch
           
    }

    return (
        <div className="container">
            <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} required />
                    <select id="emailType" onChange={(e) => setEmailType(e.target.value)}>
                        <option value="">@</option>
                        <option value="@live.u-tad.com">@live.u-tad.com</option>
                        <option value="@u-tad.com">@u-tad.com</option>
                    </select>
                </div>
                
                
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <button type='submit'>Log In</button>
            </form>

        </div>
    );
}