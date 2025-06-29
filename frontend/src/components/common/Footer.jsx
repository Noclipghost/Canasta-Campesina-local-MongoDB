import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente Footer - Pie de página de la aplicación
 * Contiene información de contacto y enlaces importantes
 */
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Canasta Campesina</h3>
            <p>Conectando productores rurales con consumidores urbanos</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/sobre-nosotros">Sobre Nosotros</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <div className="contact-info">
              <p><i className="fas fa-phone"></i> +57 322 2800708</p>
              <p><i className="fas fa-envelope"></i> angelmateopj@ufps.edu.co</p>
              <p><i className="fas fa-map-marker-alt"></i> Cucuta, Norte de Santander, Colombia</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Canasta Campesina. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
