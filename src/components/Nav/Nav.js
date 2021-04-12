import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="navHomeLogo">
          Home
        </Link>
        <Link to="/" className="navHomeLogo">
          About
        </Link>
        <Link to="/" className="navHomeLogo">
          Projects
        </Link>
        <Link to="/" className="navHomeLogo">
          Contact
        </Link>
      </nav>
    </>
  );
}
