"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login_signup.css'
import '../globals.css'

export default function Signup() {
    const [name, setName] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [alias, setAlias] = useState("") //alias
    let [email, setEmail] = useState("") //input email
    const [password, setPassword] = useState("") //input contraseña
    const [emailType, setEmailType] = useState("@live.u-tad.com") //valor por defecto del email
    const [role, setRole] = useState("") //rol del usuario
    const [cargo, setCargo] = useState("") //cargo del usuario
    const [reqPassMay, setReqPassMay] = useState(false) //variable para comprobar si la contraseña tiene mayusculas
    const [reqPassMin, setReqPassMin] = useState(false) //variable para comprobar si la contraseña tiene entre 8 y 16 caracteres
    const [reqPassNum, setReqPassNum] = useState(false) //variable para comprobar si la contraseña tiene numeros

    const router = useRouter();

    const handleChangePassword = (e) => {
        setPassword(e.target.value);

        //comprueba si tiene mayusculas
        if (/[A-Z]/.test(e.target.value)) {
            setReqPassMay(true)
        }else{
            setReqPassMay(false)
        }

        //comprueba si tiene entre 8 y 16 caracteres
        if(password.length > 8 && password.length < 16){
            setReqPassMin(true)
        }else{
            setReqPassMin(false)
        }

        //comprueba si tiene numeros
        if (/\d/.test(e.target.value)) {
            setReqPassNum(true)
        }else{
            setReqPassNum(false)
        }
        
    }

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
        // Actualiza el rol y el cargo del usuario según el emailType
        if(emailType === "@live.u-tad.com"){
            setRole("usuario")
            setCargo("alumno")
        }
        if(emailType === "@u-tad.com"){
            setRole("creador")
            setCargo("profesor")
        }
        if(emailType === "@ext.live.u-tad.com"){
            setRole("creador")
            setCargo("departamento")
        }
    }, [emailType]); //se ejecuta cada vez que cambie emailType

    const handleSubmit = async (e) => {
        //e.preventDefault();

        //objeto con los datos de registro
        const signup = {
            name: name,
            apellidos: apellidos,
            alias: alias,
            email: email+emailType, //email=input+tipoEmail (alba+@live.u-tad.com)
            cargo: cargo,
            role: role,            
            password: password            
        }
        
        try {

            const response = await fetch('http://localhost:3000/api/auth/register', {


                method: 'POST',
                headers: {
                //Authorization: `Bearer ${tokenJWT}`
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(signup)
            });
            if(response.ok) { //si se conecta bien al servidor
                const data = await response.json();
                router.push("/login")

            }else{ //si da error al conectarse
                console.error('Datos incorrectos')
            }

        }catch (e){
            console.error('Error al registrarse:', e)
        }
           
    }

    return (
        <div id="signupContent" className="container my-5" style={{zoom: '85%'}}>

            <img src="img/Logo-Utad.png" id="imgsignup" className="img-fluid mx-auto d-block my-5" alt="logo U-tad"/>
            <h1 className="text-center my-4 montserrat-h1">¡Bienvenid@ a U-tad Projects!</h1>

            <div id="containerFormulario" className="d-flex justify-content-center mx-5 mt-5 ">
                <form id="formSignUp" className="px-5 py-5 rounded-4" onSubmit={handleComprobacion}  >
                    
                    <h2 className="montserrat-h2 text-center">Registrarse</h2>
                    
                    {/*nombre*/}
                    <div className="mb-3">
                        <label htmlFor="nombre" className="mt-4 mb-2 montserrat-body">Nombre *</label>
                        <input type="text" className="form-control rounded-4 p-3 form-input montserrat-body" placeholder="Escribe aquí..." onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    {/* apellidos */}
                    <div className="mb-3">
                        <label htmlFor="apellidos" className="mt-2 mb-2 montserrat-body">Apellidos *</label>
                        <input type="text" className="form-control rounded-4 p-3 form-input montserrat-body" placeholder="Escribe aquí..." onChange={(e) => setApellidos(e.target.value)} required/>
                    </div>

                    {/* alias */}
                    <div className="mb-3">
                        <div className="d-flex">
                            <label htmlFor="alias" className="mt-2 mb-2 montserrat-body">Alias</label>
                            <label htmlFor="alias" className=" ms-2 montserrat-detalle">Opcional</label>
                        </div>
                        {/* <label htmlFor="alias" className="mt-2 mb-2 montserrat-body">Alias<p className="montserrat-detalle">Opcional</p></label> */}
                        <input type="text" id="alias" className="form-control rounded-4 p-3 form-input montserrat-body" placeholder="Escribe aquí..." onChange={(e) => setAlias(e.target.value)}/>
                    </div>

                    {/*correo*/}
                    <label htmlFor="email" className="mt-2 mb-2 montserrat-body">Dirección de correo electrónico *</label>
                    <div className="input-group mb-3 ">
                        <input type="text" id="email" className="form-control rounded-start-4 p-3 form-input montserrat-body" onChange={(e) => setEmail(e.target.value)} placeholder="Escribe aquí..." required/>
                        <select id="selectEmail" className="btn rounded-end-4 pe-5" onChange={(e) => setEmailType(e.target.value)}>
                            <option value="@live.u-tad.com" className="montserrat-body">@live.u-tad.com</option>
                            <option value="@u-tad.com" className="montserrat-body">@u-tad.com</option>
                            <option value="@ext.live.u-tad.com" className="montserrat-body">@ext.live.u-tad.com</option>
                        </select>
                    </div>

                    {/*contraseña*/}
                    <div className="mb-3">
                        <label htmlFor="password" className="mt-2 mb-2 montserrat-body">Contraseña *</label>
                        <input type="password" id="password" className="form-control rounded-4 p-3 form-input montserrat-body" placeholder="Escribe aquí..." onChange={handleChangePassword} required/>
                        
                        <p className="montserrat-detalle-light mb-1">Tu contraseña debe tener:</p>
                        <div className="d-flex align-items-center my-0">
                            {reqPassMay === false && (
                                <img src="img/cruz.png" className='estado' alt="cruz"/>
                            )}
                            {reqPassMay === true && (
                                <img src="img/tick.png" className='estado' alt="tick"/>
                            )}
                            <p className="ms-2 requisitos montserrat-detalle-light">Al menos una mayúscula</p>
                        </div>

                        <div className="d-flex align-items-center my-0">
                            {reqPassMin === false && (
                                <img src="img/cruz.png" className='estado' alt="cruz"/>
                            )}
                            {reqPassMin === true && (
                                <img src="img/tick.png" className='estado' alt="tick"/>
                            )}
                            <p className="ms-2 requisitos montserrat-detalle-light">Entre 8 y 16 caracteres</p>
                        </div>

                        <div className="d-flex align-items-center my-0">
                            {reqPassNum === false && (
                                <img src="img/cruz.png" className='estado' alt="cruz"/>
                            )}
                            {reqPassNum === true && (
                                <img src="img/tick.png" className='estado' alt="tick"/>
                            )}
                            <p className="ms-2 requisitos montserrat-detalle-light">Al menos un número</p>
                        </div>
                        
                    </div>

                    

                    {/* boton submit */}
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="mt-4 text-center rounded-4 px-4 py-3 principal-azul montserrat-h3" style={{background: '#0065EF', color: 'white'}}>ACCEDER</button>
                    </div>

                </form>
            </div>

            <div className="d-flex justify-content-center text-center mt-4">
                <p className="montserrat-body">¿Ya tienes una cuenta?</p>
                <a className="ms-2 montserrat-body-underline" href="/login">Inicia sesión.</a>
            </div>

        </div>
    );
}