import React from 'react'
import './Concerts.css';

function Concerts() {
  return (
    <div className="concerts-page">
      {/* Título de Próximos Eventos */}
      <section className="upcoming-events">
        <h2>PRÓXIMOS EVENTOS</h2>
        <div className="no-events">
          <p>NO HAY MÁS EVENTOS PRÓXIMOS</p>
        </div>
        <div className="scroll-down">
          <i className="bi bi-chevron-down"></i>
          <p>EVENTOS PASADOS</p>
        </div>
      </section>

      {/* Lista de Eventos Pasados */}
      <section className="past-events">
        <div className="event-card">
          <div className="event-date">
            <p>26</p>
            <p>OCT</p>
            <p>SÁBADO</p>
          </div>
          <div className="event-info">
            <h3>WEIRD PUNK PARTY</h3>
            <p>¡WEIRD PUNK PARTY! ¡Sábado 26 de octubre de 2024 apertura a las 21:00h! PELACATS + ASTROFÁLICOS + ZUTATEN PRECIOS: Anticipada: 12€ o Taquilla: 15€ ¡COMPRA TUS ENTRADAS AQUÍ!</p>
            <button className="buy-ticket">COMPRA TU ENTRADA</button>
          </div>
          <div className="event-image">
            <img src="src/assets/images/pelacats.png" alt="Evento Never Grow Up" />
          </div>
        </div>
        <div className="event-card">
          <div className="event-date">
            <p>19</p>
            <p>OCT</p>
            <p>SÁBADO</p>
          </div>
          <div className="event-info">
            <h3>ARS NOVA Y ECLYPSE</h3>
            <p>¡Sábado 19 de octubre de 2024 apertura a las 21:00h! ¡Os presentamos a Ars Nova y Eclypse! PRECIOS: Anticipada: 12€ o Taquilla: 15€ ¡COMPRA TUS ENTRADAS AQUÍ!</p>
            <button className="buy-ticket">COMPRA TU ENTRADA</button>
          </div>
          <div className="event-image">
            <img src="src/assets/images/Ars-nova-1.jpg" alt="Evento Never Grow Up" />
          </div>
          </div>
          <div className="event-card">
          <div className="event-date">
            <p>18</p>
            <p>OCT</p>
            <p>VIERNES</p>
          </div>
          <div className="event-info">
            <h3>NEBULA Y VALOA</h3>
            <p>¡Nebula vuelve! La banda murciana de rock alternativo que, tras un par de años de trabajo, sacó a la luz en enero de 2020 su primer disco homónimo (el cual […]</p>
            <button className="buy-ticket">COMPRA TU ENTRADA</button>
          </div>
          <div className="event-image">
            <img src="src/assets/images/nebula.png" alt="Evento Never Grow Up" />
          </div>
        </div>
        <div className="event-card">
          <div className="event-date">
            <p>12</p>
            <p>OCT</p>
            <p>SÁBADO</p>
          </div>
          <div className="event-info">
            <h3>EJECUTORES</h3>
            <p>¡Sábado 12 de octubre de 2024 apertura a las 21:00h! ¡Os presentamos a Ejecutores! PRECIOS: Anticipada: 12€ o Taquilla: 15€ ¡COMPRA TUS ENTRADAS AQUÍ!</p>
            <button className="buy-ticket">COMPRA TU ENTRADA</button>
          </div>
          <div className="event-image">
            <img src="src/assets/images/Ejecutores.jpg" alt="Evento Never Grow Up" />
          </div>
        </div>
        <div className="event-card">
          <div className="event-date">
            <p>11</p>
            <p>OCT</p>
            <p>VIERNES</p>
          </div>
          <div className="event-info">
            <h3>NEVER GROW UP!</h3>
            <p>¡Os presentamos este viernes 11 de octubre de 2024 a las 23:00, Never Grow up!...</p>
            <button className="buy-ticket">COMPRA TU ENTRADA</button>
          </div>
          <div className="event-image">
            <img src="src/assets/images/neverGrow.jpg" alt="Evento Never Grow Up" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Concerts
