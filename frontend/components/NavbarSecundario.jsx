

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'
import '../app/globals.css'
import '../app/styles/navbar.css'

export default function NavbarSecundario() {

    const router = useRouter();

    const handleProfileClick = () => {
        // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
        router.push('/perfil');
    };

    const handleUploadClick = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/subida_proyectos');
    };

    return(

        <div className="container-fluid row mt-3 mx-0 navbar-style">
            {/* Imagen */}
            <div className="col-3 mb-2">
                <img src="img/Logo-Utad.png" alt="Logo Utad" className="img-fluid" style={{ maxHeight: '60px' }} />
            </div>
            {/* Barra de búsqueda */}
            <div className="mb-2 col-6 container-fluid d-flex justify-content-center align-items-center">
                <div className='input-group barra' style={{width: 'auto'}}>
                    <input type="text" className="search-bar montserrat-body" placeholder="Escribe aquí..."/>
                    <img src="img/lupa.png" className="search-icon" alt="Buscar" />
                </div>
            </div>
            {/* Botones */}
            <div className="mb-2 col-3 d-flex justify-content-end align-items-center" style={{zoom: '80%'}}>
                <button className="mx-2 secundario-blanco montserrat-h3" onClick={handleProfileClick} style={{background: '#FFF', color: '#0065EF'}}>MI PERFIL</button>
                <button className="ms-2 me-5 principal-azul montserrat-h3" onClick={handleUploadClick} style={{background: '#0065EF', color: 'white'}}>SUBIR PROYECTOS</button>
            </div>
        </div>

    )
}