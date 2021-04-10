import React from "react";
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
      </div>
    </>
  );
}
