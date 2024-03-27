// subida_proyectos/page.js
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/subida_proyectos.css'
import {useRouter} from 'next/navigation';
import { useState } from 'react';

export default function ProjectUpload() {
    const router = useRouter()
  // Estado para cada campo del formulario
    const [formState, setFormState] = useState({
        nombreProyecto: '',
        titulacion: '',
        year: '',
        autores: '',
        docentes: '',
        resumen: '',
        enlaces: '',
        premios: '',
        etiquetas: '',
        finalResult: null,
        finalResultName: '', // Para almacenar el nombre del archivo
        projectMemory: null,
        projectMemoryName: '', // Para almacenar el nombre del archivo
    });

    const years = Array.from({ length: new Date().getFullYear() - 2017 }, (v, i) => 2018 + i); // Genera un array de años desde 2018 hasta el año actual

  // Cambio de los campos del formulario
    const handleChange = (e) => {
        const { name, value, files } = e.target;
    
        if (files) {
        setFormState(prevState => ({
            ...prevState,
            [name]: files[0],
            [`${name}Name`]: files[0].name,
        }));
        } else {
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
        }
    };
  

  // Envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const formData = new FormData();
        formData.append('nombreProyecto', formState.nombreProyecto);
        formData.append('titulacion', formState.titulacion);
        formData.append('year', formState.year);
        formData.append('autores', formState.autores);
        formData.append('docentes', formState.docentes);
        formData.append('resumen', formState.resumen);
        formData.append('enlaces', formState.enlaces);
        formData.append('premios', formState.premios);
        formData.append('etiquetas', formState.etiquetas);
    
        // Adjuntar archivos si existen
        if (formState.finalResult) {
            formData.append('finalResult', formState.finalResult);
        }
        if (formState.projectMemory) {
            formData.append('projectMemory', formState.projectMemory);
        }
    
        // Solicitud fetch al servidor


        /*
        try {
            const response = await fetch('/tu-endpoint-de-carga', {
                method: 'POST',
                body: formData,
        });
    
        if (response.ok) {
            // La respuesta del servidor fue exitosa
            const responseBody = await response.json();
            console.log('Respuesta del servidor:', responseBody);
            router.push('/subida_proyectos/done');
        } else {
            // Error al procesar la solicitud
            console.error('Error al subir el formulario:', response.statusText);
        }
        } catch (error) {
            console.error('Excepción al enviar el formulario:', error);
        }
        */
    };

    return (
        <div className="container mt-3">
        <form onSubmit={handleSubmit}>

            {/* Campo del nombre del proyecto */}
            <div className="mb-3">
                <input type="text" className="form-control border-0 shadow-none input-titulo-proyecto" name="nombreProyecto" value={formState.nombreProyecto} onChange={handleChange} placeholder="Título del proyecto" required/>
            </div>

            {/* Desplegables de Titulación y Año de creación */}
            <div className="d-flex align-items-end">
                <div className="mb-3">
                    <select className="border-0 shadow-none form-select custom-select custom-select-inter" aria-label="Default select example" name="titulacion" value={formState.titulacion} onChange={handleChange} required>
                        <option value="" disabled selected>Titulación</option>
                        <option value="INSO">INSO</option>
                        <option value="DIDI">DIDI</option>
                    </select>
            </div>
                <div className="mb-3">
                    <select className="border-0 shadow-none form-select custom-select custom-select-inter" aria-label="Default select example" name="year" value={formState.year} onChange={handleChange} required>
                    <option value="" disabled selected>Año de creacion</option>
                        {years.map(year => (
                        <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Campo de autores */}
            <div className="input-group mb-3 espaciado-select-text">
                <span className="input-group-text fixed-width-span" id="basic-addon1">Autor/es</span>
                <input type="text" className="form-control fixed-width-span" placeholder="Mario Hurtado, Beatriz Peña..." aria-label="Autores" aria-describedby="basic-addon1" name="autores" value={formState.autores} onChange={handleChange} required/>
            </div>

            {/* Campo de docentes */}
            <div className="input-group mb-3">
                <span className="input-group-text fixed-width-span" id="basic-addon1">Docentes implicados</span>
                <input type="text" className="form-control fixed-width-span" placeholder="Julio Arias" aria-label="Autores" aria-describedby="basic-addon1" name="docentes" value={formState.docentes} onChange={handleChange} required/>
            </div>

            {/* Campo de asignatura */}
            <div className="input-group mb-3">
                <span className="input-group-text fixed-width-span" id="basic-addon1">Asignatura</span>
                <input type="text" className="form-control fixed-width-span" placeholder="Proyectos IV" aria-label="Autores" aria-describedby="basic-addon1" name="asignatura" value={formState.asignatura} onChange={handleChange} required/>
            </div>

            {/* Campo de resumen */}
            <div className="row mb-3">
                <div className="col-6">
                    <span className="form-control-plaintext fixed-height d-flex align-items-center">Resumen *</span>
                </div>
                <div className="col-6">
                    <textarea className="form-control fixed-height" placeholder="Añade una descripción y el valor diferencial de tu proyecto..." style={{ resize: 'none' }} aria-label="Resumen" name="resumen" value={formState.resumen} onChange={handleChange}></textarea>
                </div>
            </div>

            {/* Campo de enlaces externos */}
            <div className="input-group mb-3">
                <span className="input-group-text fixed-width-span" id="basic-addon1">Enlaces externos</span>
                <input type="text" className="form-control fixed-width-span" placeholder="www.holasoyyo.com" aria-label="Autores" aria-describedby="basic-addon1" name="enlaces" value={formState.enlaces} onChange={handleChange}/>
            </div>

            {/* Campo de premios */}
            <div className="input-group mb-3">
                <span className="input-group-text fixed-width-span" id="basic-addon1">Premios</span>
                <input type="text" className="form-control fixed-width-span" placeholder="Laus 2022" aria-label="Autores" aria-describedby="basic-addon1" name="premios" value={formState.premios} onChange={handleChange}/>
            </div>

            {/* Campo de etiquetas */}
            <div className="input-group mb-3">
                <span className="input-group-text fixed-width-span" id="basic-addon1">Etiquetas</span>
                <input type="text" className="form-control fixed-width-span" placeholder="Entre 5 y 10 palabras separadas por comas." aria-label="Autores" aria-describedby="basic-addon1" name="etiquetas" value={formState.etiquetas} onChange={handleChange} required/>
            </div>

            {/* Campos de subida de archivos */}
            <div className="row mb-3">
                <div className="col-4">
                    <div className="input-file-container fixed-height">
                        <input type="file" hidden="true" className="form-control" id="finalResult" name="finalResult" onChange={handleChange} required/>
                        <label className="input-file-trigger form-control fixed-height-label" htmlFor="finalResult">
                            {formState.finalResultName || "Subir resultado final *"}
                        </label>
                        <small className="form-text text-muted">
                            {formState.finalResultName || "Arrastra tus archivos aquí"}
                        </small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-file-container fixed-height">
                        <input type="file" hidden="true" className="form-control" id="projectMemory" name="projectMemory" onChange={handleChange} />
                        <label className="input-file-trigger form-control fixed-height-label" htmlFor="projectMemory">
                            {formState.projectMemoryName || "Subir memoria del proyecto (opcional)"}
                        </label>
                        <small className="form-text text-muted">
                            {formState.projectMemoryName || "Arrastra tus archivos aquí"}
                        </small>
                    </div>
                </div>
                <div className="col-4">
                    <div className="input-file-container fixed-height">
                        <input type="file" hidden="true" className="form-control" id="projectMemory" name="projectMemory" onChange={handleChange} />
                        <label className="input-file-trigger form-control fixed-height-label" htmlFor="projectMemory">
                            {formState.projectMemoryName || "Subir memoria del proyecto (opcional)"}
                        </label>
                        <small className="form-text text-muted">
                            {formState.projectMemoryName || "Arrastra tus archivos aquí"}
                        </small>
                    </div>
                </div>
            </div>

            {/* Botón de envío */}
            <div className="justify-content-center d-flex">
                <button type="submit" className="btn btn-primary">Enviar Proyectos</button>
                <button type="button" className="btn btn-secondary">Guardar Borrador</button>
            </div>

        </form>
        </div>
    );
}