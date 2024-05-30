'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import '../styles/userManager.css';
import '../styles/buscador.css';

export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState("Recomendado");
  const [selectedFilter, setSelectedFilter] = useState("Todos los proyectos");
  const [users, setUsers] = useState([
    { id: 0, name: "Mario Hurtado Ruíz", project: "Diseño Digital" },
    { id: 1, name: "Paula", project: "Ingeniería de Software" },
    { id: 2, name: "Alba", project: "Ingeniería de Software" },
    { id: 3, name: "Francisco Javier", project: "Ingeniería de Software" },
    { id: 4, name: "Bea", project: "Diseño Digital" },
    { id: 5, name: "Alvaro", project: "Ingeniería de Software" },
    { id: 6, name: "Vasco", project: "Ingeniería de Software" },
    { id: 7, name: "Alex", project: "Ingeniería de Software" },
  ]);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleOrderChange = (e, newOrder) => {
    e.preventDefault();
    setSelectedOrder(newOrder);
  };
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  const handleRemoveUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const router = useRouter();

  const handleProfileClick = () => {
    router.push('/Administrador/perfil');
  };

  const handleUploadClick = () => {
    router.push('/Usuario/subida_proyectos');
  };
  
  const handleBuscador = () => {
    router.push('/Usuario/buscador');
  };

  const handleMainPage = () => {
    router.push('/Administrador/MainPage');
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
              <input id="searchBar" type="text" onClick={handleBuscador} className="form-control searchBar searchBarTip" placeholder="Escribe aquí..."/>
            </div>
            <div>
              <button id="profileButton" className="btn" onClick={handleProfileClick}><h3 id="modifih3">Mi perfil</h3></button>
              <button id="createProyect" className="btn btn-primary" onClick={handleUploadClick}><h3 id="modifih3">Subir Proyecto</h3></button>
            </div>
          </header>
        </div>
      </div>
      
      <div className="container my-3">
        <h1 id="ResultadoBusqueda" className="mb-0">Listado de usuarios:</h1>
        <div className="input-group mb-4">
          <input id="searchBarUsers" type="text" onChange={handleSearchChange} className="form-control searchBar searchBarTip" placeholder="Buscar usuario..." value={searchQuery}/>
        </div>
      </div>
      
      <div id="layoutFirst">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div id="DesplazamientoBotones" className="d-flex">
            <button id="botonesBlancoAzul" className="btn"><h3 id="botonesBlancoAzulTexto" className="mb-0">Filtros</h3></button>
            <button id="botonesBlancoAzul" className="btn"><h3 id="botonesBlancoAzulTexto" className="mb-0">Ordenar por: {selectedOrder}</h3></button>
          </div>
        </div>

        <div id="layoutSecond">
          <div id="userList">
            {users.map(user => (
              <div key={user.id} className="userEntry">
                <p>{user.project}</p>
                <p>{user.name}</p>
                <div className="userActions">
                  <a href="#" onClick={() => handleRemoveUser(user.id)}>Hacer administrador</a>
                  <a href="#" onClick={() => handleRemoveUser(user.id)}>Dar de baja</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
