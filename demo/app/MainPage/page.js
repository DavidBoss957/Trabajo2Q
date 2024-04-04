'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useRouter } from 'next/navigation'

export default function MainPage() {
  const router = useRouter();

  const handleProfileClick = () => {
    // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
    router.push('/perfil');
  };

  const handleUploadClick = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/subida_proyectos');
  };

  return (
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
            <img src="U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
            <div>
              <button className="btn btn-outline-primary mx-2" onClick={handleProfileClick}>Mi perfil</button>
              <button className="btn btn-primary" onClick={handleUploadClick}>Subir proyecto</button>
            </div>
          </header>
        </div>

        {/* Contenedor para el título y la barra de búsqueda */}
        <div className="container my-3">
          {/* Título y descripción de la página */}
          <div className="text-center py-4">
            <h1 id="titulo" className="display-1 fw-bold text-primary">AcademiaLink</h1>
          </div>
          
          {/* Barra de búsqueda */}
          <div className="input-group mb-4">
            <input type="text" className="form-control" placeholder="Barra de búsqueda" />
          </div>
        </div>
      </div>

      {/* Botones de navegación, fuera del fondo */}
      <div className="container my-4">
        <div className="d-flex justify-content-center">
          <button className="btn btn-outline-primary mx-3 my-2">Grados</button>
          <button className="btn btn-outline-primary mx-3 my-2">Ciclos</button>
          <button className="btn btn-outline-primary mx-3 my-2">Postgrados</button>
        </div>
      </div>

      {/* Sección de proyectos, también fuera del fondo */}
      <div className="container mb-4">
        <div className="row">
        </div>
      </div>
    </>
  );
}
