"use client"
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
          .modal-backdrop.show {
            display: none;
          }
          .modal-open .modal {
            overflow-x: hidden;
            overflow-y: auto;
          }
          .blur-background {
            backdrop-filter: blur(30px);
            -webkit-backdrop-filter: blur(30px);
          }
          .modal {
            z-index: 1050;
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
        <br />
        <br />

        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="mb-0">Resultado de búsqueda:</h2>
          <div>
            <button onClick={toggleFilters} className="btn btn-outline-secondary mx-2">Mostrar Filtros</button>
            <button className="btn btn-outline-secondary">Ordenar por</button>
          </div>
        </div>
        <br />
        <br />

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
          <div className="modal fade show d-block" tabIndex="-1" aria-labelledby="filterModalLabel" aria-modal="true" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="filterModalLabel">Filtrar por:</h5>
                  <button type="button" className="btn-close" onClick={toggleFilters}></button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="projectName" className="form-label">Nombre del proyecto</label>
                      <input type="text" className="form-control" id="projectName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="authorName" className="form-label">Nombre del autor</label>
                      <input type="text" className="form-control" id="authorName" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="titulation" className="form-label">Titulación</label>
                      <input type="text" className="form-control" id="titulation" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">Asignatura</label>
                      <input type="text" className="form-control" id="subject" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="academicYear" className="form-label">Curso académico</label>
                      <input type="text" className="form-control" id="academicYear" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="awards" className="form-label">Premios</label>
                      <input type="text" className="form-control" id="awards" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={toggleFilters}>Cerrar</button>
                  <button type="button" className="btn btn-primary">Aplicar filtros</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
