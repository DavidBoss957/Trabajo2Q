// subida_proyectos/page.js
"use client";
import Head from 'next/head';
import { useState } from 'react';

export default function ProjectUpload() {
  // Estado para cada campo del formulario
  const [formState, setFormState] = useState({
    title: '',
    subject: '',
    year: '',
    students: '',
    teachers: '',
    summary: '',
    differentiator: '',
    result: '',
    report: null,
    externalLinks: '',
    prizes: '',
    keywords: '',
    projectFile: null,
  });

  // Cambio de los campos del formulario
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormState({
      ...formState,
      [name]: files ? files[0] : value,
    });
  };

  // Envio del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Enviar los datos a un servidor o API
    console.log('Formulario enviado', formState);
    
    // Resetear el formulario
    setFormState({
        title: '',
        subject: '',
        year: '',
        students: '',
        teachers: '',
        summary: '',
        differentiator: '',
        result: '',
        report: null,
        externalLinks: '',
        prizes: '',
        keywords: '',
        projectFile: null,
    });
  };

  return (
<div className="container">
    <h2>Página de Subida de Proyectos</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="title">Título</label>
            <input type="text" name="title" value={formState.title} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="subject">Asignatura</label>
            <input type="text" name="subject" value={formState.subject} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="year">Año de creación</label>
            <input type="number" name="year" value={formState.year} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="students">Estudiantes implicados</label>
            <textarea name="students" value={formState.students} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="teachers">Docentes implicados</label>
            <textarea name="teachers" value={formState.teachers} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="summary">Resumen</label>
            <textarea name="summary" value={formState.summary} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="differentiator">Factor diferenciador de la propuesta</label>
            <textarea name="differentiator" value={formState.differentiator} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="result">Resultado final</label>
            <textarea name="result" value={formState.result} onChange={handleChange} required />
        </div>
        
        <div>
            <label htmlFor="report">Memoria (opcional)</label>
            <input type="file" name="report" onChange={handleChange} />
        </div>
        
        <div>
            <label htmlFor="externalLinks">Enlace a recursos externos (opcional)</label>
            <input type="url" name="externalLinks" value={formState.externalLinks} onChange={handleChange} />
        </div>
        
        <div>
            <label htmlFor="prizes">Premios (opcional)</label>
            <input type="text" name="prizes" value={formState.prizes} onChange={handleChange} />
        </div>
        
        <div>
            <label htmlFor="keywords">Palabras clave entre 5 y 10 (separadas por comas)</label>
            <input type="text" name="keywords" value={formState.keywords} onChange={handleChange}/>
        </div>
        <div>
            <label htmlFor="projectFile">Archivo del Proyecto</label>
            <input type="file" name="projectFile" onChange={handleChange} />
        </div>
        <button type="submit">Subir Proyecto</button>
    </form>
</div>
);
}