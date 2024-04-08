"use client"

import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/perfil.css'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'

//implementar funcion get para listar la info del usuario
const getUserInfo = async (storedEmail) => {
    

    try {
        const res = await fetch(`http://localhost:3000/api/users/${storedEmail}`);
        console.log(res)
        if (res.ok) {
            const data = await res.json();
            console.log(data)
            return data;
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
    const [updateIdioma, setUpdateIdioma] = useState("") //actualiza el idioma de las notificaciones
    const [updateNotificacion, setUpdateNotificacion] = useState("") //actualiza donde recibir las notificaciones
    // Recuperar email de local storage
    //const storedEmail = localStorage.getItem('email');
    
    const storedEmail = "89785674@gmail.com" //prueba

    const router = useRouter();

    useEffect(() => {
        getUserInfo(storedEmail).then(setUserInfo)
    }, []);

    const handleCerrarSesion = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/MainPage');
        localStorage.removeItem('email');
    };

    //implementar funcion post para actualizar los datos del usuario
    const handleSubmit = async (e) => {

        //objeto con los datos que hay que actualizar
        const updateInfo = { //COMPROBAR CON BACK EL NOMBRE DE LAS VARIABLES Y SI HAY IDIOMA O NO
            alias: updateAlias,
            idioma: updateIdioma,
            notificacion: updateNotificacion
        }

        try {
            const response = await fetch (`http://localhost:3000/api/users/${storedEmail}`, {
                method: 'PUT', //VER CON BACK SI ES POST O PATCH
                headers: {
                    //Authorization: `Bearer ${tokenJWT}`
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateInfo)
            });

            if (response.ok) {
                const data = await response.json()
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
                {/* <div className="container text-center py-3 d-flex justify-content-center mt-2"></div> */}
                <h2 id="nombre_apellidos">Nombre y apellidos</h2>

                {/* Alias */}
                <h2 id="aliasTitulo" className='text-center mt-3'>Alias</h2>

                {/* Botones proyectos */}
                <button type="submit" className="btn mt-4 text-center rounded-4 px-3 me-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Solicitudes de proyectos</div></button>
                {/* SOLO ADMIN */}
                {/* {userInfo.role === "admin" && (
                    <button type="submit" id="administrarUsuarios" className="btn mt-4 text-center rounded-4 px-3" style={{background: '#A1A1A1'}}>
                        <div className='textoBoton'>Administrar usuarios</div>
                    </button>
                )} */}

                {/* Informacion general */}
                <div>
                    <h3 id="infogeneral" className="mt-5 mb-4">Informacion general</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Nombre Completo</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">Nombre y Apellidos</p>
                    </div>
                    <div className="row mx-0"> {/* ACTUALIZABLE */}
                        <p className="info col rounded-start-4 py-2 infoDatos">Alias</p>
                        <input type="text" id="infoAlias" className="info col rounded-end-4 py-2"  onChange={(e) => setUpdateAlias(e.target.value)} placeholder="Alias"/>
                    </div>
                </div>
                
                {/* Informacion en utad */}
                <div>
                    <h3 id="infogeneral" className="mt-4 mb-4">Informacion en U-tad</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Dirección de correo electrónico</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">nombre.apellido@live.u-tad.com</p>
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
                        <p className="info col rounded-end-4 py-2 infoDatos">Email, SMS </p> {/* ACTUALIZABLE */}
                    </div>
                </div>

                {/* Botones cuenta */}
                <div className='d-flex justify-content-center'>
                    <button className="btn mt-4 text-center rounded-4 px-4 me-3" onClick={handleCerrarSesion} style={{background: '#A1A1A1'}}><div className='textoBoton'>Cerrar sesión</div></button>
                    <button type="submit" className="btn mt-4 text-center rounded-4 px-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Actualizar perfil</div></button>
                </div>
                


            </div>

            <Footer/>
        </div>
    )

}