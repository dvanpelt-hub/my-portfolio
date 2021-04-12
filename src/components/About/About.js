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
                A full-stack web developer and Thinkful bootcamp graduate who is
                proficient in HTML5, CSS3, React, and NodeJS. Over the past nine
                months, I have learned a variety of languages and built several
                PERN stack applications which greatly improved my front and
                back-end capabilities. As a passionate web developer, I am
                always seeking opportunities to work and collaborate with
                others. Having worked effectively in team settings in the past,
                I understand the importance of communication and the value
                gained from listening to and learning from peers.
              </p>
              <p>
                Prior to my career change, I served in the US Army and worked
                extensively as a government and military contractor. Throughout
                the past 10 years, I participated in multiple overseas
                deployments and became an adaptable and effective analyst within
                the Intelligence community. This experience rewarded me with an
                extensive set of analytical, technical, and training skills
                which I continue to utilize within my work.
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
