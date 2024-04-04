"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/login_signup.css'
import Footer from '@/components/Footer';

export default function Login() {
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email


    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        router.push("/MainPage")
    }

    return (

        <div id="loginContent" className="container mt-3">

            <img src="img/default.png" className="img-fluid mx-auto d-block mt-5" alt="default"/>
            <h1 id="titulo" className="text-center my-4">Introducción</h1>

            <div id="containerFormulario" className="d-flex justify-content-center mx-5 my-5 ">
                <form className="px-5 py-5 rounded-4" onSubmit={handleSubmit} >
                    
                    <h2>Iniciar sesión</h2>
                    
                    {/* correo */}
                    <label htmlFor="email">Dirección de correo electrónico</label>
                    <div className="input-group mb-3 ">
                        <input type="text" id="email" className="form-control rounded-start-4"  onChange={(e) => setEmail(e.target.value)} placeholder="mario.hurtado" required/>
                        <select id="emailType" className="dropdown-toggle btn rounded-end-4" onChange={(e) => setEmailType(e.target.value)}>
                            <option value="@live.u-tad.com">@live.u-tad.com</option>
                            <option value="@u-tad.com">@u-tad.com</option>
                            <option value="@ext.live.u-tad.com">@ext.live.u-tad.com</option>
                        </select>
                    </div>

                    {/*contraseña */}
                    
                    <div className="mb-3">
                        <label htmlFor='password'>Contraseña</label>
                        <input type="password" id='password' className="form-control rounded-4" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required/>
                    </div>

                    {/*boton submit*/}
                    <div className="text-center">
                        <button type="submit" className="btn mt-4 text-center rounded-4 px-5" style={{background: '#C8C8C8'}}><div id='textoBoton'>Acceder</div></button>
                    </div>

                </form>
            </div>

        </div>
        
    );
}