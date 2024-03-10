import './Formulario.css';
import Button from 'react-bootstrap/Button';
import { useState } from "react"

function Formulario({setMensaje}){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    

    function validaDatos(e){
        let mensajes = []
        e.preventDefault()
        const emailExpresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        if(name===""||email===""||password===""||confirm===""){
            mensajes.push("Debes rellenar todos los campos")
        }
        if(!emailExpresion.test(email)&&email!==""){
            mensajes.push("Formato de correo incorrecto")
        }
        if(password!==confirm&&password!==""&&confirm!==""){
            mensajes.push("contraseñas no coinciden")
        }
        if(emailExpresion.test(email)&&password===confirm&&(password!==""&&confirm!=="")&&name!==""){
            mensajes = ["Registro exitoso"]
        }
        setMensaje(mensajes)
    }

    return(
        <form className="registro-formulario" onSubmit={validaDatos}>
            <input type="text" placeholder="Nombre" onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="tuemail@ejemplo.com" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Contraseña" onChange={(e)=>setPassword(e.target.value)}/>
            <input type="password" placeholder="Confirma tu contraseña" onChange={(e)=>setConfirm(e.target.value)}/>
            <Button variant="success" size="lg">Registrarse</Button>
        </form>
    )
    

}

export default Formulario