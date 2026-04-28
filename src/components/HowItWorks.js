import React from 'react';
import './HowItWorks.css';

const stepsData = [
  {
    number: '1',
    title: 'Download App',
    description: 'Download the app from Play Store or App Store and create your account.'
  },
  {
    number: '2',
    title: 'Browse Products',
    description: 'Browse through various vendors and select the emergency supplies you need.'
  },
  {
    number: '3',
    title: 'Place Order',
    description: 'Add items to cart, choose delivery address, and place your order securely.'
  },
  {
    number: '4',
    title: 'Get Delivered',
    description: 'Track your order in real-time and receive it at your doorstep quickly.'
  }
];

const HowItWorks = () => {
  return (
    <section className="section how-it-works">
      <div className="container">
        <div className="section-title">
          <h2>How It Works</h2>
          <p>Get started in just 4 simple steps</p>
        </div>
        
        <div className="steps-container">
          {stepsData.map((step, index) => (
            <div key={index} className="step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < stepsData.length - 1 && (
                <div className="step-connector"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
