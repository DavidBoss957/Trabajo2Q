'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import '../../styles/main.css'

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("Recomendado");
  const [selectedFilter, setSelectedFilter] = useState("Todos los proyectos");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleOrderChange = (e, newOrder) => {
    e.preventDefault();
    setSelectedOrder(newOrder);
  };
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  // Renderiza el contenido basado en el filtro seleccionado
  const renderContent = () => {
  };

  const router = useRouter();

  const handleProfileClick = () => {
    // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
    router.push('/Usuario/perfil');
  };

  const handleUploadClick = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/Usuario/subida_proyectos');
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
            <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
            <div>
              <button className="btn btn-outline-primary mx-2" onClick={handleProfileClick}>Mi perfil</button>
              <button className="btn btn-primary" onClick={handleUploadClick}>Crear Proyecto</button>
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
      <div className="d-flex justify-content-between m-4">
          <div className="d-flex">
            <button onClick={() => handleFilterChange("Todos los proyectos")} className={`btn ${selectedFilter === "Todos los proyectos" ? "btn-primary" : "btn-outline-primary"} me-2`}>Todos los proyectos</button>
            <button onClick={() => handleFilterChange("Proyectos premiados")} className={`btn ${selectedFilter === "Proyectos premiados" ? "btn-primary" : "btn-outline-primary"} me-2`}>Proyectos premiados</button>
            <button onClick={() => handleFilterChange("Autor/es")} className={`btn ${selectedFilter === "Autor/es" ? "btn-primary" : "btn-outline-primary"} me-2`}>Autor/es</button>
          </div>
          <div className="d-flex">
            {/* This div now wraps both the Mostrar Filtros button and the Ordenar por dropdown */}
            <button onClick={toggleFilters} className="btn btn-outline-primary me-2">Mostrar Filtros</button>
            <div className="dropdown"></div>
          <div className="dropdown">
            <button className="btn btn-outline-primary dropdown-toggle" type="button" id="dropdownOrderButton" data-bs-toggle="dropdown" aria-expanded="false">
              Ordenar por: {selectedOrder}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownOrderButton">
              <li><a className="dropdown-item" href="#" onClick={(e) => handleOrderChange(e, 'Recomendado')}>Recomendado</a></li>
              <li><a className="dropdown-item" href="#" onClick={(e) => handleOrderChange(e, 'Más reciente primero')}>Más reciente primero</a></li>
              <li><a className="dropdown-item" href="#" onClick={(e) => handleOrderChange(e, 'Más antiguo primero')}>Más antiguo primero</a></li>
            </ul>
          </div>
        </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {renderContent()}
        </div>


        {showFilters && (
          <div className="modal-backdrop fade show">
            <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Filtrar por:</h5>
                    <button type="button" className="btn-close" onClick={toggleFilters}></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="titulo" className="form-label">Título</label>
                        <input type="text" className="form-control" id="titulo" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="asignatura" className="form-label">Asignatura</label>
                        <input type="text" className="form-control" id="asignatura" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="anoCreacion" className="form-label">Año de creación</label>
                        <input type="number" className="form-control" id="anoCreacion" />
                      </div>
                      <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={() => setShowFilters(false)}>Actualizar resultados</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      {/* Sección de proyectos, también fuera del fondo */}
      <div className="container mt-4">
        <div className="row">
          {Array.from({ length: 1 }).map((_, idx) => (
            <div key={idx} className="col-md-4 mb-3">
              {/* Se utiliza un anchor tag para hacer toda la tarjeta clicable */}
              <a href="/Usuario/verProyecto" className="card-link-custom">
                <div className="card h-100"> {/* Asegúrate de que la tarjeta ocupe toda la altura para que el enlace también lo haga */}
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
