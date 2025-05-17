import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <header className="hero-section">
        <div className="overlay">
          <h1>Explore the World</h1>
          <p>Plan your perfect trip with Trip Planner</p>
          <button>Get Started</button>
        </div>
      </header>

      <section className="features-section">
        <h2>What We Offer</h2>
        <div className="features">
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e" alt="Beach" />
            <h3>Plan a Trip</h3>
            <p>Build custom itineraries tailored to your needs.</p>
          </div>
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff" alt="Map" />
            <h3>Track Journeys</h3>
            <p>Stay updated with your bookings and schedules.</p>
          </div>
          <div className="feature-card">
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" alt="Mountains" />
            <h3>Discover Places</h3>
            <p>Get suggestions for exciting destinations.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Trip Planner. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
