"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import '../styles/verProyecto.css'
import '../styles/mainPage.css'

export default function ViewProjects() {
    const router = useRouter();
    const handleBack = () => {
      router.push('/Usuario/MainPage/proyecto');
  };
  
    return (
    <div>
      <div className="container-fluid navBar">
        {/* Encabezado */}
        <header className="d-flex justify-content-between align-items-center py-2">
            <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid utad_logo" style={{ maxHeight: '60px' }} />
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
        <h1 className="mb-3" id="titulo">"OptiCode: Plataforma de optimización para algoritmos en la nube"</h1>
        <h3 id="autores">Autor/es</h3>
        <div id="">
          <div id="foto"></div>
          <div id="foto2"></div>
          <div id="foto3"></div>
        </div>
      </div>
    </div>
    );
  }