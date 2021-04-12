import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <footer>
        <h2>Links</h2>
        <ul>
          <li>
            <a href="https://github.com/dvanpelt-hub" className="github">
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/daniel-vanpelt"
              className="linkedin"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:vanpeltdh1@gmail.com" className="email">
              Gmail
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
