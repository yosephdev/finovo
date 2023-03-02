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
              <h2>Our Mission</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fermentum lectus ut neque tristique, eu tempor elit ultrices.
                Sed rutrum risus vel nunc sagittis, at ultrices mi volutpat.
                Vivamus sagittis enim et velit efficitur, vel egestas massa
                dapibus.{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <h2>Our Vision</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                fermentum lectus ut neque tristique, eu tempor elit ultrices.
                Sed rutrum risus vel nunc sagittis, at ultrices mi volutpat.
                Vivamus sagittis enim et velit efficitur, vel egestas massa
                dapibus.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
