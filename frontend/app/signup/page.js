"use client";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login_signup.css'

export default function Signup() {
    const [name, setName] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [alias, setAlias] = useState("") //alias
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email
    const [role, setRole] = useState("")


    const handleComprobacion = (e) => {
        e.preventDefault();

        //comprobaciones

        //si el input del email contiene @ -> se elimina todo el contenido despues del @ para evitar errores
        if(email.includes("@")){
            email = email.substring(0, email.indexOf("@"))
        }

        //asignacion de roles
        if(emailType === "@live.u-tad.com"){
            setRole("usuario")
        }else if(emailType === "@u-tad.com"){
            setRole("creador")
        }else if(emailType === "@ext.live.u-tad.com"){
            setRole("creador")
        }
        
        handleSubmit()
           
    }  

    const handleSubmit = async (e) => {
        //e.preventDefault();
        //alert("Email: " + email + emailType + "\nContraseña: " + password + "\nNombre: " + name +"\nApellidos: " + apellidos + "\nAlias: " + alias + "\nRol: " + role);


        //objeto con los datos de registro
        const signup = {
            name: name,
            apellidos: apellidos,
            alias: alias,
            role: role,
            email: email+emailType, //email=input+tipoEmail (alba+@live.u-tad.com)
            password: password
        }

        //alert("Registrandote...")
        try {
            const response = await fetch('/http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: {
                //Authorization: `Bearer ${tokenJWT}`
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signup)
            });
            
            if(response.ok) { //si se conecta bien al servidor
                const data = await response.json();
                //router.push("paginaprincipal")

            }else{ //si da error al conectarse
                console.error('Datos incorrectos')
            }

        }catch (e){
            console.error('Error al iniciar sesión:', e)
        }
           
    }

    return (
        <div id="signupContent" className="container mt-3">

            <img src="img/default.png" className="img-fluid mx-auto d-block mt-5" alt="default"/>
            <h1 id="titulo" className="text-center my-4">Introducción</h1>

            <div id="containerFormulario" className="d-flex justify-content-center mx-5 my-5 ">
                <form className="px-5 py-5 rounded-4" onSubmit={handleComprobacion}  >
                    
                    <h2>Registrarse</h2>
                    
                    {/*nombre*/}
                    <div className="mb-3">
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" className="form-control rounded-4" placeholder="Nombre" onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    {/* apellidos */}
                    <div className="mb-3">
                        <label htmlFor="apellidos">Apellidos</label>
                        <input type="text" id="apellidos" className="form-control rounded-4" placeholder="Apellidos" onChange={(e) => setApellidos(e.target.value)} required/>
                    </div>

                    {/* alias */}
                    <div className="mb-3">
                        <label htmlFor="alias">Alias</label>
                        <input type="text" id="alias" className="form-control rounded-4" placeholder="Alias" onChange={(e) => setAlias(e.target.value)}/>
                    </div>

                    {/*correo*/}
                    <label htmlFor="email">Dirección de correo electrónico</label>
                    <div className="input-group mb-3 ">
                        <input type="text" id="email" className="form-control rounded-start-4"  onChange={(e) => setEmail(e.target.value)} placeholder="mario.hurtado" required/>
                        <select id="emailType" className="dropdown-toggle btn rounded-end-4" onChange={(e) => setEmailType(e.target.value)}>
                            <option value="@live.u-tad.com">@live.u-tad.com</option>
                            <option value="@u-tad.com">@u-tad.com</option>
                            <option value="@ext.live.u-tad.com">@ext.live.u-tad.com</option>
                        </select>
                    </div>

                    {/*contraseña*/}
                    <div className="mb-3">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" id="password" className="form-control rounded-4" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    

                    {/* boton submit */}
                    <div className="text-center">
                        <button type="submit" className="btn mt-4 text-center rounded-4 px-5" style={{background: '#C8C8C8'}}><div id='textoBoton'>Registrarse</div></button>
                    </div>

                </form>
            </div>
        </div>
    );
}