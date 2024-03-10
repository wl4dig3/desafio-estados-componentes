import React from 'react';
import './Registro.css';
import Formulario from '../formulario/Formulario';
import SocialButton from '../socialButton/SocialButton';

function Registro() {
  return (
    <section className='section-registro'>
        <h1>Crea una cuenta</h1>
        <SocialButton />
        <Formulario />

    </section>
  )
}

export default Registro;
