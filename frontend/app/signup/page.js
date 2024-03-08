"use client";
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css'

export default function Signup() {
    const [name, setName] = useState("")
    const [apellido1, setApellido1] = useState("")
    const [apellido2, setApellido2] = useState("")
    const [alias, setAlias] = useState("") //alias
    const [cargo, setCargo] = useState("") //alumno, profesor, departamento, etc
    let [promocion, setPromocion] = useState("") //año de la promocion
    let [titulacion, setTitulacion] = useState("") //tipo de la titulacion (grado, ciclo, etc)
    let [opcion, setOpcion] = useState(""); //nombre de la titulacion (inso, didi, etc)
    const [departamento, setDepartamento] = useState("") //nombre del departamento
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email

    

    //DUDA -> en la pagina de registro es solo correo, y contraseña o también grado, tipo de usuario, etc??

    //listado de titulaciones
    const tipoTitulacion = ["Grado", "Ciclo de Grado Superior", "Postgrado", "Título Propio"];
    const grados = ["Grado en Ingeniería del Software", "Doble Grado en Matemática Computacional e Ingeniería del Software", 
                    "Doble Grado en Física Computacional e Ingeniería del Software", "Grado en Diseño Digital", "Grado en Animación"];
    const ciclos = ["Ciclo de Grado Superior en Marketing y Publicidad", "Ciclo de Grado Superior en Artes Plásticas y Diseño de Animación", 
                    "Ciclo de Grado Superior en Artes Plásticas y Diseño de Ilustración", "Ciclo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma", 
                    "Ciclo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma Dual", "Ciclo de Grado Superior en Desarrollo de Aplicaciones Web", 
                    "Ciclo de Grado Superior en Administración de Sistemas Informáticos en Red", "Ciclo de Grado Superior en Animaciones 3D, Juegos y Entornos Interactivos"];
    const postgrados = ["Programa Avanzado en Envioroment y Prop Art para Videojuegos", "Programa Avanzado en Ilustración", "Programa Avanzado en Animación 2D", "Programa Avanzado en Story Art", 
                    "Programa Avanzado en Previs y Layout", "Programa Avanzado en Concept Art", "Programa Avanzado en Modelado 3D de Personajes", "Programa Avanzado en Animación 3D de Personajes",
                    "Programa Avanzado en Rigging y Character FX", "Programa Avanzado en Composición Digital para VFX", "Programa Avanzado en Programación de Videojuegos", 
                    "Programa Avanzado en Game Design", "Programa Avanzado en Arte y Diseño Visual de Videojuegos", "Programa Avanzado en Dirección de Producción para Animación, VFX y Videojuegos",
                    "Programa Avanzado en Diseño de Personajes", "Máster Universitario en Computación Gráfica, Realidad Virtual y Simulación", "Máster Universitario en Tecnologías Digitales para el arte",
                    "Certificado de formación permanente en Desarrollo para Realidad Virtual, Aumentada y Mixta"]
    const titulosPropios =  ["Desarrollo de Videojuegos", "Arte para Videojuegos"]


    const handleComprobacion = (e) => {
        e.preventDefault();

        //comprobaciones

        //si el input del email contiene @ -> se elimina todo el contenido despues del @ para evitar errores
        if(email.includes("@")){
            email = email.substring(0, email.indexOf("@"))
        }
        
        handleSubmit()
           
    }

    useEffect(() => {
        //si el cargo no es alumni -> la promoción se queda vacía
        if (cargo !== "alumni") {
          setPromocion("");
        }
      
        //si el cargo es departamento -> promocion, titulacion y opcion se quedan vacíos
        if (cargo === "departamento") {
          setPromocion("");
          setTitulacion("");
          setOpcion("");
        }
    }, [cargo]);

    const handleSubmit = (e) => {
        //e.preventDefault();
        // alert("Email: " + email + emailType + "\nContraseña: " + password);
        // alert("Nombre: " + name +"\nApellido1: " + apellido1 + "\nApellido2: " + apellido2 + "\nAlias: " + alias + 
        //       "\nCargo: " + cargo + "\nPromocion: " + promocion + "\nTitulacion: " + titulacion + "\nTipo: " + opcion)

        //objeto con los datos de registro
        const signup = {
            email: email+emailType, //email=input+tipoEmail (alba+@live.u-tad.com)
            password: password,
            name: name,
            apellido1: apellido1,
            apellido2: apellido2,
            alias: alias,
            cargo: cargo,
            promocion: promocion,
            titulacion: titulacion,
            tipo: opcion
        }

        //TODO añadir llamada fetch
        //alert("Registrandote...")
           
    }

    //devuelve los años desde 2015 para el dropdown de promocion
    const getYears = () => {
        const currentYear = new Date().getFullYear();
        const years = [];
        for (let i = 2015; i <= currentYear; i++) {
          years.push(i);
        }
        return years;
    };

    const getOptions = (tipoTitulacion) => {
        switch (tipoTitulacion) {
            case "Grado":
            return grados;
            case "Ciclo de Grado Superior":
            return ciclos;
            case "Postgrado":
            return postgrados;
            case "Título Propio":
            return titulosPropios;
            default:
            return [];
        }
    };
      

    return (
        <div id="signupContent" className="container mt-3">

            <h1 id="titulo" className="text-center my-4">Registro</h1>

                <form className=" mx-5 my-3 px-5 py-5 rounded-4" onSubmit={handleComprobacion}  style={{background: '#A1A1A1'}}>

                    {/*nombre*/}
                    <div className="input-group mb-3">
                        <span className="input-group-text fixed-width-span rounded-start-4">Nombre</span>
                        <input type="text" className="form-control rounded-end-4" placeholder="Ejemplo" onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    {/* apellidos */}
                    <div className="mb-3 d-flex">
                        <div className="input-group">
                            <span className="input-group-text fixed-width-span rounded-start-4">Primer apellido</span>
                            <input type="text" className="form-control rounded-end-4 me-2" placeholder="Ejemplo" onChange={(e) => setApellido1(e.target.value)} required/>
                            
                            <span className="input-group-text fixed-width-span rounded-start-4">Segundo apellido</span>
                            <input type="text" className="form-control rounded-end-4" placeholder="Ejemplo" onChange={(e) => setApellido2(e.target.value)} required/>
                        </div>
                    </div>

                    {/* alias */}
                    <div className="input-group mb-3">
                        <span className="input-group-text fixed-width-span rounded-start-4">Alias</span>
                        <input type="text" className="form-control rounded-end-4" placeholder="Ejemplo" onChange={(e) => setAlias(e.target.value)}/>
                    </div>

                    {/*correo*/}
                    <div className="input-group mb-3 ">
                    <span className="input-group-text fixed-width-span rounded-start-4">Correo</span>
                        <input type="text" className="form-control"  onChange={(e) => setEmail(e.target.value)} placeholder="nombre.apellido" required/>
                        <select id="emailType" className="dropdown-toggle btn rounded-end-4" onChange={(e) => setEmailType(e.target.value)}>
                            <option value="@live.u-tad.com">@live.u-tad.com</option>
                            <option value="@u-tad.com">@u-tad.com</option>
                            <option value="@ext.live.u-tad.com">@ext.live.u-tad.com</option>
                        </select>
                    </div>

                    {/*contraseña*/}
                    <div className="input-group mb-3">
                        <span className="input-group-text fixed-width-span rounded-start-4">Contraseña</span>
                        <input type="password" className="form-control rounded-end-4" placeholder="Ejemplo" onChange={(e) => setPassword(e.target.value)} required/>
                    </div>

                    {/* cargo */}
                    <select className="form-select mb-3 rounded-4" onChange={(e) => setCargo(e.target.value)} required>
                        <option disabled selected >Cargo</option>
                        <option value="alumno">Alumno</option>
                        <option value="alumni">Alumni</option>
                        <option value="profesor">Profesor</option>
                        <option value="coordinador">Coordinador</option>
                        <option value="departamento">Departamento</option>
                    </select>
                    {/* si el cargo es alumno, alumni, profesor o coordinador se muestran los dropdown de tipo de titulación y nombre de titulacion */}
                    {["alumno", "alumni", "profesor", "coordinador"].includes(cargo) && (
                    <>
                        {/* titulacion */}
                        <select className="form-select mb-3 rounded-4" onChange={(e) => setTitulacion(e.target.value)} required>
                        <option disabled selected >Tipo de titulación</option>
                        {tipoTitulacion.map((tipo) => (
                            <option key={tipo} value={tipo}>{tipo}</option>
                        ))}
                        </select>
                        {/*nombre de la titulacion*/}
                        <select className="form-select mb-3 rounded-4" onChange={(e) => setOpcion(e.target.value)} required>
                        <option disabled selected>Elige una opción</option>
                        {getOptions(titulacion).map((opcion) => (
                            <option key={opcion} value={opcion}>{opcion}</option>
                        ))}
                        </select>
                    </>
                    )}
                    {/*Si el cargo es alumni, se muestra el dropdown para elegir la promocion*/}
                    {cargo === "alumni" && (
                    <select className="form-select mb-3 rounded-4" id="alumniDropdown" onChange={(e) => setPromocion(e.target.value)} required>
                        <option disabled selected >Promoción</option>
                        {getYears().map((year) => (
                        <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                    )}

                    {/*si el cargo es departamento, se muestra el dropdown de los departamentos*/}
                    {cargo === "departamento" && (
                    <select className="form-select mb-3 rounded-4" onChange={(e) => setDepartamento(e.target.value)} required>
                        <option disabled selected >Elige un departamento</option>
                        <option value="dep1">Departamento 1</option>
                        <option value="dep2">Departamento 2</option>
                        <option value="dep3">Departamento 3</option>
                    </select>
                    )}

                    {/* submit */}
                    <div className="text-center">
                        <button type="submit" className="btn mt-4 text-center rounded-4 px-5" style={{background: '#C8C8C8'}}><div id='textoBoton'>Registrarse</div></button>
                    </div>

                </form>

        </div>
    );
}