"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login_signup.css'
import '../globals.css'

export default function Login() {
    
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email

    const router = useRouter();

    const handleSubmit = async (e) => {
        //e.preventDefault();

        //objeto con los datos de login
        const login = {
            email: email+emailType, //email=input+tipoEmail (alba+@live.u-tad.com)
            password: password
        }

        
        try {
            //console.log(login)
            const response = await fetch('http://localhost:3000/api/auth/login', {

                method: 'POST',
                headers: {
                //Authorization: `Bearer ${tokenJWT}`
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(login)
            });

            //console.log(response.ok)
            
            if(response.ok) { //si se conecta bien al servidor
                const data = await response.json();
                // Guardar email en local storage
                localStorage.setItem('token', data.token);
                router.push("/MainPage")

            }else{ //si da error al conectarse
                console.error('Datos incorrectos')
            }
            
            //console.log(response.ok)

        }catch (e){
            console.error('Error al iniciar sesión:', e)
        }
        //alert("Iniciando sesion...")
           
    }

    const handleComprobacion = (e) => {
        e.preventDefault();
        
        //comprobaciones
        if(email.includes("@")){
            //si el input del email contiene @, se elimina todo el contenido despues del @ para evitar errores
            email = email.substring(0, email.indexOf("@"))
        }
        
        //una vez se compruebe todo, se hace el submit
        handleSubmit()
           
    }

    return (
        <div id="loginContent" className="container my-5" style={{zoom: '80%'}}>

            <img src="img/Logo-Utad.png" id="imglogin" className="img-fluid mx-auto d-block my-5" alt="logo U-tad"/>
            <h1 className="text-center my-4 montserrat-h1">¡Bienvenid@ a U-tad Projects!</h1>

            <div id="containerFormulario" className="d-flex justify-content-center mx-5 mt-5">
                <form id="formLogin" className="px-5 py-5 rounded-4" onSubmit={handleComprobacion} >
                    
                    <h2 className="montserrat-h2 text-center">Iniciar sesión</h2>
                    
                    {/* correo */}
                    <label htmlFor="email" className="mt-4 mb-2 montserrat-body">Dirección de correo electrónico *</label>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control rounded-start-4 p-3 form-input montserrat-body" onChange={(e) => setEmail(e.target.value)} placeholder="Escribe aquí..." required/>
                        <select className="dropdown-toggle btn rounded-end-4" onChange={(e) => setEmailType(e.target.value)}>
                            <option value="@live.u-tad.com" className="montserrat-body">@live.u-tad.com</option>
                            <option value="@u-tad.com" className="montserrat-body">@u-tad.com</option>
                            <option value="@ext.live.u-tad.com" className="montserrat-body">@ext.live.u-tad.com</option>
                        </select>
                    </div>

                    {/*contraseña */}
                    
                    <div className="mb-3">
                        <label htmlFor='password' className="mt-2 mb-2 montserrat-body">Contraseña *</label>
                        <input type="password" className="form-control rounded-4 p-3 form-input montserrat-body" onChange={(e) => setPassword(e.target.value)} placeholder="Escribe aquí..." required/>
                    </div>

                    {/*boton submit*/}
                    <div className="text-center">
                        <button type="submit" className="btn mt-4 text-center rounded-4 px-4 py-3 principal-azul montserrat-h3" style={{background: '#0065EF', color: 'white'}}>ACCEDER</button>
                    </div>

                </form>
                
            </div>

            <div className="d-flex justify-content-center text-center mt-4">
                <p className="montserrat-body">¿Aún no tienes una cuenta?</p>
                <a className="ms-2 montserrat-body-underline" href="/signup">Regístrate.</a>
            </div>
            

        </div>
        
    );
}