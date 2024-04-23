"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';

export default function Login() {
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email


    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        router.push("/Usuario/MainPage")
    }

    return (
        <div id="loginContent" className="container mt-3">
            <div src="x" className="mx-auto d-block mt-6"></div>
                <h1 id="titulo" className="text-center my-4 display-1 fw-bold text-primary">AcademiaLink</h1>

                <div id="containerFormulario" className="d-flex justify-content-center mx-5 my-5 shadow-lg">
                    <form className="bg-white p-5 rounded-4" onSubmit={handleSubmit} >
                        
                        <h2 className="text-center mb-4">Iniciar sesión</h2>
                        
                        {/* correo */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Dirección de correo electrónico</label>
                            <div className="input-group">
                                <input type="text" id="email" className="form-control rounded-start"  onChange={(e) => setEmail(e.target.value)} placeholder="mario.hurtado" required/>
                                <select id="emailType" className="form-select rounded-end" onChange={(e) => setEmailType(e.target.value)}>
                                    <option value="@live.u-tad.com">@live.u-tad.com</option>
                                    <option value="@u-tad.com">@u-tad.com</option>
                                    <option value="@ext.live.u-tad.com">@ext.live.u-tad.com</option>
                                </select>
                            </div>
                        </div>

                        {/*contraseña */}
                        <div className="mb-4">
                            <label htmlFor='password' className="form-label">Contraseña</label>
                            <input type="password" id='password' className="form-control rounded" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required/>
                        </div>

                        {/*boton submit*/}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary mt-2 text-center rounded px-5">Acceder</button>
                        </div>

                    </form>
            </div>
        </div>
    );
}