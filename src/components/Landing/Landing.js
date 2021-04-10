import React from "react";
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
          <button className="view-more-btn" href="#about">
            Find out more
          </button>
        </div>
      </header>
    </div>
  );
}
