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
    router.push('/Usuario/MainPage/proyecto');
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
          <h1 className="mb-3" id="titulo">"Blackstorm"</h1>
        </div>
        <h3 id="autores">Autor/es</h3>
        <div id="autoresContainer">
          <div class="foto" id="foto1"></div>
          <div class="foto" id="foto2"></div>
          <div class="foto" id="foto3"></div>
          <span id="autoresNombres">Sofía García, Sebastián Peña, Carolina Lopez +6</span>
        </div>
        <p id="autores">Docentes implicados</p>
        <div id="autoresContainer">
          <div class="foto" id="foto1"></div>
          <span id="autoresNombres">Santiago Marin Cano</span>
        </div>
        <div id="autoresContainer">
          <p id="autores">Asignatura/s:</p><p class="asignatura" id="autoresNombres">Arte y Diseño Visual de Videojuegos</p>
        </div>
        <div id="autoresContainer">
          <p id="autores">Año de creación:</p><p class="asignatura" id="autoresNombres">2019</p>
        </div>
        <div id="autoresContainer">
          <p id="autores">Premios:</p><p class="asignatura" id="autoresNombres">Game Critics Awards 2019</p>
        </div>
        <p id="autores">Resultado final</p>
        <img id="imLayout" src="/5b57e5c64631d4dc23a90dd865df5754.png" alt="Logo" className="img-fluid"/>
        <p id="autores">Resumen</p>
        <p id="resumenes">En un futuro lejano, la humanidad ha colonizado varios sistemas estelares, pero la paz está lejos de ser alcanzada. Las corporaciones galácticas y las fuerzas rebeldes están en constante conflicto por el control de recursos vitales y territorios estratégicos. En este caótico escenario, emerge una nueva amenaza: una tormenta espacial de proporciones apocalípticas conocida como "Blackstorm".</p>
        <p id="autores">Descripción y factor diferenciador de la propuesta</p>
        <p id="resumenes">Los jugadores explorarán vastos sistemas estelares, interactuarán con personajes diversos, tomarán decisiones cruciales que influirán en el desarrollo de la historia y participarán en intensas batallas espaciales contra enemigos tanto humanos como alienígenas. Con gráficos de última generación y una banda sonora envolvente, "Blackstorm" promete una experiencia inmersiva y emocionante.</p>
        <p id="autores">Memoria</p>
        <p id="autores">Enlaces externos</p>
        <p id="resumenes">www.quantumforgestudios.com</p>
        <p id="autores">Palabras clave</p>
        <p id="resumenes">#Blackstorm #Videojuego de acción #Aventura espacial #Ciencia ficción #Combate espacial</p>

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