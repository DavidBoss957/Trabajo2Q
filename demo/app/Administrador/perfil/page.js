"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'
import '../styles/mainPage.css'
import '../styles/perfil.css'

export default function Perfil() {
    const router = useRouter();
    //implementar funcion get para listar la info del usuario
    const handleLogOut = () => {
        // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
        router.push('/');
    };

    const handleCerrarSesion = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/');
    };

    const handleMainPage = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/Administrador/MainPage');
    };
    
    const handleSolicitud = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/Administrador/solicitudes');
    };

    return (
        <div>
        {/* Contenedor fluido para la parte superior con el fondo */}
            <div className="container-fluid navBar">
                {/* Encabezado */}
                <header className="d-flex justify-content-between align-items-center py-2">
                    <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid utad_logo" onClick={handleMainPage} style={{ maxHeight: '60px' }} />
                    <div>
                        <input id="searchBar" type="text" className="form-control searchBar searchBarTip" placeholder="Barra de búsqueda"/>
                    </div>
                    <div>
                        <button id="profileButton" className="btn"><h3 id="modifih3">Mi perfil</h3></button>
                        <button id="createProyect" className="btn btn-primary"><h3 id="modifih3">Subir Proyecto</h3></button>
                    </div>
                </header>
            </div>

            <div id="fotoPerfilLayout">
                <center><img id="fotoPerfil" src="/Foto Perfil.png" alt="Logo"/></center>
            </div>
            <div id="comite">
                <center><h1 id="textoNombre">Pablo Andrés Martín Pérez</h1></center>
                <center><h2 id="textoAlias">PABLO</h2></center>
            </div>
            <div id="gradosInfo">
                <button id="solicitudProyecto" className="btn" onClick={handleSolicitud}><h3 id="modifih3">SOLICITUDES DE PROYECTOS</h3></button>
                <button id="solicitudProyecto" className="btn"><h3 id="modifih3">ADMINISTRAR USUARIOS</h3></button>
            </div>

            <div id="formComp">
                <div id="infoSection">
                    <div id="infoRow">
                        <p id="label">Nombre completo</p>
                        <p id="value">Pablo Andrés Martín Pérez</p>
                    </div>
                    <div id="separador"></div>
                    <div id="infoRow">
                        <p id="label">Alias</p>
                        <p id="value">Pablo</p>
                    </div>
                    <div id="separador"></div>
                </div>
                <div id="apartadoTexto">
                    <div id="tituloLineas">
                        <h2 id="textoAlias">Información en U-tad</h2>
                    </div>
                    <div id="infoSection">
                        <div id="infoRow">
                            <p id="label">Nombre completo</p>
                            <p id="value">Pablo Andrés Martín Pérez</p>
                        </div>
                        <div id="separador"></div>
                        <div id="infoRow">
                            <p id="label">Dirección de correo electrónico</p>
                            <p id="value">pablo.perez2@u-tad.com</p>
                        </div>
                        <div id="separador"></div>
                        <div id="infoRow">
                            <p id="label">Área</p>
                            <p id="value">Diseño Digital</p>
                        </div>
                        <div id="separador"></div>
                    </div>
                </div>
                <div id="apartadoTexto">
                    <div id="tituloLineas">
                        <h2 id="textoAlias">Preferencias y notificaciones</h2>
                    </div>
                    <div id="infoSection">
                        <div id="infoRow">
                            <p id="label">Idioma</p>
                            <p id="value">Español</p>
                        </div>
                        <div id="separador"></div>
                        <div id="preference-item">
                            <span>Notificaciones (correo electrónico)</span>
                            <div id="margin">
                                <label><input type="checkbox" /> Actualización del estado de subida de mi proyecto</label>
                                <label><input type="checkbox" /> Mención en un nuevo proyecto subido a la plataforma</label>
                            </div>
                        </div>
                        <div id="separador"></div>
                    </div>
                </div>
            </div>
            <center><button id="exitButton" className="bnt" onClick={handleCerrarSesion}><h3 id="modifih3">CERRAR SESIÓN</h3></button></center>

            <div id="footerLayout">
                <center>
                <div id="footerInterior">
                    <p id="textoBody">Privacidad</p>
                    <p id="textoBody">Condiciones</p>
                    <p id="textoBody">Accesibilidad</p>
                </div>
                </center>
            </div>
        </div>
    )

}