// subida_proyectos/page.js
"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../styles/subida_proyectos.css'
import '../styles/mainPage.css'
import '../styles/perfil.css'
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function ProjectUpload() {
    const router = useRouter();
    // Estado para cada campo del formulario
    const [formState, setFormState] = useState({
        nombreProyecto: '',
        titulacion: '',
        year: '',
        autores: '',
        docentes: '',
        asignatura: '',
        resumen: '',
        enlaces: '',
        premios: '',
        etiquetas: '',
        finalResult: null,
        finalResultName: '', // Para almacenar el nombre del archivo
        projectMemory: null,
        projectMemoryName: '', // Para almacenar el nombre del archivo
        projectMemoryOptional: null,
        projectMemoryOptionalName: '' // Para almacenar el nombre del archivo opcional
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

    useEffect(() => {
        // Añadir listeners a los inputs para mostrar el nombre del archivo subido
        const fileInputs = document.querySelectorAll('.input-file');
        fileInputs.forEach(input => {
            input.addEventListener('change', function () {
                const fileName = this.files[0].name;
                const fileNameDisplay = this.nextElementSibling;
                fileNameDisplay.textContent = fileName;
            });
        });

        return () => {
            // Limpiar los listeners cuando el componente se desmonte
            fileInputs.forEach(input => {
                input.removeEventListener('change', function () {
                    const fileName = this.files[0].name;
                    const fileNameDisplay = this.nextElementSibling;
                    fileNameDisplay.textContent = fileName;
                });
            });
        };
    }, []);

    // Envio del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();
        router.push('/Usuario/subida_proyectos/done');
    };

    const handleProfileClick = () => {
        // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
        router.push('/Usuario/perfil');
    };

    const handleUploadClick = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/Usuario/subida_proyectos');
    };

    const handleBuscador = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/Usuario/buscador');
    };

    const handleMainPage = () => {
        // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
        router.push('/Usuario/MainPage');
    };

    return (
        <>
            <div className="container-fluid navBar">
                {/* Encabezado */}
                <header className="d-flex justify-content-between align-items-center py-2">
                    <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid utad_logo" onClick={handleMainPage} style={{ maxHeight: '60px' }} />
                    <div>
                        <input id="searchBar" type="text" onClick={handleBuscador} className="form-control searchBar searchBarTip" placeholder="Escribe aquí..." />
                    </div>
                    <div>
                        <button id="profileButton" className="btn" onClick={handleProfileClick}><h3 id="modifih3">Mi perfil</h3></button>
                        <button id="createProyect" className="btn btn-primary" onClick={handleUploadClick}><h3 id="modifih3">Subir Proyecto</h3></button>
                    </div>
                </header>
            </div>
            <div className="container mt-3">
                <form onSubmit={handleSubmit}>
                    {/* Campo del nombre del proyecto */}
                    <div className="mb-3">
                        <input type="text" className="form-control" id="input-titulo-proyecto" name="nombreProyecto" value={formState.nombreProyecto} onChange={handleChange} placeholder="Título del proyecto" required />
                    </div>

                    <div className="justify-content-between mb-3 d-flex">
                        <div className="flex-grow-1 me-2">
                            <select className="form-select" aria-label="Titulación" name="titulacion" value={formState.titulacion} onChange={handleChange} required>
                                <option value="" disabled selected>Titulación</option>
                                <option value="Grado">Grado</option>
                                <option value="Diseño Digital">Diseño Digital</option>
                                <option value="Animación">Animación</option>
                                <option value="Ingeniería de Software">Ingeniería de Software</option>
                                <option value="Ingeniería de Software - Mención IA">Ingeniería de Software - Mención IA</option>
                                <option value="Creación de Videojuegos">Creación de Videojuegos</option>
                                <option value="Juegos y Narrativas Interactivas">Juegos y Narrativas Interactivas</option>
                                <option value="Desarrollo de Productos Interactivos">Desarrollo de Productos Interactivos</option>
                                <option value="Diseño de Experiencias de Realidad Aumentada">Diseño de Experiencias de Realidad Aumentada</option>
                            </select>
                        </div>
                        <div className="flex-grow-1 ms-2">
                            <select className="form-select" aria-label="Año de creación" name="year" value={formState.year} onChange={handleChange} required>
                                <option value="" disabled selected>Año de creación</option>
                                {years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                <div id="formComp">
                    <div id="infoSection">
                        <div id="infoRow">
                            <p id="label">Autor/es *</p>
                            <input type="text" id="input_campos" placeholder="Mario Hurtado, Beatriz Peña..." name="autores" value={formState.autores} onChange={handleChange} required />
                        </div>
                        <div id="separador"></div>
                        <div id="infoRow">
                            <p id="label">Docentes implicados *</p>
                            <input type="text" id="input_campos" placeholder="Julio Arias" name="docentes" value={formState.docentes} onChange={handleChange} required />
                        </div>
                        <div id="separador"></div>
                        <div id="infoSection">
                            <div id="infoRow">
                                <p id="label">Asignatura *</p>
                                <input type="text" id="input_campos" placeholder="Proyectos IV" name="asignatura" value={formState.asignatura} onChange={handleChange} required />
                            </div>
                            <div id="separador"></div>
                            <div id="infoRow">
                                <p id="label">Resumen *</p>
                                <input type="text" id="input_campos" placeholder="Añade una descripción..." name="resumen" value={formState.resumen} onChange={handleChange} required />
                            </div>
                            <div id="separador"></div>
                            <div id="infoRow">
                                <p id="label">Enlace a recursos externos (Opcional)</p>
                                <input type="text" id="input_campos" placeholder="www.holasoyyo.com" name="enlaces" value={formState.enlaces} onChange={handleChange} required />
                            </div>
                            <div id="separador"></div>
                        </div>
                        <div id="infoSection">
                            <div id="infoRow">
                                <p id="label">Premios (Opcional)</p>
                                <input type="text" id="input_campos" placeholder="Laus 2022" name="premios" value={formState.premios} onChange={handleChange} required />
                            </div>
                            <div id="separador"></div>
                            <div id="infoRow">
                                <p id="label">Palabras clave *</p>
                                <input type="text" id="input_campos" placeholder="Entre 5 y 10 palabras..." name="etiquetas" value={formState.etiquetas} onChange={handleChange} required />
                            </div>
                            <div id="separador"></div>
                        </div>
                    </div>
                </div>

                <div class="file-upload-row">
                    <div class="input-file-container">
                        <label for="finalResult" class="form-label button-label">
                            SUBIR PORTADA DEL PROYECTO *
                        </label>
                        <input class="form-control input-file" type="file" id="finalResult" name="finalResult" required />
                        <span class="file-name">Arrastra tus archivos aquí</span>
                    </div>
                    <div class="input-file-container">
                        <label for="projectMemory" class="form-label button-label">
                            SUBIR RESULTADO FINAL *
                        </label>
                        <input class="form-control input-file" type="file" id="projectMemory" name="projectMemory" />
                        <span class="file-name">Arrastra tus archivos aquí</span>
                    </div>
                    <div class="input-file-container">
                        <label for="projectMemoryOptional" class="form-label button-label">
                            SUBIR MEMORIA DEL PROYECTO *
                        </label>
                        <input class="form-control input-file" type="file" id="projectMemoryOptional" name="projectMemoryOptional" />
                        <span class="file-name">Arrastra tus archivos aquí</span>
                    </div>
                </div>


                    {/* Botones de envío y guardar borrador */}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary me-2">Enviar Proyecto</button>
                        <button type="button" className="btn btn-outline-secondary">Guardar Borrador</button>
                    </div>
                </form>
            </div>
        </>
    );
}
