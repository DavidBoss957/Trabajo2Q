"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/subida_proyectos.css'
import React, { useState, useEffect } from 'react';

export default function ViewProjects() {
    const [projects, setProjects] = useState(null);
  
    /*useEffect(() => {
      fetch('/api/trabajos')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => setProjects(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    if (projects === null) {
      return <div className="container mt-3">Cargando proyectos...</div>;
    }*/
  
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col">
            <h1>Título del proyecto</h1>
            <div className="mb-3">
              <label className="form-label">Autores</label>
              {/* Componente o elementos de lista de autores aquí */}
            </div>
            <div className="mb-3">
              <label className="form-label">Docentes implicados</label>
              {/* Componente o elementos de lista de docentes aquí */}
            </div>
            <div className="mb-3">
              <label className="form-label">Asignatura/s: Proyectos IV</label>
              {/* Otros detalles de la asignatura si son necesarios */}
            </div>
            <div className="mb-3">
              <label className="form-label">Año de creación: 2024</label>
              {/* Otros detalles del año si son necesarios */}
            </div>
            <div className="mb-3">
              <label className="form-label">Resultado final</label>
              {/* Espacio para el resultado final aquí, por ejemplo, una imagen o texto */}
            </div>
            <div className="mb-3">
              <label className="form-label">Resumen</label>
              <p>
                {/* Texto del resumen aquí */}
              </p>
            </div>
            <div className="mb-3">
              <label className="form-label">Descripción y factor diferenciador de la propuesta</label>
              <p>
                {/* Texto de la descripción aquí */}
              </p>
            </div>
            {/* Añadir más secciones según sea necesario */}
            <div className="mb-3 text-center">
              <button className="btn btn-primary me-2">Modificar proyecto</button>
              <button className="btn btn-danger">Eliminar proyecto</button>
            </div>
            {/* Hash tags aquí */}
            <div className="mb-3">
              <p>#hashtag #hashtag #hashtag #hashtag #hashtag</p>
            </div>
            <div className="text-center">
              <button className="btn btn-secondary">Volver atrás</button>
            </div>
          </div>
        </div>
      </div>
    );
  }