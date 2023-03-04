import React from "react";
import { FaChartLine, FaCreditCard, FaFileInvoice } from "react-icons/fa";

function Features() {
  return (
    <div className="features">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Features</h1>
          <p>
            Explore some of the features we offer for our financial services.
          </p>
        </div>
      </section>
      <section className="feature-items">
        <div className="feature-item">
          <FaChartLine className="feature-icon" />
          <h3>Investment Planning</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <FaCreditCard className="feature-icon" />
          <h3>Credit Cards</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="feature-item">
          <FaFileInvoice className="feature-icon" />
          <h3>Invoicing</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </div>
  );
}

export default Features;
