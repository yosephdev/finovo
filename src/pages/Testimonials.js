// Testimonials.js

import React from 'react';

function Testimonials() {
  return (
    <div className="testimonials">
      <section className="hero">
        <div className="hero-content">
          <h1>Testimonials</h1>
          <p>
            See what our clients have to say about their experiences with our
            financial services.
          </p>
        </div>
      </section>
      <section className="testimonial-items">
        <div className="testimonial-item">
          <img src="https://picsum.photos/200/200" alt="Client 1" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut bibendum mi. Donec id massa in ipsum blandit
            venenatis vel ac libero."
          </p>
          <h3>John Smith</h3>
          <p>Business Owner</p>
        </div>
        <div className="testimonial-item">
          <img src="https://picsum.photos/200/200" alt="Client 2" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut bibendum mi. Donec id massa in ipsum blandit
            venenatis vel ac libero."
          </p>
          <h3>Jane Doe</h3>
          <p>Investor</p>
        </div>
        <div className="testimonial-item">
          <img src="https://picsum.photos/200/200" alt="Client 2" />
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ut bibendum mi. Donec id massa in ipsum blandit
            venenatis vel ac libero."
          </p>
          <h3>Jane Doe</h3>
          <p>Investor</p>
        </div>
      </section>
    </div>
  );
}

export default Testimonials;