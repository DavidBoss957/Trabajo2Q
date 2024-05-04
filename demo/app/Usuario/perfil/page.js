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

    //implementar funcion post para actualizar los datos del usuario

    return (
        <div>
        {/* Contenedor fluido para la parte superior con el fondo */}
            <div className="container-fluid navBar">
                {/* Encabezado */}
                <header className="d-flex justify-content-between align-items-center py-2">
                    <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid utad_logo" style={{ maxHeight: '60px' }} />
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
                <button id="solicitudProyecto" className="btn"><h3 id="modifih3">SOLICITUDES DE PROYECTOS</h3></button>
            </div>

            <div id="formComp">
                <div id="apartadoTexto">
                    <div id="tituloLineas">
                        <h2 id="textoAlias">Información general</h2>
                    </div>
                </div>
            </div>
        </div>
    )

}