import React, { useState } from "react";
import { FaMoneyBillWave, FaPiggyBank, FaHandHoldingUsd } from "react-icons/fa";

function Services() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);

  const handleCalculateCost = (e) => {
    e.preventDefault();
    const calculatedCost =
      parseInt(loanAmount) +
      parseInt(loanAmount) *
        (parseInt(interestRate) / 100) *
        parseInt(loanTerm) -
      (parseInt(income) - parseInt(expenses)) *
        parseInt(loanTerm) *
        12;
    setEstimatedCost(calculatedCost.toFixed(2));
  };

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
            Our fintech startup offers comprehensive investment services to help
            clients build wealth and achieve their financial goals. We offer a
            range of investment options, including stocks, bonds, mutual funds,
            exchange-traded funds (ETFs), and alternative investments.
          </p>
        </div>
        <div className="service-item">
          <FaPiggyBank className="service-icon" />
          <h3>Savings Accounts</h3>
          <p>
            Our savings accounts provide a safe and secure way to grow your
            money. Whether you're saving for a rainy day, a major purchase, or a
            long-term goal, our savings accounts can help you reach your
            financial objectives.
          </p>
        </div>
        <div className="service-item">
          <FaHandHoldingUsd className="service-icon" />
          <h3>Loans & Credit</h3>
          <form className="form-calc" onSubmit={handleCalculateCost}>
            <label htmlFor="income">Monthly Income:</label>
            <input
              type="number"
              id="income"
              name="income"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
            <label htmlFor="expenses">Monthly Expenses:</label>
            <input
              type="number"
              id="expenses"
              name="expenses"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
            />
            <label htmlFor="loan-amount">Loan Amount:</label>
            <input
              type="number"
              id="loan-amount"
              name="loan-amount"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <label htmlFor="loan-term">Loan Term (in years):</label>
            <input
              type="number"
              id="loan-term"
              name="loan-term"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
            />
            <label htmlFor="interest-rate">Interest Rate:</label>
            <input
              type="number"
              id="interest-rate"
              name="interest-rate"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
            />
            <button type="submit">Calculate Estimated Cost</button>
            <p>Estimated cost: ${estimatedCost}</p>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Services;
