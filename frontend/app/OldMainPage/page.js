"use client";


import { useState, useEffect } from 'react';
import '../styles/mainPage.css';
import Head from 'next/head';

export default function MainPage() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const header = document.querySelector("header");
    const sectionOne = document.querySelector(".home-intro");

    const sectionOneOptions = {
      rootMargin: "-120px 0px 0px 0px"
    };

    const sectionOneObserver = new IntersectionObserver(function(entries, sectionOneObserver) {
      entries.forEach(entry => {
        if (!entry.isIntersecting) {
          setIsIntersecting(true);
        } else {
          setIsIntersecting(false);
        }
      });
    }, sectionOneOptions);

    sectionOneObserver.observe(sectionOne);

    return () => {
      // Clean up the observer
      sectionOneObserver.unobserve(sectionOne);
    };
  }, []); // Empty dependency array to run this effect only once

  return (
    <div>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:300,900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className={isIntersecting ? "nav-scrolled" : ""}>
        <img src="img/logo-utad.jpg" alt="Logo" style={{ maxHeight: '60px', maxWidth: '100%' }} />
        <nav className="main-nav">
          <div className="search-box">
            <input className="search-input" type="text" placeholder="Buscar..." />
          </div>
        </nav>
        <nav className="miPerfil">
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__link nav__link--btn-Main" href="../perfil/page.js">Mi Perfil</a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link nav__link--btn-Main nav__link--btn--highlight" href="../subida_proyectos/done/page.js">Subir Proyecto</a>
            </li>
          </ul>
        </nav>
      </header>

  
    

    <main>
      
      <section class="home-intro">
        <h1>REPOSITORIO U-TAD</h1>
        <h3>Donde yacen todos los trabajos que se hicieron y se harán.</h3>
      </section>

      <div class="home-about">
      
          <ul class="nav__list">
            <li class="nav__list-item">
              <a class=" grados ">Grados</a>
            </li>
            <li class="nav__list-item">
              <a class="ciclos" >Ciclos</a>
            </li>
            <li class="nav__list-item">
              <a class="postgrados">Postgrados</a>
            </li>
          </ul>
      </div>

    <section class="container">

        <div class="proyect">
          <div class="top-proyect">
            <div class="proyect-titulacion"> 
              <p>Titulación</p>
            </div>
            <div>
              <img class="proyect-image" src="img/logo-utad.jpg"></img>
            </div>
          </div>
            
            <div class="proyect-info">
              <p>Título del Proyecto </p>
              <p>Año</p>
              <p>Autor/es</p>
            </div>
        </div>
        <div class="proyect">
          <div class="top-proyect">
            <div class="proyect-titulacion"> 
              <p>Titulación</p>
            </div>
            <div>
              <img class="proyect-image" src="img/logo-utad.jpg"></img>
            </div>
          </div>
            
            <div class="proyect-info">
              <p>Título del Proyecto </p>
              <p>Año</p>
              <p>Autor/es</p>
            </div>
        </div>
        <div class="proyect">
          <div class="top-proyect">
            <div class="proyect-titulacion"> 
              <p>Titulación</p>
            </div>
            <div>
              <img class="proyect-image" src="img/logo-utad.jpg"></img>
            </div>
          </div>
            
            <div class="proyect-info">
              <p>Título del Proyecto </p>
              <p>Año</p>
              <p>Autor/es</p>
            </div>
        </div>
    </section>
    <section class="container">

      <div class="proyect">
        <div class="top-proyect">
          <div class="proyect-titulacion"> 
            <p>Titulación</p>
          </div>
          <div>
            <img class="proyect-image" src="img/logo-utad.jpg"></img>
          </div>
        </div>
          
          <div class="proyect-info">
            <p>Título del Proyecto </p>
            <p>Año</p>
            <p>Autor/es</p>
          </div>
      </div>
      <div class="proyect">
        <div class="top-proyect">
          <div class="proyect-titulacion"> 
            <p>Titulación</p>
          </div>
          <div>
            <img class="proyect-image" src="img/logo-utad.jpg"></img>
          </div>
        </div>
          
          <div class="proyect-info">
            <p>Título del Proyecto </p>
            <p>Año</p>
            <p>Autor/es</p>
          </div>
      </div>
      <div class="proyect">
        <div class="top-proyect">
          <div class="proyect-titulacion"> 
            <p>Titulación</p>
          </div>
          <div>
            <img class="proyect-image" src="img/logo-utad.jpg"></img>
          </div>
        </div>
          
          <div class="proyect-info">
            <p>Título del Proyecto </p>
            <p>Año</p>
            <p>Autor/es</p>
          </div>
      </div>
  </section>
  <section class="container">

    <div class="proyect">
      <div class="top-proyect">
        <div class="proyect-titulacion"> 
          <p>Titulación</p>
        </div>
        <div>
          <img class="proyect-image" src="img/logo-utad.jpg"></img>
        </div>
      </div>
        
        <div class="proyect-info">
          <p>Título del Proyecto </p>
          <p>Año</p>
          <p>Autor/es</p>
        </div>
    </div>
    <div class="proyect">
      <div class="top-proyect">
        <div class="proyect-titulacion"> 
          <p>Titulación</p>
        </div>
        <div>
          <img class="proyect-image" src="img/logo-utad.jpg"></img>
        </div>
      </div>
        
        <div class="proyect-info">
          <p>Título del Proyecto </p>
          <p>Año</p>
          <p>Autor/es</p>
        </div>
    </div>
    <div class="proyect">
      <div class="top-proyect">
        <div class="proyect-titulacion"> 
          <p>Titulación</p>
        </div>
        <div>
          <img class="proyect-image" src="img/logo-utad.jpg"></img>
        </div>
      </div>
        
        <div class="proyect-info">
          <p>Título del Proyecto </p>
          <p>Año</p>
          <p>Autor/es</p>
        </div>
    </div>
   </section>

        
    </main>


    <footer class="footer">
          Privacidad &nbsp;&nbsp;&nbsp; Condiciones &nbsp;&nbsp;&nbsp; Accesibilidad
    </footer>
    
    </div>
);
}
