'use client'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation'
import '../styles/mainPage.css'
import NavbarPrincipal from '@/components/NavbarPrincipal';


const getProyectInfo = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/trabajos")

    if(res.ok){
      const proyectInfo = await res.json()
      return proyectInfo
    }else{
      console.error("Error al recibir la información")
    }

  } catch (e) {
    console.error("Error al hacer la petición: ", e)
  }

}


export default function MainPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [proyectInfo, setProyectInfo] = useState("");

  useEffect(() => {
    getProyectInfo().then(proyectInfo => {
      setProyectInfo(proyectInfo);
    });
  }, []);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const toggleFilters = () => setShowFilters(!showFilters);
  const handleOrderChange = (e, newOrder) => {
    e.preventDefault();
    setSelectedOrder(newOrder);
  };
  const handleFilterChange = (newFilter) => {
    setSelectedFilter(newFilter);
  };

  const router = useRouter();

  return (
    <>
      
      <NavbarPrincipal />

      {/* Botones Orientativos */}
      <div className="home-about">
          <ul className="nav__list">
              <a className=" grados ">Grados</a>
              <a className="ciclos" >Ciclos</a>
              <a className="postgrados">Postgrados</a>
          </ul>
      </div>

      {/* Sección de proyectos, también fuera del fondo */}
      <div className="container mt-4">
        <div className="row">
            {Array.isArray(proyectInfo) && proyectInfo.map((proyecto) => (
              <div className="col-md-4 mb-3" key={proyecto._id}>
                {/* Se utiliza un anchor tag para hacer toda la tarjeta clicable */}
                <a href={proyecto.enlace} className="card-link-custom">
                  <div className="card h-100 tarjeta"> {/* Asegúrate de que la tarjeta ocupe toda la altura para que el enlace también lo haga */}
                    <div className="card-header card-header-titulacion text-center">
                      {proyecto.titulacion}
                    </div>
                    <img src={proyecto.resultadofinal.url} className="card-img-top" alt="Proyecto" /> 
                    <div className="card-body">
                      <h6 className="card-title">{proyecto.titulo}</h6>
                      <p className="card-text">{proyecto.autores.map((autor) => autor)}</p>
                      <p className="card-text text-right">{proyecto.anocreacion}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}