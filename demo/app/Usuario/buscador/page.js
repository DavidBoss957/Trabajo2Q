'use client'

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import '../styles/mainPage.css';
import '../styles/buscador.css';
import { Modal, Button } from 'react-bootstrap';

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("Recomendado");
  const [selectedFilter, setSelectedFilter] = useState({
    titulacion: '',
    asignatura: '',
    fecha: ''
  });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleOrderChange = (e, newOrder) => {
    e.preventDefault();
    setSelectedOrder(newOrder);
  };
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilter(prevState => ({ ...prevState, [name]: value }));
  };

  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/Usuario/perfil');
  };

  const handleUploadClick = () => {
    router.push('/Usuario/subida_proyectos');
  };

  const handleVerProyecto1 = () => {
    router.push('/Usuario/verProyecto1');
  };

  const handleBuscador = () => {
    router.push('/Usuario/buscador');
  };

  const handleMainPage = () => {
    router.push('/Usuario/MainPage');
  };

  return (
    <>
      <Head>
        <title>Descripción de la página</title>
      </Head>
      <div>
        <div className="container-fluid navBar">
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

        <div className="container my-3">
        </div>
      </div>

      <div id="layoutFirst">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 id="ResultadoBusqueda" className="mb-0">Resultados de búsqueda:</h1>
          <div id="DesplazamientoBotones" className="d-flex">
            <button id="botonesBlancoAzul" className="btn" onClick={toggleFilters}>
              <h3 id="botonesBlancoAzulTexto" className="mb-0">Filtros</h3>
            </button>
            <button id="botonesBlancoAzul" className="btn">
              <h3 id="botonesBlancoAzulTexto" className="mb-0">Ordenar por: Recomendado</h3>
            </button>
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
              <img id="imagenProyecto" src="/f66cf9e5f59a51477285f972ee774b2b.jpg" alt="Logo" />
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

      <Modal show={showFilters} onHide={toggleFilters} centered>
        <Modal.Header closeButton id="custom-modal-header">
          <Modal.Title className="modal-title">FILTRAR POR:</Modal.Title>
        </Modal.Header>
        <Modal.Body className="custom-modal-body">
          <select name="titulacion" className="form-select mb-3 custom-select" onChange={handleFilterChange} style={{backgroundColor: 'white', textAlign: 'center'}}>
            <option value="">Selecciona Titulación</option>
            <option value="Diseño Digital">Diseño Digital</option>
            <option value="Ingenieria de Software">Ingeniería de Software</option>
            <option value="Ingenieria de Software + Matematicas">Ingeniería de Software + Matemáticas</option>
          </select>
          <select name="asignatura" className="form-select mb-3 custom-select" onChange={handleFilterChange} style={{backgroundColor: 'white', textAlign: 'center'}}>
            <option value="">Selecciona Asignatura</option>
            <option value="Asignatura 1">Asignatura 1</option>
            <option value="Asignatura 2">Asignatura 2</option>
            <option value="Asignatura 3">Asignatura 3</option>
          </select>
          <select name="fecha" className="form-select mb-3 custom-select" onChange={handleFilterChange} style={{backgroundColor: 'white', textAlign: 'center'}}>
            <option value="">Selecciona Año</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </Modal.Body>
        <Modal.Footer id="custom-modal-footer">
          <Button variant="primary" onClick={toggleFilters} id="custom-button">
            ACTUALIZAR RESULTADOS
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}