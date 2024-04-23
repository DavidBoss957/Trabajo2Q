"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'

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
    const router = useRouter();
    const handleBack = () => {
      router.push('/Usuario/MainPage/proyecto');
  };
  
    return (
<div className="container my-5">
  <div className="row">
    <div className="col-lg-10 mx-auto">
      {/* Título del Proyecto */}
      <h1 className="mb-3">"OptiCode: Plataforma de optimización para algoritmos en la nube"</h1>
      
      {/* Autores */}
      <div className="mb-3">
        <h5>Autores:</h5>
        <p className="d-inline ms-3">Jaime Alberto Serrano y Sonia Ramirez López</p>
      </div>

      {/* Docentes Implicados */}
      <div className="mb-3">
        <h5>Docentes implicados:</h5>
        <p className="d-inline ms-3">Dr. Carlos Fernández Linares</p>
      </div>

      {/* Asignaturas */}
      <div className="mb-3">
        <h5>Asignatura/s:</h5>
        <p className="d-inline ms-3">Desarrollo Avanzado de Software</p>
      </div>

      {/* Año de creación */}
      <div className="mb-3">
        <h5>Año de creación:</h5>
        <p className="d-inline ms-3">2024</p>
      </div>

      {/* Resultado final */}
      <div className="mb-3">
        <h5>Resultado final</h5>
        <img src="/tipos-de-almacenamiento-en-la-nube.jpg" className="card-img-top w-50 h-auto" alt="Proyecto"/>
        <div className="mt-2">
          <button className="btn btn-success text-white">Descargar Proyecto</button>
        </div>
      </div>

      {/* Resumen */}
      <div className="mb-3">
        <h5>Resumen:</h5>
        <p className="mt-2">
          "OptiCode es una plataforma basada en la nube que permite a los desarrolladores optimizar y probar algoritmos de manera eficiente. Utiliza inteligencia artificial para identificar cuellos de botella en tiempo de ejecución y consumo de recursos, proponiendo mejoras en el código. Su valor diferencial radica en la personalización de sugerencias según el tipo de software desarrollado, ya sea para aplicaciones de alto rendimiento, juegos o sistemas embebidos."
        </p>
      </div>

      {/* Etiquetas o Hashtags */}
      <div className="mb-3">
        <p className="text-info">#optimización de algoritmos, #ingeniería de software, #plataforma en la nube, #inteligencia artificial, #rendimiento de código</p>
      </div>

      {/* Botones de acción */}
      <div className="mb-3 d-flex justify-content-end">
        <button className="btn btn-primary me-2">Modificar proyecto</button>
        <button className="btn btn-danger">Eliminar proyecto</button>
      </div>

      {/* Botón de regreso */}
      <div className="text-center">
        <button className="btn btn-secondary" onClick={handleBack}>Volver atrás</button>
      </div>
    </div>
  </div>
</div>
    );
  }