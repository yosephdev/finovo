import React from "react";


function About() {
  return (
    <div className="about">
      <section className="hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>
            Our team of financial experts are dedicated to helping you achieve
            your financial goals.
          </p>
        </div>
      </section>
      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>About Finovo</h2>
              <p className="about-description">
                We are a financial services company dedicated to providing our
                clients with the highest quality investment services, savings
                accounts, and loans & credit products. Our team of experienced
                professionals is committed to helping individuals and businesses
                achieve their financial goals.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Investment Services</h2>
              <p>
                Our investment services include a range of options to help our
                clients grow their wealth and achieve their long-term financial
                goals. We offer personalized investment advice and portfolio
                management services to ensure that our clients' investments are
                aligned with their specific needs and risk tolerance. Our
                investment products include stocks, bonds, mutual funds, ETFs,
                and alternative investments.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Savings Accounts</h2>
              <p>
                We understand the importance of saving for the future, which is
                why we offer a range of savings accounts to help our clients
                achieve their financial goals. Our savings accounts offer
                competitive interest rates and flexible terms to accommodate the
                needs of our clients. Whether you're saving for a down payment
                on a home, a child's education, or retirement, we have a savings
                account that's right for you.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Loans & Credit</h2>
              <p>
                At times, accessing credit may be necessary to achieve financial
                goals or manage cash flow. Our team offers a range of credit
                products to help our clients manage their finances. Whether you
                need a personal loan, a business loan, or a credit card, we have
                a range of options to meet your needs. Our loan products offer
                competitive interest rates and flexible repayment terms to help
                you achieve your financial objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
