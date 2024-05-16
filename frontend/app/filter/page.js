"use client";
import Head from 'next/head';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default function Page() {
  const [projects, setProjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]); // Store all projects
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState("Todos los proyectos");
  const [filters, setFilters] = useState({
    titulo: '',
    asignatura: '',
    anocreacion: '',
  });
  const [selectedOrder, setSelectedOrder] = useState("Recomendado");
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3000/api/trabajos');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setProjects(data);
      setAllProjects(data); // Store all projects
    } catch (error) {
      setError(`Failed to load projects: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleFilterInputChange = (event) => {
    const { name, value } = event.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const applyFilters = () => {
    setShowFilters(false);
    setIsLoading(true);
    try {
      let filteredProjects = allProjects.filter(project => {
        const isTitleMatch = !filters.titulacion || project.titulacion.toLowerCase().includes(filters.titulo.toLowerCase());
        const isSubjectMatch = !filters.asignatura || project.asignatura.toLowerCase().includes(filters.asignatura.toLowerCase());
        const isYearMatch = !filters.anocreacion || project.anocreacion.toString() === filters.anocreacion;
        const isAwardedMatch = selectedFilter !== "Proyectos premiados" || (project.premios && project.premios.trim() !== '');

        return isTitleMatch && isSubjectMatch && isYearMatch && isAwardedMatch;
      });

      orderProjects(filteredProjects);
    } catch (error) {
      setError(`Failed to apply filters: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const orderProjects = (filteredProjects) => {
    let orderedProjects = [...filteredProjects];
    if (selectedOrder === 'Más reciente primero') {
      orderedProjects.sort((a, b) => b.anocreacion - a.anocreacion);
    } else if (selectedOrder === 'Más antiguo primero') {
      orderedProjects.sort((a, b) => a.anocreacion - b.anocreacion);
    }
    setProjects(orderedProjects);
  };

  const handleOrderChange = (newOrder) => {
    setSelectedOrder(newOrder);
    applyFilters(); // Reapply filters whenever the order changes
  };

  const renderContent = () => {
    if (isLoading) return <p>Cargando proyectos...</p>;
    if (error) return <p>Ha ocurrido un error: {error}</p>;

    return projects.map((project) => {
      if (selectedFilter === "Autor/es") {
        // Only display the authors' names
        return (
          <div key={project._id} className="col">
            <div className="card">
              <div className="card-body">
                <p className="card-text">{project.autores.join(", ")}</p>
              </div>
            </div>
          </div>
        );
      } else {
        // Display the full project card
        return (
          <div key={project._id} className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{project.titulo || 'Sin título'}</h5>
                <p className="card-text">{project.anocreacion || 'Año no especificado'}</p>
                <p className="card-text">{project.autores.join(", ")}</p>
              </div>
            </div>
          </div>
        );
      }
    });
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
            <button onClick={() => setSelectedFilter("Todos los proyectos")} className={`btn ${selectedFilter === "Todos los proyectos" ? "btn-secondary" : "btn-outline-secondary"} me-2`}>Todos los proyectos</button>
            <button onClick={() => setSelectedFilter("Proyectos premiados")} className={`btn ${selectedFilter === "Proyectos premiados" ? "btn-secondary" : "btn-outline-secondary"} me-2`}>Proyectos premiados</button>
            <button onClick={() => setSelectedFilter("Autor/es")} className={`btn ${selectedFilter === "Autor/es" ? "btn-secondary" : "btn-outline-secondary"} me-2`}>Autor/es</button>
          </div>
          <div className="d-flex">
            <button onClick={toggleFilters} className="btn btn-outline-secondary me-2">Mostrar Filtros</button>
            <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownOrderButton" data-bs-toggle="dropdown" aria-expanded="false">
                Ordenar por: {selectedOrder}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dropdownOrderButton">
                <li><a className="dropdown-item" onClick={() => handleOrderChange('Recomendado')}>Recomendado</a></li>
                <li><a className="dropdown-item" onClick={() => handleOrderChange('Más reciente primero')}>Más reciente primero</a></li>
                <li><a className="dropdown-item" onClick={() => handleOrderChange('Más antiguo primero')}>Más antiguo primero</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {renderContent()}
        </div>
        {showFilters && (
  <>
    <div className="modal-backdrop fade show" style={{ zIndex: 1040, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
    <div className="modal fade show d-block" tabIndex="-1" style={{ zIndex: 1050 }}>
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
                <input type="text" className="form-control" id="titulo" name="titulo" value={filters.titulo} onChange={handleFilterInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="asignatura" className="form-label">Asignatura</label>
                <input type="text" className="form-control" id="asignatura" name="asignatura" value={filters.asignatura} onChange={handleFilterInputChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="anocreacion" className="form-label">Año de creación</label>
                <input type="number" className="form-control" id="anocreacion" name="anocreacion" value={filters.anocreacion} onChange={handleFilterInputChange} />
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-primary" onClick={applyFilters}>Actualizar resultados</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
)}
      </div>
    </>
  );
}
