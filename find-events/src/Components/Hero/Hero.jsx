import React from 'react';
import eventfinder from '../../assets/eventfinder.png';
import './Hero.css';

const eventTypes = [
  { name: 'MUSIC', image: require('../../assets/music.png') },
  { name: 'FESTIVITIES', image: require('../../assets/festivities.png') },
  { name: 'FUNDRAISER', image: require('../../assets/fundraiser.png') },
  { name: 'CONCERT', image: require('../../assets/concert.png') },
  { name: 'NETWORKING', image: require('../../assets/social.png') }
];

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero">
        <div className="header">
          <h1>Event <span className="highlight">Finder</span></h1>
          <p>At Event Finder, our goal is to help you discover the best local events tailored to your interests. Whether you're looking for a music concert, an art exhibition, a food festival, or a sports event, we've got you covered. Our intelligent system, powered by Gemini, analyzes nearby events and matches them with your interests. Gemini goes beyond just finding events - it ranks them based on your preferences, ensuring you get personalized and highly relevant suggestions.</p>
          <p>Join us and explore the vibrant world of local events tailored just for you.</p>
        </div>
        <div className="image-section">
          <img src={eventfinder} alt="Event Finder" />
        </div>
      </div>
      <div className="event-types-container">
        {eventTypes.map((type, index) => (
          <div className="event-type" key={index}>
            <div className="image-placeholder">
              <img src={type.image} alt={type.name} className="event-image" />
            </div>
            <p>{type.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;