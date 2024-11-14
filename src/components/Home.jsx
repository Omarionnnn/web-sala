/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import backgroundImage from '../assets/images/FondoFuego_Tilling-1.png';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

function Home() {
  return (
    <div className='home'>
      {/* Sección de Próximos Eventos */}
      <section className="events-banner">
        <h2>PRÓXIMOS EVENTOS</h2>
        <img src="src/assets/images/spectrumOCTUBRE2024.jpeg" alt="Calendario de Eventos" className="event-image" style={{
        width: '100%',
        maxWidth: '800px',
        height: 'auto',
        display: 'block',
        margin: '0 auto'
    }}/>
      </section>

      {/* Lista de Eventos */}
      <section className="events-list">
        <div className="no-more-events">
          <p>NO HAY MÁS EVENTOS PRÓXIMOS</p>
          <Link to="/concerts" className="view-all-events">VER TODOS LOS EVENTOS</Link>
        </div>
      </section>

      {/* Sección La Sala */}
      <section className="the-room">
  <div className="the-room-content">
    <h2>LA SALA</h2>
    <p>
      Exploramos la esencia del Heavy Metal underground, atrayendo a un público joven y entregado.
      En un ambiente auténtico y electrizante, los amantes del género disfrutan de su música favorita en vivo mientras degustan nuestras bebidas.
    </p>
  </div>
  
  <Carousel interval={3000} controls={true} indicators={false} className="custom-carousel">
    <Carousel.Item>
      <div className="carousel-images">
        <img src="src/assets/images/imagen-1.png" alt="Evento 1" className="carousel-image small" />
        <img src="src/assets/images/imagen-2.png" alt="Evento 2" className="carousel-image medium" />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-images">
        <img src="src/assets/images/imagen-3.png" alt="Evento 3" className="carousel-image large" />
        <img src="src/assets/images/imagen-4.png" alt="Evento 4" className="carousel-image small" />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-images">
        <img src="src/assets/images/imagen-5.png" alt="Evento 5" className="carousel-image medium" />
        <img src="src/assets/images/imagen-6.png" alt="Evento 6" className="carousel-image large" />
      </div>
    </Carousel.Item>
    <Carousel.Item>
      <div className="carousel-images">
        <img src="src/assets/images/imagen-7.png" alt="Evento 7" className="carousel-image small" />
        <img src="src/assets/images/imagen-8.png" alt="Evento 8" className="carousel-image medium" />
      </div>
    </Carousel.Item>
  </Carousel>
</section>

      {/* Sección Servicios */}
      <section className="services">
        <h2>¡PREPARAOS PARA EL APOTEÓSICO SONIDO DEL HEAVY METAL!</h2>
        <div className="services-container">
        <div className="service-item red">
          <img src="src/assets/images/logo-spectrum.svg" alt="Logo Spectrum" className="service-logo" />
          <h3>Una sala de conciertos dedicada al heavy metal</h3>
          <p>Un santuario para los amantes del metal, Spectrum ofrece una experiencia acústica incomparable.
             Sumérgete en el fervor del heavy metal en este espacio dotado con tecnología de vanguardia, garantizando conciertos intensos e inolvidables.</p>
        </div>
        <div className="service-item purple">
          <img src="src/assets/images/Discordia-1024x676-1.png" alt="Logo Discordia" className="service-logo" />
          <h3>Juventud y Rebeldía</h3>
        </div>
        </div>
      </section>

      <section className="spectrum-info">
  <div className="spectrum-content">
    <div className="spectrum-text">
      <div className="spectrum-logo-container">
        <img src="src/assets/images/logo-spectrum.svg" alt="Spectrum Logo" className="spectrum-logo" />
      </div>
      <p className="spectrum-description">
        Somos un espacio cultural público reconocido por el ayuntamiento de Murcia.<br />
        En colaboración con Murcia Live (asociación de salas de música en directo de la Región de Murcia) y ACCES (Asociación Española de Salas de Conciertos).
      </p>
      <p className="spectrum-highlight">
        ¡NOS ENORGULLECE SER PARTE DE LA VIBRANTE ESCENA MUSICAL DE LA ZONA!
      </p>
    </div>
    <div className="spectrum-image-container">
      <img src="src/assets/images/IMG_2048.jpg" alt="Imagen de Concierto" className="spectrum-image" />
    </div>
  </div>
</section>
    </div>
  )
}

export default Home
