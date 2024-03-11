import {useState} from 'react'
import './Formulario.css';
import Button from 'react-bootstrap/Button';
import Alerta from '../alert/Alerta';


function Formulario() {

  let valorInicial = {
    nombre: '',
    email: '',
    password: '',
    repeatPassword: '',
  };
const [ err, setErr] = useState(null);
const [exito, setExito] = useState(null);

  const [dataFormulario, setDataFormulario] = useState(valorInicial);

  const handleChange = (e) => {
  setDataFormulario( (estadoPrevio) => ({...estadoPrevio, [e.target.name]: e.target.value}));
  };


  const enviar = () => {
    if (
      dataFormulario.nombre == '' ||
      dataFormulario.email == '' ||
      dataFormulario.password == '' ||
      dataFormulario.repeatPassword == ''
      ){
      return setErr(true)

}  else {
  setErr(false)
  setExito(true)
}
  }

  return (
    <section className="section-formulario">
      <input
        placeholder="Nombre"
        name="nombre"
        type="text"
        onChange={handleChange}
      />
      <input
        placeholder="tu-email@ejemplo.com"
        name="email"
        type="email"
        onChange={handleChange}
      />
      <input
        placeholder="Contraseña"
        name="password"
        type="password"
        onChange={handleChange}
      />
      <input
        placeholder="Confirma tu contraseña"
        name="repeatPassword"
        type="password"
        onChange={handleChange}
      />
      <Button onClick={enviar} variant="success" size="lg">
        Registrarse
      </Button>
      { err ? <Alerta color="danger" mensaje="Completa todos los campos!" /> : null  }
      {exito ? <Alerta color="success" mensaje="Registro exitoso!" /> : null }
    </section>
  );
}


export default Formulario;