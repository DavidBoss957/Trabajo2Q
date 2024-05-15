'use client'

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import '../styles/mainPage.css'
import '../styles/buscador.css'

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("Recomendado");
  const [selectedFilter, setSelectedFilter] = useState("Todos los proyectos");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleOrderChange = (e, newOrder) => {
    e.preventDefault();
    setSelectedOrder(newOrder);
  };
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  // Renderiza el contenido basado en el filtro seleccionado
  const renderContent = () => {
  };


  const router = useRouter();

  const handleProfileClick = () => {
    // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
    router.push('/Usuario/perfil');
  };

  const handleUploadClick = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/Usuario/subida_proyectos');
  };

  const handleVerProyecto1 = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/Usuario/verProyecto1');
  };

  
  const handleBuscador = () => {
    // Suponiendo que tienes una ruta "/subir-proyecto" en tu aplicación de Next.js
    router.push('/Usuario/buscador');
  };

  return (
<>
  <Head>
    <title>Descripción de la página</title>
  </Head>
  <div>
    {/* Contenedor fluido para la parte superior con el fondo */}
    <div className="container-fluid navBar">
      {/* Encabezado */}
      <header className="d-flex justify-content-between align-items-center py-2">
        <img src="/U-TAD-Logo-CARD.webp" alt="Logo" className="img-fluid utad_logo" style={{ maxHeight: '60px' }} />
        <div>
          <input id="searchBar" type="text" onClick={handleBuscador} className="form-control searchBar searchBarTip" placeholder="Escribe aquí..."/>
        </div>
        <div>
          <button id="profileButton" className="btn" onClick={handleProfileClick}><h3 id="modifih3">Mi perfil</h3></button>
          <button id="createProyect" className="btn btn-primary" onClick={handleUploadClick}><h3 id="modifih3">Subir Proyecto</h3></button>
        </div>
      </header>
    </div>

    {/* Contenedor para el título y la barra de búsqueda */}
    <div className="container my-3">
      {/* Título y descripción de la página */}
      
      {/* Barra de búsqueda */}
      <div className="input-group mb-4">
        
      </div>
    </div>
  </div>

  <div id="layoutFirst">
    <div className="d-flex justify-content-between align-items-center mb-4">
      <h1 id="ResultadoBusqueda" className="mb-0">Resultados de búsqueda:</h1>
      <div id="DesplazamientoBotones" className="d-flex">
        <button id="botonesBlancoAzul" className="btn"><h3 id="botonesBlancoAzulTexto" className="mb-0">Filtros</h3></button>
        <button id="botonesBlancoAzul" className="btn"><h3 id="botonesBlancoAzulTexto" className="mb-0">Ordenar por: Recomendado</h3></button>
      </div>
    </div>
    
    <div id="botonesNavegacionBusqueda">
      <button id="botonesGris" className="btn"><h3 id="textoBotonGris">Todos los proyectos</h3></button>
      <button id="botonesBlancoAzul" className="btn"><h3 id="botonesBlancoAzulTexto">Proyectos Premiados</h3></button>
      <button id="botonesBlancoAzul" className="btn"><h3 id="botonesBlancoAzulTexto">Autor/es</h3></button>
    </div>

    <div id="layoutSecond">
      <div id="formatoProyecto" onClick={handleVerProyecto1}>
        <div id="tituloProyecto">
          <p id="textoTitulo">Diseño Digital</p>
        </div>
        <div>
          <img id="imagenProyecto" src="/f66cf9e5f59a51477285f972ee774b2b.jpg" alt="Logo"/>
        </div>
        <div id="infoProyecto">
          <div id="tituloAno">
            <p id="textoBody">Suena a verano - RTVE</p>
            <p id="textoBody">2023</p>
          </div>
          <p id="textoBody">Mario Hurtado, Alejandro Valencia, más.</p>
        </div>
      </div>
    </div>
  </div>
</>
  );
}
