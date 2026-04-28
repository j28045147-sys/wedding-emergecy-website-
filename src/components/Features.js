import React from 'react';
import './Features.css';

const featuresData = [
  {
    icon: '⚡',
    title: 'Fast Delivery',
    description: 'Get your emergency supplies delivered quickly by our network of reliable riders.'
  },
  {
    icon: '🏪',
    title: 'Multiple Vendors',
    description: 'Access a wide range of vendors offering various emergency supplies and products.'
  },
  {
    icon: '📱',
    title: 'Easy to Use',
    description: 'Simple and intuitive interface for seamless ordering and tracking experience.'
  },
  {
    icon: '🔒',
    title: 'Secure Payments',
    description: 'Safe and secure payment options with multiple payment methods supported.'
  },
  {
    icon: '📍',
    title: 'Real-time Tracking',
    description: 'Track your orders in real-time and know exactly when your delivery will arrive.'
  },
  {
    icon: '⭐',
    title: 'Quality Assured',
    description: 'All vendors are verified and products are quality checked before delivery.'
  }
];

const Features = () => {
  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="section-title">
          <h2>Why Choose Us</h2>
          <p>Everything you need for fast and reliable emergency supplies delivery</p>
        </div>
        
        <div className="grid grid-3 features-grid">
          {featuresData.map((feature, index) => (
            <div key={index} className="card feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
