import React from "react";
import "./FullStackCard.css";

export default function FullStackCard(props) {
  return (
    <a href={props.link}>
      <div className="card-container">
        <div className="image-container">
          <img
            className="card-image"
            src={props.imageUrl}
            alt="Example project"
          />
          <div className="language-container">
            <img className="language1" src={props.reactLogo} alt="React Icon" />
            <img
              className="language2"
              src={props.javascriptLogo}
              alt="Javascript Icon"
            />
          </div>
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>{props.title}</h3>
          </div>
          <div className="card-body">
            <p>{props.body}</p>
          </div>
        </div>
        <div className="btn"></div>
      </div>
    </a>
  );
}
