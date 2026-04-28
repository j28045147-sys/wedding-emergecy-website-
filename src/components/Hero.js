import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [apkInfo, setApkInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Use Vercel serverless function as proxy to avoid mixed content issues
  // In production (Vercel), use /api/* endpoints which proxy to backend
  // In development, use backend directly
  const isDevelopment = process.env.NODE_ENV === 'development';
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3000';
  
  // Use proxy in production, direct backend in development
  const API_BASE = isDevelopment ? BACKEND_URL : '';
  const APK_INFO_URL = isDevelopment ? `${BACKEND_URL}/api/download/apk/info` : '/api/download-info';
  const APK_DOWNLOAD_URL = isDevelopment ? `${BACKEND_URL}/api/download/apk` : '/api/download-apk';
  
  useEffect(() => {
    console.log('🔍 [Hero] Environment:', process.env.NODE_ENV);
    console.log('🔍 [Hero] Backend URL:', BACKEND_URL);
    console.log('🔍 [Hero] Using proxy:', !isDevelopment);
    console.log('🔍 [Hero] Fetching APK info from:', APK_INFO_URL);
    
    // Fetch APK info from backend (via proxy in production)
    fetch(APK_INFO_URL)
      .then(res => {
        console.log('📥 [Hero] Response status:', res.status);
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then(data => {
        console.log('✅ [Hero] APK info received:', data);
        setApkInfo(data);
        setLoading(false);
        setError(null);
      })
      .catch(err => {
        console.error('❌ [Hero] Failed to fetch APK info:', err);
        console.error('❌ [Hero] Error details:', {
          message: err.message,
          name: err.name,
          stack: err.stack
        });
        setError(err.message);
        setLoading(false);
      });
  }, [APK_INFO_URL, BACKEND_URL, isDevelopment]);
  
  const handleDownload = () => {
    console.log('📥 [Hero] Downloading from:', APK_DOWNLOAD_URL);
    window.location.href = APK_DOWNLOAD_URL;
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
              title={error ? `Error: ${error}` : ''}
            >
              <span>📱</span>
              {loading ? 'Loading...' : error ? `Error: ${error.substring(0, 30)}...` : apkInfo?.available ? `Download App ${apkInfo.size ? `(${apkInfo.size})` : ''}` : 'App Not Available'}
            </button>
            <a href="#features" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          
          {/* Debug info - remove after testing */}
          {process.env.NODE_ENV === 'development' && (
            <div style={{ marginTop: '20px', padding: '10px', background: '#f0f0f0', borderRadius: '5px', fontSize: '12px' }}>
              <strong>Debug Info:</strong><br/>
              Backend URL: {BACKEND_URL}<br/>
              Loading: {loading ? 'Yes' : 'No'}<br/>
              Error: {error || 'None'}<br/>
              APK Available: {apkInfo?.available ? 'Yes' : 'No'}<br/>
              APK Size: {apkInfo?.size || 'N/A'}
            </div>
          )}
          
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
