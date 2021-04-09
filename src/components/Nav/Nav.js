import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <div className="navContainer">
          <Link to="/" className="navHomeLogo">
            Home
          </Link>
        </div>
      </nav>
    </>
  );
}
