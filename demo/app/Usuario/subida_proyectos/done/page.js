'use client'

import React, { useState, useEffect } from 'react';
import {useRouter} from 'next/navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function LoadingPage() {
  const [loadingMessage, setLoadingMessage] = useState('Sus datos están siendo guardados...');
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingMessage('Sus datos han sido validados. Redirigiendo a la página principal...');
      
      // Redirige después de un breve tiempo de espera
      setTimeout(() => {
        router.push('/Usuario/MainPage/proyecto'); // Asegúrate de reemplazar esto con tu ruta real
      }, 3000);
      
    }, 3000);
    
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="container mt-5 text-center">
      <div className="spinner-border text-primary my-3" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
      <h2>{loadingMessage}</h2>
    </div>
  );
}