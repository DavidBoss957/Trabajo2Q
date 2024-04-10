"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/subida_proyectos.css'
import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';

export default function ViewProjects() {
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true); // Añade un estado para manejar la carga

  useEffect(() => {
    const loadData = async () => {
        setIsLoading(true); // Iniciar la carga
        try {
            const response = await fetch(`http://localhost:3000/api/trabajos`, {
                method: 'GET',
                headers: {
                    "api_key": "Api-publica-123",
                    "Content-Type":"application/json"
                }
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data)

                setProject(data); // Almacenar los datos del proyecto en el estado
                setIsLoading(false); // Finalizar la carga
            } else {
                console.error('Error al cargar el proyecto:', response.statusText);
                setIsLoading(false); // Finalizar la carga, incluso en caso de error
            }
        } catch (error) {
            console.error('Excepción al cargar el proyecto:', error);
            setIsLoading(false); // Finalizar la carga en caso de excepción
        }
    };
    loadData()
}, []);
  
    // Si está cargando, mostrar mensaje de carga
  if (isLoading) {
      return <p>Cargando proyecto...</p>;
  }

  // Si no hay proyecto después de la carga, mostrar mensaje de error
  if (!project) {
      return <p>Error al cargar el proyecto.</p>;
  }

return (
  <div className="container mt-3">
    {project.map((project) => (
      <>
      <h1>{project.titulo}</h1>
      <p><strong>Titulación:</strong> {project.titulacion}</p>
      <p><strong>Año de Creación:</strong> {project.anocreacion}</p>
      <p><strong>Autores:</strong> {project.autores}</p>
      <p><strong>Docentes Implicados:</strong> {project.docentesImplicados}</p>
      <p><strong>Asignatura:</strong> {project.asignatura}</p>
      <p><strong>Resumen:</strong> {project.resumen}</p>
      <p><strong>Enlace:</strong> <a href={project.enlace} target="_blank" rel="noopener noreferrer">{project.enlace}</a></p>
      <p><strong>Premios:</strong> {project.premios}</p>
      <p><strong>Palabras Clave:</strong> {project.palabrasClave}</p>
      {project.resultadofinal?.filename && (
          <div>
              <h3>Resultado Final:</h3>
              <p>{project.resultadofinal.filename}</p>
          </div>
      )}
      <button onClick={() => (router.push(`/verProyecto/${project._id}`))}>AAAAAAAAAA</button>
      </>
    ))}
  </div>
);
  }