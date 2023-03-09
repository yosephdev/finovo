// Home.js
import React from 'react';
import {FaMoneyBillWave, FaHandHoldingUsd, FaChartLine} from "react-icons/fa"; 


function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Finovo</h1>
          <p>
            A fintech startup that offers innovative financial solutions to
            individuals and businesses.
          </p>
          <button className="btn-primary">Learn More</button>
        </div>
      </section>
      <section className="services">
        <div className="service-content">
          <h2>Our Services</h2>
          <div className="service-items">
            <div className="service-item">
              <FaMoneyBillWave className="service-icon" />
              <h3>Investment Services</h3>
              <p>
                We offer a range of investment options, including stocks, bonds,
                mutual funds, exchange-traded funds (ETFs), and alternative
                investments.
              </p>
            </div>
            <div className="service-item">
              <FaHandHoldingUsd className="service-icon" />
              <h3>Wealth Management</h3>
              <p>
                Our wealth management services are designed to help clients make
                informed investment decisions, grow their wealth, and achieve
                their financial goals.
              </p>
            </div>
            <div className="service-item">
              <FaChartLine className="service-icon" />
              <h3>Financial Planning</h3>
              <p>
                We cover a range of financial planning topics, including
                retirement planning, investment planning, tax planning, risk
                management, and estate planning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
