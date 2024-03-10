import React from 'react';
import './Registro.css';
import Formulario from '../formulario/Formulario';
import SocialButton from '../socialButton/SocialButton';
import { faFacebook, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons';

function Registro() {
  const iconos = [faFacebook, faLinkedin, faGit];
  return (
    <section className="section-registro">
      <h1>Crea una cuenta</h1>
      <div className='registro-container-iconos-sociales'>
        {iconos.map((item, index) => {
          return <SocialButton key={index} icon={item} />;
        })}
      </div>
      <p className='texto-social-buttons'>O usa tu email para registarte</p>
      {/* <SocialButton icon={iconos.map( (item)=> {item.icon})} /> */}
      <Formulario />
    </section>
  );
}

export default Registro;
