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
          <p>
            We offer a range of investment services to meet the unique needs of
            our clients.             
          </p>
        </div>
        <div className="service-item">
          <FaPiggyBank className="service-icon" />
          <h3>Savings Accounts</h3>
          <p>
            Our savings accounts provide a safe and secure way to grow your
            money.
          </p>
        </div>
        <div className="service-item">
          <FaHandHoldingUsd className="service-icon" />
          <h3>Loans & Credit</h3>
          <p>
            Our loans and credit services can help you access the funds you need
            to achieve your goals.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Services;
