import React from "react";
import { FaMoneyBillWave, FaPiggyBank, FaHandHoldingUsd } from "react-icons/fa";

function Services() {
  return (
    <div className="services">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>
            We offer a wide range of financial services to help you achieve your
            financial goals.
          </p>
        </div>
      </section>
      <section className="service-items">
        <div className="service-item">
          <FaMoneyBillWave className="service-icon" />
          <h3>Investment Services</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-item">
          <FaPiggyBank className="service-icon" />
          <h3>Savings Accounts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="service-item">
          <FaHandHoldingUsd className="service-icon" />
          <h3>Loans & Credit</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </section>
    </div>
  );
}

export default Services;
