"use client";
import Head from 'next/head';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);

  return (
    <>
      <Head>
        <title>Resultados de Búsqueda</title>
        <style>{`
          body.modal-open {
            overflow: hidden;
          }
          .modal-backdrop.show {
            opacity: 0.5;
          }
          .blur-background {
            filter: blur(5px);
          }
          .custom-modal-style {
            background-color: white;
            border-radius: 5px;
            padding: 20px;
          }
        `}</style>
      </Head>
      <div className={`container mt-5 ${showFilters ? 'blur-background' : ''}`}>
        <div className="d-flex justify-content-between mb-3">
          <div className="flex-grow-1 me-3">
            <input
              type="text"
              className="form-control"
              placeholder="Barra de búsqueda"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div>
            <button className="btn btn-outline-secondary mx-1">Mi perfil</button>
            <button className="btn btn-outline-secondary">Subir proyecto</button>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="mb-0">Resultado de búsqueda:</h2>
          <div>
            <button onClick={toggleFilters} className="btn btn-outline-secondary mx-2">Mostrar Filtros</button>
            <button className="btn btn-outline-secondary">Ordenar por</button>
          </div>
        </div>

        <div className="row row-cols-1 row-cols-md-3 g-4">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="col">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Título del proyecto</h5>
                  <p className="card-text">Año</p>
                  <p className="card-text">Autores</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showFilters && (
          <>
            <div className="modal-backdrop show"></div>
            <div className="modal show d-block" tabIndex="-1" style={{ display: 'block' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content custom-modal-style">
                  <div className="modal-header">
                    <h5 className="modal-title" id="filterModalLabel">Filtrar por:</h5>
                    <button type="button" className="btn-close" onClick={toggleFilters}></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <input type="text" className="form-control mb-3" placeholder="Nombre del proyecto" />
                      <input type="text" className="form-control mb-3" placeholder="Nombre del autor" />
                      <input type="text" className="form-control mb-3" placeholder="Titulación" />
                      <input type="text" className="form-control mb-3" placeholder="Asignatura" />
                      <input type="text" className="form-control mb-3" placeholder="Curso académico" />
                      <input type="text" className="form-control mb-3" placeholder="Premios" />
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={toggleFilters}>Cerrar</button>
                    <button type="button" className="btn btn-primary">Aplicar filtros</button>
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
