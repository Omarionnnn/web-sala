import React from 'react'
import './Discord.css';

function Discord() {
  return (
      <div className="discord-page">
      {/* Título de Próximos Eventos */}
      <section className="upcoming-events">
        <div className="discord-logo-container">
        <img src="src/assets/images/Discordia-1024x676-1.png" alt="logo discordia" className="discord-logo" />
        </div>
        <div className="no-events">
          <p>NO HAY MÁS EVENTOS PRÓXIMOS</p>
        </div>
        <div className="scroll-down">
          <i className="bi bi-chevron-down"></i>
          <p>EVENTOS PASADOS</p>
        </div>
      </section>

      <section className="past-events">
        <div className="event-card">
          <div className="event-date">
            <span>12</span>
            <span>OCT</span>
            <span>SÁBADO</span>
          </div>
          <div className="event-info">
            <h3>KONTAKT 2</h3>
            <p>
              ¡Sábado 12 de octubre de 2024 desde las 02:00! PRECIOS: Anticipada: 5€
              <br />
              Kontakt vuelve a Spectrum más cargada que antes, y los encargados de haceros bailar esa noche son: @b.lix [...]
            </p>
            <button>COMPRA TU ENTRADA</button>
          </div>
          <div className="event-image">
            <img src="src/assets/images/kontakt.jpg" alt="Kontakt 2" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Discord
