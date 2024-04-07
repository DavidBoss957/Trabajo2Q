

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useRouter } from 'next/navigation'

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
        <>
            <Head>
                <title>Descripción de la página</title>
                <link href="https://fonts.googleapis.com/css?family=Poppins:300,900&display=swap" rel="stylesheet"/>
            </Head>
            <div className="bg-light border-bottom">
                {/* Contenedor fluido para la parte superior con el fondo */}
                <div className="container-fluid">
                    {/* Encabezado */}
                    <header className="d-flex justify-content-between align-items-center py-2">
                        <img src="/img/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
                        {/* Barra de búsqueda */}
                        <input type="text" className="form-control" placeholder="Barra de búsqueda" style={{ maxWidth: '50%' }}/>
                        
                        <div>
                            <button className="btn btn-outline-primary mx-2" onClick={handleProfileClick}>Mi perfil</button>
                            <button className="btn btn-primary" onClick={handleUploadClick}>Crear Proyecto</button>
                        </div>
                    </header>
                </div>
            </div>
        </>
    )
}