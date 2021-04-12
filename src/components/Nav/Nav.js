import React from "react";
import { Link } from "react-scroll";
import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav">
        <Link to="home" className="navHome" smooth={true} duration={800}>
          Home
        </Link>
        <Link to="about" className="navAbout" smooth={true} duration={800}>
          About
        </Link>
        <Link
          to="projects"
          className="navProjects"
          smooth={true}
          duration={800}
        >
          Projects
        </Link>
        <Link to="contact" className="navContact" smooth={true} duration={800}>
          Contact
        </Link>
      </nav>
    </>
  );
}
