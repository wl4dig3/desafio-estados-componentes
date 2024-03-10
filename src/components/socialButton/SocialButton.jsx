import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGit } from '@fortawesome/free-brands-svg-icons'
import './SocialButton.css';
// import { Button } from 'react-bootstrap';

function SocialButton() {
  return (
    <>
    <section className="container-social-buttons">
      <div className="container-button">
        <button className="button">
          <FontAwesomeIcon icon={faFacebook} />
        </button>
      </div>
      <div className="container-button">
        <button className="button">
          <FontAwesomeIcon icon={faGit} />
        </button>
      </div>
      <div className="container-button">
        <button className="button">
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </div>
    </section>
      <p className='texto-social-buttons'>O usa tu email para registarte</p>
    </>
  );
}

export default SocialButton