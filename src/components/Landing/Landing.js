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
      </header>
      {/* <header>
        <h1>Welcome!</h1>
        <h2>
          My name is Daniel, I am a full-stack developer, and I am glad you're
          here...
        </h2>
      </header> */}
    </div>
  );
}
