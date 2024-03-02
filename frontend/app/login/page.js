"use client";
import Head from 'next/head';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    
    let [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailType, setEmailType] = useState("@live.u-tad.com")

    const handleSubmit = (e) => {
        //e.preventDefault();

        const login = {
            email: email+emailType,
            password: password
        }

        //TODO añadir llamada fetch
        alert("Iniciando sesion...")
           
    }

    const handleComprobacion = (e) => {
        e.preventDefault();
        
        //comprobaciones
        if(email.includes("@")){
            //si el input del email contiene @, se elimina todo el contenido despues del @
            email = email.substring(0, email.indexOf("@"))
        }
        if(emailType==""){
            //TODO sacarlo del handlesubmit para que no se envien con errores
            alert("Selecciona un tipo de email")
        }

        alert("Email: " + email + emailType + "\nContraseña: " + password);

        handleSubmit()
           
    }

    return (

        <div id="loginContent">
                        
            <img src="img/default.png" className="img-fluid mx-auto d-block mt-5" alt="default"/>
            
            <h1 id="titulo" className="text-center my-4">Introducción</h1>

            <div id="containerFormulario" className="d-flex justify-content-center mx-5 my-5 ">
                
                <form onSubmit={handleComprobacion} className="px-5 py-5 rounded-4 bg-secondary">
                    <h2>Iniciar sesión</h2>
                    {/* correo */}
                    <label htmlFor="email">Dirección de correo electrónico</label>
                    <div className="input-group mb-3 ">
                        <input type="text" id="email" className="form-control rounded-start-4"  onChange={(e) => setEmail(e.target.value)} placeholder="mario.hurtado" required/>
                        <select id="emailType" className="dropdown-toggle btn bg-light rounded-end-4" onChange={(e) => setEmailType(e.target.value)}>
                            <option value="@live.u-tad.com">@live.u-tad.com</option>
                            <option value="@u-tad.com">@u-tad.com</option>
                            <option value="@ext.live.u-tad.com">@ext.live.u-tad.com</option>
                        </select>
                    </div>

                    {/*contraseña */}
                    <label htmlFor='password'>Contraseña</label>
                    <div className="mb-3">
                        <input type="password" id='password' className="form-control rounded-4" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required/>
                    </div>

                    {/*boton submit*/}
                    <div className='text-center'>
                        <button type="submit" className="btn btn-light rounded-4 mt-4 text-center">Acceder</button>
                    </div>
                    

                </form>            
            </div>
        </div>
        
    );
}