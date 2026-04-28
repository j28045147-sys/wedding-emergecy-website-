import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            🚀 Emergency Supplies Delivered Fast
          </div>
          
          <h1 className="hero-title">
            Let's Organize It
          </h1>
          
          <p className="hero-subtitle">
            Your one-stop platform for emergency supplies delivery. Connect with vendors, 
            order what you need, and get it delivered quickly by our reliable riders.
          </p>
          
          <div className="hero-buttons">
            <a href="http://YOUR_SERVER_URL:3000/api/download/apk" className="btn btn-primary">
              <span>📱</span>
              Download App
            </a>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-value">10+</div>
              <div className="stat-label">Active Users</div>
            </div>
            <div className="stat">
              <div className="stat-value">5+</div>
              <div className="stat-label">Vendors</div>
            </div>
            <div className="stat">
              <div className="stat-value">10+</div>
              <div className="stat-label">Deliveries</div>
            </div>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="app-preview">
                <div className="preview-header">
                  <div className="preview-icon">🏪</div>
                  <div className="preview-text">
                    <div className="preview-title">Emergency Supplies</div>
                    <div className="preview-subtitle">Fast Delivery</div>
                  </div>
                </div>
                <div className="preview-cards">
                  <div className="preview-card">🛵 Riders</div>
                  <div className="preview-card">🏪 Vendors</div>
                  <div className="preview-card">🏠 Hosts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
