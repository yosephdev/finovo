import React from "react";

function Team() {
  return (
    <div className="team">
      <section className="hero">
        <div className="hero-content">
          <h1>Our Team</h1>
          <p>
            Meet the talented individuals that make our financial services
            possible.
          </p>
        </div>
      </section>
      <section className="team-members">
        <div className="team-member">
          <img src="https://picsum.photos/200/200" alt="Member 1" />
          <h3>John Doe</h3>
          <p>Financial Advisor</p>
        </div>
        <div className="team-member">
          <img src="https://picsum.photos/200/200" alt="Member 2" />
          <h3>Jane Smith</h3>
          <p>Investment Manager</p>
        </div>
        <div className="team-member">
          <img src="https://picsum.photos/200/200" alt="Member 3" />
          <h3>Mike Johnson</h3>
          <p>Loan Officer</p>
        </div>
      </section>
    </div>
  );
}

export default Team;
