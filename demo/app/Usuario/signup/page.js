"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login_signup.css'

export default function Login() {
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email


    const router = useRouter();
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
        router.push("/")
    }

    const handleSignupRedirect = () => {
        router.push("/");
    }

    return (
        <div id="loginContent">
            <div src="x" className="mx-auto d-block mt-6"></div>
                <h1 id="titulo" className="text-center my-4 display-1 fw-bold">¡Bienvenid@ a U-tad Projects!</h1>

                <div id="containerFormularioSignup" className="d-flex justify-content-center mx-5 shadow-lg center">
                    <form className="" onSubmit={handleSubmit} >
                        
                        <h2 id="iniciar" className="text-center mb-4">Registrarse</h2>
                        
                        <div className="mb-3">
                            {/* Nombre */}
                            <label htmlFor="email" className="direccion body_type">Nombre*</label>
                                <div className="input-group input_direccion">
                                    <input type="text" id="email" className="form-control rounded-start body_type" placeholder="Escribe aqui..." required/>
                                </div>
                            {/* Apellidos */}
                            <label htmlFor="email" className="direccion body_type">Apellidos*</label>
                                <div className="input-group input_direccion">
                                    <input type="text" id="email" className="form-control rounded-start body_type" placeholder="Escribe aqui..." required/>
                                </div>
                            {/* Alias */}
                            <label htmlFor="email" className="direccion body_type">Alias</label>
                                <div className="input-group input_direccion">
                                    <input type="text" id="email" className="form-control rounded-start body_type" placeholder="Escribe aqui..." required/>
                                </div>
                            {/* Correo */}
                            <label htmlFor="email" className="direccion body_type">Dirección de correo electronico*</label>
                            <div className="input-group input_direccion">
                                <input type="text" id="email" className="form-control rounded-start body_type"  onChange={(e) => setEmail(e.target.value)} placeholder="mario.hurtado" required/>
                                <select id="emailType" className="form-select rounded-end body_type" onChange={(e) => setEmailType(e.target.value)}>
                                    <option value="@live.u-tad.com">@live.u-tad.com</option>
                                    <option value="@u-tad.com">@u-tad.com</option>
                                    <option value="@ext.live.u-tad.com">@ext.live.u-tad.com</option>
                                </select>
                            </div>
                        </div>

                        {/*contraseña */}
                        <div className="mb-4">
                            <label htmlFor='password' className="contrasena body_type">Contraseña*</label>
                            <input type="password" id='password' className="input_contrasena form-control rounded body_type" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required/>
                        </div>

                        {/*boton submit*/}
                        <div className="layout_boton_acceder">
                            <button type="submit" id="boton_acceder" className="body_type text_botton_acceder">Acceder</button>
                        </div>
                    </form>
                </div>
                <label id="textoIniciarSesion" onClick={handleSignupRedirect} style={{ cursor: "pointer" }}>¿Ya tienes una cuenta? Inicia sesión.</label>
        </div>
    );
}