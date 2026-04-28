import React from 'react';
import './Roles.css';

const rolesData = [
  {
    icon: '🏠',
    title: 'For Hosts',
    description: 'Order emergency supplies for your events and get them delivered fast.',
    features: ['Browse vendors', 'Track orders', 'Secure payments', 'Quick delivery']
  },
  {
    icon: '🏪',
    title: 'For Vendors',
    description: 'Expand your business by reaching more customers through our platform.',
    features: ['Manage inventory', 'Accept orders', 'Track sales', 'Grow revenue']
  },
  {
    icon: '🛵',
    title: 'For Riders',
    description: 'Earn money by delivering orders in your area with flexible schedules.',
    features: ['Flexible hours', 'Good earnings', 'Easy navigation', 'Quick payouts']
  }
];

const Roles = () => {
  return (
    <section className="section roles">
      <div className="container">
        <div className="section-title">
          <h2>Join Our Platform</h2>
          <p>Whether you're a host, vendor, or rider, we have something for you</p>
        </div>
        
        <div className="grid grid-3 roles-grid">
          {rolesData.map((role, index) => (
            <div key={index} className="card role-card">
              <div className="role-icon">{role.icon}</div>
              <h3 className="role-title">{role.title}</h3>
              <p className="role-description">{role.description}</p>
              <ul className="role-features">
                {role.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
