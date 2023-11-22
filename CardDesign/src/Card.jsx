import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="grid__item">
      <div className="card">
        <img className="card__img" src={props.src} alt="Image 01" />
        <div className="card__content">
          <h1 className="card__header">{props.heading}</h1>
          <p className="card__text">{props.paragraph}</p>
          <button className="card__btn">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <div className="grid__item">
//   <img src={props.src} alt="Image 01" />
//   <h1>{props.heading}</h1>
//   <p>{props.paragraph}</p>
// </div>
