'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import '../styles/mainPage.css'
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

      <div className="container mt-3">
        {/* Encabezado */}
        <header className="d-flex justify-content-between align-items-center mb-4">
          <img src="/img/logo-utad.jpg" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
          <div>
            <button className="btn btn-outline-primary mx-2" onClick={handleProfileClick}>Mi perfil</button>
            <button className="btn btn-primary" onClick={handleUploadClick}>Subir proyecto</button>
          </div>
        </header>

        {/* Título y descripción de la página */}
        <div className="text-center mb-4">
          <h1>Descripción de la página</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="input-group mb-4">
          <input type="text" className="form-control" placeholder="Barra de búsqueda" />
        </div>

        {/* Botones de navegación */}
        <div className="d-flex justify-content-center mb-4">
          <button className="btn btn-secondary mx-1">Grados</button>
          <button className="btn btn-secondary mx-1">Ciclos</button>
          <button className="btn btn-secondary mx-1">Postgrados</button>
        </div>

        {/* Sección de proyectos */}
        <div className="row">
        </div>
      </div>

      <footer className="footer mt-4 py-3 bg-light">
        <div className="container text-center">
          <span>Privacidad &nbsp; Condiciones &nbsp; Accesibilidad</span>
        </div>
      </footer>
    </>
  );
}
