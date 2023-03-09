import React from "react";
import { Link } from "react-router-dom";
import robotImage from "../robot.jpg";

function PageNotFound() {
  return (
    <div className="error-container">
      <img
        src={robotImage}
        alt="Friendly cartoon robot holding a sign that says 'Oops! Page Not Found'"
      />
      <h1>Oops! We couldn't find what you were looking for.</h1>
      <p>
        It looks like the page you were trying to reach doesn't exist or has
        been moved.
      </p>
      <p>
        Don't worry, our team of robots is already working on fixing the issue.
        In the meantime, why not check out some of our popular pages below?
      </p>
      <div className="buttons-container">
        <Link to="/" className="button">
          Homepage
        </Link>
        <Link to="/about" className="button">
          About Us
        </Link>
        <Link to="/contact" className="button">
          Contact Us
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
