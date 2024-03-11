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
const [ err, setErr] = useState(false);

  const [dataFormulario, setDataFormulario] = useState(valorInicial);

  const handleChange = (e) => {
  setDataFormulario( (estadoPrevio) => ({...estadoPrevio, [e.target.name]: e.target.value}));
  };

  

  // const error = () => {
  //   if (
  //     dataFormulario.nombre == '' ||
  //     dataFormulario.email == '' ||
  //     dataFormulario.password == '' ||
  //     dataFormulario.repeatPassword == ''
  //     ){
  //     return (<Alerta />)

  //   } 
  // };
  const enviar = () => {
    if (
      dataFormulario.nombre == '' ||
      dataFormulario.email == '' ||
      dataFormulario.password == '' ||
      dataFormulario.repeatPassword == ''
      ){
      return setErr(true)

    }  return null
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
      { err ? <Alerta /> : null  }
    </section>
  );
}


export default Formulario;