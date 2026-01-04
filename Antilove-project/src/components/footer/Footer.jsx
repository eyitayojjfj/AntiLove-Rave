import './Footer.css';
import { FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="company-name">Antilove Rave</h2>
        
        <p className="contact-info">
          Contact us: <br />
          Email: info@antiloverave.com <br />
          Phone/WhatsApp: +2347041182791
        </p>

        <div className="social-icons">
          <a href="https://www.instagram.com/antilovefest?igsh=azBlb2dmc3ptanpv" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
          <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>

        <p className="copyright">
          &copy; {new Date().getFullYear()} Antilove Rave. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;
