import React from "react";
import { Link } from "react-scroll";
import "./About.css";
import Profile_photo from "../../snapshots/Profile_photo.jpg";

export default function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <div className="imageContainer">
          <h2>Who am I?</h2>
          <img
            className="profile"
            src={Profile_photo}
            alt="Daniel Vanpelt face"
          />
        </div>
        <div className="aboutInfo">
          <p>This is the about me section</p>
        </div>
        <div className="view-my-projects-btn-container">
          <button className="view-my-projects-btn">
            <Link
              to="projects"
              className="projects-link"
              smooth={true}
              duration={800}
            >
              My work
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
