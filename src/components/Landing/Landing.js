import React from "react";
import "./Landing.css";

export default function Landing() {
  const scrollTo = () => {
    return <a href="#about">Find out more</a>;
  };

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
            <a href="#about" className="find-link">
              Find out more
            </a>
          </button>
        </div>
      </header>
    </div>
  );
}
