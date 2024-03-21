"use client";
import { useState, useEffect } from 'react';
import '../styles/mainPage.css';
import Head from 'next/head';

export default function MainPage() {
const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const sectionOneOptions = {
  rootMargin: "-120px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver){
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);


return (
<div>
    <head>
        <link
      href="https://fonts.googleapis.com/css?family=Poppins:300,900&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="css/main.css" />
    <header>
      <img src="img/logo-utad.jpg" alt="Logo" style="max-height: 60px; max-width: 100%;"></img>
      <nav class="main-nav">
        <div class="search-box">
          <input class="search-input" type="text" placeholder="Buscar..."></input>
        </div>
      </nav>
      <nav class="miPerfil">
        <ul class="nav__list">
          <li class="nav__list-item">
            <a class="nav__link nav__link--btn" href="#">Mi Perfil</a>
          </li>
          <li class="nav__list-item">
            <a class="nav__link nav__link--btn nav__link--btn--highlight" href="#">Subir Proyecto</a>
          </li>
        </ul>
      </nav>
    </header>
  </head>

  <body>
    

    <main>
      
      <section class="home-intro">
        <h1>REPOSITORIO U-TAD</h1>
        <h3>Donde yacen todos los trabajos que se hicieron y se harán.</h3>
      </section>

      <div class="home-about">
      
          <ul class="nav__list">
            <li class="nav__list-item">
              <a class=" info-boton1 ">Grados</a>
            </li>
            <li class="nav__list-item">
              <a class="info-boton2" >Ciclos</a>
            </li>
            <li class="nav__list-item">
              <a class="info-boton3">Postgrados</a>
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
    </body>
    </div>
);
}
