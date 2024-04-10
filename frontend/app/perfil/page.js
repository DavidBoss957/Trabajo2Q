"use client"

import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/perfil.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
const jwt = require('jsonwebtoken');

//recibe el email y el token de sesión
const getUserInfo = async (email, tokenJWT) => {

    try {
        
        const res = await fetch(`http://localhost:3000/api/users/${email}`, {
            headers: {
                'Authorization': `Bearer ${tokenJWT}`
            }
        });
        if (res.ok) {
            const userInfo = await res.json();
            return userInfo;
        } else {
            console.error('Error al recibir la información');
        }

    } catch (e) {
        console.error('Error al hacer la petición: ', e);
    }
}

export default function Perfil() {

    const [userInfo, setUserInfo] = useState("") //toda la información del usuario
    const [updateAlias, setUpdateAlias] = useState("") //alias modificado
    const [updateNotificacionAceptado, setUpdateNotificacionAceptado] = useState(false) //actualiza las notificaciones de proyectos aceptados
    const [updateNotificacionMencion, setUpdateNotificacionMencion] = useState(false) //actualiza las notificaciones de menciones en proyectos

    const router = useRouter();

    useEffect(() => {
        // Recuperar token de local storage
        const tokenJWT = localStorage.getItem('token');
        const decodedToken = jwt.decode(tokenJWT); // Decodificar token
        const email = decodedToken.email;   // Extraer email del token
        
        getUserInfo(email, tokenJWT).then(userInfo => { //envia el token y el email
            setUserInfo(userInfo); 
            setUpdateNotificacionAceptado(userInfo.notificarProyectoAceptado); //actualiza las notificaciones de proyectos aceptados
            setUpdateNotificacionMencion(userInfo.notificarAparicionDeNombre); //actualiza las notificaciones de menciones en proyectos
        });
    }, []);

    const handleCerrarSesion = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        localStorage.removeItem('token');
        router.push('/MainPage');
    };

    //implementar funcion post para actualizar los datos del usuario
    const handleUpdateUser = async (userInfo) => {

        //alert("Actualizando información de usuario...")
        //objeto con los datos que hay que actualizar
        const updateInfo = {
            name: userInfo.name,
            apellidos: userInfo.apellidos,
            alias: updateAlias,
            email: userInfo.email,
            role: userInfo.role,
            notificarAparicionDeNombre: updateNotificacionMencion,
            notificarProyectoAceptado: updateNotificacionAceptado
        }

        console.log(updateInfo)

        const tokenJWT = localStorage.getItem('token');
        const decodedToken = jwt.decode(tokenJWT); // Decodificar token
        const email = decodedToken.email;   // Extraer email del token

        //console.log(email)

        try {

            const response = await fetch (`http://localhost:3000/api/users/${email}`, {
                method: 'PUT',
                headers: {
                    //'Authorization': `Bearer ${tokenJWT}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateInfo)
            });
            console.log("Respuesta: " + response.ok)
            const data = await response.json()
            console.log(data)
            if (response.ok) {
                const data = await response.json()
                //console.log(data)
            } else {
                console.error("Error al actualizar la informacion")
            }

        } catch (e) {
            console.error("Error al hacer la petición: ", e)
        }

    }
    
    return (
        <div id="perfilContainer">
            
            <div id="elementosPerfil" className="mx-5 w-75">

                {/* HACER MAP DE userInfo */}
                
                {/* Imagen */}
                <img src="img/default_profile.png" className="img-fluid mx-auto d-block mt-5 rounded-circle" alt="default"/>
                
                {/* Nombre y apellidos */}
                <h2 id="nombre_apellidos">{userInfo.name} {userInfo.apellidos}</h2>

                {/* Alias */}
                <h2 id="aliasTitulo" className='text-center mt-3'>{userInfo.alias}</h2>

                {/* Botones proyectos */}
                <button type="submit" className="btn mt-4 text-center rounded-4 px-3 me-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Solicitudes de proyectos</div></button>
                {/* SOLO ADMIN */}
                {userInfo.role === "admin" && (
                    <button type="submit" id="administrarUsuarios" className="btn mt-4 text-center rounded-4 px-3" style={{background: '#A1A1A1'}}>
                        <div className='textoBoton'>Administrar usuarios</div>
                    </button>
                )}

                {/* Informacion general */}
                <div>
                    <h3 id="infogeneral" className="mt-5 mb-4">Informacion general</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Nombre Completo</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">{userInfo.name} {userInfo.apellidos}</p>
                    </div>
                    <div className="row mx-0"> {/* ACTUALIZABLE */}
                        <p className="info col rounded-start-4 py-2 infoDatos">Alias</p>
                        <input type="text" id="infoAlias" className="info col rounded-end-4 py-2"  onChange={(e) => setUpdateAlias(e.target.value)} placeholder={userInfo.alias}/>
                    </div>
                </div>
                
                {/* Informacion en utad */}
                <div>
                    <h3 id="infogeneral" className="mt-4 mb-4">Informacion en U-tad</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Dirección de correo electrónico</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">{userInfo.email}</p>
                    </div>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Cargo</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">Cargo</p>
                    </div>
                     {/* AÑADIR TIPO Y NOMBRE DE TITULACION */}
                </div>

                {/* Preferencias y notificaciones */}
                <div>
                    <h3 id="infogeneral" className="mt-4 mb-4">Preferencias y notificaciones</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Idioma</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">Español</p> {/* ACTUALIZABLE */}
                    </div>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Notificaciones</p>
                        <div className="info col py-2 infoDatos infoNotificaciones">
                            <input type="checkbox" id="notificacionCheckbox" onChange={(e) => setUpdateNotificacionAceptado(e.target.checked)} checked={updateNotificacionAceptado}/>
                            <label htmlFor="notificacionCheckbox" className="ms-1">Proyectos aceptados</label>
                        </div>
                        <div className="info col rounded-end-4 py-2 infoDatos infoNotificaciones">
                            <input type="checkbox" id="notificacionCheckbox" onChange={(e) => setUpdateNotificacionMencion(e.target.checked)} checked={updateNotificacionMencion}/>
                            <label htmlFor="notificacionCheckbox" className="ms-1">Menciones en proyectos</label>
                        </div>
                    </div>
                </div>

                {/* Botones cuenta */}
                <div className="d-flex justify-content-center">
                    <button className="btn mt-4 text-center rounded-4 px-4 me-3" onClick={handleCerrarSesion} style={{background: '#A1A1A1'}}><div className='textoBoton'>Cerrar sesión</div></button>
                    <button type="submit" className="btn mt-4 text-center rounded-4 px-3" onClick={() => handleUpdateUser(userInfo)} style={{background: '#A1A1A1'}}><div className='textoBoton'>Actualizar perfil</div></button>
                </div>
                


            </div>

            <Footer/>
        </div>
    )

}