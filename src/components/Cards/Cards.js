import React from "react";
import "./Cards.css";

export default function Cards(props) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img
          className="card-image"
          src={props.imageUrl}
          alt="Example project"
        />
      </div>
      <div className="card-content">
        <div className="card-title">
          <h3>{props.title}</h3>
        </div>
        <div className="card-body">
          <p>{props.body}</p>
        </div>
      </div>
      <div className="btn">
        <button>
          <a href={props.link}>View more</a>
        </button>
      </div>
    </div>
  );
}
