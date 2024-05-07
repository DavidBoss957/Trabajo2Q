"use client"

import Footer from '@/components/Footer';
import NavbarSecundario from '@/components/NavbarSecundario';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/perfil.css'
import '../globals.css'
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
    const [updateAlias, setUpdateAlias] = useState("") //alias modificado (por defecto es el que tiene actualmente el usuario)
    const [updateNotificacionAceptado, setUpdateNotificacionAceptado] = useState(false) //actualiza las notificaciones de proyectos aceptados
    const [updateNotificacionMencion, setUpdateNotificacionMencion] = useState(false) //actualiza las notificaciones de menciones en proyectos
    const [updateGrado, setUpdateGrado] = useState(undefined) //actualiza el grado del usuario
    const [editAlias, setEditAlias] = useState(false) //comprueba si se está editando el alias del usuario
    const [cambios, setCambios] = useState(false) //comprueba si se han realizado cambios en la información del usuario

    const router = useRouter();

    useEffect(() => {
        // Recuperar token de local storage
        const tokenJWT = localStorage.getItem('token');
        const decodedToken = jwt.decode(tokenJWT); // Decodificar token
        const email = decodedToken.email;   // Extraer email del token
        
        getUserInfo(email, tokenJWT).then(userInfo => { //envia el token y el email
            setUserInfo(userInfo); 
            setUpdateAlias(userInfo.alias); //actualiza el alias del usuario
            setUpdateGrado(userInfo.grado); //actualiza el grado del usuario
            setUpdateNotificacionAceptado(userInfo.notificarProyectoAceptado); //actualiza las notificaciones de proyectos aceptados
            setUpdateNotificacionMencion(userInfo.notificarAparicionDeNombre); //actualiza las notificaciones de menciones en proyectos
        });

    }, []);

    const handleCerrarSesion = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        localStorage.removeItem('token');
        router.push('/login');
    }

    //implementar funcion post para actualizar los datos del usuario
    const handleUpdateUser = async (userInfo) => {

        //alert("Actualizando información de usuario...")
        //objeto con los datos que hay que actualizar
        const updateInfo = {
            alias: updateAlias,
            notificarAparicionDeNombre: updateNotificacionMencion,
            notificarProyectoAceptado: updateNotificacionAceptado,
            grado: updateGrado
        }

        const tokenJWT = localStorage.getItem('token');
        const decodedToken = jwt.decode(tokenJWT); // Decodificar token
        const email = decodedToken.email;   // Extraer email del token

        try {

            const response = await fetch (`http://localhost:3000/api/users/${email}`, {
                method: 'PUT',
                headers: {
                    //'Authorization': `Bearer ${tokenJWT}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateInfo)
            });
            // console.log("Respuesta: " + response.ok)
            if (response.ok) {
                alert("Información actualizada correctamente")
            } else {
                console.error("Error al actualizar la informacion")
            }

            setEditAlias(false)
            setCambios(false)

        } catch (e) {
            console.error("Error al hacer la petición: ", e)
        }

    }
    
    return (

        <div id="perfilContainer">

            <NavbarSecundario />
            
            <div id="elementosPerfil" className="mx-5 w-75">

                {/* HACER MAP DE userInfo */}
                
                {/* Imagen */}
                <img src="img/default_profile.png" id="foto-perfil" className="img-fluid mx-auto d-block mt-5 rounded-circle" alt="default"/>
                
                {/* Nombre y apellidos */}
                <h2 className='text-center mt-3 montserrat-h1'>{userInfo.name} {userInfo.apellidos}</h2>

                {/* Alias */}
                <h2 className='text-center mt-2 montserrat-h2'>{userInfo.alias}</h2>

                {/* Botones proyectos */}
                <div className='d-flex mt-5'>
                    <button type="submit" className="me-3 secundario-blanco montserrat-h3" style={{background: '#FFF', color: '#0065EF'}}>SOLICITUDES DE PROYECTOS</button>
                    
                    {/* SOLO ADMIN */}
                    {userInfo.role === "admin" && (
                        <button type="submit" id="administrarUsuarios" className="secundario-blanco montserrat-h3" style={{background: '#FFF', color: '#0065EF'}}>ADMINISTRAR USUARIOS</button>
                    )}
                </div>

                {/* Informacion general */}
                <div>
                    <h3 className="mt-5 mb-4 montserrat-h2">Informacion general</h3>
                    <div className="row mx-0">
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">Nombre Completo</p>
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">{userInfo.name} {userInfo.apellidos}</p>
                        <hr className="separacion" />
                    </div>
                    
                    <div className="row mx-0 mt-2"> {/* ACTUALIZABLE */}
                        <p className="col-6 py-2 px-0 mx-0 my-0 montserrat-body">Alias</p>

                        {editAlias === false ? (
                            <p className="col-5 py-2 px-0 mx-0 my-0 montserrat-body">{userInfo.alias}</p>
                        ) : (
                            <input type="text" id="inputAlias" className="col-5 py-2 px-0 mx-0 my-0 montserrat-body" onChange={(e) => {setUpdateAlias(e.target.value); setCambios(true);}} placeholder="Escribe aquí..."/>
                        )}

                        <button id="botonEditar" className="col-1 py-0 px-0 mx-0 my-0" onClick={(e) => {setEditAlias(true); setCambios(true)}}>
                            <img src="img/edit.png" id="imgEditar" alt="editar"/>
                        </button>
                        
                        <hr className="separacion" />
                    </div>
                    
                </div>
                
                {/* Informacion en utad */}
                <div>
                    <h3 className="mt-4 mb-4 montserrat-h2">Informacion en U-tad</h3>
                    <div className="row mx-0">
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">Dirección de correo electrónico</p>
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">{userInfo.email}</p>
                        <hr className="separacion" />
                    </div>
                    <div className="row mx-0">
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">Cargo</p>
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">{userInfo.cargo}</p>
                        <hr className="separacion" />
                    </div>
                     {/* AÑADIR TIPO Y NOMBRE DE TITULACION */}
                    <div className="row mx-0">
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">Área</p>
                        
                        <div className="col py-2 px-0 mx-0 my-0 montserrat-body ">
                            <button type="button" id="selectGrado" className="dropdown-toggle px-0 mx-0" data-bs-toggle="dropdown" aria-expanded="false">{updateGrado ? updateGrado : "Elige tu área"}</button>
                            <ul id="listado" className="dropdown-menu px-0 mx-0 dropdown-personalizado">
                                <li className="dropdown-header mx-0 montserrat-h3" style={{color: '#14192C'}}>Grados</li>
                                <li><hr className="dropdown-divider mx-3"/></li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Animación"); setCambios(true)}}>Animación</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Diseño Digital"); setCambios(true)}}>Diseño Digital</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Efectos Visuales"); setCambios(true)}}>Efectos Visuales</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Diseño de Productos Interactivos"); setCambios(true)}}>Diseño de Productos Interactivos</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Ingeniería de Software"); setCambios(true)}}>Ingeniería de Software</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Física Computacional e Ingeniería del Software"); setCambios(true)}}>Física Computacional e Ingeniería del Software</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Matemática Computacional e Ingeniería del Software"); setCambios(true)}}>Matemática Computacional e Ingeniería del Software</li>
                                <li className="dropdown-item mx-0 mb-3 montserrat-h3" onClick={(e) => {setUpdateGrado("Dirección de Empresas de Entretenimiento Digital"); setCambios(true)}}>Dirección de Empresas de Entretenimiento Digital</li>
                                <li className="dropdown-header mx-0 montserrat-h3" style={{color: '#14192C'}}>Ciclos</li>
                                <li><hr className="dropdown-divider mx-3"/></li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Marketing y publicidad"); setCambios(true)}}>Marketing y Publicidad</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Artes plásticas y Diseño en Animación"); setCambios(true)}}>Artes plásticas y Diseño en Animación</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Artes plásticas y Diseño en Ilustración"); setCambios(true)}}>Artes plásticas y Diseño en Ilustración</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Desarrollo de Aplicaciones Multiplataforma"); setCambios(true)}}>Desarrollo de Aplicaciones Multiplataforma</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Desarrollo de Aplicaciones Web"); setCambios(true)}}>Desarrollo de Aplicaciones Web</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Administración de Sistemas Informáticos en Red"); setCambios(true)}}>Administración de Sistemas Informáticos en Red</li>
                                <li className="dropdown-item mx-0 montserrat-h3" onClick={(e) => {setUpdateGrado("Animaciones 3D, Juegos y Entornos Interactivos"); setCambios(true)}}>Animaciones 3D, Juegos y Entornos Interactivos</li>
                                
                            </ul>
                        </div>

                        <hr className="separacion" />
                    </div>
                </div>

                {/* Preferencias y notificaciones */}
                <div>
                    <h3 className="mt-4 mb-4 montserrat-h2">Preferencias y notificaciones</h3>
                    <div className="row mx-0">
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">Idioma</p>
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body">Español</p>
                        <hr className="separacion" />
                    </div>
                    <div className="row mx-0 my-0">
                        <p className="col py-2 px-0 mx-0 my-0 montserrat-body d-flex justify-content-start align-items-end" id="textoNotificacion" >Notificaciones (correo electrónico)</p>
                        <div className="col py-2 px-0 mx-0 my-0 montserrat-body">
                            <div className="mx-0 mb-3">
                                <label htmlFor="notificacionCheckbox1" className="col-10">Actualización del estado de subida de mi proyecto</label>
                                <input type="checkbox" id="notificacionCheckbox1" className="col-2" onChange={(e) => {setUpdateNotificacionAceptado(e.target.checked); setCambios(true);}} checked={updateNotificacionAceptado}/>
                            </div>

                            <div className="mx-0">
                                <label htmlFor="notificacionCheckbox2" className="col-10">Mención en un nuevo proyecto subido a la plataforma</label>
                                <input type="checkbox" id="notificacionCheckbox2" className="col-2" onChange={(e) => {setUpdateNotificacionMencion(e.target.checked); setCambios(true);}} checked={updateNotificacionMencion}/>
                            </div>
                            
                        </div>
                        
                    </div>
                    <hr className="separacion my-0" />
                </div>

                {/* Botones cuenta */}
                <div className="d-flex justify-content-center mt-4">
                    <button className="mt-4 text-center rounded-4 px-4 me-3 negativo-gris montserrat-h3" onClick={handleCerrarSesion} style={{color: 'white'}}>CERRAR SESION</button>
                    
                    {cambios === true && (
                        <button type="submit" className="mt-4 text-center rounded-4 px-3 secundario-blanco montserrat-h3" onClick={() => handleUpdateUser(userInfo)} style={{color: '#0065EF'}}>ACTUALIZAR PERFIL</button>
                    )}
                    
                </div>
                


            </div>

            <Footer/>
        </div>
    )

}