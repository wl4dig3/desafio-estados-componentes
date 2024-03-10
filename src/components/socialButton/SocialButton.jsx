import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SocialButton.css';

// eslint-disable-next-line react/prop-types
function SocialButton({icon}) {
  return (
    <>
    <section className="container-social-buttons">
      <div className="container-button">
        <button className="button">
          <FontAwesomeIcon icon={icon} />
        </button>
      </div>
    </section>
    </>
  );
}

export default SocialButton