"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/navigation'

export default function Perfil() {
    const router = useRouter();
    //implementar funcion get para listar la info del usuario
    const handleLogOut = () => {
        // Suponiendo que tienes una ruta "/mi-perfil" en tu aplicación de Next.js
        router.push('/');
    };

    //implementar funcion post para actualizar los datos del usuario

    return (
<div id="perfilContainer" className="container mt-3">

<div id="elementosPerfil" className="mx-auto w-75">
    
    {/* Imagen */}
    <img src="6326055.png" className="img-fluid mx-auto d-block mt-5 rounded-circle w-5 h-auto" alt="Perfil"/>
    
    {/* Nombre y apellidos */}
    <h2 id="nombre_apellidos" className="text-center my-3 fw-bold">Mario Hurtado</h2>

    {/* Alias */}
    <h2 id="alias" className='text-center text-primary mt-1'>Diseño</h2>

    {/* Botones proyectos */}
    <div className="text-center my-3">
        <button type="submit" className="btn btn-outline-primary mx-2">Solicitudes de proyectos</button>
        {/* SOLO ADMIN */}
        <button type="submit" className="btn btn-primary mx-2">Administrar usuarios</button>
    </div>

    {/* Informacion general */}
    <div className="my-4">
        <h3 className="text-primary mt-5 mb-4">Información general</h3>
        <div className="bg-white p-3 shadow-sm rounded">
            <p className="my-1"><strong>Nombre Completo:</strong> Mario Hurtado</p>
            <p className="my-1"><strong>Alias:</strong> Diseño</p>
            {/* Añadir más información si es necesario */}
        </div>
    </div>
    
    {/* Informacion en utad */}
    <div className="my-4">
        <h3 className="text-primary mt-5 mb-4">Información en U-tad</h3>
        <div className="bg-white p-3 shadow-sm rounded">
            <p className="my-1"><strong>Dirección de correo electrónico:</strong> mario.hurtado@live.u-tad.com</p>
            <p className="my-1"><strong>Cargo:</strong> Alumno</p>
            {/* Añadir tipo y nombre de titulación si es necesario */}
        </div>
    </div>

    {/* Preferencias y notificaciones */}
    <div className="my-4">
        <h3 className="text-primary mt-5 mb-4">Preferencias y notificaciones</h3>
        <div className="bg-white p-3 shadow-sm rounded">
            <p className="my-1"><strong>Idioma:</strong> Español</p>
            <p className="my-1"><strong>Notificaciones:</strong> Email, SMS</p>
        </div>
    </div>

    {/* Botones cuenta */}
    <div className="text-center my-3">
        <button onClick={handleLogOut} type="button" className="btn btn-outline-secondary mx-2">Cerrar sesión</button>
        <button type="button" className="btn btn-secondary mx-2">Actualizar perfil</button>
    </div>
</div>
</div>

    )

}