import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [apkInfo, setApkInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  
  // Get backend URL from environment variable or use default
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
  
  useEffect(() => {
    // Fetch APK info from backend
    fetch(`${BACKEND_URL}/api/download/apk/info`)
      .then(res => res.json())
      .then(data => {
        setApkInfo(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch APK info:', err);
        setLoading(false);
      });
  }, [BACKEND_URL]);
  
  const handleDownload = () => {
    window.location.href = `${BACKEND_URL}/api/download/apk`;
  };
  
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
            <button 
              onClick={handleDownload} 
              className="btn btn-primary"
              disabled={loading || !apkInfo?.available}
            >
              <span>📱</span>
              {loading ? 'Loading...' : apkInfo?.available ? `Download App ${apkInfo.size ? `(${apkInfo.size})` : ''}` : 'App Not Available'}
            </button>
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
