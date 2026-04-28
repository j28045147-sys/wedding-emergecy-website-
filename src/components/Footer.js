import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-brand">Let's Organize It</h3>
            <p className="footer-description">
              Your trusted platform for emergency supplies delivery. Fast, reliable, and secure.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#roles">Join Us</a></li>
              <li><a href="#download">Download</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-title">Support</h4>
            <ul className="footer-links">
              <li><a href="#help">Help Center</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
              <li><a href="#terms">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="footer-section" id="download">
            <h4 className="footer-title">Download App</h4>
            <p className="footer-text">Get the app on your device</p>
            <div className="download-buttons">
              <a href="http://YOUR_SERVER_URL:3000/api/download/apk" className="download-btn">
                <span className="download-icon">🤖</span>
                <div className="download-text">
                  <div className="download-label">Download</div>
                  <div className="download-store">Android APK</div>
                </div>
              </a>
              <a href="#placeholder" className="download-btn">
                <span className="download-icon">📱</span>
                <div className="download-text">
                  <div className="download-label">Coming Soon</div>
                  <div className="download-store">App Store</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Let's Organize It. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
