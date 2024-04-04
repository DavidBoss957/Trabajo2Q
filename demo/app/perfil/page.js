"use client"

import Footer from '@/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/perfil.css'
import { useRouter } from 'next/navigation'

export default function Perfil() {
    const router = useRouter();
    //implementar funcion get para listar la info del usuario
    const handleLogOut = () => {
        // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
        router.push('/');
    };

    //implementar funcion post para actualizar los datos del usuario

    return (
        <div id="perfilContainer">
            
            <div id="elementosPerfil" className="mx-5 w-75">
                
                {/* Imagen */}
                <img src="img/default_profile.png" className="img-fluid mx-auto d-block mt-5 rounded-circle" alt="default"/>
                
                {/* Nombre y apellidos */}
                {/* <div className="container text-center py-3 d-flex justify-content-center mt-2"></div> */}
                <h2 id="nombre_apellidos">Mario Hurtado</h2>

                {/* Alias */}
                <h2 id="alias" className='text-center mt-3'>Diseño</h2>

                {/* Botones proyectos */}
                <button type="submit" className="btn mt-4 text-center rounded-4 px-3 me-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Solicitudes de proyectos</div></button>
                {/* SOLO ADMIN */}
                <button type="submit" className="btn mt-4 text-center rounded-4 px-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Administrar usuarios</div></button>

                {/* Informacion general */}
                <div>
                    <h3 id="infogeneral" className="mt-5 mb-4">Informacion general</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Nombre Completo</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">Mario Hurtado</p>
                    </div>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Alias</p>
                        <p className="info col rounded-end-4 py-2" id="infoAlias">Diseño</p> {/* ACTUALIZABLE */}
                    </div>
                </div>
                
                {/* Informacion en utad */}
                <div>
                    <h3 id="infogeneral" className="mt-4 mb-4">Informacion en U-tad</h3>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Dirección de correo electrónico</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">mario.hurtado@live.u-tad.com</p>
                    </div>
                    <div className="row mx-0">
                        <p className="info col rounded-start-4 py-2 infoDatos">Cargo</p>
                        <p className="info col rounded-end-4 py-2 infoDatos">Alumno</p>
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
                    <button onClick={handleLogOut} type="submit" className="btn mt-4 text-center rounded-4 px-4 me-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Cerrar sesión</div></button>
                    <button type="submit" className="btn mt-4 text-center rounded-4 px-3" style={{background: '#A1A1A1'}}><div className='textoBoton'>Actualizar perfil</div></button>
                </div>
                


            </div>

            <Footer/>
        </div>
    )

}