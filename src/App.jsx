/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Concerts from './components/Concerts';
import Discord from './components/Discord';
import Contact from './components/Contact';
import Accesibilidad from './components/Accesibilidad';
import AvisoLegal from './components/AvisoLegal';
import Cookies from './components/Cookies';
import Privacidad from './components/Privacidad';
import logo from './assets/images/logo-spectrum.svg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function ScrollToTopOnNavigation() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTopOnNavigation /> {/* Esto asegurará que se vuelva al tope de la página en cada navegación */}
      <div className="app">
        {/* Header */}
        <header className="navbar navbar-expand-lg">
          <div className="container d-flex justify-content-center align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="Sala Spectrum" style={{ width: '180px', height: 'auto' }} />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Inicio</Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/concerts">Conciertos</Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/discord">Discordia</Link>
                </li>
                <span className="nav-separator">|</span>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contacto</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* Contenido Principal */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/concerts" element={<Concerts />} />
            <Route path="/discord" element={<Discord />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Accesibilidad" element={<Accesibilidad />} />
            <Route path="/AvisoLegal" element={<AvisoLegal />} />
            <Route path="/Cookies" element={<Cookies />} />
            <Route path="/Privacidad" element={<Privacidad />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="footer text-center text-white">
          {/* Sección de Valoraciones */}
          <section className="reviews-section">
            <h2>NOS ENCANTA LEEROS DESPUÉS DE VUESTRA VISITA</h2>
            <hr className="white-line" />
            <Carousel indicators={false} controls={false} interval={3000} className="reviews-carousel">
              {/* Carousel content */}
            </Carousel>
          </section>

          {/* Información de Contacto e Información Legal */}
          <div className="footer-top">
            <h2>¡DEJAD QUE LA MÚSICA OS UNA A NOSOTROS!</h2>
            <p>Podéis encontrar la Sala Spectrum en Instagram, donde compartimos noticias, eventos y contenido relacionado con la música que os apasiona.</p>
            <Link to="/contact">
              <button>MÁS INFORMACIÓN</button>
            </Link>
          </div>
          <div className="footer-middle">
            <div>
              <img src={logo} alt="Sala Spectrum" className="footer-logo" />
              <p>¡Uníos a la escena en Sala Spectrum! Somos vuestra sala del Heavy Metal en Murcia. Conciertos intensos, riffs poderosos y una experiencia única.</p>
              <p>SÍGUENOS:</p>
              <a href="https://instagram.com/salaspectrum/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.google.com/maps/place/Sala+Spectrum" target="_blank" rel="noopener noreferrer" className="social-icon">
                <i className="bi bi-geo-alt-fill"></i>
              </a>
            </div>
            <div>
              <h4>INFORMACIÓN DE CONTACTO</h4>
              <a href="https://goo.gl/maps/pwhXCFShkNd4QYsv5" target="_blank">
                <p>Dirección: Av. Ciclista Mariano Rojas, 16, 30009 Murcia</p>
              </a>
              <p>Teléfono: 669 546 444</p>
              <a href="mailto:salaspectrum@gmail.com">
                <p>Mail: salaspectrum@gmail.com</p>
              </a>
              <a href="https://goo.gl/maps/pwhXCFShkNd4QYsv5" target="_blank">
                <p>Cómo llegar →</p>
              </a>
            </div>
            <div>
              <h4>LEGAL</h4>
              <Link to="/AvisoLegal"><p>Aviso legal</p></Link>
              <Link to="/Privacidad"><p>Política de privacidad</p></Link>
              <Link to="/Cookies"><p>Política de cookies (UE)</p></Link>
              <Link to="/Accesibilidad"><p>Accesibilidad</p></Link>
            </div>
          </div>
          <div className="footer-bottom">
            <img src="src/assets/images/Kid-digital-info.png" alt="Kit Digital Banner" className="footer-banner" />
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
