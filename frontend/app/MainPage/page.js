'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import '../styles/mainPage.css'

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);;

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleOrderChange = (e, newOrder) => {
    e.preventDefault();
    setSelectedOrder(newOrder);
  };
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };


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
          {/*No se porque coño no se queda pegado al scrolear*/}
          <nav className="navbar navbar-default navbar-sticky-top d-flex justify-content-between align-items-center py-2">
            <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
            <div className="d-flex align-items-center flex-grow-1 justify-content-center">
              <form className="form-inline">
                  <input className="form-control mr-2" type="search" placeholder="Buscar" aria-label="Buscar" style={{ minWidth: '500px' }} />
              
              </form>
            </div>
            <div>
                <button className="btn btn-outline-primary mx-2" onClick={handleProfileClick}>Mi perfil</button>
                <button className="btn btn-primary" onClick={handleUploadClick}>Crear Proyecto</button>
            </div>
          </nav>
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

      {/* Botones Orientativos */}
      <div class="home-about">
      
          <ul class="nav__list">
            
              <a class=" grados ">Grados</a>
            
            
              <a class="ciclos" >Ciclos</a>
            
            
              <a class="postgrados">Postgrados</a>
            
          </ul>
      </div>

      {/* Sección de proyectos, también fuera del fondo */}
      <div className="container mt-4">
        <div className="row">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="col-md-4 mb-3">
              {/* Se utiliza un anchor tag para hacer toda la tarjeta clicable */}
              <a href="/verProyecto" className="card-link-custom">
                <div className="card h-100 tarjeta"> {/* Asegúrate de que la tarjeta ocupe toda la altura para que el enlace también lo haga */}
                  <div className="card-header card-header-titulacion text-center">
                    Grado en Ingeniería de Software
                  </div>
                  <img src="/tipos-de-almacenamiento-en-la-nube.jpg" className="card-img-top" alt="Proyecto" />
                  <div className="card-body">
                    <h6 className="card-title">OptiCode: Plataforma de optimización para algoritmos en la nube</h6>
                    <p className="card-text">Jaime Alberto Serrano y Sonia Ramirez López</p>
                    <p className="card-text text-right">2024</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}