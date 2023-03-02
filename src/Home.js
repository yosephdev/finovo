// Home.js

import React from 'react';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to our Financial Services Website</h1>
          <p>
            We offer a wide range of financial services to help you achieve your
            financial goals.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </section>
      <section className="services">
        <div className="service-content">
          <h2>Our Services</h2>
          <div className="service-items">
            <div className="service-item">
              <i className="fas fa-money-bill-wave"></i>
              <h3>Investment Services</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service-item">
              <i className="fas
              fa-hand-holding-usd"
              ></i>
              <h3>Wealth Management</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="service-item">
              <i className="fas fa-chart-line"></i>
              <h3>Financial Planning</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
