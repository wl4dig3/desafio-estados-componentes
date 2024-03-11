import React from 'react'
import './Formulario.css';
import Button from 'react-bootstrap/Button';

function Formulario() {
  return (
    <section className="section-formulario">
      <input placeholder='Nombre' name="nombre" type="text" />
      <input placeholder='tu-email@ejemplo.com' name="email" type="email" />
      <input placeholder='Contraseña' name="password" type="password" />
      <input placeholder='Confirma tu contraseña' name="repeat-password" type="password" />
      <Button variant="success" size="lg">
        Registrarse
      </Button>
    </section>
  );
}

export default Formulario