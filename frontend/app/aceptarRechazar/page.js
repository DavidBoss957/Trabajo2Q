'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import '../styles/aceptarRechazar.css'

export default function MainPage() {
  



  const router = useRouter();

  const handleProfileClick = () => {
    // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
    router.push('/perfil');
  };

  const handleUploadClick = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/subida_proyectos');
  };

  return (
    <>
      <Head>
        <title>Descripción de la página</title>
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,900&display=swap" rel="stylesheet"/>
      </Head>
      <div className="bg-light border-bottom">
        {/* Contenedor fluido para la parte superior con el fondo */}
        <div className="container-fluid">
          {/* Encabezado */}
          {/*No se porque coño no se queda pegado al scrolear*/}
          <nav className="navbar navbar-default navbar-sticky-top d-flex justify-content-between align-items-center py-2">
            <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid" style={{ maxHeight: '60px' }} />
            <div className="d-flex align-items-center flex-grow-1 justify-content-center">
              <form className="form-inline">
                  <input className="form-control mr-2" type="search" placeholder="Buscar" aria-label="Buscar" style={{ minWidth: '500px' }} />
              
              </form>
            </div>
            <div>
                <button className="btn btn-outline-primary mx-2" onClick={handleProfileClick}>Mi perfil</button>
                <button className="btn btn-primary" onClick={handleUploadClick}>Crear Proyecto</button>
            </div>
          </nav>  
        </div>
      </div>

      <div className="containerProyect">
      <div className="containerProyect2">
      <div className="row">
        <div className="col">
          {/* Título */}
          <h1 className="project-title">Título del Proyecto</h1>
          </div>
          <div className="col">
          {/* Botón de Modificar Proyecto */}
          <button className="btn btn-primary btn-modify">Modificar Proyecto</button>
        </div>
          {/* Sección de Autor/es */}

          <ul className="Titulos">Autor/es</ul>
          <ul className="Resultado">- Manolo Lama, Pepito Grillo, Mikol, +6</ul>

          {/* Sección de Docentes */}

          <ul className="Titulos">Docentes Implicados</ul>
          <ul className="Resultado">- Pablo Martín</ul>

        
        {/* Sección de Asignatura*/}

        <ul className="subject-section Titulos">Asignatura/s:</ul>
        <ul className="subject-section Resultado"> -Proyectos IV </ul>

        {/* Sección de Año*/}

        <ul className="year-section Titulos">Año de creación:</ul>
        <ul className="year-section Resultado"> -2024 </ul>

      

        {/* Imagen Proyecto Final*/}
      <ul className="Titulos">Resultado Final</ul>
      <img src="/ejemplo.jpg"  className="imgProyect" />
        
        {/* Seccion de Resumen*/}
        
            <ul className="Titulos">Resumen</ul>
            <ul>Lorem ipsum dolor sit amet consectetur. Vulputate blandit et nisi cras tortor. 
                Magnis massa nibh aliquam enim auctor et nunc venenatis proin. At id placerat et senectus. 
                Sed at eu ullamcorper urna vitae. Ornare imperdiet fames ultricies feugiat aliquet elementum ullamcorper bibendum. Hendrerit bibendum fermentum convallis aliquam ut aliquet. 
                Gravida faucibus risus mauris sagittis. Ac arcu nisl posuere pretium. Massa gravida vel ullamcorper amet et aliquam sit. Ornare ac neque metus tellus dictum consectetur. Dolor imperdiet turpis in id duis risus. 
                Mattis interdum netus nullam eu at elementum netus. Libero varius risus consectetur urna dictum varius quis at. 
                </ul>

       {/* Seccion de Descripcion y factor diferenciador de la propuesta*/}

            <ul className="Titulos">Descripcion y factor diferenciador de la propuesta</ul>

            <ul>Lorem ipsum dolor sit amet consectetur. Vulputate blandit et nisi cras tortor. 
                Magnis massa nibh aliquam enim auctor et nunc venenatis proin. At id placerat et senectus. 
                Sed at eu ullamcorper urna vitae. Ornare imperdiet fames ultricies feugiat aliquet elementum ullamcorper bibendum. Hendrerit bibendum fermentum convallis aliquam ut aliquet. 
                Gravida faucibus risus mauris sagittis. Ac arcu nisl posuere pretium. Massa gravida vel ullamcorper amet et aliquam sit. Ornare ac neque metus tellus dictum consectetur. Dolor imperdiet turpis in id duis risus. 
                Mattis interdum netus nullam eu at elementum netus. Libero varius risus consectetur urna dictum varius quis at. 
                </ul>
    
        {/* Sección de Hashtags*/}

            <ul className="Hashtags">#hashtag #hashtag #hashtag #hashtag #hashtag</ul>

        <div className="row">
            <div className="col">
                {/* Botón a la izquierda */}
                <button className="btn btn-primary btn-vis">Volver Atrás</button>
            </div>
            <div className="col d-flex justify-content-end">
                {/* Botones a la derecha */}
                <div className="ms-auto">
                    <button className="btn btn-primary me-2 btn-vis">Rechazar</button>
                    <button className="btn btn-primary btn-vis">Aceptar</button>
                </div>
            </div>
        </div>




    </div>
    </div>
    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>

);
}