import React from "react";
import { Link } from "react-scroll";
import "./Landing.css";

export default function Landing() {
  return (
    <div>
      <div className="background-one" />
      <div className="background-two" />
      <div className="background-three" />
      <header>
        <div className="landing-content">
          <h1>Daniel Vanpelt</h1>
          <h2>A full-stack developer who is glad you're here...</h2>
        </div>
        <div className="view-more-btn-container">
          <button className="view-more-btn">
            <Link to="about" className="find-link" smooth={true} duration={800}>
              Find out more
            </Link>
          </button>
        </div>
      </header>
    </div>
  );
}
