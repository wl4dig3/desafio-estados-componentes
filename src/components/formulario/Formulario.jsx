import React from 'react'
import './Formulario.css';

function Formulario() {
  return (
    <section className='section-formulario'>
      <input name="nombre" type="text" />
      <input name="email" type="email" />
      <input name="password" type="password" />
      <input name="repeat-password" type="password" />
    </section>
  );
}

export default Formulario