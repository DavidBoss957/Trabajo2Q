"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import '../styles/verProyecto.css'
import '../styles/mainPage.css'
import '../styles/perfil.css'

export default function ViewProjects() {
    const router = useRouter();
    const handleBack = () => {
      router.push('/Usuario/MainPage/proyecto');
    };

  const handleMainPageProyect = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/Usuario/MainPage');
  };
  
  const handleMainPage = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/Usuario/MainPage');
  };


    return (
    <div>
      <div className="container-fluid navBar">
        {/* Encabezado */}
        <header className="d-flex justify-content-between align-items-center py-2">
            <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid utad_logo" onClick={handleMainPage} style={{ maxHeight: '60px' }} />
            <div>
                <input id="searchBar" type="text" className="form-control searchBar searchBarTip" placeholder="Barra de búsqueda"/>
            </div>
            <div>
                <button id="profileButton" className="btn"><h3 id="modifih3">Mi perfil</h3></button>
                <button id="createProyect" className="btn btn-primary"><h3 id="modifih3">Subir Proyecto</h3></button>
            </div>
        </header>
      </div>
      <div id="contentLayout">
        <div id="tituloLayout">
          <h1 className="mb-3" id="titulo">"Suena a verano - RTVE"</h1>
        </div>
        <h3 id="autores">Autor/es</h3>
        <div id="autoresContainer">
          <div class="foto" id="foto1"></div>
          <div class="foto" id="foto2"></div>
          <div class="foto" id="foto3"></div>
          <span id="autoresNombres">Mario Hurtado, Beatriz Peña, Alba Lopez +6</span>
        </div>
        <p id="autores">Docentes implicados</p>
        <div id="autoresContainer">
          <div class="foto" id="foto1"></div>
          <span id="autoresNombres">Pablo Andrés Martín Pérez</span>
        </div>
        <div id="autoresContainer">
          <p id="autores">Asignatura/s:</p><p class="asignatura" id="autoresNombres">Proyectos IV</p>
        </div>
        <div id="autoresContainer">
          <p id="autores">Año de creación:</p><p class="asignatura" id="autoresNombres">2024</p>
        </div>
        <div id="autoresContainer">
          <p id="autores">Premios:</p><p class="asignatura" id="autoresNombres">Laus 2024</p>
        </div>
        <p id="autores">Resultado final</p>
        <img id="imLayout" src="/f66cf9e5f59a51477285f972ee774b2b.jpg" alt="Logo" className="img-fluid"/>
        <p id="autores">Resumen</p>
        <p id="resumenes">Es un programa de televisión emitido por RTVE que captura la esencia y el espíritu de la temporada estival a través de la música, el entretenimiento y las historias veraniegas. Con una combinación de actuaciones en vivo, entrevistas, reportajes y segmentos dedicados a las fiestas y tradiciones veraniegas, el programa ofrece una experiencia vibrante y festiva para toda la familia.</p>
        <p id="autores">Descripción y factor diferenciador de la propuesta</p>
        <p id="resumenes">Ambiente Festivo y Familiar, Diversidad de Contenidos, Enfoque en la Cultura Local, Interacción con el Público y Escenarios Naturales</p>
        <p id="autores">Memoria</p>
        <p id="autores">Enlaces externos</p>
        <p id="resumenes">www.suenaaverano.com</p>
        <p id="autores">Palabras clave</p>
        <p id="resumenes">#Suena a verano #RTVE #Programa de verano #Música en vivo #Entretenimiento familiar</p>

      </div>
      <div class="project-buttons">
        <center><button id="exitButton" className="bnt" onClick={handleMainPage}><h3 id="modifih3">VOLVER ATRÁS</h3></button></center>
      </div>

      <div id="footerLayout">
                <center>
                <div id="footerInterior">
                    <p id="textoBody">Privacidad</p>
                    <p id="textoBody">Condiciones</p>
                    <p id="textoBody">Accesibilidad</p>
                </div>
                </center>
            </div>
    </div>
    );
  }