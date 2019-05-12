//sets up the reusable FishCard component
import React from "react";
import "./FishCard.css";

//pass the image into each card so all 12 are rendered
const FishCard = props => (
  <div className="card" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "")} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default FishCard;
