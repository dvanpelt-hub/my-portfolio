import React from "react";
import { Link } from "react-scroll";
import "./About.css";
import Profile_photo from "../../snapshots/Profile_photo.jpg";

export default function About() {
  return (
    <>
      <div className="aboutContainer" id="about">
        <div className="aboutContent">
          <h2>Who am I?</h2>
          <hr />
          <div className="infoContainer">
            <div className="imageContainer">
              <img
                className="profile"
                src={Profile_photo}
                alt="Daniel Vanpelt face"
              />
            </div>
            <div className="aboutInfo">
              <p>
                Hello! My name is Daniel I am a full-stack web developer
                specializing in front and back-end languages and technologies.
                Over the past year I have developed and exercised my skills as a
                full-stack developer, leading to the production of several
                full-stack applications and projects. My passion for software
                development has led to a keen interest in the latest
                technologies and languages within the industry and an ability to
                learn quickly and efficiently. Having worked in team settings in
                the past, I understand the importance of communication and the
                value gained from listening to and learning from peers.
              </p>
              <p>
                Prior to my career transition into software development, I had
                an extensive career serving and contracting with the US military
                and several government agencies. Throughout the past 10 years, I
                participated in multiple overseas deployments and became an
                adaptable and effective analyst within the Intelligence
                Community. This experience rewarded me with an extensive set of
                analytical, technical, and training skills which I continue to
                utilize within my work.
              </p>
            </div>
          </div>
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
