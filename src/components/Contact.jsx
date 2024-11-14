import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-details">
        <h1>CONTÁCTANOS</h1>
        <h2>VISITADNOS CUANDO DESEÉIS</h2>
        <p>OS DAMOS LA BIENVENIDA AL MUNDO DEL HEAVY METAL</p>
        
        <div className="contact-info">
          <p><i className="bi bi-telephone-fill"></i> Teléfono: 669 546 444</p>
          <p><i className="bi bi-instagram"></i> Instagram: <a href="https://instagram.com/salaspectrum" target="_blank" rel="noopener noreferrer">salaspectrum</a></p>
          <p><i className="bi bi-envelope-fill"></i> Correo: <a href="mailto:salaspectrum@gmail.com">salaspectrum@gmail.com</a></p>
          <p><i className="bi bi-geo-alt-fill"></i> Dirección: Av. Ciclista Mariano Rojas, 16, 30009 Murcia</p>
        </div>
      </div>
      
      <div className="contact-map">
        <iframe 
          title="Sala Spectrum Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.4172901249467!2d-1.1306946249100056!3d37.98815211756695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd637e03112e314f%3A0x3ae0b27e51d1b3a9!2sSala%20Spectrum!5e0!3m2!1sen!2ses!4v1635785785457!5m2!1sen!2ses"
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}

export default Contact
