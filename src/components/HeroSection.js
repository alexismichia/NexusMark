// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const whatsappLink = "https://wa.me/+5493471571452?text=Hola,%20quiero%20más%20información%20sobre%20sus%20servicios"; // Reemplaza con tu número de WhatsApp

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Diseño y Desarrollo Web Profesional</h1>
        <p>Transformamos tus ideas en realidad digital</p>
        <div className="hero-buttons">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn primary">
            Contáctanos
          </a>
          <a href="https://alexismichia.vercel.app" target="_blank" rel="noopener noreferrer" className="btn secondary">
            Ver Portafolio
          </a>
        </div>
      </div>
      <div className="hero-features">
        <div className="feature">
          <h3>Diseño Responsivo</h3>
          <p>Tu sitio web se verá genial en cualquier dispositivo.</p>
        </div>
        <div className="feature">
          <h3>SEO Optimizado</h3>
          <p>Mejora tu visibilidad en los motores de búsqueda.</p>
        </div>
        <div className="feature">
          <h3>Soporte 24/7</h3>
          <p>Estamos aquí para ayudarte en cualquier momento.</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
