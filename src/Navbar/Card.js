import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="card">
          <img className="img" src="/Images/food.jpg" alt="Food Item" />
          <div className="card-content">
            <h2 className="card-title">Delicious Food</h2>
            <i></i>
            <p className="card-description">
              A mouthwatering dish that will satisfy your taste buds.
            </p>
            <button className="card-button">Order Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
