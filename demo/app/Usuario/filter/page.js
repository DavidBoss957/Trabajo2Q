"use client";
import Head from 'next/head';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("Recomendado");
  const [selectedFilter, setSelectedFilter] = useState("Todos los proyectos"); // Filtro predeterminado
  const projects = [
    { id: 1, title: "Proyecto A", year: "2022", authors: ["Autor 1", "Autor 2"] },
    { id: 2, title: "Proyecto B", year: "2023", authors: ["Autor 3", "Autor 4"] },
  ];

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
    switch (selectedFilter) {
      case "Todos los proyectos":
        return projects.map((project) => (
          <div key={project.id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.year}</p>
                <p className="card-text">{project.authors.join(", ")}</p>
              </div>
            </div>
          </div>
        ));
      case "Autor/es":
        return projects.flatMap(project => project.authors).map((author, index) => (
          <div key={index} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{author}</h5>
              </div>
            </div>
          </div>
        ));
      default:
        return <p>No hay proyectos para mostrar.</p>;
    }
  };

  return (
    <>
      <Head>
        <title>Resultados de Búsqueda</title>
      </Head>
      <div className="container mt-4">
        <div className="row mb-5">
          <div className="col d-flex justify-content-center">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Barra de búsqueda"
              value={searchQuery}
              onChange={handleSearchChange}
              style={{ textAlign: "center" }}
            />
          </div>
          <div className="col-auto d-flex align-items-center">
            <button className="btn btn-outline-secondary ms-2 me-3">Mi perfil</button>
            <button className="btn btn-outline-secondary">Subir proyecto</button>
          </div>
        </div>

        <h2>Resultado de búsqueda:</h2>
        <div className="d-flex justify-content-between mb-3">
          <div className="d-flex">
            <button onClick={() => handleFilterChange("Todos los proyectos")} className={`btn ${selectedFilter === "Todos los proyectos" ? "btn-secondary" : "btn-outline-secondary"} me-2`}>Todos los proyectos</button>
            <button onClick={() => handleFilterChange("Proyectos premiados")} className={`btn ${selectedFilter === "Proyectos premiados" ? "btn-secondary" : "btn-outline-secondary"} me-2`}>Proyectos premiados</button>
            <button onClick={() => handleFilterChange("Autor/es")} className={`btn ${selectedFilter === "Autor/es" ? "btn-secondary" : "btn-outline-secondary"} me-2`}>Autor/es</button>
          </div>
          <div className="d-flex">
            {/* This div now wraps both the Mostrar Filtros button and the Ordenar por dropdown */}
            <button onClick={toggleFilters} className="btn btn-outline-secondary me-2">Mostrar Filtros</button>
            <div className="dropdown"></div>
          <div className="dropdown">
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownOrderButton" data-bs-toggle="dropdown" aria-expanded="false">
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
      </div>
    </>
  );
}
