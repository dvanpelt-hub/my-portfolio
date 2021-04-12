import React from "react";
import "./FrontEndCard.css";

export default function FrontEndCard(props) {
  return (
    <a href={props.link}>
      <div className="card-container">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="image-container">
          <img
            className="card-image"
            src={props.imageUrl}
            alt="Example project"
          />
          <div className="language-container">
            <img
              className="language1"
              src={props.javascriptLogo}
              alt="Javascript Icon"
            />
          </div>
        </div>
        <div className="card-content">
          <div className="card-body">
            <p>{props.body}</p>
          </div>
        </div>
        <div className="btn"></div>
      </div>
    </a>
  );
}
